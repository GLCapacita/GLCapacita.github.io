/* PyV Capacita — contenidos de las capacitaciones de la empresa (IRL, IPER, PRRD, EPP, accidentes, PTS)
   y talleres asincrónicos del curso obligatorio.
   Fuentes: Matriz IPER 2026, PRRD 2026 v02, PTS de PyV, Procedimiento de accidentes y manual del facilitador
   del curso tipo (Res. Ex. 1117/2026), cuyas actividades presenciales se adaptaron a modalidad asincrónica. */
CONTENIDO.lecciones = {};
CONTENIDO.talleres = {};
CONTENIDO.quiz = {};
CONTENIDO.firmas = {};

function _riesgosCargo(cargo) { return (((window.PYV_IPER || {})[cargo]) || { riesgos: [] }).riesgos; }
function _nombreCargo(cargo) { var c = PLAN.cargo(cargo); return c ? c.nombre : cargo; }

/* =====================================================================
   TALLERES ASINCRÓNICOS DEL CURSO OBLIGATORIO
   (adaptan las actividades de las jornadas presenciales del manual del facilitador)
   ===================================================================== */
CONTENIDO.talleres['ds44.t1'] = {
  intro: 'Este taller reemplaza la actividad grupal "Seguro de la Ley 16.744 y procedimiento de denuncia". Lee el caso, responde con tus palabras y compara con la respuesta esperada.',
  partes: [
    { tipo: 'lectura', titulo: 'El caso de Juan', texto: 'Juan es operario de una empresa de servicios acuícolas. Un martes, cambiando flotadores en un módulo, se golpea fuerte la rodilla contra un pasillo. Le duele, pero no dice nada para no "complicar" a la cuadrilla y termina el turno. Tres días después la rodilla está hinchada; va a un consultorio y paga la atención. Como nadie denunció el accidente, pierde el acceso a las coberturas del seguro.\n\nEste es un caso simulado, pero situaciones así pasan en todas las empresas.' },
    { tipo: 'abierta', p: '¿Qué errores cometió Juan, y qué errores hubo a su alrededor?', min: 40,
      modelo: 'No avisó de inmediato a su supervisor. No fue atendido en el organismo administrador (en PyV, la ACHS). Nadie hizo la DIAT dentro de 24 horas. Sus compañeros tampoco avisaron. Pagó una atención que debía ser gratuita.' },
    { tipo: 'abierta', p: 'Si esto te pasa en PyV, ¿qué debes hacer paso a paso?', min: 40,
      modelo: 'Avisar de inmediato al Supervisor o al Patrón, aunque parezca leve. Recibir primeros auxilios y trasladarse al centro de la ACHS más cercano (urgencias ACHS 1404). La jefatura envía la DIAT dentro de 24 horas. Si la empresa no la hace, la puedes hacer tú, un familiar o un compañero.' },
    { tipo: 'escenario', casos: [{ titulo: 'El seguro de la Ley 16.744', pasos: [
      { p: '¿Cuál es el organismo administrador del seguro en PyV?', o: [
        { t: 'ACHS (Asociación Chilena de Seguridad).', ok: true, fb: 'Correcto. Entrega atención médica gratuita, subsidios, rehabilitación y prevención.' },
        { t: 'FONASA.', fb: 'FONASA es la salud común. Los accidentes del trabajo los cubre la ACHS.' },
        { t: 'La isapre de cada trabajador.', fb: 'Las isapres no cubren accidentes del trabajo: los cubre la ACHS.' }] },
      { p: '¿Qué prestaciones tienes si te accidentas trabajando?', o: [
        { t: 'Atención médica gratuita, subsidio mientras estás con licencia y rehabilitación o reeducación si la necesitas.', ok: true, fb: 'Correcto. Y si queda una secuela, indemnización o pensión según el grado de invalidez.' },
        { t: 'Solo la atención de urgencia.', fb: 'El seguro cubre la atención completa hasta el alta, más subsidios y rehabilitación.' }] },
      { p: 'La ACHS dice que tu caso no es laboral y no estás de acuerdo. ¿Qué puedes hacer?', o: [
        { t: 'Reclamar ante la Superintendencia de Seguridad Social (SUSESO).', ok: true, fb: 'Correcto. Prevención de Riesgos te puede orientar con el trámite.' },
        { t: 'Nada, la decisión es definitiva.', fb: 'Tienes derecho a reclamar ante la SUSESO.' }] }
    ] }] },
    { tipo: 'abierta', p: 'Reflexión final: ¿qué derecho o deber no conocías antes de este módulo?', min: 20,
      modelo: 'No hay respuesta única. Lo importante es que sepas que puedes detener tu trabajo ante un riesgo grave e inminente, que la atención por accidente es gratuita y que tienes un Delegado de SST (Gustavo Barriga) que te representa.' }
  ]
};

CONTENIDO.talleres['ds44.t2'] = {
  intro: 'Este taller reemplaza "MIPER grupal" y "Mapa de riesgos en grupos". Vas a evaluar riesgos reales de tu cargo con la misma regla de la Matriz IPER de PyV y a armar un mapa de riesgos de la embarcación.',
  partes: [
    { tipo: 'lectura', titulo: 'Cómo evalúa PyV un riesgo', texto: 'Cada riesgo se evalúa multiplicando la Probabilidad (P) por la Severidad (S).\n\nProbabilidad: Baja = 1 (rara vez, mensual), Media = 2 (varias veces, semanal), Alta = 4 (siempre o casi siempre, diario).\nSeveridad: Ligeramente dañino = 1 (lesiones superficiales), Dañino = 2 (laceraciones, quemaduras, esguinces), Extremadamente dañino = 4 (lesiones graves, amputaciones, muerte).\n\nResultado: 1 o 2 Tolerable · 4 Moderado · 8 Importante · 16 Intolerable. Con Importante o Intolerable no se comienza ni continúa el trabajo hasta reducir el riesgo.' },
    { tipo: 'vep', desdeIper: true, n: 2 },
    { tipo: 'abierta', p: 'Elige uno de los riesgos que evaluaste. ¿Qué medidas de control propones, empezando por la más eficaz?', min: 40,
      modelo: 'Primero eliminar o sustituir (por ejemplo, hacer la tarea desde la embarcación en vez de entrar al agua). Luego ingeniería (barandas, superficies antideslizantes, anclajes). Después lo administrativo (PTS, AST, charla, supervisión, pausas). Al final el EPP (chaleco, casco con barbiquejo, guantes).' },
    { tipo: 'emparejar', titulo: 'Mapa de riesgos de la embarcación', pares: [
      { a: 'Borde de cubierta sin baranda', b: 'Caída al agua' },
      { a: 'Zona bajo el brazo hidráulico', b: 'Golpe o aplastamiento por carga suspendida' },
      { a: 'Sala de máquinas', b: 'Ruido, quemaduras e incendio' },
      { a: 'Cocina con cilindro de GLP', b: 'Fuga de gas e incendio' },
      { a: 'Pasillo mojado del módulo', b: 'Caída al mismo nivel' },
      { a: 'Winche con cabo en tensión', b: 'Golpe por efecto látigo' }
    ] }
  ]
};

CONTENIDO.talleres['ds44.t3'] = {
  intro: 'Este taller reemplaza "Personas especialmente sensibles y medidas de control". Analiza los casos y propone medidas.',
  partes: [
    { tipo: 'lectura', titulo: 'Personas especialmente sensibles', texto: 'Son trabajadores que, por su condición, pueden sufrir más daño frente al mismo riesgo: por ejemplo, alguien que vuelve de una lesión, una trabajadora embarazada o en lactancia, una persona con una enfermedad crónica o con discapacidad. La empresa debe evaluar su puesto y aplicar ajustes razonables. La Matriz IPER de PyV tiene una columna para estas personas y otra para consideraciones sexogenéricas, como tallas reales de EPP y pausas térmicas.' },
    { tipo: 'lectura', titulo: 'Caso: Pedro', texto: 'Pedro es operario y vuelve de una licencia por una lesión lumbar. El turno de esta semana incluye cambio de flotadores y traslado de postes de 4 metros.' },
    { tipo: 'abierta', p: '¿Qué riesgos aumentan para Pedro en esta faena?', min: 30,
      modelo: 'La manipulación manual de cargas (postes, flotadores, zunchos) y las posturas forzadas pueden agravar su lesión lumbar. También el frío y la fatiga, que reducen la capacidad de reacción.' },
    { tipo: 'clasificar', titulo: 'Clasifica las medidas para el caso de Pedro', categorias: [{ id: 'eliminacion', nombre: 'Eliminación o sustitución' }, { id: 'ingenieria', nombre: 'Ingeniería' }, { id: 'administrativo', nombre: 'Administrativa' }, { id: 'epp', nombre: 'EPP' }],
      items: [
        { t: 'Mover los postes con el brazo hidráulico en vez de cargarlos a mano', c: 'ingenieria', fb: 'Es un medio mecánico que reduce la carga física.' },
        { t: 'Asignarle por un tiempo tareas sin levantamiento de cargas', c: 'eliminacion', fb: 'Se elimina su exposición al riesgo mientras se recupera.' },
        { t: 'Rotación de tareas y pausas, con evaluación TMERT/MMC del puesto', c: 'administrativo', fb: 'Organizar el trabajo es un control administrativo.' },
        { t: 'Guantes con buen agarre para manipular flotadores', c: 'epp', fb: 'Ayuda, pero es la última barrera.' },
        { t: 'Que el médico de la ACHS indique sus restricciones antes de reintegrarse', c: 'administrativo', fb: 'La vigilancia de salud orienta el ajuste razonable.' }
      ] },
    { tipo: 'lectura', titulo: 'Caso: Carla', texto: 'Carla es asistente administrativa y está embarazada. Una vez al mes acompaña a la encargada de prevención a una inspección en terreno que incluye navegación y tránsito por módulos.' },
    { tipo: 'abierta', p: '¿Qué ajuste razonable propondrías para Carla?', min: 30,
      modelo: 'Evaluar su puesto con prevención y su médico; evitar la navegación con mal tiempo y el tránsito por módulos (riesgo de caída al agua y golpes), reemplazándolo por revisión de registros o fotos; pausas y facilidades; chaleco salvavidas adecuado a su talla si igual embarca.' }
  ]
};

CONTENIDO.talleres['ds44.t4'] = {
  intro: 'Este taller reemplaza "Detectives de señalética" y el uso práctico de extintores. Tus respuestas a la última pregunta le llegan a Prevención de Riesgos.',
  partes: [
    { tipo: 'checklist', titulo: '¿Qué debe estar señalizado en tu lugar de trabajo?', msgFalta: 'Esto sí debe estar señalizado.', cierre: 'La señalética se revisa en las inspecciones. Si falta algo, avísale a Prevención.',
      items: [
        { t: 'Ubicación de extintores', ok: true }, { t: 'Uso obligatorio de chaleco salvavidas en cubierta', ok: true },
        { t: 'Salidas y vías de evacuación', ok: true }, { t: 'Riesgo eléctrico en tableros', ok: true },
        { t: 'Prohibido fumar cerca del combustible y del GLP', ok: true }, { t: 'Botiquín de primeros auxilios', ok: true },
        { t: 'Nombre de cada trabajador en su casillero', ok: false, fb: 'No es señalética de seguridad.' },
        { t: 'Horario de comidas', ok: false, fb: 'Es información útil, pero no es señalización de seguridad.' }
      ] },
    { tipo: 'escenario', casos: [{ titulo: 'Simulación: amago de incendio', pasos: [
      { p: 'Ves humo saliendo de un motor eléctrico en la cubierta. ¿Qué haces primero?', o: [
        { t: 'Dar la alarma a viva voz y avisar al Patrón.', ok: true, fb: 'Correcto. Luego se corta la energía y se usa el extintor si el fuego es incipiente.' },
        { t: 'Ir a buscar agua.', fb: 'Con equipos eléctricos el agua es peligrosa. Primero alarma y corte de energía.' }] },
      { p: 'Tomas el extintor PQS. ¿Dónde te ubicas?', o: [
        { t: 'Con el viento a la espalda y una salida asegurada detrás de mí.', ok: true, fb: 'Correcto. Así el polvo no vuelve hacia ti y puedes retirarte.' },
        { t: 'Lo más cerca posible del fuego, aunque quede encerrado.', fb: 'Nunca te quedes sin salida.' }] },
      { p: '¿Hacia dónde apuntas la boquilla?', o: [
        { t: 'A la base de las llamas, barriendo de lado a lado.', ok: true, fb: 'Correcto.' },
        { t: 'A la punta de las llamas.', fb: 'El fuego se apaga atacando la base.' }] }
    ] }] },
    { tipo: 'abierta', p: 'Mira tu lugar de trabajo (embarcación, módulo u oficina). ¿Qué señal, extintor o recurso de emergencia falta o está en mal estado?', min: 15, alApr: true,
      modelo: 'Gracias. Tu respuesta queda registrada para Prevención de Riesgos. Recuerda que también puedes avisar directamente a tu supervisor o al Delegado de SST.' }
  ]
};

/* =====================================================================
   IRL · LOS RIESGOS DE TU CARGO
   ===================================================================== */
CONTENIDO.lecciones['irl.l1'] = function (cargo) {
  var R = _riesgosCargo(cargo), top = R.filter(function (r) { return r.nivel >= 2; }).slice(0, 6);
  if (top.length < 3) top = R.slice(0, 6);
  var d = [{ t: 'Tu derecho a saber', x: 'El D.S. 44 obliga a ' + CONTENIDO.empresa.nombre + ' a informarte, antes de empezar y cada vez que cambie tu trabajo, los riesgos de tu cargo, las medidas para controlarlos y la forma correcta de trabajar.\n\nEsta cápsula sale de la Matriz IPER 2026 de la empresa para el cargo de ' + _nombreCargo(cargo) + '.',
    l: [(((window.PYV_IPER || {})[cargo] || {}).procesos || []).length ? 'Procesos donde participas: ' + ((window.PYV_IPER || {})[cargo].procesos || []).join(', ') : 'Trabajas en la oficina de Las Rosas 121, Puerto Aysén.'] }];
  top.forEach(function (r) {
    d.push({ t: r.riesgo + ' · ' + r.nivelTxt, x: 'Peligro: ' + (r.peligros[0] || ''), l: ['Puede causar: ' + (r.consecuencias[0] || '')].concat(
      [].concat(r.ingenieria.slice(0, 1), r.administrativo.slice(0, 2)).filter(Boolean).map(function (c) { return 'Control: ' + c; }),
      r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 5).join(', ')] : []) });
  });
  d.push({ t: 'Tu rol en una emergencia', l: CONTENIDO.rolEmergencia[cargo] || [] });
  d.push({ t: 'Tus derechos', l: ['Detener tu trabajo y alejarte ante un riesgo grave e inminente, avisando de inmediato.', 'Recibir tu EPP gratis y su reposición cuando se deteriora.', 'Ser capacitado en los riesgos y procedimientos de tu trabajo.', 'Atención médica gratuita en la ACHS si te accidentas o enfermas por el trabajo.', 'Acudir al Delegado de SST, Gustavo Barriga Zúñiga, con cualquier problema de seguridad.'] });
  var procs = CONTENIDO.procedimientosDe(cargo);
  d.push({ t: 'Tus procedimientos', x: 'Estos documentos explican cómo hacer tu trabajo de forma segura. Cada uno tiene su propia capacitación en la plataforma.', l: procs.map(function (p) { return p.id + ' · ' + p.titulo; }) });
  return { diapositivas: d };
};
CONTENIDO.juegos['irl.j1'] = { intro: 'Une cada riesgo de tu cargo con lo que puede causar, según la Matriz IPER de PyV.', partes: [{ tipo: 'emparejar', desdeIper: true }] };
CONTENIDO.firmas['irl.f1'] = function (cargo) {
  var R = _riesgosCargo(cargo);
  return { texto: 'Declaro que ' + CONTENIDO.empresa.nombre + ' me informó, mediante esta capacitación, los riesgos de mi cargo de ' + _nombreCargo(cargo) + ' identificados en la Matriz IPER vigente, las medidas preventivas para controlarlos, los métodos de trabajo correctos, mi rol en emergencias y los procedimientos que me aplican y los protocolos de vigilancia a los que estoy expuesto, conforme al artículo 15 del D.S. N° 44/2024. Tuve la posibilidad de consultar mis dudas a Prevención de Riesgos.',
    lista: R.map(function (r) { return [r.riesgo + ' (' + r.nivelTxt + ')', [].concat(r.administrativo.slice(0, 1), r.eppItems.slice(0, 3)).join('; ')]; }).concat(
      _protocolosCargo(cargo).map(function (p) { return ['Protocolo: ' + p.nombre, 'Por: ' + p.riesgos.slice(0, 3).join(', ')]; })) };
};

