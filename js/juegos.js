/* PyV Capacita — motores de actividades prácticas */
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
    var R = ((window.PYV_IPER || {})[cargo] || {}).riesgos || [], vistos = {}, porCat = { eliminacion: [], sustitucion: [], ingenieria: [], administrativo: [], epp: [] };
    R.forEach(function (r) {
      function add(cat, txt) { txt = String(txt || '').trim(); if (!txt || txt.length < 6 || vistos[txt.toLowerCase()]) return; vistos[txt.toLowerCase()] = 1; porCat[cat].push({ t: txt.length > 150 ? txt.slice(0, 147) + '…' : txt, c: cat, fb: 'En la Matriz IPER de PyV es una medida para "' + r.riesgo.toLowerCase() + '".' }); }
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
      (((window.PYV_IPER || {})[ctx.cargo] || {}).riesgos || []).forEach(function (r) {
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
    var area = ctx.area || 'faena', permit = area === 'oficina' ? ['oficina'] : ['faena', 'todos'];
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
      zona.querySelector('.res').innerHTML = '<div class="retro ' + (bien === items.length ? 'ok' : 'no') + '"><b>' + bien + ' de ' + items.length + ' decisiones correctas.</b>' + h(parte.cierre || 'El Patrón y el Supervisor firman este checklist en cada inicio de turno.') + '</div>';
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

  /* ---- evaluación P × S con la regla de la Matriz IPER de PyV ---- */
  function nivelVep(v) { return v <= 2 ? 'Tolerable' : v <= 4 ? 'Moderado' : v <= 8 ? 'Importante' : 'Intolerable'; }
  MOTORES.vep = function (caja, parte, ctx, fin) {
    var R = (((window.PYV_IPER || {})[ctx.cargo] || {}).riesgos || []).filter(function (r) { return r.p && r.s; });
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
        z.querySelector('.fb').innerHTML = '<div class="retro ' + (dif === 0 ? 'ok' : 'no') + '"><b>Tu evaluación: ' + sp + ' × ' + ss + ' = ' + mio + ' · ' + nm + '</b>La Matriz IPER de PyV la evaluó en ' + c.p + ' × ' + c.s + ' = ' + real + ' · ' + nr + '.' +
          (dif === 0 ? ' ¡Coinciden!' : ' Revisa por qué hay diferencia: ¿cuántas veces te expones y qué es lo peor que podría pasar?') +
          (ctl.length ? '<br><br>Controles que define la matriz: ' + ctl.map(h).join(' · ') : '') + '</div>';
        btn.textContent = 'Siguiente'; btn.dataset.sig = '1';
      };
    }
    pintar();
  };

  /* ---- buscar peligros en la escena ---- */
  var ESCENAS = {
    cubierta: {
      peligros: [
        { x: 432, y: 300, r: 58, n: 'Persona bajo carga suspendida', fb: 'Nadie pasa ni se queda bajo una carga izada con el brazo hidráulico (PTS-017).' },
        { x: 548, y: 286, r: 46, n: 'Trabajador sin chaleco salvavidas junto a la borda', fb: 'En cubierta y sobre módulos el chaleco salvavidas es obligatorio en todo momento.' },
        { x: 285, y: 330, r: 52, n: 'Cabo suelto en la zona de tránsito', fb: 'Un cabo enredado en cubierta provoca tropiezos, caídas y atrapamientos. Orden y aseo permanente.' },
        { x: 380, y: 334, r: 40, n: 'Escotilla abierta sin protección', fb: 'Una escotilla abierta sin barrera ni aviso es riesgo de caída a distinto nivel.' },
        { x: 690, y: 296, r: 62, n: 'Bidón de combustible junto a la soldadura', fb: 'Los inflamables se retiran a 10 metros como mínimo del trabajo en caliente (PTS-003).' },
        { x: 150, y: 330, r: 42, n: 'Cilindro de gas suelto y caído', fb: 'Los cilindros de GLP van sujetos y en posición vertical, sin fugas (checklist de zarpe).' }
      ]
    }
  };
  function escenaSvg() {
    return '<svg viewBox="20 140 780 300" role="img" aria-label="Escena: embarcación de apoyo trabajando junto a un módulo de cultivo">' +
      '<rect width="800" height="460" fill="#d9e6ea"/>' +
      '<path d="M0 200 L90 120 L170 170 L260 90 L360 165 L450 110 L560 180 L650 120 L800 190 V260 H0z" fill="#9db6bf"/>' +
      '<path d="M0 230 L120 170 L220 215 L330 160 L460 220 L600 175 L800 225 V270 H0z" fill="#7b9aa5"/>' +
      '<rect y="262" width="800" height="198" fill="#1D5A6E"/>' +
      '<path d="M0 400 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#3E7C8F" stroke-width="3"/>' +
      '<path d="M0 430 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#3E7C8F" stroke-width="3"/>' +
      /* módulo de cultivo */
      '<rect x="610" y="318" width="190" height="14" fill="#8a969b"/><rect x="610" y="332" width="190" height="10" fill="#2b2f31"/>' +
      '<line x1="625" y1="318" x2="625" y2="240" stroke="#6d7a80" stroke-width="5"/><line x1="790" y1="318" x2="790" y2="240" stroke="#6d7a80" stroke-width="5"/>' +
      '<path d="M625 242 Q707 205 790 242" fill="none" stroke="#6d7a80" stroke-width="4"/>' +
      '<path d="M625 250 L790 250 M640 245 L640 318 M660 240 L660 318 M680 236 L680 318 M700 234 L700 318 M720 234 L720 318 M740 236 L740 318 M760 240 L760 318" stroke="#9aa6ab" stroke-width="1" opacity=".7"/>' +
      /* soldador en el módulo */
      '<g><circle cx="730" cy="262" r="10" fill="#f0c9a5"/><rect x="722" y="250" width="16" height="10" rx="3" fill="#2b2f31"/><rect x="719" y="272" width="22" height="30" rx="5" fill="#F26B1D"/><rect x="721" y="300" width="7" height="18" fill="#3b4a52"/><rect x="733" y="300" width="7" height="18" fill="#3b4a52"/>' +
      '<line x1="719" y1="282" x2="700" y2="300" stroke="#f0c9a5" stroke-width="5"/><line x1="700" y1="300" x2="706" y2="316" stroke="#333" stroke-width="3"/>' +
      '<g fill="#ffd34d"><circle cx="704" cy="314" r="3"/><circle cx="696" cy="308" r="2"/><circle cx="712" cy="306" r="2"/><circle cx="690" cy="316" r="2"/><circle cx="716" cy="312" r="1.6"/></g></g>' +
      /* bidón de combustible */
      '<g><rect x="672" y="290" width="26" height="28" rx="3" fill="#c0392b"/><rect x="684" y="284" width="8" height="8" fill="#8e2a1f"/><path d="M676 298 h18" stroke="#ffd1c8" stroke-width="2"/></g>' +
      /* casco de la embarcación */
      '<path d="M40 330 L590 330 L560 392 Q300 410 80 392 Z" fill="#f3f5f6" stroke="#0F3B4C" stroke-width="3"/>' +
      '<path d="M48 344 L583 344" stroke="#F26B1D" stroke-width="6"/>' +
      '<text x="300" y="380" font-family="Barlow, sans-serif" font-size="20" fill="#0F3B4C" font-weight="700">L/M PYV</text>' +
      '<rect x="40" y="318" width="550" height="12" fill="#c7d3d8"/>' +
      /* baranda con brecha */
      '<path d="M44 318 V298 M44 298 H500 M90 318 V298 M140 318 V298 M240 318 V298 M330 318 V298 M420 318 V298 M500 318 V298" stroke="#0F3B4C" stroke-width="3" fill="none"/>' +
      /* cabina */
      '<rect x="70" y="220" width="150" height="98" rx="6" fill="#ffffff" stroke="#0F3B4C" stroke-width="3"/>' +
      '<rect x="84" y="236" width="36" height="26" fill="#9db6bf"/><rect x="130" y="236" width="36" height="26" fill="#9db6bf"/><rect x="176" y="236" width="30" height="26" fill="#9db6bf"/>' +
      '<rect x="60" y="210" width="170" height="12" fill="#0F3B4C"/><line x1="120" y1="210" x2="120" y2="180" stroke="#0F3B4C" stroke-width="3"/>' +
      /* aro salvavidas y extintor bien ubicados */
      '<circle cx="196" cy="290" r="13" fill="none" stroke="#F26B1D" stroke-width="7"/><circle cx="196" cy="290" r="13" fill="none" stroke="#fff" stroke-width="7" stroke-dasharray="6 14"/>' +
      '<g><rect x="90" y="276" width="13" height="30" rx="4" fill="#c0392b"/><rect x="93" y="270" width="7" height="7" fill="#333"/><path d="M100 272 q10 0 8 12" fill="none" stroke="#333" stroke-width="2"/></g>' +
      /* cilindro caído */
      '<g transform="rotate(-80 150 322)"><rect x="140" y="300" width="22" height="46" rx="10" fill="#e9a23b"/><rect x="146" y="294" width="10" height="8" fill="#666"/></g>' +
      /* trabajador seguro con chaleco y casco */
      '<g><circle cx="250" cy="262" r="10" fill="#f0c9a5"/><path d="M239 258 a11 9 0 0 1 22 0 z" fill="#fff" stroke="#999"/><rect x="240" y="272" width="22" height="32" rx="5" fill="#F26B1D"/><rect x="242" y="302" width="7" height="16" fill="#3b4a52"/><rect x="254" y="302" width="7" height="16" fill="#3b4a52"/></g>' +
      /* cabo suelto en la cubierta */
      '<path d="M240 322 c15 -10 30 8 45 -2 s25 10 40 0 c10 -6 18 6 10 8 c-14 4 -30 -6 -40 2 s-28 -4 -36 4" fill="none" stroke="#b5651d" stroke-width="5" stroke-linecap="round"/>' +
      /* escotilla abierta */
      '<rect x="360" y="319" width="40" height="11" fill="#111"/><rect x="398" y="300" width="6" height="22" fill="#7b8b92" transform="rotate(20 401 311)"/>' +
      /* grúa / brazo hidráulico */
      '<rect x="300" y="268" width="22" height="50" fill="#F2C230" stroke="#7a5c00" stroke-width="2"/>' +
      '<path d="M311 270 L460 180" stroke="#F2C230" stroke-width="14" stroke-linecap="round"/><path d="M311 270 L460 180" stroke="#7a5c00" stroke-width="2" fill="none"/>' +
      '<line x1="456" y1="184" x2="456" y2="240" stroke="#333" stroke-width="2"/>' +
      '<rect x="432" y="240" width="48" height="34" fill="#8d6e4a" stroke="#4e3b24" stroke-width="2"/><path d="M432 257 H480 M456 240 V274" stroke="#4e3b24" stroke-width="1.5"/>' +
      /* persona bajo la carga */
      '<g><circle cx="440" cy="290" r="9" fill="#f0c9a5"/><path d="M430 286 a10 8 0 0 1 20 0z" fill="#fff" stroke="#999"/><rect x="431" y="299" width="19" height="20" rx="4" fill="#F26B1D"/></g>' +
      /* trabajador sin chaleco junto a la borda, con la baranda abierta */
      '<g><circle cx="548" cy="258" r="10" fill="#f0c9a5"/><rect x="538" y="268" width="20" height="32" rx="5" fill="#3b6ea8"/><rect x="539" y="298" width="7" height="20" fill="#3b4a52"/><rect x="551" y="298" width="7" height="20" fill="#3b4a52"/><line x1="558" y1="276" x2="576" y2="290" stroke="#f0c9a5" stroke-width="5"/></g>' +
      '</svg>';
  }
  MOTORES.hotspot = function (caja, parte, ctx, fin) {
    var esc = ESCENAS[parte.escena], encontrados = {}, fallos = 0;
    var zona = el('<div><div class="escena">' + escenaSvg() + '</div><p class="escena-ayuda">Desliza la imagen hacia el lado para verla completa.</p><div class="contador" style="margin-top:8px"><span data-n>0</span> de ' + esc.peligros.length + ' peligros encontrados · toques fuera: <span data-f>0</span></div><ol class="hallazgos"></ol><div class="fb"></div>' +
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
