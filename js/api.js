/* PyV Capacita — conexión con el servidor (Google Apps Script) y cola sin conexión.
   En modo demostración, el mismo core.js corre en el navegador con almacenamiento local. */
var SRV = (function () {
  var DEMO = !CONFIG.API_URL;
  var COLA = 'pyv_cola_v1';

  function ls(k, v) {
    try { if (v === undefined) { var x = localStorage.getItem(k); return x ? JSON.parse(x) : null; } if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; }
  }

  /* ---------- servidor de demostración ---------- */
  var demoEnv = null;
  function envDemo() {
    if (demoEnv) return demoEnv;
    var KEY = 'pyv_demo_db', db = ls(KEY) || {}, conf = ls('pyv_demo_conf') || {}, cache = {};
    if (!conf.ADMIN_CLAVE_HASH) { conf.ADMIN_CLAVE_HASH = CORE.sha256('pyv-admin|demo'); conf.SUPERVISOR_CLAVE_HASH = CORE.sha256('pyv-admin|supervisor'); }
    function save() { ls(KEY, db); ls('pyv_demo_conf', conf); }
    function p2(n) { return (n < 10 ? '0' : '') + n; }
    var archivos = ls('pyv_demo_archivos') || {};
    demoEnv = {
      now: function () { return new Date(); },
      uuid: function () { return (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now()); },
      fmt: function (d, k) { var f = d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate()); if (k === 'fecha') return f; if (k === 'archivo') return f.replace(/-/g, '') + '_' + p2(d.getHours()) + p2(d.getMinutes()) + p2(d.getSeconds()); return f + ' ' + p2(d.getHours()) + ':' + p2(d.getMinutes()) + ':' + p2(d.getSeconds()); },
      parseFecha: function (s) { var m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):?(\d{2})?)?/); if (!m) return new Date(s); return new Date(+m[1], +m[2] - 1, +m[3], +(m[4] || 23), +(m[5] || 59), +(m[6] || 59)); },
      config: function () { var o = {}; for (var k in conf) o[k] = conf[k]; return o; },
      setConfig: function (k, v) { conf[k] = v; save(); },
      cache: { get: function (k) { return cache[k] || ls('pyv_demo_c_' + k); }, put: function (k, v) { cache[k] = v; ls('pyv_demo_c_' + k, v); } },
      db: {
        read: function (t) { return (db[t] || []).map(function (r, i) { var o = { _row: i }; for (var k in r) o[k] = r[k]; return o; }); },
        append: function (t, o) { db[t] = db[t] || []; var c = {}; for (var k in o) if (k !== '_row') c[k] = o[k]; db[t].push(c); save(); var r = { _row: db[t].length - 1 }; for (k in c) r[k] = c[k]; return r; },
        update: function (t, o) { var c = {}; for (var k in o) if (k !== '_row') c[k] = o[k]; db[t][o._row] = c; save(); },
        remove: function (t, o) { db[t].splice(o._row, 1); save(); }
      },
      drive: {
        carpetaTrabajador: function (run, nombre) { return 'demo/' + run + ' ' + nombre; },
        guardarPdf: function (carpeta, nombre, html) { var id = carpeta + '/' + nombre; archivos[id] = { html: html.length > 200000 ? '' : html, fecha: new Date().toISOString() }; ls('pyv_demo_archivos', archivos); return { id: id, url: '', base64: '' }; },
        guardarImagen: function (carpeta, nombre) { return { id: carpeta + '/' + nombre, url: '' }; },
        guardarEvidencia: function (sid, nombre) { return { id: sid + '/' + nombre, url: '' }; },
        guardarDocumento: function (nombre, dataUrl) { return { id: nombre, url: String(dataUrl).length < 1500000 ? dataUrl : '' }; },
        nuevaCarpetaExpediente: function (n) { return 'demo/Expedientes/' + n; },
        copiarRegistro: function () { return ''; },
        urlCarpeta: function () { return ''; },
        urlRaiz: function () { return ''; }
      },
      archivos: function () { return archivos; }
    };
    return demoEnv;
  }

  function llamar(accion, cuerpo) {
    var b = {}; for (var k in (cuerpo || {})) b[k] = cuerpo[k]; b.accion = accion;
    b.dispositivo = (navigator.userAgent || '').slice(0, 160);
    if (DEMO) {
      return new Promise(function (ok) { setTimeout(function () { ok(CORE.manejar(envDemo(), JSON.parse(JSON.stringify(b)))); }, 120); });
    }
    return fetch(CONFIG.API_URL, { method: 'POST', body: JSON.stringify(b), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, redirect: 'follow' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
  }

  /* ---------- cola de eventos ---------- */
  var enviando = false, oyentes = [];
  function cola() { return ls(COLA) || []; }
  function encolar(ev) {
    var c = cola(); ev.cuando = new Date().toISOString(); ev.uid = String(Date.now()) + Math.random().toString(16).slice(2, 6);
    c.push(ev); ls(COLA, c); avisar();
  }
  function pendientes() { return cola().length; }
  function segundosPendientes(item) { return cola().reduce(function (s, e) { return s + (e.tipo === 'tiempo' && e.item === item ? (e.seg || 0) : 0); }, 0); }
  function enviar(token) {
    if (enviando || !token) return Promise.resolve(null);
    var c = cola(); if (!c.length) return Promise.resolve(null);
    if (!navigator.onLine && !DEMO) return Promise.resolve(null);
    enviando = true; var lote = c.slice(0, 40);
    return llamar('eventos', { token: token, eventos: lote }).then(function (r) {
      enviando = false;
      if (r && r.ok) {
        var ids = {}; lote.forEach(function (e) { ids[e.uid] = 1; });
        ls(COLA, cola().filter(function (e) { return !ids[e.uid]; }));
        avisar(r);
        if (cola().length) return enviar(token);
      } else if (r && r.error === 'sesion') { avisar({ sesionExpirada: true }); }
      return r;
    }).catch(function () { enviando = false; avisar(); return null; });
  }
  function onCambio(fn) { oyentes.push(fn); }
  function avisar(r) { oyentes.forEach(function (f) { try { f(r); } catch (e) { } }); }
  function limpiarCola() { ls(COLA, null); }

  return { demo: DEMO, llamar: llamar, encolar: encolar, enviar: enviar, pendientes: pendientes, segundosPendientes: segundosPendientes, onCambio: onCambio, ls: ls, limpiarCola: limpiarCola, envDemo: envDemo };
})();