/* ---------- IRL ampliada (3 horas) ---------- */
function _lista(a, n) { return (a || []).filter(Boolean).slice(0, n || 4); }
/* Protocolos y normas de vigilancia según los riesgos del cargo (hoja "Protocolos aplicables" de la Matriz IPER) */
var _PROTOCOLOS = [
  { re: /ruido/i, id: 'PREXOR', nombre: 'Protocolo de Exposición Ocupacional a Ruido (PREXOR, MINSAL)', l: ['Se mide la dosis de ruido de tu puesto (motores, compresores, equipos).', 'Si supera el criterio de acción, ingresas a vigilancia médica con audiometrías en la ACHS.', 'Protección auditiva obligatoria donde esté indicado.'] },
  { re: /radiaci.*no ionizantes/i, id: 'RUV', nombre: 'Guía Técnica de Radiación Ultravioleta de origen solar (MINSAL)', l: ['En el mar la radiación UV llega directa y reflejada en el agua, aun nublado.', 'Protector solar, ropa manga larga, legionario o gorro y lentes con filtro UV.', 'Revisa el índice UV del día; en soldadura la radiación del arco se controla con careta y ropa ignífuga.'] },
  { re: /fr[ií]o/i, id: 'FRIO', nombre: 'Guía ISP para la evaluación y control del riesgo por exposición a frío a la intemperie (Res. Ex. N° 4.142/2026)', l: ['Aplica a trabajo al aire libre con 10 °C o menos, considerando viento y lluvia.', 'Pausas de recuperación, ropa en capas, cambio de ropa mojada y vigilancia de signos de hipotermia.'] },
  { re: /exposici[oó]n a calor/i, id: 'CALOR', nombre: 'D.S. 594 · exposición a calor', l: ['Trabajo en caliente, sala de máquinas o trajes impermeables pueden sobrecalentarte.', 'Hidratación, pausas y ventilación.'] },
  { re: /vibraciones/i, id: 'VIB', nombre: 'D.S. 594 · exposición a vibraciones', l: ['Herramientas como esmeriles y equipos de raspado transmiten vibración a manos y brazos.', 'Tiempos de uso, mantención de equipos y guantes adecuados.'] },
  { re: /repetitivo/i, id: 'TMERT', nombre: 'Protocolo de vigilancia de trastornos musculoesqueléticos de extremidades superiores (TMERT-EESS, MINSAL)', l: ['Identifica tareas con movimientos repetidos de manos, muñecas y brazos.', 'Si el riesgo no es aceptable se aplican medidas: pausas, rotación, cambios en la tarea.'] },
  { re: /manipulaci[oó]n manual/i, id: 'MMC', nombre: 'Ley 20.949 y Guía técnica de Manejo Manual de Carga (MMC)', l: ['Peso máximo de 25 kg por persona; 20 kg para mujeres y menores de edad.', 'Usa ayudas mecánicas y levanta entre dos cuando corresponda.', 'Técnica: carga pegada al cuerpo, espalda recta, sin girar el tronco.'] },
  { re: /postural|postura|fatiga visual/i, id: 'ERGO', nombre: 'Evaluación ergonómica de sobrecarga postural (Guía técnica MINSAL / D.S. 594)', l: ['Posturas forzadas o mantenidas: tronco inclinado, en cuclillas, de pie o sentado por largo tiempo.', 'Pausas activas, alternar posturas y ajustar el puesto de trabajo.'] },
  { re: /dimensi[oó]n|exigencias psicol|carga de trabajo/i, id: 'CEAL', nombre: 'Protocolo de vigilancia de riesgos psicosociales en el trabajo · cuestionario CEAL-SM (SUSESO)', l: ['La empresa aplica el cuestionario CEAL-SM; tu participación es voluntaria y anónima.', 'Con los resultados se definen medidas sobre carga de trabajo, liderazgo y desarrollo.'] },
  { re: /violencia|acoso/i, id: 'KARIN', nombre: 'Ley 21.643 (Ley Karin) · prevención del acoso laboral, sexual y la violencia en el trabajo', l: ['La empresa tiene un protocolo de prevención y un canal de denuncia.', 'Puedes denunciar a la empresa o a la Dirección del Trabajo; la investigación es reservada.'] },
  { re: /aerosol|gases|vapores|qu[ií]mic|c[aá]ustic/i, id: 'QUIM', nombre: 'D.S. 594 · agentes químicos (límites permisibles) y Hojas de Datos de Seguridad', l: ['Desinfectantes, combustibles y humos de soldadura tienen límites de exposición.', 'Revisión de la HDS, ventilación y protección respiratoria cuando corresponda.'] },
  { re: /transmisi[oó]n|fluidos|biol[oó]gic/i, id: 'BIO', nombre: 'D.S. 594 · agentes biológicos (criterio ISP)', l: ['Contacto con residuos orgánicos, mortalidad, biofouling o fluidos corporales.', 'Guantes, higiene de manos y vacunas cuando corresponda.'] },
  { re: /altas presiones/i, id: 'BUCEO', nombre: 'Normativa de buceo de la Autoridad Marítima y PTS-006', l: ['Trabajo hiperbárico: tablas de descompresión, equipos certificados y supervisión de buceo.', 'Exámenes de salud compatibles con el buceo según la normativa.'] }
];
function _protocolosCargo(cargo) {
  var R = _riesgosCargo(cargo), out = [];
  _PROTOCOLOS.forEach(function (p) {
    var rs = R.filter(function (r) { return p.re.test(r.riesgo); }).map(function (r) { return r.riesgo; });
    if (rs.length) out.push({ id: p.id, nombre: p.nombre, l: p.l, riesgos: rs });
  });
  return out;
}
CONTENIDO.protocolosCargo = _protocolosCargo;
CONTENIDO.lecciones['irl.l2'] = function (cargo) {
  var R = _riesgosCargo(cargo).slice().sort(function (a, b) { return b.nivel - a.nivel; });
  var d = [{ t: 'Tus riesgos, uno por uno', x: 'La Matriz IPER 2026 identifica ' + R.length + ' riesgos para el cargo de ' + _nombreCargo(cargo) + '. En cada tarjeta verás:',
    l: ['Dónde aparece (tarea y peligro).', 'Qué te puede pasar.', 'Cómo se evalúa (Probabilidad × Severidad).', 'Qué controles existen y qué EPP usas.', 'Qué procedimiento lo regula.'],
    tip: 'Lee cada tarjeta con calma y piensa en un momento real de tu trabajo en que te pasa. Puedes usar el botón Escuchar.' }];
  R.forEach(function (r, i) {
    var ctrl = [].concat(
      _lista(r.eliminacion, 1).map(function (c) { return 'Eliminar: ' + c; }),
      _lista(r.ingenieria, 2).map(function (c) { return 'Ingeniería: ' + c; }),
      _lista(r.senalizacion, 1).map(function (c) { return 'Señalización: ' + c; }),
      _lista(r.administrativo, 3).map(function (c) { return 'Administrativo: ' + c; }));
    d.push({ t: (i + 1) + '. ' + r.riesgo + ' · ' + r.nivelTxt + (r.tipo ? ' (' + r.tipo + ')' : ''),
      x: 'Dónde aparece: ' + _lista(r.tareas, 2).join(' / ') + '.\nPeligro: ' + _lista(r.peligros, 2).join(' / ') + '.\nPuede causar: ' + _lista(r.consecuencias, 2).join(' / ') + '.',
      l: ['Evaluación: P ' + (r.p || '?') + ' × S ' + (r.s || '?') + ' = ' + ((r.p && r.s) ? r.p * r.s : '?') + ' → ' + r.nivelTxt].concat(ctrl,
        r.eppItems && r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 6).join(', ')] : [],
        r.pts && r.pts.length ? ['Procedimiento: ' + _lista(r.pts, 2).join(', ')] : []) });
  });
  var P = _protocolosCargo(cargo);
  if (P.length) {
    d.push({ t: 'Protocolos y normas a los que estás expuesto', x: 'Según tus funciones, la Matriz IPER asocia tu cargo a estos protocolos de vigilancia y normas. Algunos implican mediciones en tu puesto o evaluaciones de salud en la ACHS.', l: P.map(function (p) { return p.nombre; }) });
    P.forEach(function (p) { d.push({ t: p.nombre, x: 'Riesgos de tu cargo que lo activan: ' + p.riesgos.join(', ') + '.', l: p.l }); });
  }
  d.push({ t: 'Lo importante', l: ['Los riesgos con nivel Importante o Intolerable no se aceptan: si sus controles no están, el trabajo no empieza.', 'Si ves un riesgo que no aparece aquí, avísalo: la Matriz se actualiza con lo que informan los trabajadores.', 'Tienes derecho a detener tu trabajo ante un riesgo grave e inminente.'] });
  return { diapositivas: d };
};
CONTENIDO.talleres['irl.t1'] = {
  intro: 'Este taller te ayuda a mirar tu propio puesto con la Matriz IPER en la mano. No hay respuestas únicas: lo que escribas queda registrado para Prevención de Riesgos y sirve para mejorar la Matriz.',
  partes: [
    { tipo: 'vep', desdeIper: true, n: 4 },
    { tipo: 'abierta', p: 'Elige la tarea de tu trabajo donde te sientes más expuesto. ¿Qué tarea es, qué te podría pasar y qué control usas hoy para evitarlo?', min: 60, alApr: true,
      modelo: 'Una buena respuesta nombra la tarea concreta (por ejemplo, pasar cabos desde el pasillo del módulo), el riesgo (caída al agua, atrapamiento de manos) y el control real que se aplica (chaleco puesto y abrochado, línea de vida, guantes, coordinación con el Patrón).' },
    { tipo: 'abierta', p: '¿Has visto un incidente o un "casi accidente" en tu trabajo? Cuéntalo sin nombres: qué pasó, por qué crees que pasó y qué habría que cambiar.', min: 40, alApr: true,
      modelo: 'Los casi accidentes son avisos gratuitos. Informarlos permite corregir antes de que alguien se lesione. Recuerda que también puedes informarlo a tu supervisor o al Delegado de SST.' },
    { tipo: 'abierta', p: '¿Qué riesgo de tu trabajo crees que falta en la Matriz IPER, o cuál crees que está mal evaluado?', min: 20, alApr: true,
      modelo: 'Gracias. Prevención de Riesgos revisa estas respuestas al actualizar la Matriz IPER.' }
  ]
};
CONTENIDO.lecciones['irl.l3'] = function (cargo) {
  var d = [
    { t: 'La jerarquía de controles', x: 'No todos los controles protegen igual. La Matriz IPER de PyV ordena las medidas de la más a la menos eficaz:', l: ['1. Eliminar el peligro.', '2. Sustituirlo por algo menos peligroso.', '3. Controles de ingeniería: barandas, protecciones, líneas de vida, resguardos.', '4. Señalización y advertencias.', '5. Controles administrativos: procedimientos, permisos de trabajo, AST, capacitación, pausas.', '6. EPP: la última barrera, cuando lo anterior no basta.'], tip: 'El EPP no reemplaza a los otros controles: los complementa.' },
    { t: 'Método de trabajo correcto', l: ['Antes de empezar: AST y permiso de trabajo cuando corresponde; revisar clima, equipos y EPP.', 'Durante: seguir los pasos del procedimiento; comunicación clara con el Patrón o Supervisor.', 'Al terminar: dejar orden y aseo, guardar equipos e informar fallas o incidentes.', 'Si algo cambia (clima, equipo, personal): se detiene y se vuelve a evaluar.'] },
    { t: 'Cuándo detener el trabajo', l: ['Viento, marejada o visibilidad fuera de lo permitido.', 'Falta un control crítico: chaleco, línea de vida, permiso, vigía, extintor.', 'Un equipo falla o no está certificado.', 'Alguien no está en condiciones físicas.', 'Cualquier riesgo grave e inminente: te alejas y avisas de inmediato.'] }];
  CONTENIDO.procedimientosDe(cargo).forEach(function (p) {
    var x = _PTS[p.id];
    if (!x) { d.push({ t: p.id + ' · ' + p.titulo, x: 'Procedimiento que aplica a tu cargo. Tiene su propia capacitación en la plataforma.' }); return; }
    var rol = (x.roles && x.roles[cargo]) || [];
    var claves = [].concat.apply([], (x.pasos || []).map(function (s) { return (s.l || []).slice(0, 2); })).slice(0, 5);
    d.push({ t: p.id + ' · ' + p.titulo, x: x.objetivo, l: [].concat(rol.length ? ['Tu responsabilidad: ' + rol.slice(0, 2).join(' ')] : [], claves.map(function (c) { return 'Paso clave: ' + c; }), (x.detener || []).slice(0, 2).map(function (c) { return 'Detener si: ' + c; })) });
  });
  d.push({ t: 'Tu parte', l: ['Conocer y aplicar los procedimientos de tu cargo.', 'Usar los controles que existen y no retirarlos.', 'Informar cuando un control no está o no sirve.', 'Cada procedimiento tiene su capacitación con certificado en "Procedimientos de tu cargo".'] });
  return { diapositivas: d };
};
CONTENIDO.juegos['irl.j2'] = CONTENIDO.juegos['ds44.j4'];
CONTENIDO.lecciones['irl.lw'] = function (cargo) {
  var cg = PLAN.cargo(cargo) || {}, I = (window.PYV_IPER || {})[cargo] || { riesgos: [], procesos: [] }, emp = CONTENIDO.empresa;
  var tareas = [];
  I.riesgos.forEach(function (r) { (r.tareas || []).forEach(function (t) { if (tareas.indexOf(t) < 0) tareas.push(t); }); });
  var faena = cg.area !== 'oficina';
  var d = [{ t: 'Dónde trabajas', x: faena ? 'Tu trabajo en ' + emp.nombre + ' se desarrolla principalmente en embarcaciones de apoyo y en los módulos, jaulas y pontones de los centros de cultivo de las empresas mandantes, en mar abierto o canales de la región de Aysén.' : 'Tu trabajo se desarrolla principalmente en la oficina de ' + emp.nombre + ', en Las Rosas 121, Puerto Aysén.',
    l: faena ? ['Embarcaciones de la empresa: ' + emp.embarcaciones.join(', ') + '.', 'Superficies mojadas, inestables y en movimiento por el oleaje.', 'Clima cambiante: viento, lluvia, frío y radiación UV incluso nublado.', 'Lugares aislados: la ayuda médica puede estar a horas de distancia.'] : ['Puestos con computador, escritorio y silla.', 'Bodega, archivo y espacios comunes.', 'Salidas de emergencia, extintores y punto de encuentro de la oficina.'] }];
  if ((I.procesos || []).length) d.push({ t: 'Los procesos donde participas', l: I.procesos });
  if (tareas.length) d.push({ t: 'Tus tareas según la Matriz IPER', x: 'Estas son las tareas registradas para el cargo de ' + _nombreCargo(cargo) + ':', l: tareas.slice(0, 12) });
  if (tareas.length > 12) d.push({ t: 'Más tareas de tu cargo', l: tareas.slice(12, 24) });
  d.push(faena ? { t: 'Ambiente de trabajo a bordo y en el centro', l: ['Cubiertas y pasillos de módulos resbaladizos: calzado antideslizante y manos libres al desplazarte.', 'Bordes sin baranda: chaleco salvavidas puesto y abrochado siempre.', 'Ruido de motores, compresores y equipos: protección auditiva donde esté indicado.', 'Frío y humedad: ropa adecuada y pausas para recuperar temperatura.', 'Espacios reducidos bajo flotadores y en sala de máquinas: ventilación y comunicación permanente.'] }
    : { t: 'Ambiente de trabajo en la oficina', l: ['Iluminación, temperatura y ventilación adecuadas.', 'Puesto ergonómico: pantalla a la altura de los ojos, pies apoyados, pausas activas.', 'Cables ordenados y enchufes sin sobrecarga.', 'Pasillos y salidas libres de cajas y archivos.'] });
  d.push(faena ? { t: 'Máquinas, equipos y herramientas', l: ['Motores, winches y pluma o grúa de la embarcación: solo los opera personal autorizado.', 'Cabos, grilletes, zunchos y flotadores: revisar su estado antes de usarlos; nunca pisar ni meter manos en el seno de un cabo en tensión.', 'Compresor e hidrolavadora: revisión previa, mangueras sin daños y operación según el procedimiento.', 'Equipos de corte y soldadura: con permiso de trabajo en caliente, extintor y vigía.', 'Herramientas manuales: en buen estado, amarradas cuando trabajas sobre el agua.', 'Todo equipo con falla se informa y se saca de uso.'] }
    : { t: 'Equipos y herramientas de oficina', l: ['Computadores, impresoras y equipos eléctricos en buen estado.', 'Cortacartón y tijeras: guardar con la hoja protegida.', 'Escaleras o pisos para alcanzar en altura: nunca usar sillas.', 'Hervidor y microondas: no dejarlos funcionando sin supervisión.'] });
  d.push({ t: 'Orden y aseo', x: 'El orden y el aseo son una medida de control en sí mismos: evitan caídas, golpes, incendios y pérdida de herramientas.', l: faena ? ['Cubierta despejada: cabos adujados, materiales estibados y amarrados.', 'Residuos en sus contenedores; no se tiran al mar.', 'Herramientas de vuelta en su lugar al terminar.', 'Derrames de combustible o aceite se limpian de inmediato.', 'Vías de escape y equipos de emergencia siempre accesibles.'] : ['Escritorio y pasillos despejados.', 'Archivos en estanterías firmes, lo pesado abajo.', 'Productos de aseo rotulados y guardados.', 'Salidas y extintores siempre libres.'] });
  d.push({ t: 'Servicios para ti', l: faena ? ['Agua potable y alimentación según la faena.', 'Servicios higiénicos y lugar para cambiarte en la embarcación o en el centro, según la mandante.', 'Botiquín y equipos de rescate a bordo.'] : ['Servicios higiénicos y comedor de la oficina.', 'Botiquín de primeros auxilios.', 'Agua potable.'] });
  return { diapositivas: d };
};
CONTENIDO.lecciones['irl.ls'] = function (cargo) {
  var R = _riesgosCargo(cargo).filter(function (r) { return /qu[ií]mic|gases|vapores|c[aá]ustic|aerosol/i.test(r.riesgo); });
  var d = [{ t: 'Productos peligrosos en PyV', x: 'En el trabajo se usan productos que pueden dañar tu salud si no se manejan bien.', l: ['Desinfectantes para limpieza y desinfección de estructuras (se preparan en dilución).', 'Combustibles: petróleo de las embarcaciones y bencina de compresores y equipos.', 'Gas licuado (GLP) para cocina a bordo.', 'Gases y humos de corte y soldadura.', 'Aceites, lubricantes y productos de aseo.'] },
    { t: 'La Hoja de Datos de Seguridad (HDS)', x: 'Cada producto químico tiene su HDS. Es obligatoria y debe estar disponible donde se usa el producto.', l: ['Dice qué peligros tiene el producto.', 'Qué EPP usar al manipularlo.', 'Cómo almacenarlo y qué no mezclar.', 'Qué hacer si te salpica, lo inhalas o lo tragas (primeros auxilios).', 'Qué hacer ante un derrame o incendio.'], tip: 'Tienes derecho a ver la HDS de cualquier producto que uses. Pídela a tu supervisor o a Prevención de Riesgos.' },
    { t: 'La etiqueta y los pictogramas (SGA)', x: 'Los envases llevan pictogramas con borde rojo en forma de rombo según el Sistema Globalmente Armonizado:', l: ['Llama: inflamable.', 'Corrosión (líquido sobre mano y metal): corrosivo, quema piel y ojos.', 'Calavera: tóxico agudo, puede matar en pequeñas cantidades.', 'Signo de exclamación: irritante o nocivo.', 'Silueta con estrella en el pecho: peligro grave para la salud a largo plazo.', 'Cilindro de gas: gas a presión.', 'Llama sobre círculo: comburente, aviva el fuego.', 'Pez y árbol: peligroso para el medio ambiente acuático.'] },
    { t: 'Reglas de oro', l: ['Usa solo productos rotulados; nunca en botellas de bebida.', 'Prepara las diluciones según la ficha técnica y la HDS, con EPP químico.', 'Nunca mezcles productos ni residuos.', 'Aplica a favor del viento y con distancia de los compañeros.', 'Guarda los productos cerrados, lejos de fuentes de calor y del GLP.', 'Lava tus implementos y tus manos al terminar.', 'Si te salpica: lava con abundante agua por 15 minutos y avisa de inmediato.'] }];
  R.forEach(function (r) { d.push({ t: 'En tu cargo: ' + r.riesgo, x: 'Peligro: ' + _lista(r.peligros, 2).join(' / ') + '.', l: [].concat(_lista(r.administrativo, 2).map(function (c) { return 'Control: ' + c; }), r.eppItems && r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 6).join(', ')] : []) }); });
  if (!R.length) d.push({ t: 'En tu cargo', x: 'La Matriz IPER no registra exposición directa a sustancias peligrosas en tu cargo. Igual aplica lo anterior para productos de aseo y combustibles.' });
  return { diapositivas: d };
};
CONTENIDO.lecciones['irl.lf'] = function (cargo) {
  var r = _riesgosCargo(cargo).filter(function (x) { return /fr[ií]o/i.test(x.riesgo); })[0];
  var d = [{ t: 'Exposición a frío a la intemperie', x: 'El Instituto de Salud Pública actualizó en 2026 la Guía para la evaluación y control del riesgo por exposición a frío a la intemperie (Res. Ex. N° 4.142, 17-08-2026). Aplica a trabajos al aire libre con temperaturas iguales o inferiores a 10 °C, considerando además el viento y la lluvia.',
    l: ['En Aysén esta condición se da gran parte del año, en navegación, en cubierta y en los módulos.', 'El viento y la ropa mojada hacen que el cuerpo pierda calor mucho más rápido: la sensación térmica puede ser varios grados menor que la temperatura del termómetro.', 'El agua fría enfría el cuerpo mucho más rápido que el aire.'] }];
  if (r) d.push({ t: 'En tu cargo', x: 'La Matriz IPER evalúa la exposición a frío como ' + r.nivelTxt + ' para ' + _nombreCargo(cargo) + '.', l: ['Tareas: ' + _lista(r.tareas, 3).join(' / ') + '.'].concat(_lista(r.administrativo, 3).map(function (c) { return 'Control: ' + c; }), r.eppItems && r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 8).join(', ')] : []) });
  else d.push({ t: 'En tu cargo', x: 'Tu trabajo es principalmente bajo techo. Igual te aplica cuando sales a terreno, visitas centros o navegas: usa la ropa de abrigo e impermeable que entrega la empresa.' });
  d.push({ t: 'Qué le hace el frío al cuerpo', l: ['Hipotermia: la temperatura del cuerpo baja. Empieza con tiritones fuertes, torpeza y cansancio; sigue con confusión, habla arrastrada y somnolencia. Es una emergencia.', 'Sabañones: enrojecimiento, picazón e inflamación de dedos, orejas y mejillas.', 'Pie de trinchera: pies mojados y fríos por horas; hormigueo, calambres, ampollas.', 'Congelamiento: con temperaturas bajo cero, la piel se pone blanca o gris, dura e insensible.', 'El frío también quita destreza: más riesgo de caídas, cortes y de soltar herramientas o cabos.'] },
    { t: 'Cómo te proteges', l: ['Ropa en tres capas: interior que saque la humedad (no algodón), intermedia que abrigue y exterior impermeable y cortaviento.', 'Cabeza, manos y pies protegidos: gorro, guantes y calzado impermeable.', 'Ropa mojada se cambia de inmediato: lleva ropa seca de recambio.', 'Pausas de recuperación en un lugar temperado (cabina o caseta) cuando el frío, el viento o la lluvia aprietan.', 'Bebidas calientes y alimentación suficiente; nada de alcohol.', 'Planificar la tarea según el pronóstico: viento, lluvia y temperatura se revisan antes de zarpar.', 'Vigilancia entre compañeros: si ves a alguien tiritando fuerte, torpe o confundido, se detiene y se le abriga.'] },
    { t: 'Si alguien presenta hipotermia', l: ['Avisa de inmediato al Supervisor o al Patrón.', 'Llévalo a un lugar abrigado y protegido del viento.', 'Quítale la ropa mojada y abrígalo con ropa seca y mantas, empezando por el tronco.', 'Si está consciente, dale bebidas tibias y dulces; nunca alcohol.', 'No le frotes la piel ni lo acerques directo a una fuente de calor.', 'Traslado a la ACHS (1404); en zona aislada se pide apoyo a la Autoridad Marítima (137).'] },
    { t: 'Tus derechos ante el frío', l: ['Recibir ropa de trabajo y EPP adecuados al frío, sin costo.', 'Pausas de recuperación cuando las condiciones lo exigen.', 'Detener la tarea si el frío, el viento o la lluvia la hacen insegura, avisando al Supervisor.', 'Informar si tu ropa o EPP de abrigo está dañado para que se reponga.'] });
  return { diapositivas: d };
};
CONTENIDO.juegos['irl.js'] = { intro: 'Une cada pictograma de peligro con lo que significa.', partes: [{ tipo: 'emparejar', pares: [
  { a: 'Llama', b: 'Inflamable: se enciende con facilidad' },
  { a: 'Líquido que corroe una mano y un metal', b: 'Corrosivo: quema piel y ojos' },
  { a: 'Calavera con tibias', b: 'Toxicidad aguda: puede matar en pequeñas cantidades' },
  { a: 'Signo de exclamación', b: 'Irritante o nocivo' },
  { a: 'Silueta humana con estrella en el pecho', b: 'Daño grave a la salud a largo plazo' },
  { a: 'Cilindro de gas', b: 'Gas a presión: puede explotar si se calienta' },
  { a: 'Pez y árbol muerto', b: 'Peligroso para el medio ambiente acuático' }] }] };

