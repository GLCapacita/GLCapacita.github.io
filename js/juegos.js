/* js/juegos.js */
/* GL Capacita — motores de actividades prácticas */
var JUEGOS = (function () {
  function h(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function barajar(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }

  function jugar(cont, def, ctx, onFin) {
    var partes = def.partes, i = 0, puntajes = [], detalle = [];
    cont.innerHTML = '';
    function sig() {
      if (i >= partes.length) { var p = puntajes.reduce(function (a, b) { return a + b; }, 0) / puntajes.length; onFin(Math.round(p * 100) / 100, detalle); return; }
      var parte = partes[i], caja = el('<section class="tarjeta"></section>'); cont.appendChild(caja);
      if (parte.titulo && parte.tipo !== 'lectura') caja.insertAdjacentHTML('afterbegin', '<h3>' + h(parte.titulo) + '</h3>');
      if (partes.length > 1) caja.insertAdjacentHTML('afterbegin', '<div class="contador">Parte ' + (i + 1) + ' de ' + partes.length + '</div>');
      MOTORES[parte.tipo](caja, parte, ctx, function (p, d) { puntajes.push(Math.max(0, Math.min(1, p))); detalle.push(d || null); i++; sig(); });
    }
    sig();
  }

  var MOTORES = {};

  /* ---- clasificar: una tarjeta a la vez, botones de categoría ---- */
  MOTORES.clasificar = function (caja, parte, ctx, fin) {
    var items = parte.desdeIper ? itemsIper(ctx.cargo) : barajar(parte.items), k = 0, buenas = 0;
    var zona = el('<div></div>'); caja.appendChild(zona);
    function pintar() {
      if (k >= items.length) { zona.innerHTML = '<div class="aviso ok">Clasificaste ' + buenas + ' de ' + items.length + ' correctamente.</div><button class="btn btn-pri btn-bloque" type="button">Continuar</button>'; zona.querySelector('button').onclick = function () { zona.querySelector('button').remove(); fin(buenas / items.length, { buenas: buenas, total: items.length }); }; return; }
      var it = items[k];
      zona.innerHTML = '<div class="contador">Tarjeta ' + (k + 1) + ' de ' + items.length + '</div><div class="tarjeta-item">' + (it.senal ? senal(it.senal, it.icono) : '') + (it.senal ? '' : '<span>' + h(it.t) + '</span>') + '</div>' +
        '<div class="cat-btns">' + parte.categorias.map(function (c) { return '<button class="btn btn-sec" type="button" data-c="' + c.id + '">' + h(c.nombre) + '</button>'; }).join('') + '</div><div class="fb"></div>';
      Array.prototype.forEach.call(zona.querySelectorAll('[data-c]'), function (b) {
        b.onclick = function () {
          var ok = b.dataset.c === it.c; if (ok) buenas++;
          Array.prototype.forEach.call(zona.querySelectorAll('[data-c]'), function (x) { x.disabled = true; if (x.dataset.c === it.c) { x.className = 'btn btn-pri'; } });
          var cat = parte.categorias.filter(function (c) { return c.id === it.c; })[0];
          zona.querySelector('.fb').innerHTML = '<div class="retro ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? 'Correcto.' : 'Es: ' + h(cat.nombre) + '.') + '</b>' + (it.senal ? h(it.t) + '. ' : '') + h(it.fb || '') + '</div><button class="btn btn-pri btn-bloque" type="button">Siguiente</button>';
          zona.querySelector('.fb button').onclick = function () { k++; pintar(); };
        };
      });
    }
    pintar();
  };
  function itemsIper(cargo) {
    var R = ((window.IPER_EMPRESA || {})[cargo] || {}).riesgos || [], vistos = {}, porCat = { eliminacion: [], sustitucion: [], ingenieria: [], administrativo: [], epp: [] };
    R.forEach(function (r) {
      function add(cat, txt) { txt = String(txt || '').trim(); if (!txt || txt.length < 6 || vistos[txt.toLowerCase()]) return; vistos[txt.toLowerCase()] = 1; porCat[cat].push({ t: txt.length > 150 ? txt.slice(0, 147) + '…' : txt, c: cat, fb: 'En la Matriz IPER de ' + CONTENIDO.empresa.corto + ' es una medida para "' + r.riesgo.toLowerCase() + '".' }); }
      r.eliminacion.forEach(function (x) { add('eliminacion', x); });
      r.sustitucion.forEach(function (x) { add('sustitucion', x); });
      r.ingenieria.forEach(function (x) { add('ingenieria', x); });
      r.administrativo.forEach(function (x) { add('administrativo', x); });
      r.senalizacion.forEach(function (x) { add('administrativo', x); });
      if (r.eppItems.length) add('epp', r.eppItems.slice(0, 3).join(', '));
    });
    var cupo = { eliminacion: 1, sustitucion: 1, ingenieria: 2, administrativo: 2, epp: 2 }, out = [];
    for (var c in cupo) out = out.concat(barajar(porCat[c]).slice(0, cupo[c]));
    if (out.length < 6) for (c in porCat) out = out.concat(barajar(porCat[c]).filter(function (x) { return out.indexOf(x) < 0; }).slice(0, 2));
    out.forEach(function (x) {
      x.fb += { eliminacion: ' Eliminar el peligro es lo más eficaz.', sustitucion: ' Se reemplaza algo peligroso por algo menos peligroso.', ingenieria: ' Es un cambio físico en el equipo o el lugar de trabajo.', administrativo: ' Depende de cómo se organiza y se hace el trabajo.', epp: ' Es la última barrera de protección.' }[x.c];
    });
    return barajar(out).slice(0, 8);
  }

  /* ---- ordenar ---- */
  MOTORES.ordenar = function (caja, parte, ctx, fin) {
    var orden = barajar(parte.items); if (orden.join('|') === parte.items.join('|')) orden.reverse();
    var zona = el('<div><p class="pregunta">' + h(parte.enunciado) + '</p><ol class="orden-lista"></ol><div class="fb"></div><button class="btn btn-pri btn-bloque" type="button">Revisar orden</button></div>');
    caja.appendChild(zona);
    var ol = zona.querySelector('ol'), revisado = false;
    function pintar() {
      ol.innerHTML = orden.map(function (t, j) {
        return '<li><span class="tx">' + h(t) + '</span><button type="button" aria-label="Subir" data-u="' + j + '"' + (j === 0 ? ' disabled' : '') + '><svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.4"/></svg></button>' +
          '<button type="button" aria-label="Bajar" data-d="' + j + '"' + (j === orden.length - 1 ? ' disabled' : '') + '><svg width="18" height="18" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.4"/></svg></button></li>';
      }).join('');
      Array.prototype.forEach.call(ol.querySelectorAll('button'), function (b) {
        b.onclick = function () { if (revisado) return; var j = +(b.dataset.u || b.dataset.d), k = b.dataset.u ? j - 1 : j + 1; var t = orden[j]; orden[j] = orden[k]; orden[k] = t; pintar(); };
      });
    }
    pintar();
    zona.querySelector('.btn-pri').onclick = function () {
      var btn = this;
      if (revisado) { btn.remove(); return fin(bien / orden.length, { orden: orden }); }
      revisado = true; var bien = 0;
      Array.prototype.forEach.call(ol.children, function (li, j) { var ok = orden[j] === parte.items[j]; if (ok) bien++; li.classList.add(ok ? 'ok' : 'no'); });
      Array.prototype.forEach.call(ol.querySelectorAll('button'), function (b) { b.disabled = true; });
      zona.querySelector('.fb').innerHTML = '<div class="retro ' + (bien === orden.length ? 'ok' : 'no') + '"><b>' + (bien === orden.length ? 'Orden correcto.' : bien + ' de ' + orden.length + ' en su lugar. El orden correcto es:') + '</b>' +
        (bien === orden.length ? '' : '<ol style="margin:6px 0 6px 18px;padding:0">' + parte.items.map(function (t) { return '<li>' + h(t) + '</li>'; }).join('') + '</ol>') + h(parte.fb || '') + '</div>';
      btn.textContent = 'Continuar';
      btn.onclick = function () { btn.remove(); fin(bien / orden.length, { orden: orden }); };
    };
  };

  /* ---- emparejar ---- */
  MOTORES.emparejar = function (caja, parte, ctx, fin) {
    if (parte.desdeIper) {
      var vistos = {}, pares = [];
      (((window.IPER_EMPRESA || {})[ctx.cargo] || {}).riesgos || []).forEach(function (r) {
        var b = String(r.consecuencias[0] || '').split(/,\s*/).slice(0, 3).join(', ');
        if (b && !vistos[b] && pares.length < 6) { vistos[b] = 1; pares.push({ a: r.riesgo, b: b }); }
      });
      parte = { pares: pares.length >= 3 ? pares : [{ a: 'Caídas al mismo nivel', b: 'Golpes, contusiones, esguinces' }, { a: 'Contacto eléctrico', b: 'Quemaduras, electrocución' }, { a: 'Exigencias psicológicas', b: 'Estrés y fatiga' }] };
    }
    var izq = barajar(parte.pares.map(function (p, j) { return { t: p.a, j: j }; })), der = barajar(parte.pares.map(function (p, j) { return { t: p.b, j: j }; }));
    var zona = el('<div><p class="peq suave">Toca un elemento de la izquierda y luego su pareja a la derecha.</p><div class="pares"><div class="col" data-l></div><div class="col" data-r></div></div><div class="fb"></div></div>');
    caja.appendChild(zona);
    var L = zona.querySelector('[data-l]'), Rr = zona.querySelector('[data-r]'), sel = null, errores = 0, hechos = 0;
    L.innerHTML = izq.map(function (x) { return '<button type="button" class="par" data-j="' + x.j + '">' + h(x.t) + '</button>'; }).join('');
    Rr.innerHTML = der.map(function (x) { return '<button type="button" class="par" data-j="' + x.j + '">' + h(x.t) + '</button>'; }).join('');
    Array.prototype.forEach.call(L.children, function (b) { b.onclick = function () { if (b.classList.contains('hecho')) return; sel = b; Array.prototype.forEach.call(L.children, function (x) { x.classList.toggle('sel', x === b); }); }; });
    Array.prototype.forEach.call(Rr.children, function (b) {
      b.onclick = function () {
        if (!sel || b.classList.contains('hecho')) return;
        if (sel.dataset.j === b.dataset.j) {
          sel.classList.remove('sel'); sel.classList.add('hecho'); b.classList.add('hecho'); sel.disabled = b.disabled = true; sel = null; hechos++;
          if (hechos === parte.pares.length) {
            var p = parte.pares.length / (parte.pares.length + errores);
            zona.querySelector('.fb').innerHTML = '<div class="retro ok" style="margin-top:12px"><b>¡Todas las parejas listas!</b>' + (errores ? 'Tuviste ' + errores + ' intento(s) errado(s).' : 'Sin errores.') + '</div><button class="btn btn-pri btn-bloque" type="button">Continuar</button>';
            zona.querySelector('.fb button').onclick = function () { this.remove(); fin(p, { errores: errores }); };
          }
        } else { errores++; b.classList.add('mal'); setTimeout(function () { b.classList.remove('mal'); }, 400); }
      };
    });
  };

  /* ---- escenario con decisiones ---- */
  MOTORES.escenario = function (caja, parte, ctx, fin) {
    var area = ctx.area || 'faena', permit = area === 'taller' ? ['taller', 'todos'] : area === 'mixto' ? ['faena', 'taller', 'todos'] : area === 'oficina' ? ['oficina', 'todos'] : ['faena', 'todos'];
    parte = { casos: parte.casos.filter(function (k) { return !k.para || permit.indexOf(k.para) >= 0; }) };
    var c = 0, s = 0, pasos = 0, errores = 0, zona = el('<div></div>'); caja.appendChild(zona);
    function pintar() {
      if (c >= parte.casos.length) { var p = pasos / (pasos + errores); zona.innerHTML = '<div class="aviso ok">Resolviste ' + parte.casos.length + ' situaciones de emergencia.</div><button class="btn btn-pri btn-bloque" type="button">Continuar</button>'; zona.querySelector('button').onclick = function () { this.remove(); fin(p, { errores: errores }); }; return; }
      var caso = parte.casos[c], paso = caso.pasos[s];
      zona.innerHTML = '<div class="contador">Situación ' + (c + 1) + ' de ' + parte.casos.length + ' · ' + h(caso.titulo) + '</div><p class="pregunta">' + h(paso.p) + '</p>' +
        barajar(paso.o.map(function (o, j) { o._j = j; return o; })).map(function (o) { return '<button type="button" class="opcion" data-j="' + o._j + '"><span>' + h(o.t) + '</span></button>'; }).join('') + '<div class="fb"></div>';
      Array.prototype.forEach.call(zona.querySelectorAll('.opcion'), function (b) {
        b.onclick = function () {
          var o = paso.o[+b.dataset.j];
          if (o.ok) {
            pasos++; b.classList.add('ok'); Array.prototype.forEach.call(zona.querySelectorAll('.opcion'), function (x) { x.disabled = true; });
            zona.querySelector('.fb').innerHTML = '<div class="retro ok"><b>Bien.</b>' + h(o.fb) + '</div><button class="btn btn-pri btn-bloque" type="button">Siguiente</button>';
            zona.querySelector('.fb button').onclick = function () { s++; if (s >= caso.pasos.length) { s = 0; c++; } pintar(); };
          } else {
            errores++; b.classList.add('no'); b.disabled = true;
            zona.querySelector('.fb').innerHTML = '<div class="retro no"><b>Piénsalo de nuevo.</b>' + h(o.fb) + '</div>';
          }
        };
      });
    }
    pintar();
  };

  /* ---- checklist ---- */
  MOTORES.checklist = function (caja, parte, ctx, fin) {
    var items = barajar(parte.items);
    var zona = el('<div>' + items.map(function (it, j) { return '<label class="chk-item" data-j="' + j + '"><input type="checkbox"><span><span class="tx">' + h(it.t) + '</span><span class="fb"></span></span></label>'; }).join('') + '<div class="res"></div><button class="btn btn-pri btn-bloque" type="button">Revisar checklist</button></div>');
    caja.appendChild(zona);
    zona.querySelector('.btn-pri').onclick = function () {
      var btn = this, bien = 0;
      if (btn.dataset.fin) { btn.remove(); return fin(btn._p, {}); }
      Array.prototype.forEach.call(zona.querySelectorAll('.chk-item'), function (l) {
        var it = items[+l.dataset.j], m = l.querySelector('input').checked, ok = m === it.ok; if (ok) bien++;
        l.querySelector('input').disabled = true; l.classList.add(ok ? 'ok' : 'no');
        if (!ok) l.querySelector('.fb').textContent = it.ok ? (parte.msgFalta || 'Este ítem sí se verifica antes de zarpar.') : (it.fb || 'Este no es un ítem del checklist.');
        else if (!it.ok && it.fb) l.querySelector('.fb').textContent = it.fb;
      });
      btn._p = bien / items.length;
      zona.querySelector('.res').innerHTML = '<div class="retro ' + (bien === items.length ? 'ok' : 'no') + '"><b>' + bien + ' de ' + items.length + ' decisiones correctas.</b>' + h(parte.cierre || 'Este checklist se completa en cada inicio de jornada.') + '</div>';
      btn.textContent = 'Continuar'; btn.dataset.fin = '1';
    };
  };

  /* ---- lectura ---- */
  MOTORES.lectura = function (caja, parte, ctx, fin) {
    var z = el('<div><h3>' + h(parte.titulo || '') + '</h3>' + String(parte.texto || '').split(/\n\n+/).map(function (p) { return '<p>' + h(p).replace(/\n/g, '<br>') + '</p>'; }).join('') + '<button class="btn btn-pri btn-bloque" type="button">Continuar</button></div>');
    caja.appendChild(z);
    z.querySelector('button').onclick = function () { this.remove(); fin(1, null); };
  };

  /* ---- pregunta abierta con respuesta esperada ---- */
  MOTORES.abierta = function (caja, parte, ctx, fin) {
    var min = parte.min || 20;
    var z = el('<div><p class="pregunta">' + h(parte.p) + '</p><textarea rows="5" maxlength="1500" placeholder="Escribe tu respuesta con tus palabras"></textarea>' +
      '<div class="contador"><span data-c>0</span> caracteres · mínimo ' + min + '</div><div class="fb"></div><button class="btn btn-pri btn-bloque" type="button" disabled>Enviar mi respuesta</button></div>');
    caja.appendChild(z);
    var ta = z.querySelector('textarea'), b = z.querySelector('button');
    ta.addEventListener('input', function () { z.querySelector('[data-c]').textContent = ta.value.trim().length; b.disabled = ta.value.trim().length < min; });
    b.onclick = function () {
      if (b.dataset.fin) { b.remove(); return fin(1, { p: parte.p, r: ta.value.trim(), abierta: true, alApr: !!parte.alApr }); }
      ta.readOnly = true;
      z.querySelector('.fb').innerHTML = '<div class="retro ok"><b>' + (parte.alApr ? 'Respuesta registrada.' : 'Compara con lo esperado:') + '</b>' + h(parte.modelo || '') + '</div>';
      b.textContent = 'Continuar'; b.dataset.fin = '1';
    };
  };

  /* ---- registro sin puntaje (autoinspección) ---- */
  MOTORES.registro = function (caja, parte, ctx, fin) {
    var ops = parte.opciones || ['Bien', 'Requiere cambio', 'No aplica'], resp = {};
    var z = el('<div>' + parte.items.map(function (t, j) {
      return '<div class="campo" style="font-weight:600;margin-top:10px">' + h(t) + '</div><div class="escala" data-j="' + j + '">' + ops.map(function (o) { return '<button type="button" data-o="' + h(o) + '" style="font-size:14px">' + h(o) + '</button>'; }).join('') + '</div>';
    }).join('') + '<div class="fb"></div><button class="btn btn-pri btn-bloque" type="button">Guardar inspección</button></div>');
    caja.appendChild(z);
    Array.prototype.forEach.call(z.querySelectorAll('.escala'), function (g) {
      Array.prototype.forEach.call(g.querySelectorAll('button'), function (b) { b.onclick = function () { resp[g.dataset.j] = b.dataset.o; Array.prototype.forEach.call(g.querySelectorAll('button'), function (x) { x.classList.toggle('sel', x === b); }); }; });
    });
    z.querySelector('.btn-pri').onclick = function () {
      if (Object.keys(resp).length < parte.items.length) { z.querySelector('.fb').innerHTML = '<div class="aviso error">Marca una opción en cada elemento.</div>'; return; }
      this.remove();
      var malos = parte.items.filter(function (t, j) { return resp[j] === ops[1]; });
      fin(1, { p: parte.titulo || 'Autoinspección', r: malos.length ? 'Requiere cambio: ' + malos.join('; ') : 'Todo en buen estado', abierta: true, alApr: true });
    };
  };

  /* ---- evaluación P × S con la regla de la Matriz IPER de la empresa ---- */
  function nivelVep(v) { return v <= 2 ? 'Tolerable' : v <= 4 ? 'Moderado' : v <= 8 ? 'Importante' : 'Intolerable'; }
  MOTORES.vep = function (caja, parte, ctx, fin) {
    var R = (((window.IPER_EMPRESA || {})[ctx.cargo] || {}).riesgos || []).filter(function (r) { return r.p && r.s; });
    var casos = barajar(R).slice(0, parte.n || 2);
    if (!casos.length) casos = [{ riesgo: 'Caídas al agua', tareaPS: 'Traslado de personal y materiales al centro', peligroPS: 'Trabajo sobre embarcación, muelle o estructura flotante', p: 2, s: 4, administrativo: ['Procedimiento de trabajo seguro y charla de seguridad'], ingenieria: ['Barandas y superficies antideslizantes'], eppItems: ['Chaleco salvavidas'] }];
    var k = 0, puntos = 0, z = el('<div></div>'); caja.appendChild(z);
    var P = [[1, 'Baja', 'Rara vez · mensual'], [2, 'Media', 'Varias veces · semanal'], [4, 'Alta', 'Siempre o casi · diario']];
    var S = [[1, 'Ligeramente dañino', 'Lesiones superficiales'], [2, 'Dañino', 'Laceraciones, quemaduras, esguinces'], [4, 'Extremadamente dañino', 'Lesiones graves o muerte']];
    function pintar() {
      if (k >= casos.length) { z.innerHTML = '<div class="aviso ok">Evaluaste ' + casos.length + ' riesgos reales de tu cargo.</div><button class="btn btn-pri btn-bloque" type="button">Continuar</button>'; z.querySelector('button').onclick = function () { this.remove(); fin(puntos / casos.length, { vep: puntos }); }; return; }
      var c = casos[k], sp = 0, ss = 0;
      z.innerHTML = '<div class="contador">Riesgo ' + (k + 1) + ' de ' + casos.length + '</div><div class="tarjeta plana"><div class="peq suave">Tarea</div><b>' + h(c.tareaPS || (c.tareas || [''])[0]) + '</b><div class="peq suave" style="margin-top:6px">Peligro</div>' + h(c.peligroPS || (c.peligros || [''])[0]) + '<div class="peq suave" style="margin-top:6px">Riesgo</div><b>' + h(c.riesgo) + '</b></div>' +
        '<p class="pregunta" style="font-size:17px">¿Con qué probabilidad ocurre?</p><div class="cat-btns" data-g="p">' + P.map(function (x) { return '<button type="button" class="btn btn-sec" data-v="' + x[0] + '">' + x[1] + ' (' + x[0] + ')<br><span class="peq">' + x[2] + '</span></button>'; }).join('') + '</div>' +
        '<p class="pregunta" style="font-size:17px;margin-top:14px">¿Qué tan grave sería?</p><div class="cat-btns" data-g="s">' + S.map(function (x) { return '<button type="button" class="btn btn-sec" data-v="' + x[0] + '">' + x[1] + ' (' + x[0] + ')<br><span class="peq">' + x[2] + '</span></button>'; }).join('') + '</div>' +
        '<div class="fb"></div><button class="btn btn-pri btn-bloque" type="button" data-ok disabled>Calcular y comparar con la matriz</button>';
      Array.prototype.forEach.call(z.querySelectorAll('[data-g] button'), function (b) {
        b.onclick = function () {
          var g = b.parentNode.dataset.g; if (g === 'p') sp = +b.dataset.v; else ss = +b.dataset.v;
          Array.prototype.forEach.call(b.parentNode.querySelectorAll('button'), function (x) { x.className = 'btn ' + (x === b ? 'btn-pri' : 'btn-sec'); });
          z.querySelector('[data-ok]').disabled = !(sp && ss);
        };
      });
      z.querySelector('[data-ok]').onclick = function () {
        var btn = this;
        if (btn.dataset.sig) { k++; return pintar(); }
        var mio = sp * ss, real = c.p * c.s, nm = nivelVep(mio), nr = nivelVep(real);
        var orden = ['Tolerable', 'Moderado', 'Importante', 'Intolerable'], dif = Math.abs(orden.indexOf(nm) - orden.indexOf(nr));
        puntos += dif === 0 ? 1 : dif === 1 ? 0.5 : 0;
        Array.prototype.forEach.call(z.querySelectorAll('[data-g] button'), function (x) { x.disabled = true; });
        var ctl = [].concat((c.ingenieria || []).slice(0, 1), (c.administrativo || []).slice(0, 1), (c.eppItems || []).length ? ['EPP: ' + c.eppItems.slice(0, 3).join(', ')] : []);
        z.querySelector('.fb').innerHTML = '<div class="retro ' + (dif === 0 ? 'ok' : 'no') + '"><b>Tu evaluación: ' + sp + ' × ' + ss + ' = ' + mio + ' · ' + nm + '</b>La Matriz IPER de ' + CONTENIDO.empresa.corto + ' la evaluó en ' + c.p + ' × ' + c.s + ' = ' + real + ' · ' + nr + '.' +
          (dif === 0 ? ' ¡Coinciden!' : ' Revisa por qué hay diferencia: ¿cuántas veces te expones y qué es lo peor que podría pasar?') +
          (ctl.length ? '<br><br>Controles que define la matriz: ' + ctl.map(h).join(' · ') : '') + '</div>';
        btn.textContent = 'Siguiente'; btn.dataset.sig = '1';
      };
    }
    pintar();
  };

  /* ---- buscar peligros en la escena ---- */
  function persona(x, y, ropa, opt) {
    opt = opt || {};
    return '<g><circle cx="' + x + '" cy="' + y + '" r="10" fill="#f0c9a5"/>' +
      (opt.casco ? '<path d="M' + (x - 11) + ' ' + (y - 3) + ' a11 9 0 0 1 22 0 z" fill="#fff" stroke="#999"/>' : '<path d="M' + (x - 10) + ' ' + (y - 4) + ' q10 -12 20 0" fill="#3b2a1e"/>') +
      (opt.lentes ? '<rect x="' + (x - 7) + '" y="' + (y - 3) + '" width="14" height="5" rx="2" fill="#7fb3d5" stroke="#234E6B"/>' : '') +
      '<rect x="' + (x - 11) + '" y="' + (y + 10) + '" width="22" height="32" rx="5" fill="' + ropa + '"/>' +
      (opt.chaleco ? '<rect x="' + (x - 11) + '" y="' + (y + 12) + '" width="22" height="22" rx="4" fill="#F26B1D"/><path d="M' + (x - 11) + ' ' + (y + 26) + ' h22" stroke="#fff" stroke-width="2"/>' : '') +
      '<rect x="' + (x - 9) + '" y="' + (y + 40) + '" width="7" height="20" fill="#3b4a52"/><rect x="' + (x + 2) + '" y="' + (y + 40) + '" width="7" height="20" fill="#3b4a52"/></g>';
  }
  var ESCENAS = {
    ponton: {
      bien: 'El aro salvavidas y el extintor en la caseta, y el operario con chaleco en el pasillo, están bien.',
      peligros: [
        { x: 486, y: 150, r: 40, n: 'Piloto sin chaleco salvavidas en el borde del pontón', fb: 'En el pontón y en todo sector con riesgo de caída al agua el chaleco salvavidas es obligatorio (PTS-ROV-001).' },
        { x: 300, y: 196, r: 44, n: 'Umbilical suelto cruzando el pasillo', fb: 'El umbilical se ordena y se asegura fuera de la zona de tránsito: provoca tropiezos y caídas al agua.' },
        { x: 705, y: 262, r: 46, n: 'Buzo en el agua mientras opera el ROV', fb: 'Prohibido operar con buzos en el agua sin coordinación formal con la mandante.' },
        { x: 168, y: 188, r: 40, n: 'Batería cargando junto al bidón de combustible', fb: 'Las baterías se cargan en un lugar seco, ventilado, autorizado y lejos de combustibles, siempre supervisadas.' },
        { x: 548, y: 202, r: 30, n: 'Alargador enchufado dentro de una poza de agua', fb: 'Las conexiones eléctricas se mantienen secas y protegidas de la humedad: riesgo de contacto eléctrico.' },
        { x: 600, y: 160, r: 36, n: 'Persona tomando el ROV con las hélices funcionando', fb: 'El ROV se manipula solo apagado: las hélices pueden cortar o atrapar los dedos.' }
      ],
      svg: function () {
        return '<svg viewBox="0 0 800 320" role="img" aria-label="Escena: piloto operando el ROV desde el pontón de un centro de cultivo">' +
          '<rect width="800" height="320" fill="#dbe8ee"/>' +
          '<path d="M0 120 L90 60 L170 100 L260 40 L360 105 L450 55 L560 115 L650 65 L800 120 V200 H0z" fill="#9db6bf"/>' +
          '<path d="M0 150 L120 105 L220 140 L330 100 L460 150 L600 110 L800 150 V200 H0z" fill="#7b9aa5"/>' +
          '<rect y="196" width="800" height="124" fill="#2E5F7E"/>' +
          '<path d="M0 290 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#5F95BA" stroke-width="3"/>' +
          /* módulo de cultivo al fondo a la derecha */
          '<rect x="640" y="190" width="160" height="10" fill="#8a969b"/><path d="M650 190 V130 M790 190 V130 M650 132 Q720 100 790 132" fill="none" stroke="#6d7a80" stroke-width="4"/>' +
          /* pontón */
          '<rect x="30" y="196" width="590" height="22" fill="#6f7c82"/><rect x="30" y="186" width="590" height="12" fill="#a9b4b8"/>' +
          /* caseta */
          '<rect x="50" y="96" width="150" height="90" fill="#ffffff" stroke="#234E6B" stroke-width="3"/><path d="M42 98 L125 70 L208 98z" fill="#234E6B"/>' +
          '<rect x="66" y="114" width="36" height="26" fill="#9db6bf"/><rect x="146" y="120" width="34" height="66" fill="#c7d3d8" stroke="#234E6B"/>' +
          /* aro salvavidas y extintor bien ubicados */
          '<circle cx="122" cy="150" r="12" fill="none" stroke="#F26B1D" stroke-width="7"/><circle cx="122" cy="150" r="12" fill="none" stroke="#fff" stroke-width="7" stroke-dasharray="6 13"/>' +
          '<g><rect x="186" y="150" width="11" height="26" rx="4" fill="#c0392b"/><rect x="189" y="145" width="5" height="6" fill="#333"/></g>' +
          /* bidón y batería cargando */
          '<g><rect x="138" y="166" width="22" height="22" rx="3" fill="#c0392b"/><rect x="148" y="160" width="7" height="7" fill="#8e2a1f"/></g>' +
          '<g><rect x="164" y="172" width="26" height="16" rx="2" fill="#222"/><rect x="168" y="168" width="6" height="4" fill="#d33"/><rect x="180" y="168" width="6" height="4" fill="#333"/><path d="M190 178 q20 -2 26 -30" fill="none" stroke="#111" stroke-width="2"/><rect x="210" y="140" width="14" height="10" fill="#444"/><circle cx="217" cy="145" r="2" fill="#5f5"/></g>' +
          /* operario con chaleco en el pasillo */
          persona(240, 128, '#3b6ea8', { chaleco: true, casco: true }) +
          /* umbilical suelto */
          '<path d="M260 192 c15 -10 30 8 45 -2 s25 10 40 0 c10 -6 18 6 10 8 c-14 4 -30 -6 -40 2 s-28 -4 -36 4" fill="none" stroke="#F2C230" stroke-width="5" stroke-linecap="round"/>' +
          /* mesa de consola */
          '<rect x="390" y="150" width="80" height="8" fill="#5c4033"/><rect x="396" y="158" width="6" height="28" fill="#5c4033"/><rect x="458" y="158" width="6" height="28" fill="#5c4033"/>' +
          '<rect x="402" y="122" width="44" height="28" rx="2" fill="#222"/><rect x="406" y="126" width="36" height="20" fill="#5F95BA"/>' +
          /* piloto sin chaleco junto al borde */
          persona(486, 128, '#3b6ea8') +
          /* poza y alargador */
          '<ellipse cx="548" cy="198" rx="30" ry="6" fill="#7fb3d5" opacity=".85"/><rect x="530" y="192" width="30" height="8" rx="2" fill="#f5f5f5" stroke="#555"/><path d="M560 196 q20 4 40 -6" fill="none" stroke="#222" stroke-width="2"/>' +
          /* persona tomando el ROV con hélices girando */
          persona(620, 128, '#7d5a3c') +
          '<g><rect x="572" y="150" width="46" height="26" rx="4" fill="#F2C230" stroke="#7a5c00" stroke-width="2"/><circle cx="574" cy="162" r="9" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="4 3"/><circle cx="616" cy="162" r="9" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="4 3"/><path d="M566 150 l-6 -6 M566 174 l-6 6 M622 150 l6 -6" stroke="#333" stroke-width="2"/></g>' +
          /* ROV y buzo en el agua */
          '<g><rect x="610" y="250" width="40" height="22" rx="4" fill="#F2C230" stroke="#7a5c00" stroke-width="2"/><path d="M540 196 C560 230 590 250 612 258" fill="none" stroke="#F2C230" stroke-width="3"/></g>' +
          '<g><ellipse cx="705" cy="262" rx="26" ry="9" fill="#111"/><circle cx="680" cy="258" r="8" fill="#111"/><rect x="694" y="250" width="16" height="7" rx="2" fill="#F2C230"/><path d="M730 262 l14 -6 M730 264 l14 6" stroke="#111" stroke-width="4"/><g fill="#cfe7f5"><circle cx="676" cy="242" r="3"/><circle cx="672" cy="230" r="4"/><circle cx="678" cy="218" r="3"/></g></g>' +
          '</svg>';
      }
    },
    taller: {
      bien: 'El extintor en la pared, la señal de salida, el botiquín y el extractor de humos sobre el banco están bien.',
      peligros: [
        { x: 120, y: 206, r: 36, n: 'Estufa a parafina junto a la salida, con una bolsa detrás de la puerta', fb: 'La estufa va fuera de la vía de evacuación y lejos de combustibles; la salida siempre despejada (hallazgo H11).' },
        { x: 246, y: 32, r: 34, n: 'Maleta pesada sobre la repisa más alta', fb: 'Las maletas pesadas van en las repisas bajas: en un sismo o al bajarlas pueden caer encima de alguien.' },
        { x: 446, y: 132, r: 26, n: 'Aerosol inflamable junto al cautín encendido', fb: 'Ningún aerosol ni solvente junto al cautín: se guardan en el gabinete de inflamables (hallazgo H02).' },
        { x: 612, y: 104, r: 28, n: 'Trabajador usando el taladro sin lentes de seguridad', fb: 'Con herramientas eléctricas se usan lentes de seguridad (PTS-TAL-001, punto 8.3).' },
        { x: 706, y: 198, r: 40, n: 'Batería cargando sobre repisa de madera junto a papeles', fb: 'La carga se hace en la zona de carga, sobre superficie no combustible, lejos de papeles y supervisada.' },
        { x: 378, y: 268, r: 42, n: 'Zapatillas eléctricas conectadas en cadena en el piso', fb: 'Las conexiones en cadena sobrecargan la instalación y quedan en la zona de tránsito: riesgo eléctrico, incendio y tropiezo.' }
      ],
      svg: function () {
        return '<svg viewBox="0 0 800 320" role="img" aria-label="Escena: taller de mantención de equipos ROV">' +
          '<rect width="800" height="320" fill="#efe7d8"/>' +
          '<path d="M0 0 H800 V236 H0z" fill="#e6dcc8"/><path d="M0 40 H800 M0 80 H800 M0 120 H800 M0 160 H800 M0 200 H800" stroke="#d8ccb4" stroke-width="2"/>' +
          '<rect y="236" width="800" height="84" fill="#b9a88c"/>' +
          /* puerta de salida, señal y bolsa */
          '<rect x="20" y="96" width="72" height="140" fill="#8c6a4a" stroke="#5c4033" stroke-width="3"/><circle cx="80" cy="170" r="4" fill="#333"/>' +
          '<rect x="22" y="70" width="68" height="20" rx="2" fill="#2e8b57"/><path d="M34 80 h30 m-8 -6 l8 6 -8 6" stroke="#fff" stroke-width="3" fill="none"/>' +
          '<path d="M90 236 q-8 -30 6 -36 q14 -4 12 36z" fill="#222"/>' +
          /* estufa a parafina */
          '<g><rect x="100" y="182" width="42" height="54" rx="4" fill="#b8bec2" stroke="#555" stroke-width="2"/><rect x="108" y="196" width="26" height="14" fill="#F2C230"/><rect x="100" y="178" width="42" height="6" fill="#333"/></g>' +
          /* extintor en la pared */
          '<g><rect x="150" y="150" width="14" height="34" rx="4" fill="#c0392b"/><rect x="154" y="143" width="7" height="8" fill="#333"/><rect x="146" y="120" width="22" height="22" fill="#c0392b"/></g>' +
          /* repisa alta con maletas */
          '<rect x="176" y="50" width="146" height="6" fill="#7a5c3c"/><rect x="176" y="100" width="146" height="6" fill="#7a5c3c"/><rect x="176" y="150" width="146" height="6" fill="#7a5c3c"/><rect x="176" y="50" width="6" height="186" fill="#7a5c3c"/><rect x="316" y="50" width="6" height="186" fill="#7a5c3c"/>' +
          '<rect x="214" y="16" width="64" height="34" rx="4" fill="#1d1d1d"/><rect x="236" y="10" width="20" height="7" rx="2" fill="#1d1d1d"/>' +
          '<rect x="190" y="118" width="40" height="32" fill="#c9a36b"/><rect x="240" y="124" width="56" height="26" fill="#5F95BA"/><rect x="196" y="72" width="30" height="28" fill="#c9a36b"/>' +
          /* banco de trabajo */
          '<rect x="336" y="150" width="310" height="10" fill="#6d5137"/><rect x="342" y="160" width="8" height="76" fill="#6d5137"/><rect x="630" y="160" width="8" height="76" fill="#6d5137"/>' +
          /* extractor de humos */
          '<path d="M392 60 V100 q0 10 10 12" fill="none" stroke="#666" stroke-width="6"/><rect x="398" y="104" width="22" height="14" rx="3" fill="#666"/>' +
          /* estación de soldadura, cautín y aerosol */
          '<rect x="364" y="126" width="40" height="24" rx="3" fill="#2b2f31"/><rect x="370" y="132" width="16" height="8" fill="#c0392b"/><path d="M404 140 L430 126" stroke="#444" stroke-width="4"/><circle cx="432" cy="125" r="3" fill="#f39c12"/>' +
          '<g><rect x="438" y="116" width="16" height="34" rx="4" fill="#c0392b"/><rect x="442" y="110" width="8" height="7" fill="#eee"/><path d="M441 128 h10" stroke="#fff" stroke-width="2"/></g>' +
          /* ROV abierto con batería */
          '<rect x="480" y="128" width="78" height="22" rx="4" fill="#F2C230" stroke="#7a5c00" stroke-width="2"/><rect x="498" y="120" width="34" height="14" fill="#222"/><path d="M510 120 q-6 -10 -16 -6 M520 120 q6 -12 16 -6" stroke="#d33" stroke-width="2" fill="none"/>' +
          /* botiquín */
          '<g><rect x="660" y="44" width="40" height="30" rx="3" fill="#fff" stroke="#2e8b57" stroke-width="2"/><path d="M676 50 h8 v7 h7 v8 h-7 v7 h-8 v-7 h-7 v-8 h7z" fill="#2e8b57"/></g>' +
          /* trabajador con taladro sin lentes */
          persona(612, 104, '#3b6ea8') + '<path d="M600 124 L582 136" stroke="#f0c9a5" stroke-width="5"/><rect x="566" y="130" width="20" height="10" rx="2" fill="#F26B1D"/><rect x="560" y="133" width="7" height="3" fill="#888"/>' +
          '<rect x="586" y="150" width="60" height="10" fill="#6d5137"/><rect x="630" y="160" width="8" height="76" fill="#6d5137"/>' +
          /* repisa baja de madera con batería cargando y papeles */
          '<rect x="662" y="176" width="100" height="6" fill="#a07a50"/><rect x="662" y="176" width="6" height="60" fill="#a07a50"/><rect x="756" y="176" width="6" height="60" fill="#a07a50"/>' +
          '<rect x="676" y="156" width="40" height="20" rx="2" fill="#222"/><rect x="684" y="152" width="6" height="4" fill="#d33"/><path d="M716 168 q14 0 18 -12" fill="none" stroke="#111" stroke-width="2"/><rect x="728" y="146" width="16" height="10" fill="#444"/><circle cx="736" cy="151" r="2" fill="#f33"/>' +
          '<path d="M718 176 l12 -14 l14 4 l-6 10z" fill="#f5f0e1" stroke="#aaa"/><rect x="740" y="164" width="16" height="12" fill="#d8c08f"/>' +
          /* zapatillas en cadena en el piso */
          '<g><rect x="336" y="258" width="34" height="9" rx="2" fill="#f5f5f5" stroke="#555"/><rect x="380" y="264" width="34" height="9" rx="2" fill="#f5f5f5" stroke="#555"/><path d="M370 262 q6 0 10 6 M414 268 q20 4 30 -10 M336 262 q-20 0 -30 -26" fill="none" stroke="#222" stroke-width="2"/><rect x="342" y="252" width="6" height="6" fill="#333"/><rect x="386" y="258" width="6" height="6" fill="#333"/></g>' +
          /* carrete de umbilical ordenado en la zona de almacenamiento */
          '<circle cx="230" cy="214" r="20" fill="#F2C230" stroke="#7a5c00" stroke-width="3"/><circle cx="230" cy="214" r="6" fill="#7a5c00"/>' +
          '</svg>';
      }
    }
  };
  MOTORES.hotspot = function (caja, parte, ctx, fin) {
    var esc = ESCENAS[parte.escena] || ESCENAS.ponton, encontrados = {}, fallos = 0;
    var zona = el('<div><div class="escena">' + esc.svg() + '</div><p class="escena-ayuda">Desliza la imagen hacia el lado para verla completa.</p><div class="contador" style="margin-top:8px"><span data-n>0</span> de ' + esc.peligros.length + ' peligros encontrados · toques fuera: <span data-f>0</span></div><ol class="hallazgos"></ol><div class="fb"></div>' +
      '<button class="btn btn-ter" type="button" data-rinde>No encuentro más: mostrar los que faltan</button></div>');
    caja.appendChild(zona);
    var svg = zona.querySelector('svg'), ns = 'http://www.w3.org/2000/svg';
    function marca(p, cls) { var c = document.createElementNS(ns, 'circle'); c.setAttribute('cx', p.x); c.setAttribute('cy', p.y); c.setAttribute('r', p.r || 14); c.setAttribute('class', cls); svg.appendChild(c); return c; }
    function anotar(j, auto) {
      var p = esc.peligros[j]; encontrados[j] = auto ? 'visto' : 'ok'; marca(p, 'hs-marca');
      zona.querySelector('.hallazgos').insertAdjacentHTML('beforeend', '<li><b>' + h(p.n) + (auto ? ' (no encontrado)' : '') + '.</b> ' + h(p.fb) + '</li>');
      zona.querySelector('[data-n]').textContent = Object.keys(encontrados).filter(function (k) { return encontrados[k] === 'ok'; }).length;
      if (Object.keys(encontrados).length === esc.peligros.length) terminar();
    }
    function terminar() {
      var n = Object.keys(encontrados).filter(function (k) { return encontrados[k] === 'ok'; }).length;
      var p = Math.max(0, n / esc.peligros.length - fallos * 0.03);
      var r = zona.querySelector('[data-rinde]'); if (r) r.remove();
      svg.style.pointerEvents = 'none';
      zona.querySelector('.fb').innerHTML = '<div class="retro ok"><b>Encontraste ' + n + ' de ' + esc.peligros.length + '.</b>El aro salvavidas, el extintor en la cabina y el trabajador con chaleco y casco están bien.</div><button class="btn btn-pri btn-bloque" type="button">Continuar</button>';
      zona.querySelector('.fb button').onclick = function () { this.remove(); fin(p, { encontrados: n, fallos: fallos }); };
    }
    svg.addEventListener('click', function (ev) {
      var pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY; var q = pt.matrixTransform(svg.getScreenCTM().inverse());
      for (var j = 0; j < esc.peligros.length; j++) { var p = esc.peligros[j], dx = q.x - p.x, dy = q.y - p.y; if (dx * dx + dy * dy <= p.r * p.r) { if (!encontrados[j]) anotar(j); return; } }
      fallos++; zona.querySelector('[data-f]').textContent = fallos; var m = marca({ x: q.x, y: q.y, r: 12 }, 'hs-fallo'); setTimeout(function () { m.remove(); }, 900);
    });
    zona.querySelector('[data-rinde]').onclick = function () { esc.peligros.forEach(function (p, j) { if (!encontrados[j]) anotar(j, true); }); };
  };

  /* ---- señales de seguridad ---- */
  var PICTO = {
    cigarro: '<rect x="24" y="50" width="44" height="11" fill="#111"/><rect x="68" y="50" width="8" height="11" fill="#c0392b"/><path d="M72 44 q-6 -8 0 -16 q6 -8 0 -14" fill="none" stroke="#111" stroke-width="3"/>',
    chaleco: '<path d="M38 26 L46 26 L50 36 L54 26 L62 26 L70 40 L68 78 L56 78 L56 50 L44 50 L44 78 L32 78 L30 40 Z" fill="#fff"/>',
    rayo: '<path d="M56 24 L36 58 L50 58 L42 82 L66 46 L52 46 L60 24 Z" fill="#111"/>',
    cruz: '<path d="M42 28 h16 v14 h14 v16 h-14 v14 h-16 v-14 h-14 v-16 h14 z" fill="#fff"/>',
    extintor: '<rect x="40" y="36" width="22" height="44" rx="6" fill="#fff"/><rect x="45" y="27" width="12" height="10" fill="#fff"/><path d="M57 30 h10 l6 10" fill="none" stroke="#fff" stroke-width="4"/>',
    mano: '<rect x="38" y="48" width="26" height="28" rx="6" fill="#111"/><rect x="38" y="32" width="6" height="20" rx="3" fill="#111"/><rect x="46" y="28" width="6" height="22" rx="3" fill="#111"/><rect x="54" y="30" width="6" height="20" rx="3" fill="#111"/><rect x="62" y="44" width="6" height="16" rx="3" fill="#111" transform="rotate(30 65 52)"/><path d="M30 76 h42" stroke="#111" stroke-width="4"/><circle cx="66" cy="72" r="8" fill="none" stroke="#111" stroke-width="3"/>',
    casco: '<path d="M30 62 a20 20 0 0 1 40 0 z" fill="#fff"/><rect x="26" y="62" width="48" height="7" rx="3" fill="#fff"/><rect x="47" y="40" width="6" height="22" fill="#2a5aa8"/>',
    salida: '<rect x="56" y="26" width="18" height="52" fill="none" stroke="#fff" stroke-width="4"/><path d="M26 52 h22 M40 42 l10 10 l-10 10" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
    persona: '<circle cx="50" cy="30" r="7" fill="#111"/><path d="M50 38 v22 M50 60 l-9 18 M50 60 l9 18 M38 46 h24" stroke="#111" stroke-width="6" stroke-linecap="round"/>',
    llama: '<path d="M50 24 c10 14 20 22 16 38 c-3 12 -13 16 -16 16 c-8 0 -18 -6 -18 -18 c0 -10 8 -14 8 -24 c6 6 6 12 10 14 c2 -10 -2 -18 0 -26z" fill="#111"/>'
  };
  function senal(tipo, icono) {
    var p = PICTO[icono] || '', s = '<svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">';
    if (tipo === 'prohibicion') s += '<circle cx="50" cy="52" r="40" fill="#fff" stroke="#d62828" stroke-width="9"/>' + p + '<line x1="22" y1="24" x2="78" y2="80" stroke="#d62828" stroke-width="9"/>';
    else if (tipo === 'obligacion') s += '<circle cx="50" cy="52" r="42" fill="#2a5aa8"/>' + p;
    else if (tipo === 'advertencia') s += '<path d="M50 8 L94 88 H6 Z" fill="#F2C230" stroke="#111" stroke-width="5" stroke-linejoin="round"/><g transform="translate(14 22) scale(.72)">' + p + '</g>';
    else if (tipo === 'salvamento') s += '<rect x="6" y="14" width="88" height="76" rx="6" fill="#1f8a4c"/>' + p;
    else if (tipo === 'incendio') s += '<rect x="10" y="12" width="80" height="80" rx="6" fill="#d62828"/>' + p;
    return s + '</svg>';
  }

  return { jugar: jugar, senal: senal };
})();