CONTENIDO.lecciones['irl.l4'] = function (cargo) {
  var base = (CONTENIDO.lecciones['prrd.l1'] && CONTENIDO.lecciones['prrd.l1'].diapositivas) || [];
  return { diapositivas: base.concat([{ t: 'Tu rol como ' + _nombreCargo(cargo), l: CONTENIDO.rolEmergencia[cargo] || [] },
    { t: 'Números que debes conocer', l: ['ACHS urgencias: 1404.', 'Autoridad Marítima: 137.', 'SAMU: 131 · Bomberos: 132 · Carabineros: 133.', 'Prevención de Riesgos PyV: ' + (window.CONFIG && CONFIG.SOPORTE || '') + '.'] }]) };
};
CONTENIDO.juegos['irl.j3'] = CONTENIDO.juegos['ds44.j5'];
CONTENIDO.lecciones['irl.l5'] = function () {
  var a = (CONTENIDO.lecciones['epp.l1'] && CONTENIDO.lecciones['epp.l1'].diapositivas) || [];
  var b = (CONTENIDO.lecciones['acc.l1'] && CONTENIDO.lecciones['acc.l1'].diapositivas) || [];
  return { diapositivas: a.concat(b) };
};
CONTENIDO.juegos['irl.j4'] = CONTENIDO.juegos['ds44.j1'];
CONTENIDO.talleres['irl.t2'] = {
  intro: 'Para cerrar, escribe tu compromiso. Queda registrado junto a tu firma de recepción de la IRL.',
  partes: [
    { tipo: 'abierta', p: 'Nombra los 3 riesgos de tu cargo que consideras más importantes y, para cada uno, la medida que vas a aplicar siempre.', min: 80, alApr: true,
      modelo: 'Ejemplo: 1) Caída al agua: chaleco puesto y abrochado en todo momento sobre cubierta y módulos. 2) Atrapamiento con cabos: nunca poner manos ni pies en el seno del cabo y coordinar con el Patrón. 3) Hipotermia: ropa adecuada y pausas para recuperar temperatura.' },
    { tipo: 'abierta', p: '¿A quién avisas, y cómo, si ves una condición insegura o te accidentas?', min: 30,
      modelo: 'Al Supervisor o al Patrón de inmediato, aunque parezca leve. Si te accidentas: primeros auxilios, traslado a la ACHS y la jefatura envía la DIAT dentro de 24 horas. También puedes acudir al Delegado de SST.' }
  ]
};

/* =====================================================================
   CÓMO LEER LA MATRIZ IPER
   ===================================================================== */
CONTENIDO.lecciones['iper.l1'] = { diapositivas: [
  { t: '¿Qué es la Matriz IPER?', x: 'Es la herramienta que exige el D.S. 44 para Identificar Peligros y Evaluar Riesgos de cada tarea. La de PyV fue actualizada en 2026, elaborada por Prevención de Riesgos y aprobada por la Gerencia General.', l: ['Cubre los procesos de apertura, mantención y cierre de centros, cambio de zunchos y flotadores, limpieza y desinfección con buzos, izajes, corte y soldadura y la gestión administrativa.', 'Se revisa cuando cambian las tareas, los equipos o después de un accidente.'] },
  { t: 'Cómo se lee una fila', x: 'Cada fila sigue el mismo orden:', l: ['Proceso → Puesto de trabajo → Tarea', 'Peligro: la fuente del daño', 'Riesgo: lo que puede pasar', 'Consecuencias: el daño posible', 'Evaluación P × S y nivel', 'Medidas de control y procedimiento', 'Riesgo residual: cómo queda después de controlar'], tip: 'Ejemplo real: Apertura de centro · Tripulante · Traslado de personal y materiales · Trabajo sobre embarcación o muelle · Caídas al agua · Inmersión, hipotermia, asfixia.' },
  { t: 'Peligro no es lo mismo que riesgo', l: ['Peligro: un borde de cubierta sin baranda, un cabo en tensión, el frío.', 'Riesgo: la posibilidad de que ese peligro te dañe: caer al agua, recibir un latigazo, sufrir hipotermia.', 'El riesgo depende de cuántas veces te expones y de qué tan grave sería el daño.'] },
  { t: 'Probabilidad × Severidad', l: ['Probabilidad Baja = 1: rara vez, frecuencia mensual.', 'Probabilidad Media = 2: varias veces, frecuencia semanal.', 'Probabilidad Alta = 4: siempre o casi siempre, diario.', 'Severidad 1: ligeramente dañino (cortes, molestias).', 'Severidad 2: dañino (laceraciones, quemaduras, esguinces).', 'Severidad 4: extremadamente dañino (amputaciones, lesiones graves, muerte).'], tip: 'VEP = P × S. Ejemplo: caída al agua con P = 2 y S = 4 da 8.' },
  { t: 'Qué significa cada nivel', l: ['1 o 2 · Tolerable: no requiere mejorar la acción preventiva.', '4 · Moderado: hay que hacer esfuerzos para reducirlo.', '8 · Importante: no se debe comenzar ni continuar el trabajo hasta reducir el riesgo.', '16 · Intolerable: no se comienza ni continúa hasta reducirlo; si no es posible, el trabajo se prohíbe.'] },
  { t: 'Riesgos que se miden con protocolos', x: 'Algunos riesgos de salud no se evalúan con P × S sino con protocolos del Ministerio de Salud:', l: ['Ruido de motores y compresores: PREXOR.', 'Radiación UV en el mar: Guía técnica de radiación UV.', 'Frío: D.S. 594 y criterio ISP.', 'Desinfectantes y químicos: D.S. 594 y su hoja de seguridad (HDS).', 'Posturas y cargas: TMERT y MMC.', 'Carga de trabajo y liderazgo: cuestionario CEAL-SM.', 'Violencia y acoso: protocolo Ley Karin.'] },
  { t: 'La jerarquía de controles', l: ['Eliminación: sacar el peligro.', 'Sustitución: cambiarlo por algo menos peligroso.', 'Ingeniería: barandas, anclajes, superficies antideslizantes.', 'Señalización y advertencia.', 'Administrativos: PTS, AST, capacitación, supervisión, pausas.', 'EPP: chaleco, casco con barbiquejo, guantes. Es la última barrera.'] },
  { t: 'Riesgo residual y personas', l: ['Después de aplicar los controles se evalúa de nuevo: es el riesgo residual. Una caída al agua evaluada en 8 puede quedar en 4 con barandas, PTS y chaleco.', 'La matriz tiene columnas para personas especialmente sensibles y consideraciones sexogenéricas: EPP de la talla real, pausas térmicas, prevención de acoso.', 'Si ves un peligro que no está en la matriz, avísale a Prevención: así se actualiza.'] }
] };
CONTENIDO.talleres['iper.t1'] = {
  intro: 'Evalúa riesgos reales de tu cargo con la regla P × S de PyV y compara con lo que dice la matriz.',
  partes: [
    { tipo: 'vep', desdeIper: true, n: 3 },
    { tipo: 'abierta', p: 'Piensa en una tarea tuya que no esté en la matriz o que haya cambiado. ¿Qué peligro tiene y qué control propones?', min: 30, alApr: true,
      modelo: 'Gracias. Tu aporte queda registrado para Prevención de Riesgos y sirve para actualizar la Matriz IPER.' }
  ]
};
CONTENIDO.quiz.iper = { n: 6, preguntas: [
  { p: '¿Cuál es la diferencia entre peligro y riesgo?', op: ['Son lo mismo', 'El peligro es la fuente del daño; el riesgo es la posibilidad de que ese daño ocurra y su gravedad', 'El riesgo es la fuente; el peligro es la consecuencia', 'El peligro solo existe en el mar'], ok: 2, fbOk: 'Correcto.', fbNo: 'Peligro: la fuente (un borde sin baranda). Riesgo: la posibilidad y gravedad del daño (caer al agua).' },
  { p: 'Una tarea tiene Probabilidad Media (2) y Severidad Extremadamente dañina (4). ¿Qué nivel tiene?', op: ['Tolerable', 'Moderado', 'Importante', 'Intolerable'], ok: 3, fbOk: 'Correcto: 2 × 4 = 8, Importante.', fbNo: '2 × 4 = 8: nivel Importante.' },
  { p: '¿Qué indica un riesgo Importante en la matriz de PyV?', op: ['Se puede trabajar sin cambios', 'No se debe comenzar ni continuar el trabajo hasta reducir el riesgo', 'Solo hay que usar EPP', 'Hay que avisar a fin de mes'], ok: 2, fbOk: 'Correcto.', fbNo: 'Con nivel Importante no se comienza ni continúa hasta reducir el riesgo.' },
  { p: '¿Con qué protocolo se evalúa la exposición al ruido de motores y compresores?', op: ['CEAL-SM', 'PREXOR', 'TMERT', 'Ley Karin'], ok: 2, fbOk: 'Correcto.', fbNo: 'El ruido ocupacional se evalúa con el protocolo PREXOR.' },
  { p: '¿Qué medida es un control de ingeniería?', op: ['Chaleco salvavidas', 'Charla de seguridad', 'Baranda en la embarcación', 'Letrero de advertencia'], ok: 3, fbOk: 'Correcto.', fbNo: 'La baranda es un cambio físico: control de ingeniería.' },
  { p: '¿Qué es el riesgo residual?', op: ['El riesgo antes de evaluar', 'El riesgo que queda después de aplicar los controles', 'Un riesgo que no se puede medir', 'El riesgo de otra empresa'], ok: 2, fbOk: 'Correcto.', fbNo: 'Es el nivel que queda después de aplicar las medidas de control.' },
  { p: 'Ves un peligro nuevo que no está en la matriz. ¿Qué haces?', op: ['Nada', 'Aviso a Prevención o a mi supervisor para actualizarla', 'Lo anoto para mí', 'Espero a la próxima auditoría'], ok: 2, fbOk: 'Correcto.', fbNo: 'Avisar permite actualizar la matriz y los controles.' }
] };

/* =====================================================================
   EMERGENCIAS Y DESASTRES (PRRD)
   ===================================================================== */
CONTENIDO.lecciones['prrd.l1'] = { diapositivas: [
  { t: 'El plan de emergencias de PyV', x: 'El Plan para la Reducción del Riesgo de Desastres (PRRD) 2026 sigue la guía de ONEMI/SENAPRED. Aplica a todo el personal, incluso al contratado por faena y a las visitas.', l: ['Oficina de Las Rosas 121, Puerto Aysén.', 'Navegación, fondeo y permanencia a bordo en canales y fiordos de Aysén.', 'Centros de cultivo en apertura o armado.', 'Centros operacionales o en mantención.'] },
  { t: 'Las amenazas prioritarias', l: ['Hombre al agua.', 'Emergencia médica o accidente grave en zona aislada.', 'Temporal, viento y marejada.', 'Incendio a bordo o en faena (trabajo en caliente, GLP).', 'Vía de agua, hundimiento y abandono.', 'Colisión o abordaje.', 'Sismo y tsunami, incluidos los deslizamientos en fiordos.'] },
  { t: '¿Quién dirige?', l: ['A bordo, en navegación y fondeo: el Patrón, según el zafarrancho.', 'En módulos y jaulas: el Supervisor de faena.', 'En la oficina: el encargado/a de oficina.', 'Desde tierra: Operaciones coordina apoyos (mecánico, remolque, lancha).', 'La Gerencia dispone recursos; Prevención coordina el plan.'], tip: 'La respuesta inmediata no espera autorización: quien está a cargo actúa para proteger a las personas.' },
  { t: 'Cómo se avisa', l: ['Quien detecta → Patrón, Supervisor o encargado/a → Operaciones y Gerencia → empresa mandante.', 'Todo aviso dice: embarcación, posición GPS, tipo de emergencia, número de personas y lesionados, y apoyo requerido.', 'Medios: VHF (canal 16 para socorro), celular y Starlink.', 'Solo alertas oficiales: SENAPRED, SHOA, Autoridad Marítima y SERNAGEOMIN. No se actúa por rumores.'] },
  { t: 'El método ACCEDER', x: 'Cada plan de respuesta del PRRD sigue siete pasos:', l: ['A · Alerta y alarma', 'C · Comunicación', 'C · Coordinación', 'E · Evaluación preliminar', 'D · Decisiones', 'E · Evaluación complementaria', 'R · Readecuación del plan'] },
  { t: 'Sismo y tsunami', l: ['Si el sismo hace difícil mantenerse en pie, se aplica el plan de tsunami de inmediato, sin esperar alerta oficial.', 'En módulos: repliegue a la embarcación y salida hacia aguas profundas.', 'Navegando: alejarse de la costa hacia más de 150 m de profundidad; no entrar a puertos ni bahías.', 'En fiordos un deslizamiento puede generar olas sin aviso (Aysén, abril de 2007).', 'Se vuelve solo cuando la autoridad cancela la alerta: pueden llegar varias olas.'] },
  { t: 'Recursos y zafarranchos', l: ['Cada embarcación tiene chalecos (8 a 9), aros con rabiza, balsa para 10 personas, extintores, botiquín y bombas de achique.', 'Señal de abandono: seis pitazos largos y seguidos. Solo la ordena el Patrón.', 'Antes de zarpar se completa el checklist de inicio de turno.', 'Se practica al menos un zafarrancho por turno y embarcación: hombre al agua, incendio, abandono, vía de agua.'] },
  { t: 'En la oficina', l: ['Sismo: agacharse, cubrirse y afirmarse lejos de ventanas, estanterías y del aire acondicionado; luego evacuar a la zona segura exterior.', 'Incendio: alarma a viva voz, Bomberos (132); extintor solo si el fuego es incipiente y hay salida asegurada.', 'Asalto: no oponer resistencia; luego Carabineros (133) sin alterar el lugar.', 'Corte de luz o agua: si no se puede trabajar seguro, se suspende la jornada.'] },
  { t: 'Números de emergencia', l: CONTENIDO.directorio.slice(0, 10).map(function (d) { return d.n + ': ' + d.t; }) }
] };
CONTENIDO.juegos['prrd.j1'] = CONTENIDO.juegos['ds44.j5'];
CONTENIDO.juegos['prrd.j2'] = CONTENIDO.juegos['ds44.pyv_j'];
CONTENIDO.juegos['prrd.j2_oficina'] = CONTENIDO.juegos['ds44.pyv_j_oficina'];
CONTENIDO.quiz.prrd = { n: 6, preguntas: [
  { p: 'Al comunicar una emergencia desde la embarcación, ¿qué datos se entregan?', op: ['Solo el nombre del Patrón', 'Embarcación, posición GPS, tipo de emergencia, personas y lesionados, y apoyo requerido', 'La hora de zarpe', 'El nombre del centro y nada más'], ok: 2, fbOk: 'Correcto.', fbNo: 'Embarcación, posición GPS, tipo de emergencia, número de personas y lesionados, y apoyo requerido.' },
  { p: '¿Qué significa la primera "A" del método ACCEDER?', op: ['Abandono', 'Alerta y alarma', 'Ayuda externa', 'Autorización'], ok: 2, fbOk: 'Correcto.', fbNo: 'A = Alerta y alarma.' },
  { p: 'En un trabajo en módulos, ¿quién lidera la respuesta inicial?', op: ['El Patrón', 'El Supervisor de faena', 'La mandante', 'Cualquiera'], ok: 2, fbOk: 'Correcto, coordinando con el Patrón.', fbNo: 'En módulos y jaulas lidera el Supervisor de faena.' },
  { p: '¿Cuál es la señal de abandono de la embarcación?', op: ['Tres pitazos cortos', 'Seis pitazos largos y seguidos', 'Sirena continua', 'Luces intermitentes'], ok: 2, fbOk: 'Correcto.', fbNo: 'Seis pitazos largos y seguidos.' },
  { p: 'Navegando recibes alerta oficial de tsunami. ¿Qué indica el plan?', op: ['Entrar al puerto más cercano', 'Ir a aguas profundas y no entrar a puertos ni bahías', 'Fondear junto a la costa', 'Apagar motores'], ok: 2, fbOk: 'Correcto.', fbNo: 'Se navega hacia aguas profundas (más de 150 m) y no se entra a puertos ni bahías.' },
  { p: 'Te llega por WhatsApp un mensaje sin fuente que dice que viene un tsunami. ¿Qué haces?', op: ['Evacuar de inmediato', 'Verificar en las fuentes oficiales (SENAPRED, SHOA, Autoridad Marítima)', 'Reenviarlo a todos', 'Ignorar cualquier alerta'], ok: 2, fbOk: 'Correcto. La excepción es un sismo que impide mantenerse en pie: ahí se actúa de inmediato.', fbNo: 'No se actúa por rumores: se verifica en fuentes oficiales.' },
  { p: '¿Cuándo se puede volver a la costa después de una alerta de tsunami?', op: ['Después de la primera ola', 'Cuando la autoridad cancela la alerta', 'A la hora', 'Cuando el mar se ve tranquilo'], ok: 2, fbOk: 'Correcto.', fbNo: 'Solo cuando la autoridad cancela la alerta.' }
] };

/* =====================================================================
   EPP (PTS-001)
   ===================================================================== */
CONTENIDO.lecciones['epp.l1'] = { documento: 'pts/PTS-001.pdf', diapositivas: [
  { t: 'El EPP en PyV', x: 'El procedimiento PTS-001 ordena la gestión del EPP en 8 etapas, según la Guía del ISP.', l: ['1 Selección según la Matriz IPER', '2 Compra de EPP certificado', '3 Recepción y entrega con registro', '4 Uso', '5 Mantención', '6 Reposición', '7 Disposición final', '8 Supervisión y control'], tip: 'El EPP es siempre la última medida: no reemplaza a las barandas, los procedimientos ni la supervisión.' },
  { t: 'Categorías de EPP', l: ['Categoría I: riesgos mínimos, diseño simple (por ejemplo, guantes de trabajo liviano).', 'Categoría II: riesgos que no son mínimos ni mortales.', 'Categoría III: riesgos graves o mortales: chaleco salvavidas, arnés, protección auditiva, respiradores. Requieren certificación obligatoria.', 'Todo EPP comprado debe tener certificado del ISP o estar en su registro de fabricantes e importadores.'] },
  { t: 'Cuando recibes tu EPP', l: ['El Supervisor completa el formulario de entrega con el motivo.', 'Recibes el EPP con el folleto del fabricante.', 'Te capacitan al menos 1 hora en uso, ajuste, mantención y reposición (esta capacitación).', 'Se verifica que te quede bien, en tu talla real.', 'Firmas el formulario de entrega.'], tip: 'El EPP es gratis. La empresa no puede descontarte el costo de un EPP gastado por uso normal.' },
  { t: 'Cómo se usa', l: ['Todo el tiempo que estés expuesto al riesgo.', 'Revísalo antes de cada uso.', 'Úsalo solo para lo que fue entregado.', 'No compartas EPP personal: lentes, mascarillas, guantes, cascos.', 'Si usas varios a la vez, verifica que sean compatibles.', 'No modifiques ni desarmes ningún EPP.'], tip: 'No usar el EPP: primera vez amonestación verbal, segunda escrita, y luego sanciones del Reglamento Interno.' },
  { t: 'Cómo se cuida', l: ['Límpialo y guárdalo en un lugar limpio y seco, lejos del sol directo, del calor y de químicos.', 'Los EPP compartidos se limpian y desinfectan después de cada uso.', 'La revisión mayor de arneses, filtros y correas la gestiona Prevención según el fabricante.'] },
  { t: 'Cuándo se repone', l: ['Desgaste o deterioro visible.', 'Falla: hebillas, costuras, filtros obstruidos.', 'Fecha de vencimiento cumplida.', 'Contacto con químicos o material biológico.', 'Pérdida justificada.', 'Cambio de cargo.', 'Fin de la vida útil indicada por el fabricante.'], tip: 'El chaleco salvavidas se repone si tiene cortes, quemaduras, costuras dañadas, perdió flotabilidad o le falta el silbato. El arnés que detuvo una caída se retira de inmediato.' },
  { t: 'Disposición final y control', l: ['El EPP dado de baja se inutiliza (cortado, perforado o marcado "BAJA").', 'Está prohibido donarlo, revenderlo o usarlo en la casa.', 'El contaminado con químicos o material biológico va a contenedores especiales.', 'Prevención y el Delegado de SST inspeccionan el uso y el estado; los supervisores lo controlan a diario.'] }
] };
CONTENIDO.juegos['epp.j1'] = { intro: 'Según el PTS-001, decide si cada EPP sigue en uso o se repone.', partes: [{ tipo: 'clasificar',
  categorias: [{ id: 'usa', nombre: 'Sigue en uso' }, { id: 'repone', nombre: 'Se repone' }],
  items: [
    { t: 'Casco con una fisura en la parte de arriba', c: 'repone', fb: 'Las fisuras reducen su resistencia al impacto.' },
    { t: 'Chaleco salvavidas con una costura abierta', c: 'repone', fb: 'Una costura dañada puede fallar en el agua.' },
    { t: 'Guantes de maniobra limpios, sin cortes y con buen agarre', c: 'usa', fb: 'Están en buen estado.' },
    { t: 'Arnés que detuvo una caída la semana pasada', c: 'repone', fb: 'Un arnés que detuvo una caída se retira de inmediato y se evalúa según el fabricante.' },
    { t: 'Lentes con rayaduras que dificultan ver', c: 'repone', fb: 'Si afectan la visión, se reponen.' },
    { t: 'Chaleco salvavidas mojado, lavado y sin daños', c: 'usa', fb: 'Mojarse es normal; lo importante es que esté íntegro.' },
    { t: 'Botas de seguridad con la suela lisa', c: 'repone', fb: 'Una suela gastada no evita resbalones en cubierta.' },
    { t: 'Filtro del respirador con el que cuesta respirar', c: 'repone', fb: 'Está saturado.' },
    { t: 'Bloqueador solar vencido', c: 'repone', fb: 'Caducidad: se repone.' }
  ] }] };
CONTENIDO.talleres['epp.t1'] = {
  intro: 'Toma tu propio EPP y revísalo pieza por pieza. Lo que marques como "requiere cambio" y tu comentario final le llegan a Prevención de Riesgos.',
  partes: [
    { tipo: 'registro', titulo: 'Autoinspección de mi EPP', opciones: ['Bien', 'Requiere cambio', 'No uso'], items: [
      'Casco: sin fisuras, con barbiquejo y suspensión en buen estado',
      'Chaleco salvavidas: cintas, hebillas, costuras y silbato',
      'Guantes: sin cortes ni perforaciones, con buen agarre',
      'Calzado de seguridad: suela con relieve, puntera cubierta, sin cortes',
      'Ropa impermeable o térmica: sin roturas',
      'Lentes o careta: sin rayas que dificulten la visión',
      'Protección auditiva: almohadillas o tapones limpios y flexibles',
      'Arnés y cabo de vida: cintas, costuras y mosquetones sin daño'] },
    { tipo: 'abierta', p: '¿Qué EPP necesitas reponer, o cuál no te queda bien por talla o ajuste?', min: 5, alApr: true,
      modelo: 'Gracias. Tu respuesta queda registrada para Prevención de Riesgos, que gestionará la reposición.' }
  ]
};
CONTENIDO.quiz.epp = { n: 6, preguntas: [
  { p: '¿Qué lugar ocupa el EPP en la jerarquía de controles?', op: ['La primera medida', 'La última barrera, cuando el riesgo no se pudo eliminar ni controlar', 'Reemplaza a las barandas', 'Es opcional'], ok: 2, fbOk: 'Correcto.', fbNo: 'El EPP es siempre la última medida.' },
  { p: '¿Quién paga el EPP gastado por uso normal?', op: ['El trabajador', 'La empresa: está prohibido descontarlo', 'Se divide en partes iguales', 'El Delegado'], ok: 2, fbOk: 'Correcto.', fbNo: 'El EPP es gratuito y no se puede descontar por deterioro normal.' },
  { p: '¿Cuál de estos EPP es de Categoría III?', op: ['Gorro de lana', 'Chaleco salvavidas', 'Overol de algodón', 'Delantal'], ok: 2, fbOk: 'Correcto: protege de un riesgo mortal.', fbNo: 'El chaleco salvavidas es Categoría III: riesgo grave o mortal.' },
  { p: 'Un arnés detuvo una caída. ¿Qué se hace?', op: ['Se sigue usando si se ve bien', 'Se retira de inmediato y se evalúa según el fabricante', 'Se lava y se guarda', 'Se presta a otro'], ok: 2, fbOk: 'Correcto.', fbNo: 'Se retira de servicio de inmediato.' },
  { p: '¿Qué se hace con un EPP dado de baja?', op: ['Se regala', 'Se inutiliza (cortado, perforado o marcado BAJA)', 'Se lleva a la casa', 'Se vende'], ok: 2, fbOk: 'Correcto.', fbNo: 'Se inutiliza para que nadie lo vuelva a usar.' },
  { p: '¿Puedes compartir tus guantes o tu mascarilla con un compañero?', op: ['Sí, siempre', 'No, el EPP personal no se comparte', 'Solo los viernes', 'Solo si está limpio a la vista'], ok: 2, fbOk: 'Correcto.', fbNo: 'El EPP personal no se comparte por razones de higiene.' }
] };
CONTENIDO.firmas['epp.f1'] = function () { return { texto: 'Declaro haber recibido la capacitación de ' + CONTENIDO.empresa.nombre + ' sobre el uso correcto, ajuste, mantención, criterios de reposición y disposición final de mis elementos de protección personal, según el procedimiento PTS-001 y el D.S. N° 44/2024. Me comprometo a usarlos durante toda la exposición al riesgo y a avisar de inmediato cualquier daño o pérdida.' }; };

/* =====================================================================
   QUÉ HACER ANTE UN ACCIDENTE
   ===================================================================== */
CONTENIDO.lecciones['acc.l1'] = { documento: 'pts/PA-ACCIDENTES.pdf', diapositivas: [
  { t: '¿Qué es un accidente del trabajo?', l: ['Toda lesión que sufres a causa o con ocasión del trabajo y que te produce incapacidad o muerte (Ley 16.744).', 'También el accidente de trayecto: el que ocurre en el camino directo entre tu casa y el trabajo.', 'El organismo administrador de PyV es la ACHS: atención gratuita, subsidios y rehabilitación.'], tip: 'Avisa siempre, aunque parezca leve. Una lesión que no se denuncia puede quedar sin cobertura.' },
  { t: 'Leve, grave o fatal', l: ['Leve: no requiere hospitalización ni deja secuelas que impidan volver al trabajo.', 'Grave: obliga a reanimar o a rescatar; caída de más de 1,8 m; afecta a más de un trabajador; puede causar muerte o invalidez; o ocurre con riesgo inminente para la vida.', 'Fatal: produce la muerte, inmediata o como consecuencia directa del accidente.'] },
  { t: 'Accidente leve: los pasos', l: ['Primeros auxilios en el lugar.', 'Traslado al centro de la ACHS más cercano si la lesión lo amerita.', 'La jefatura envía la DIAT a la ACHS dentro de 24 horas.', 'Registro interno del accidente.', 'Seguimiento médico hasta el alta y la reincorporación.'] },
  { t: 'Accidente grave', l: ['Suspender de inmediato la faena y acordonar el área.', 'Notificar de inmediato a la Inspección del Trabajo y a la SEREMI de Salud (600 42 000 22).', 'Primeros auxilios y traslado; en zona aislada se pide apoyo a la Autoridad Marítima (137).', 'DIAT marcada como grave dentro de 24 horas.', 'La faena solo se reanuda con autorización escrita de la autoridad.', 'Investigación con árbol de causas en un máximo de 30 días.'] },
  { t: 'Accidente fatal', l: ['Suspender y acordonar; no alterar la escena.', 'Llamar a Carabineros (133) y SAMU (131).', 'Notificar de inmediato a la Inspección del Trabajo y SEREMI (600 42 000 22).', 'Correo a accidentes@suseso.cl con el asunto #FATAL.', 'DIAT marcada como fatal dentro de 24 horas.', 'Investigación y reanudación solo con autorización escrita.'] },
  { t: 'La denuncia (DIAT)', l: ['La hace la empresa dentro de 24 horas.', 'Si la empresa no la hace, puede hacerla el propio trabajador, un familiar, un compañero o el médico tratante.', 'Si la ACHS rechaza tu caso como laboral y no estás de acuerdo, puedes reclamar ante la SUSESO.'] },
  { t: 'La investigación (PTS-018)', l: ['Busca causas, no culpables.', 'Se reconstruye lo que pasó con un relato y un árbol de causas.', 'Las medidas inmediatas se aplican en un máximo de 24 horas.', 'El Delegado de SST participa.', 'El informe se guarda al menos 5 años a disposición de la autoridad.', 'Después de un accidente grave o fatal se revisa la Matriz IPER.'] },
  { t: 'Tu parte', l: ['Avisar de inmediato a tu Supervisor o Patrón cualquier accidente y también los cuasi accidentes (lo que pudo pasar).', 'No mover nada del lugar si fue grave o fatal.', 'Contar con honestidad lo que pasó en la investigación: sirve para que no le pase a otro.'] }
] };
CONTENIDO.juegos['acc.j1'] = { intro: 'Clasifica cada situación según el procedimiento de accidentes de PyV. Después ordena los pasos de un accidente leve.', partes: [
  { tipo: 'clasificar', categorias: [{ id: 'leve', nombre: 'Leve' }, { id: 'grave', nombre: 'Grave' }, { id: 'fatal', nombre: 'Fatal' }], items: [
    { t: 'Corte en un dedo; lo curan en la ACHS y vuelve a trabajar', c: 'leve', fb: 'No requiere hospitalización ni deja secuelas.' },
    { t: 'Un operario cae desde una baranda de 2 metros al pasillo', c: 'grave', fb: 'Caída de más de 1,8 metros: grave.' },
    { t: 'Un compañero cae al agua y hay que rescatarlo', c: 'grave', fb: 'Si obliga a rescate, es grave.' },
    { t: 'Dos operarios golpeados por una misma carga', c: 'grave', fb: 'Involucra a más de un trabajador: grave.' },
    { t: 'Esguince de tobillo al bajar al muelle', c: 'leve', fb: 'Leve si no requiere hospitalización.' },
    { t: 'Un buzo sale inconsciente y hay que reanimarlo', c: 'grave', fb: 'Si obliga a maniobras de reanimación, es grave.' },
    { t: 'Un trabajador fallece tras ser golpeado por el brazo hidráulico', c: 'fatal', fb: 'Fatal: se suspende, no se altera la escena y se notifica de inmediato.' }
  ] },
  { tipo: 'ordenar', enunciado: 'Ordena los pasos ante un accidente leve.', items: ['Primeros auxilios y traslado a la ACHS', 'La jefatura envía la DIAT dentro de 24 horas', 'Registro interno del accidente', 'Seguimiento médico hasta el alta', 'Reincorporación al trabajo'], fb: 'Así lo establece el procedimiento de accidentes de PyV.' }
] };
CONTENIDO.quiz.acc = { n: 6, preguntas: [
  { p: '¿En qué plazo se envía la DIAT a la ACHS?', op: ['24 horas', '5 días', '30 días', 'Solo si hay licencia'], ok: 1, fbOk: 'Correcto.', fbNo: 'Dentro de 24 horas desde que se conoce el accidente.' },
  { p: 'Un trabajador cae desde 2,5 metros. ¿Cómo se clasifica?', op: ['Leve', 'Grave', 'De trayecto', 'No es accidente'], ok: 2, fbOk: 'Correcto: más de 1,8 m.', fbNo: 'Una caída de más de 1,8 metros es accidente grave.' },
  { p: 'Ante un accidente grave, ¿qué se hace con la faena?', op: ['Se sigue trabajando', 'Se suspende de inmediato y se acordona el área', 'Se termina rápido', 'Se cambia de turno'], ok: 2, fbOk: 'Correcto.', fbNo: 'Se suspende y acordona; se reanuda solo con autorización escrita.' },
  { p: 'Si la empresa no hace la DIAT, ¿quién puede hacerla?', op: ['Nadie', 'El trabajador, un familiar, un compañero o el médico tratante', 'Solo la Gerencia', 'Solo la mandante'], ok: 2, fbOk: 'Correcto.', fbNo: 'Puede hacerla el propio trabajador, un familiar, un compañero o el médico.' },
  { p: '¿Qué busca la investigación de un accidente?', op: ['Un culpable para sancionar', 'Las causas, para que no se repita', 'Cerrar el caso rápido', 'Bajar las estadísticas'], ok: 2, fbOk: 'Correcto.', fbNo: 'Busca causas, no culpables, y define medidas para que no se repita.' },
  { p: 'Te caes en el trayecto directo de tu casa al trabajo. ¿Qué es?', op: ['Un accidente común', 'Un accidente de trayecto, cubierto por la Ley 16.744', 'No se cubre', 'Solo si vas en auto de la empresa'], ok: 2, fbOk: 'Correcto.', fbNo: 'Es un accidente de trayecto, con cobertura de la Ley 16.744.' },
  { p: 'Ves que casi le cae un grillete en la cabeza a un compañero, pero no le pasa nada. ¿Qué haces?', op: ['Nada, no pasó nada', 'Lo reporto como cuasi accidente', 'Me río', 'Lo cuento solo si pregunta alguien'], ok: 2, fbOk: 'Correcto. Los cuasi accidentes avisan lo que puede pasar.', fbNo: 'Se reporta como cuasi accidente: es la oportunidad de corregir antes de que alguien se lesione.' }
] };

/* =====================================================================
   PROCEDIMIENTOS DE TRABAJO SEGURO
   ===================================================================== */
var _PTS = {
  'PTS-003': {
    objetivo: 'Ejecutar los trabajos de corte y soldadura en centros de cultivo y embarcaciones de forma segura, controlada y conforme al D.S. 44 y las normas marítimas.',
    alcance: ['Soldadores, supervisores de faena y personal de apoyo.', 'Pasillos, módulos, jaulas y estructuras metálicas.', 'Embarcaciones de apoyo y plataformas flotantes.'],
    roles: { soldador: ['Cumplir el PTS y el Permiso de Trabajo en Caliente (PTC).', 'Usar todo el tiempo el EPP completo y en buen estado.', 'Inspeccionar su equipo antes de empezar y reportar fallas.', 'Mantener el área ordenada y sin inflamables.'], supervisor: ['Emitir y firmar el PTC antes de empezar.', 'Inspeccionar el área y controlar la zona caliente.', 'Suspender la faena ante riesgo inminente.', 'Coordinar la respuesta ante emergencias.'], _: ['Preparar el área y asistir al soldador respetando las medidas de seguridad.', 'Actuar como vigía o apoyo si te lo asignan.', 'Mantenerte fuera del alcance de chispas y proyecciones.'] },
    epp: ['Careta o casco de soldar', 'Guantes ignífugos', 'Ropa de algodón o ignífuga', 'Protección respiratoria si aplica', 'Protector auditivo y facial', 'Calzado de seguridad', 'Arnés y línea de vida en altura'],
    pasos: [{ t: 'Antes de soldar', l: ['Validar el Permiso de Trabajo en Caliente.', 'Inspeccionar el área: inflamables, riesgo eléctrico, lluvia y viento.', 'Retirar o cubrir inflamables en un radio de 10 metros.', 'Delimitar la zona caliente y asegurar ventilación.', 'Extintor PQS de 6 kg o más y botiquín disponibles.', 'Revisar cables, conexiones y conexión a tierra de la soldadora.'] },
      { t: 'Durante y después', l: ['EPP completo; piezas en superficie estable y sujeta.', 'Pantallas para contener chispas y radiación.', 'Al terminar: apagar y desconectar, esperar que se enfríe, retirar residuos.', 'Inspección final de posibles fuentes de ignición y cierre del PTC.'] }],
    detener: ['Humedad en las conexiones.', 'Lluvia intensa o viento que comprometa la estabilidad.', 'Falla de un EPP crítico.', 'Incendio que no se controla de inmediato: evacuar.'],
    orden: ['Validar el Permiso de Trabajo en Caliente', 'Retirar inflamables a 10 metros y delimitar la zona caliente', 'Verificar extintor PQS y conexión a tierra', 'Soldar con EPP completo y pantallas', 'Apagar, dejar enfriar e inspeccionar fuentes de ignición', 'Cerrar el PTC y registrar en bitácora'],
    quiz: [
      { p: '¿Qué documento autoriza cada trabajo de corte o soldadura?', op: ['La orden de compra', 'El Permiso de Trabajo en Caliente', 'La guía de despacho', 'Ninguno'], ok: 2 },
      { p: '¿En qué radio se retiran o protegen los materiales inflamables?', op: ['1 metro', '3 metros', '10 metros', '50 metros'], ok: 3 },
      { p: '¿Qué extintor exige el procedimiento en el puesto de soldadura?', op: ['Uno de agua', 'PQS de al menos 6 kg', 'Ninguno', 'Uno de cocina'], ok: 2 },
      { p: '¿Cuándo se suspende el trabajo?', op: ['Nunca', 'Con humedad en conexiones, lluvia o viento fuerte, o falla del EPP crítico', 'Solo si lo pide la mandante', 'Al terminar el turno'], ok: 2 },
      { p: 'Terminada la soldadura, ¿qué se hace antes de cerrar el PTC?', op: ['Irse de inmediato', 'Dejar enfriar las piezas e inspeccionar posibles fuentes de ignición', 'Mojar todo con agua', 'Nada'], ok: 2 }
    ] },
  'PTS-004': {
    objetivo: 'Realizar en forma segura las faenas de apertura y armado de centros de cultivo, en estructuras flotantes, con herramientas, izajes, navegación y soldadura.',
    alcance: ['Instalación de cerco perimetral y lobera.', 'Montaje de pajareras, yugos, postes de 3 y 4 m y sus bases.', 'Reticulado e instalación de boyas cabeceras.', 'Armado de atracaderos y barandas.', 'Costura y tensado de redes; cabos estructurales.', 'Navegación auxiliar asociada.'],
    roles: { supervisor: ['Planificar y controlar la faena.', 'Verificar mar y clima antes de empezar.', 'Autorizar el inicio y suspender si hace falta.', 'Hacer la charla pre-turno y revisar listas de chequeo y EPP.'], patron: ['Conducir la embarcación según las condiciones de mar.', 'Verificar elementos de seguridad náutica: extintores, bengalas, radio, salvavidas.', 'Suspender la navegación si no hay condiciones mínimas.', 'Mantener comunicación con el supervisor.'], motorista: ['Apoyar la navegación segura y la operación de la embarcación.', 'Informar al Patrón cualquier anomalía de motor o equipos.'], tripulante: ['Apoyar la navegación del bote auxiliar.', 'Coordinar maniobras de posicionamiento con el Patrón.', 'Supervisar el izaje de materiales desde o hacia la embarcación.'], soldador: ['Soldar yugos y barandas con aislamiento eléctrico y entorno seco.', 'Usar herramientas autorizadas y en buen estado.'], _: ['Instalar cerco, postes, yugos, cabos y pajareras bajo supervisión directa.', 'Usar correctamente el EPP.', 'Reportar condiciones inseguras o estructuras deterioradas.'] },
    epp: ['Casco con barbiquejo', 'Guantes', 'Gafas de seguridad', 'Arnés y línea de vida', 'Chaleco salvavidas en todo momento', 'Botas con punta de acero', 'Ropa de trabajo resistente', 'Protector auditivo'],
    pasos: [{ t: 'Inicio', l: ['Reunión de coordinación: tareas y roles.', 'Inspección de equipos y herramientas.', 'Charla de seguridad y AST.'] },
      { t: 'Ejecución', l: ['Bases para postes niveladas y fijadas.', 'Postes de 3 m (cerco) y 4 m (pajarera) con grúa, asegurados y fijados con yugos.', 'Pajareras montadas, fijadas y tensadas con el brazo hidráulico.', 'Boyas cabeceras reticuladas con cabos de 32 mm.', 'Costura de perimetral a lobera sin espacios.', 'Barandas en las áreas designadas.', 'Al final: inspección, limpieza e informe de la jornada.'] }],
    detener: ['Mar, viento o visibilidad que impidan trabajar seguro.', 'Estructuras o equipos en mal estado.', 'Falta de embarcación de apoyo junto a la cuadrilla.'],
    orden: ['Reunión de coordinación y AST', 'Inspección de equipos y herramientas', 'Colocación de bases para postes', 'Instalación de postes y yugos', 'Montaje y tensado de pajareras', 'Inspección final y limpieza del área'],
    quiz: [
      { p: '¿Cuándo se usa el chaleco salvavidas durante la apertura?', op: ['Solo al navegar', 'En todo momento', 'Solo si llueve', 'Nunca sobre los módulos'], ok: 2 },
      { p: '¿Para qué se usan los postes de 4 metros?', op: ['Cerco perimetral', 'Mallas pajareras', 'Barandas', 'Atracaderos'], ok: 2 },
      { p: '¿Quién autoriza el inicio y la suspensión de los trabajos?', op: ['Cualquier operario', 'El Supervisor de faena', 'La mandante', 'El soldador'], ok: 2 },
      { p: '¿Qué se hace antes de empezar la jornada?', op: ['Nada', 'Reunión de coordinación, inspección de equipos y charla de seguridad', 'Solo cargar combustible', 'Revisar el celular'], ok: 2 }
    ] },
  'PTS-005': {
    objetivo: 'Mantener balsas jaulas y módulos de centros de cultivo reduciendo al mínimo los riesgos de estas tareas.',
    alcance: ['Cambio de zunchos, pasadores y perticas.', 'Instalación de flotadores, barandas y tapas butilo.', 'Armado y desarmado de jaulas.', 'Soldadura de pines y yugos.', 'Tensado de pajareras y cerco; costura de cerco o faldones.', 'Resanado de pasillos.'],
    roles: { supervisor: ['Asegurar que se siga el PTS, inspeccionar y capacitar.'], soldador: ['Soldar yugos y barandas con prácticas seguras.'], tripulante: ['Transporte y apoyo logístico en la faena.'], patron: ['Transporte y apoyo logístico en la faena.'], _: ['Cumplir las normas de seguridad, usar el EPP y reportar riesgos.'] },
    epp: ['Casco con barbiquejo y protector facial', 'Guantes de protección y anticorte', 'Gafas o careta de soldar', 'Arnés', 'Chaleco salvavidas', 'Botas con punta de acero', 'Protector auditivo', 'Rodilleras para el resanado', 'Mascarilla con filtro para pintura y soldadura'],
    pasos: [{ t: 'Preparación', l: ['Revisar el plan y asignar tareas según competencias.', 'Verificar clima y mar antes de embarcar.', 'AST con todo el equipo.', 'EPP completo y herramientas en buen estado.', 'Medios de rescate disponibles: aro, cuerda y botiquín.'] },
      { t: 'Ejecución y cierre', l: ['Posicionarse estable sobre el pasillo con chaleco puesto.', 'Sujetar las piezas para que no caigan al agua.', 'Detener ante condiciones inseguras o cambio de clima.', 'Retirar herramientas y desechos; no dejar materiales sueltos.', 'Reportar EPP dañado y registrar hallazgos.'] }],
    detener: ['Condición insegura en la estructura.', 'Cambio en las condiciones climáticas.', 'Falta de medios de rescate.'],
    orden: ['Revisar el plan y asignar tareas', 'Verificar clima y mar', 'Realizar el AST con todo el equipo', 'Ejecutar la tarea estable y con chaleco', 'Retirar herramientas y desechos', 'Registrar el reporte y los hallazgos'],
    quiz: [
      { p: '¿Para qué sirve una tapa butilo?', op: ['Para tapar boyas', 'Cubre las uniones del pasillo e impide caer al agua', 'Para soldar', 'Para guardar herramientas'], ok: 2 },
      { p: 'Antes de iniciar la mantención, ¿qué medios de rescate deben estar disponibles?', op: ['Ninguno', 'Aro salvavidas, cuerda de rescate y botiquín', 'Solo el celular', 'Una escalera'], ok: 2 },
      { p: 'Al retirar un pasador, ¿qué cuidado se tiene?', op: ['Tirarlo al agua', 'Sujetar la pieza para evitar que caiga al agua', 'Golpearlo fuerte', 'Dejarlo en el pasillo'], ok: 2 },
      { p: '¿Qué EPP adicional se usa en el resanado de pasillos?', op: ['Rodilleras', 'Aletas', 'Careta de soldar', 'Ninguno'], ok: 1 }
    ] },
  'PTS-006': {
    objetivo: 'Ejecutar el raspado subacuático, la limpieza con hidrolavadora y la desinfección de estructuras acuícolas con una metodología segura y fiscalizable.',
    alcance: ['Raspado subacuático manual con espátulas por buzo, hasta 3 m aprox.', 'Limpieza externa con hidrolavadora bencinera desde superficie.', 'Desinfección con productos autorizados: Seamarine Eco, Germisan 15, Tonalim Aqua, Clorodos Plus.'],
    roles: { buzo_supervisor: ['Es la autoridad técnica de seguridad: evalúa condiciones, autoriza la inmersión y define STOP WORK.', 'No bucea mientras supervisa.', 'Verifica la bandera Alfa antes de autorizar el ingreso.'], buzo: ['Ejecuta el raspado por sectores, sin ubicarse bajo elementos con riesgo de atrapamiento.', 'Mantiene comunicación y detiene ante condiciones inseguras.'], supervisor: ['Coordina con la mandante.', 'Hace el hidrolavado y prepara y aplica el desinfectante con EPP químico.', 'Emite el reporte de faena y el certificado de desinfección.'], _: ['Asistente de buzo: arma y vigila el sistema de aire, controla manguera y línea de vida y apoya el ingreso y la salida.', 'Solo entra al agua en emergencia y por instrucción del Supervisor de Buceo.'] },
    epp: ['Equipo de buceo certificado (buzo)', 'Guantes', 'Protección ocular o facial para hidrolavado', 'Ropa impermeable', 'Protección química para desinfectantes', 'Calzado antideslizante', 'Chaleco salvavidas en cubierta'],
    pasos: [{ t: 'Antes de la inmersión', l: ['Charla operativa y AST del día.', 'Profundidad dentro del rango del servicio (máx. 3 m aprox.).', 'Bandera Alfa izada en lugar visible.', 'Compresor estable y ventilado; prueba funcional con el buzo respirando en superficie.', 'Línea de vida independiente de la manguera naranja.'] },
      { t: 'Inmersión, limpieza y cierre', l: ['Ingreso controlado; el asistente maneja manguera y línea sin tirones.', 'Raspado por sectores con control de aire estable.', 'Hidrolavado con zona segura por proyección y rebote.', 'Salida controlada y evaluación del buzo: fatiga, frío, molestias.', 'Desinfectante diluido según ficha técnica, con EPP químico.', 'Residuos según la mandante; apagado seguro y registros.'] }],
    detener: ['Variación o corte del aire; olor o sabor extraño.', 'Falta de la bandera Alfa.', 'Enredo de manguera o línea de vida.', 'Corriente u oleaje que impida el control.', 'Síntomas del buzo: mareo, dificultad para respirar, dolor, fatiga marcada, hipotermia.', 'Derrame de combustible o riesgo de incendio en equipos bencineros.'],
    orden: ['Charla operativa y AST del día', 'Izar la bandera Alfa', 'Armar y probar el sistema de aire', 'Instalar la línea de vida independiente', 'Ingreso controlado y raspado por sectores', 'Salida y evaluación post inmersión'],
    quiz: [
      { p: '¿Quién autoriza cada inmersión y puede declarar STOP WORK?', op: ['El buzo', 'El Supervisor de Buceo', 'La mandante', 'El Patrón'], ok: 2 },
      { p: '¿Qué pasa si no está izada la bandera Alfa?', op: ['Se bucea igual', 'No hay inmersión: es STOP WORK', 'Se avisa por radio', 'Se pone después'], ok: 2 },
      { p: 'El buzo siente sabor extraño en el aire. ¿Qué corresponde?', op: ['Terminar el sector', 'Salida inmediata', 'Respirar más lento', 'Cambiar de espátula'], ok: 2 },
      { p: '¿Cómo debe ser la línea de vida?', op: ['La misma manguera de aire', 'Independiente de la manguera de aire', 'Opcional', 'De cualquier cabo'], ok: 2 },
      { p: '¿Cómo se prepara el desinfectante?', op: ['Mezclando varios productos', 'Según la ficha técnica y la HDS, con EPP químico', 'Al ojo', 'Sin guantes'], ok: 2 }
    ] },
  'PTS-007': {
    objetivo: 'Instalar, cambiar o modificar zunchos y flotadores y raspar flotadores en la superficie del mar, sin inmersión, controlando sus riesgos.',
    alcance: ['Faenas en superficie del agua y bajo pasillos que no impliquen sumergirse.', 'Lo que requiera sumergirse lo hacen buzos con su propio procedimiento.'],
    roles: { operario_agua: ['Estar acreditado y haber recibido las instrucciones de la tarea.', 'Nunca sumergirse por completo: la cabeza siempre sobre el agua.', 'Inspeccionar su equipo y dejar registro en el AST.', 'Avisar de inmediato si no está en condiciones físicas.'], supervisor: ['Estar presente en todo momento: planificar, guiar, controlar y corregir.', 'Activar el plan de contingencias ante una emergencia.'], _: ['Asistente: apoyar desde el pasillo, entregar materiales y vigilar al operario en el agua.', 'Notificar cualquier condición de riesgo al supervisor.'] },
    epp: ['En el agua: traje seco o neopreno, botín, aletas, guantes, chaleco salvavidas, casco con barbiquejo, antiparras, arnés y cabos de sujeción', 'En el pasillo: zapatos de seguridad, overol, casco con barbiquejo, guantes, chaleco salvavidas, rodilleras'],
    pasos: [{ t: 'Antes de empezar', l: ['Coordinar con Operaciones o el encargado del centro.', 'Permiso de trabajo firmado por todo el equipo y AST: clima, equipos, sujeción de herramientas, salud y competencias, líneas de vida y anclajes.', 'Delimitar el área con conos u otros dispositivos.', 'Instalar escalera para entrar y salir del agua.'] },
      { t: 'En el agua', l: ['Entrar por la escalera, supervisado por el asistente.', 'Arnés con dos cabos de vida (máx. 3 m) anclados a la línea de vida.', 'Al cambiar de posición: anclar el segundo cabo antes de soltar el primero.', 'Máximo 2 horas en la mañana y 2 en la tarde, con pausas.', 'Lonas o quiñes bajo los flotadores para recoger los residuos del raspado.', 'Salir por la escalera y retirar residuos, herramientas y materiales.'] }],
    detener: ['Operario sin condiciones físicas o con frío intenso.', 'Clima o mar que impidan trabajar seguro.', 'Falla en arnés, cabo de vida o anclaje.'],
    orden: ['Coordinar con el centro y firmar el permiso de trabajo', 'Realizar el AST e instalar la escalera', 'Ponerse el arnés y anclar el cabo de vida', 'Entrar al agua supervisado', 'Trabajar siempre anclado con dos cabos', 'Salir por la escalera y retirar residuos'],
    quiz: [
      { p: '¿Cuánto tiempo máximo puede trabajar un operario dentro del agua?', op: ['4 horas seguidas', '2 horas en la mañana y 2 en la tarde', 'Todo el turno', '1 hora'], ok: 2 },
      { p: 'Al cambiar de posición bajo el pasillo, ¿cómo se usan los cabos de vida?', op: ['Se sueltan los dos', 'Se ancla el segundo antes de soltar el primero', 'Se usa uno solo', 'No se usan'], ok: 2 },
      { p: '¿Puede el operario sumergirse por completo?', op: ['Sí', 'No, la cabeza siempre sobre el agua', 'Solo con antiparras', 'Hasta 1 metro'], ok: 2 },
      { p: '¿Cuál es el largo máximo del cabo de vida?', op: ['1 metro', '3 metros', '10 metros', 'No tiene límite'], ok: 2 },
      { p: '¿Para qué se ponen lonas o quiñes bajo los flotadores?', op: ['Para flotar', 'Para recoger los residuos del raspado y no contaminar', 'Para sentarse', 'Para marcar el área'], ok: 2 }
    ] },
  'PTS-009': {
    objetivo: 'Raspar pontones, flotadores y estructuras sumergidas con buzos, controlando los riesgos y la contaminación cruzada.',
    alcance: ['Raspado y limpieza de artefactos navales con buzos y personal de superficie.', 'Limpieza con o sin recuperación de restos orgánicos.', 'Limpieza de cubiertas, bodegas y pontones con hidrolavadora.'],
    roles: { buzo_supervisor: ['Coordinar la jornada, aplicar la IPER y liderar el AST.', 'Controlar la bitácora de inmersiones y autorizar cada descenso.', 'No ser buzo activo durante la faena.'], buzo: ['Participar en la identificación de peligros.', 'Hacer la verificación cruzada de equipos antes de cada inmersión.', 'Notificar cualquier condición insegura.'], supervisor: ['Asegurar que se siga el procedimiento y hacer inspecciones.'], _: ['Personal de superficie: cumplir las normas, usar el EPP y reportar incidentes.'] },
    epp: ['Botas de goma o zapatos de seguridad', 'Overol o ropa de trabajo', 'Traje de agua', 'Traje blanco', 'Máscara con filtros', 'Guantes de nitrilo', 'Antiparras', 'Buzos: traje de buceo, máscara, cinturón, aletas, guantes y casco'],
    pasos: [{ t: 'Planificación', l: ['Revisar el pronóstico y el estado del mar.', 'Evaluación IPER específica y AST del día con firmas.', 'Chequeo de salud del personal, en especial de los buzos.', 'Verificar equipos, EPP y permisos.'] },
      { t: 'Raspado', l: ['Lonas para contener residuos y bins rotulados para residuos orgánicos.', 'Raspado manual con espátulas de toda estructura que estuvo en el agua.', 'Equipo: buzo, supervisor de buceo y asistente.', 'Cubiertas y pontones: solo con hidrolavadora.', 'Desinfectar herramientas entre usos (barrera sanitaria).'] }],
    detener: ['Condiciones climáticas extremas.', 'Falla del equipo de buceo o del suministro de aire.', 'Condición insegura informada por cualquier integrante.'],
    orden: ['Revisar pronóstico y estado del mar', 'Evaluación IPER y AST con firmas', 'Chequeo de salud de los buzos', 'Instalar lonas y bins rotulados', 'Raspar por sectores con espátulas', 'Desinfectar herramientas y retirar residuos'],
    quiz: [
      { p: '¿Puede el Supervisor de Buceo ser buzo activo durante la faena?', op: ['Sí', 'No', 'Solo en emergencias planificadas', 'Solo los lunes'], ok: 2 },
      { p: '¿Qué se verifica antes de cada inmersión?', op: ['Nada', 'Verificación cruzada de los equipos de buceo', 'Solo el combustible', 'El horario'], ok: 2 },
      { p: '¿Para qué sirve desinfectar las herramientas entre usos?', op: ['Para que brillen', 'Para evitar la contaminación cruzada entre áreas', 'No sirve', 'Para que pesen menos'], ok: 2 },
      { p: '¿Cómo se limpian las cubiertas de módulos y pontones?', op: ['Con espátula bajo el agua', 'Con hidrolavadora', 'Con cloro puro', 'No se limpian'], ok: 2 }
    ] },
  'PTS-010': {
    objetivo: 'Cerrar un centro de cultivo protegiendo a los trabajadores durante el desarme y retiro de sus estructuras.',
    alcance: ['Retiro de cerco perimetral, pajareras, postes de 3 y 4 m, bases y yugos.', 'Retiro de atracaderos, reticulado de boyas cabeceras y barandas.', 'Descostura de perimetral a lobera.'],
    roles: { supervisor: ['Planificar y controlar el desarme y autorizar o suspender la faena.'], soldador: ['Cortes y trabajos en caliente con el PTC y prácticas seguras.'], patron: ['Conducción segura de la embarcación y apoyo al izaje.'], motorista: ['Apoyo a la operación de la embarcación.'], tripulante: ['Apoyo en maniobras e izaje de materiales.'], _: ['Desarmar bajo supervisión, usar el EPP y reportar condiciones inseguras.'] },
    epp: ['Casco', 'Guantes', 'Gafas de seguridad', 'Arnés de seguridad y línea de vida', 'Chaleco salvavidas en todo momento', 'Botas con punta de acero', 'Ropa de trabajo resistente', 'Protector auditivo'],
    pasos: [{ t: 'Inicio', l: ['Reunión de coordinación y asignación de roles.', 'Inspección de equipos y herramientas.'] },
      { t: 'Desarme', l: ['Retirar la malla perimetral desanclando los postes y enrollándola.', 'Desmontar postes con grúa, retirar yugos y asegurar lo que queda en pie.', 'Desanclar y retirar vientos sin dejar estructuras con riesgo de caída.', 'Desanclar boyas cabeceras y enrollar los cabos.', 'Retirar barandas y almacenarlas.', 'Inspección final, limpieza e informe.'] }],
    detener: ['Estructuras inestables.', 'Mar o viento que impidan trabajar seguro.', 'Equipos de izaje con fallas.'],
    orden: ['Reunión de coordinación y roles', 'Inspección de equipos y herramientas', 'Retiro de la malla perimetral', 'Desarme de postes y yugos', 'Retiro de boyas, cabos y barandas', 'Inspección final, limpieza e informe'],
    quiz: [
      { p: 'Al desarmar postes y yugos, ¿qué se asegura?', op: ['Nada', 'La estabilidad de las estructuras que quedan', 'La pintura', 'El horario'], ok: 2 },
      { p: '¿Cuándo se usa el chaleco salvavidas en el cierre?', op: ['En todo momento', 'Solo al navegar', 'Nunca', 'Solo si llueve'], ok: 1 },
      { p: '¿Qué se hace con los vientos de los postes?', op: ['Se cortan en tensión', 'Se desanclan y retiran sin dejar estructuras con riesgo de caída', 'Se dejan', 'Se tiran al mar'], ok: 2 },
      { p: '¿Qué se revisa al empezar la jornada?', op: ['El estado de equipos y herramientas', 'Las redes sociales', 'Nada', 'Solo la comida'], ok: 1 }
    ] },
  'PTS-012': {
    objetivo: 'Controlar el riesgo de caída desde altura en mantención, inspección, armado, reparación u operación en estructuras flotantes, embarcaciones y centros.',
    alcance: ['Todo trabajo con riesgo de caída de altura en faenas de PyV.'],
    roles: { supervisor: ['Evaluar el área, validar EPP y anclajes y supervisar directamente toda la tarea.'], patron: ['No hacer maniobras de atraque o desatraque mientras hay trabajo en altura.', 'Mantener comunicación con el equipo.'], prevencion: ['Capacitar, inspeccionar y asegurar el kit de rescate.'], jefe_operaciones: ['Proveer equipos certificados y coordinar los recursos.'], _: ['Usar el EPP conectado a la línea de vida o anclaje certificado.', 'Reportar de inmediato incidentes y condiciones adversas.', 'Suspender ante cambios de clima o inseguridad.'] },
    epp: ['Arnés de cuerpo completo', 'Línea de vida o cabo con absorbedor', 'Casco con barbiquejo', 'Guantes', 'Calzado antideslizante', 'Chaleco salvavidas sobre estructuras flotantes'],
    pasos: [{ t: 'Requisitos mínimos', l: ['Viento menor a 40 km/h.', 'Iluminación de al menos 300 lux.', 'Estructuras validadas con checklist.', 'Anclajes de 5.000 lb (22,2 kN) o certificados.', 'Supervisión directa durante toda la tarea.', 'Personal capacitado y con ficha médica vigente.'] },
      { t: 'Antes, durante y después', l: ['Antes: clima, área, anclajes, EPP, AST de altura y zona de caída de objetos delimitada.', 'Durante: siempre conectado, herramientas amarradas, comunicación constante.', 'Después: retirar equipos, inspeccionar y guardar el EPP, registrar observaciones.'] }],
    detener: ['Baja visibilidad: niebla espesa, lluvia intensa u oscuridad.', 'Maniobras de atraque o desatraque simultáneas.', 'Cambio súbito del clima.', 'EPP vencido o deteriorado.', 'Techumbres o pasillos frágiles sin evaluación.'],
    orden: ['Verificar clima, viento y visibilidad', 'Evaluar el área y los puntos de anclaje', 'Revisar el EPP y completar el AST de altura', 'Delimitar la zona de caída de objetos', 'Trabajar siempre conectado y con herramientas amarradas', 'Retirar equipos e inspeccionar el EPP'],
    quiz: [
      { p: '¿Con qué viento máximo se autoriza el trabajo en altura?', op: ['Menos de 40 km/h', 'Menos de 80 km/h', 'No importa', 'Menos de 100 km/h'], ok: 1 },
      { p: '¿Se puede trabajar en altura mientras la embarcación atraca?', op: ['Sí', 'No, está estrictamente prohibido', 'Solo si es rápido', 'Solo con casco'], ok: 2 },
      { p: '¿Qué pasa con un arnés que detuvo una caída?', op: ['Se sigue usando', 'Se retira de servicio de inmediato', 'Se lava', 'Se presta'], ok: 2 },
      { p: '¿Qué hay que tener disponible en faenas alejadas?', op: ['Un kit de rescate', 'Una radio de música', 'Nada', 'Solo agua'], ok: 1 },
      { p: '¿Cómo se trabaja con las herramientas en altura?', op: ['Sueltas en el bolsillo', 'Aseguradas con eslingas o cinturón porta-herramientas', 'En la mano sin amarrar', 'En el suelo'], ok: 2 }
    ] },
  'PTS-017': {
    objetivo: 'Izar y mover cargas con la grúa o brazo hidráulico y el winche de las embarcaciones según su capacidad certificada, las condiciones del mar y el clima.',
    alcance: ['Supervisor de faena, operador de grúa o winche, eslingador (rigger), tripulantes y operarios de apoyo.', 'Grúas HIAB 080 (Juan Eduardo), Bonfiglioli Z6400 (Yessica I), FASSI F95B (La Minga) y Palfinger PK 13.501 (Don Santiago).'],
    roles: { supervisor: ['Planificar, coordinar y autorizar la maniobra.', 'Definir la zona de exclusión y evaluar la línea de tensión.'], patron: ['Mantener la embarcación estable, sin desplazamiento durante el izaje.', 'Operar el equipo según el fabricante y su tabla de carga, si te corresponde.'], _: ['Mantener el área despejada y respetar la zona de exclusión.', 'No entrar en la línea de tensión.', 'No intervenir en la maniobra sin autorización.', 'Cualquier trabajador puede detener la maniobra si ve un riesgo.'] },
    epp: ['Casco con barbiquejo', 'Chaleco salvavidas en cubierta', 'Guantes antideslizantes y anticorte', 'Calzado de seguridad', 'Lentes de seguridad', 'Arnés si hay riesgo de caída'],
    pasos: [{ t: 'Antes del izaje', l: ['Evaluar clima y mar.', 'Conocer el peso de la carga y verificar que no supere la carga segura (SWL) según el alcance.', 'Definir el punto de izaje según el centro de gravedad.', 'Delimitar la zona de exclusión; AST y charla de coordinación.', 'Inspeccionar brazo, mangueras, controles, eslingas y grilletes. Con cualquier anomalía, no se inicia.'] },
      { t: 'Durante y al terminar', l: ['Levantar lento, progresivo y vertical, sin tirones.', 'Nunca pasar la carga sobre personas.', 'Usar cuerdas guía y patecas para evitar roces.', 'Al terminar: bajar controlado, liberar accesorios, retraer el brazo y registrar en bitácora.'] }],
    detener: ['Pérdida de control de la carga.', 'Condiciones climáticas adversas.', 'Fallas del equipo o ruido anormal.', 'Problemas de comunicación.', 'Comportamiento irregular del cable o cabo.'],
    orden: ['Evaluar clima, mar y peso de la carga', 'Delimitar la zona de exclusión y hacer el AST', 'Inspeccionar el equipo y los accesorios', 'Asegurar la carga y confirmar comunicación', 'Izar lento y controlado sin pasar sobre personas', 'Retraer el brazo y registrar en bitácora'],
    quiz: [
      { p: '¿Qué está prohibido durante cualquier izaje?', op: ['Usar casco', 'Pasar la carga sobre personas', 'Comunicarse por radio', 'Usar cuerdas guía'], ok: 2 },
      { p: '¿Qué es la línea de tensión?', op: ['Un cable eléctrico', 'La zona donde un cable en tensión puede golpear si se corta (efecto látigo)', 'La fila para embarcar', 'La línea de vida'], ok: 2 },
      { p: 'En la inspección previa detectas una eslinga cortada. ¿Qué haces?', op: ['La uso con cuidado', 'No se inicia la faena hasta reemplazarla', 'La amarro', 'La doy vuelta'], ok: 2 },
      { p: '¿Quién puede detener una maniobra si ve un riesgo?', op: ['Solo el supervisor', 'Cualquier trabajador', 'Solo el operador', 'Nadie'], ok: 2 },
      { p: '¿Con qué condiciones no se iza?', op: ['Vientos fuertes, marejada o visibilidad reducida', 'Día soleado', 'Con poca carga', 'En la mañana'], ok: 1 }
    ] },
  'PTS-021': {
    objetivo: 'Instalar, retirar y mantener bases, postes, arcos pajareros, yugos, cabos y redes pajareras de forma planificada, coordinada y controlada.',
    alcance: ['Manipulación manual de estructuras y trabajo sobre plataformas flotantes.', 'Trabajo en altura y cabos bajo tensión.', 'Uso de brazo hidráulico y winche.'],
    roles: { supervisor: ['Coordinar con el centro, hacer el AST y definir líneas de fuego y zonas de exclusión.', 'Verificar la dotación necesaria para cada etapa.', 'Suspender cuando las condiciones no permitan trabajar seguro.'], tripulante: ['Operador del brazo hidráulico o winche: operar solo con coordinación del supervisor o señalero y sin personas expuestas.'], _: ['Identificar y controlar las líneas de fuego.', 'Informar cualquier deterioro de bases, postes, yugos, cabos o grilletes.', 'Detener la maniobra ante pérdida de comunicación o condición insegura.'] },
    epp: ['Casco con barbiquejo', 'Guantes', 'Calzado de seguridad', 'Chaleco salvavidas o flotación personal', 'Arnés y protección contra caídas en altura'],
    pasos: [{ t: 'Antes de empezar', l: ['Coordinar con el responsable del centro e identificar jaula, módulo y sector.', 'AST con los trabajadores; revisar EPP, herramientas y accesorios.', 'Despejar cabos, mangueras y herramientas; definir un sector de acopio.', 'Identificar líneas de fuego y zonas de exclusión.', 'Verificar la dotación y las condiciones del mar y el clima.'] },
      { t: 'Arcos y cabos', l: ['El arco pajarero se levanta a mano con mínimo 4 trabajadores.', 'Las manos nunca entre el poste y la base.', 'Nadie bajo un arco, poste o yugo en movimiento.', 'No intervenir grilletes, pastecas ni cabos mientras están en tensión.', 'Mientras alguien esté conectado al cabo superior, nadie lo suelta ni modifica.'] }],
    detener: ['Viento, lluvia u oleaje que afecten la estabilidad.', 'Movimiento excesivo de las estructuras flotantes.', 'Visibilidad reducida.', 'Pérdida de comunicación o rotura de un accesorio.'],
    orden: ['Coordinar con el centro y hacer el AST', 'Despejar el área y definir el acopio', 'Identificar líneas de fuego y zonas de exclusión', 'Verificar la dotación mínima', 'Levantar el arco entre al menos 4 trabajadores', 'Revisión final y orden del área'],
    quiz: [
      { p: '¿Cuántos trabajadores se necesitan como mínimo para levantar a mano un arco pajarero?', op: ['2', '3', '4', '6'], ok: 3 },
      { p: '¿Qué está prohibido hacer con un cabo en tensión?', op: ['Mirarlo', 'Cortarlo o intervenir sus conexiones', 'Señalizarlo', 'Alejarse'], ok: 2 },
      { p: 'Un arco empieza a perder estabilidad. ¿Qué haces?', op: ['Lo sujeto con el cuerpo', 'Me alejo de la línea de fuego y aviso', 'Lo empujo', 'Me subo a la baranda'], ok: 2 },
      { p: '¿Dónde no deben ir nunca las manos al posicionar un poste?', op: ['En los guantes', 'Entre el poste y la base', 'En la baranda', 'En el bolsillo'], ok: 2 }
    ] }
};

Object.keys(_PTS).forEach(function (cod) {
  var P = _PTS[cod], id = cod.toLowerCase(), proc = CONTENIDO.procedimientos.filter(function (x) { return x.id === cod; })[0] || { claves: [], archivo: '' };
  CONTENIDO.lecciones[id + '.l1'] = function (cargo) {
    var rol = P.roles[cargo] || P.roles._ || [];
    return { documento: proc.archivo, diapositivas: [
      { t: 'Para qué sirve el ' + cod, x: P.objetivo, l: P.alcance },
      { t: 'Tu rol como ' + _nombreCargo(cargo), l: rol.concat(P.roles[cargo] && P.roles._ ? [] : []) },
      { t: 'EPP obligatorio', l: P.epp, tip: 'Revísalo antes de usarlo. Si está dañado, avisa y pide reposición.' }
    ].concat(P.pasos.map(function (s) { return { t: 'Paso a paso: ' + s.t.toLowerCase(), l: s.l }; }), [
      { t: 'Detén el trabajo si…', l: P.detener, tip: 'Cualquier trabajador puede detener una tarea ante un riesgo grave e inminente, avisando de inmediato.' },
      { t: 'Puntos clave', l: proc.claves.length ? proc.claves : P.detener }
    ]) };
  };
  CONTENIDO.lecciones[id + '.ld'] = function (cargo) {
    var d = [{ t: 'Quién participa en el ' + cod, x: 'Un procedimiento funciona cuando cada persona sabe qué le toca. Estas son las responsabilidades de cada cargo en esta tarea:' }];
    Object.keys(P.roles).filter(function (k) { return k !== '_'; }).forEach(function (k) {
      d.push({ t: (k === cargo ? 'Tú: ' : '') + _nombreCargo(k), l: P.roles[k], tip: k === cargo ? 'Esta es tu parte. Si no puedes cumplir alguno de estos puntos, avisa antes de empezar.' : undefined });
    });
    d.push({ t: 'Coordinación antes de empezar', l: ['Charla y AST con todo el equipo: tareas, riesgos, controles y señales de comunicación.', 'Permiso de trabajo firmado cuando la tarea lo exige (trabajo en caliente, altura, izaje, buceo).', 'Revisión de clima, equipos, EPP y condiciones del área.', 'Cada persona confirma que entendió su rol y que está en condiciones de trabajar.'] });
    if (proc.archivo) d.push({ t: 'Lee el documento completo', x: 'Abre el ' + cod + ' con el botón «Ver documento completo» y revisa con calma: alcance, definiciones, responsabilidades, desarrollo de la tarea y registros.', l: ['Fíjate en los pasos que te tocan a ti.', 'Busca los criterios para detener el trabajo.', 'Anota tus dudas para consultarlas a tu Supervisor o a Prevención de Riesgos.'], tip: 'El tiempo que pasas leyendo el documento con la cápsula abierta cuenta para tu registro.' });
    d.push({ t: 'Registros del procedimiento', l: ['AST o análisis seguro de trabajo de la jornada.', 'Permiso de trabajo cuando corresponde.', 'Checklist de equipos y EPP.', 'Registro de capacitación y de entrega de EPP.', 'Reporte de incidentes y condiciones inseguras.'] });
    return { documento: proc.archivo, diapositivas: d };
  };
  CONTENIDO.lecciones[id + '.lr'] = function (cargo) {
    var todos = _riesgosCargo(cargo), R = todos.filter(function (r) { return (r.pts || []).some(function (x) { return String(x).toUpperCase().indexOf(cod) >= 0; }); });
    if (R.length < 3) R = todos.filter(function (r) { return r.nivel >= 2; });
    R = R.slice().sort(function (a, b) { return b.nivel - a.nivel; }).slice(0, 14);
    var d = [{ t: 'Los riesgos de esta tarea', x: 'Según la Matriz IPER 2026 de PyV, al trabajar con el ' + cod + ' como ' + _nombreCargo(cargo) + ' te expones a estos riesgos. Para cada uno verás qué lo provoca, qué puede causar y cómo se controla.' }];
    R.forEach(function (r, i) {
      d.push({ t: (i + 1) + '. ' + r.riesgo + ' · ' + r.nivelTxt, x: 'Peligro: ' + _lista(r.peligros, 2).join(' / ') + '.\nPuede causar: ' + _lista(r.consecuencias, 1).join('') + '.',
        l: [].concat(_lista(r.ingenieria, 1).map(function (c) { return 'Ingeniería: ' + c; }), _lista(r.administrativo, 2).map(function (c) { return 'Administrativo: ' + c; }), r.eppItems && r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 6).join(', ')] : []) });
    });
    d.push({ t: 'Recuerda', l: ['Los controles funcionan solo si están todos: si falta uno, la tarea no empieza.', 'Si ves un riesgo que no está en esta lista, avísalo: la Matriz se actualiza con lo que informan los trabajadores.'] });
    return { diapositivas: d };
  };
  CONTENIDO.juegos[id + '.j2'] = { intro: 'Durante el ' + cod + ' pasan cosas. Decide en cada caso si detienes el trabajo y avisas, o si puedes continuar.', partes: [{ tipo: 'clasificar',
    categorias: [{ id: 'det', nombre: 'Detengo y aviso' }, { id: 'sig', nombre: 'Puedo continuar' }],
    items: P.detener.slice(0, 5).map(function (x) { return { t: x.charAt(0).toUpperCase() + x.slice(1), c: 'det', fb: 'Es un criterio de detención del ' + cod + ': se detiene, se avisa y solo se reanuda cuando se corrige.' }; }).concat(
      [].concat.apply([], P.pasos.map(function (st) { return st.l.slice(0, 1); })).slice(0, 4).map(function (x) { return { t: 'Se cumple: ' + x.charAt(0).toLowerCase() + x.slice(1), c: 'sig', fb: 'Es parte normal del procedimiento: si se cumple, la tarea sigue.' }; })) }] };
  CONTENIDO.talleres[id + '.t1'] = function (cargo) {
    var paso = P.pasos[Math.min(1, P.pasos.length - 1)], det = P.detener[0] || 'falta un control crítico';
    return { intro: 'Aplica el ' + cod + ' a situaciones reales. Tus respuestas quedan registradas para Prevención de Riesgos.', partes: [
      { tipo: 'abierta', p: 'En la etapa «' + paso.t + '», ¿qué podría salir mal y qué haces tú para evitarlo, en tu rol de ' + _nombreCargo(cargo) + '?', min: 60, alApr: true,
        modelo: 'Una buena respuesta nombra un paso concreto (por ejemplo: ' + (paso.l[0] || '') + '), el riesgo si no se cumple y la acción que te corresponde: verificar, avisar o detener.' },
      { tipo: 'abierta', p: 'Estás en la faena y ocurre esto: «' + det + '». ¿Qué haces, a quién avisas y cuándo se puede reanudar el trabajo?', min: 50, alApr: true,
        modelo: 'Se detiene la tarea de inmediato, se avisa al Supervisor (y al Patrón si es a bordo), se corrige la condición y solo se reanuda cuando el Supervisor confirma que los controles están en su lugar.' },
      { tipo: 'vep', desdeIper: true, n: 2 },
      { tipo: 'abierta', p: '¿Qué parte del ' + cod + ' cuesta más cumplir en la práctica y qué propondrías para mejorarla?', min: 30, alApr: true,
        modelo: 'Gracias. Prevención de Riesgos revisa estas respuestas al actualizar el procedimiento.' }
    ] };
  };
  CONTENIDO.juegos[id + '.j1'] = { intro: 'Ordena los pasos principales del ' + cod + ', del primero al último.', partes: [{ tipo: 'ordenar', enunciado: 'Secuencia del ' + cod, items: P.orden, fb: 'Revisa el procedimiento completo si tuviste dudas.' }] };
  CONTENIDO.quiz[id] = { n: P.quiz.length, preguntas: P.quiz.map(function (q) { return { p: q.p, op: q.op, ok: q.ok, fbOk: 'Correcto.', fbNo: 'La respuesta correcta es: ' + q.op[q.ok - 1] + '.' }; }) };
  CONTENIDO.firmas[id + '.f1'] = function (cargo) {
    return { texto: 'Declaro que recibí, leí y comprendí el procedimiento ' + cod + ' de ' + CONTENIDO.empresa.nombre + ', sus riesgos, medidas de control, EPP y criterios de detención, y que me comprometo a cumplirlo en mi cargo de ' + _nombreCargo(cargo) + '.',
      lista: P.detener.map(function (d) { return ['Detener si', d]; }) };
  };
});
