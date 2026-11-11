/* js/cursos_gl.js */
/* GL Capacita — contenidos de las capacitaciones de la empresa (IRL, RIOHS y Ley Karin, IPER, emergencias, EPP,
   accidentes, PTS) y talleres asincrónicos del curso obligatorio.
   Fuentes: Matriz IPER GL v02, PDR-01, PDR-02, PTS-ROV-001 v04, PTS-TAL-001, PRT-EST-01, PRO-ACC-01,
   Procedimiento de EPP v02, RIOHS 2026, Protocolo Ley Karin y manual del facilitador del curso tipo
   (Res. Ex. 1117/2026), cuyas actividades presenciales se adaptaron a modalidad asincrónica. */
CONTENIDO.lecciones = {};
CONTENIDO.talleres = {};
CONTENIDO.quiz = {};
CONTENIDO.firmas = {};

function _riesgosCargo(cargo) { return (((window.IPER_EMPRESA || {})[cargo]) || { riesgos: [] }).riesgos; }
function _nombreCargo(cargo) { var c = PLAN.cargo(cargo); return c ? c.nombre : cargo; }

/* =====================================================================
   TALLERES ASINCRÓNICOS DEL CURSO OBLIGATORIO
   ===================================================================== */
CONTENIDO.talleres['ds44.t1'] = {
  intro: 'Este taller reemplaza la actividad grupal "Seguro de la Ley 16.744 y procedimiento de denuncia". Lee el caso, responde con tus palabras y compara con la respuesta esperada.',
  partes: [
    { tipo: 'lectura', titulo: 'El caso de Matías', texto: 'Matías es piloto ROV y está solo en un centro de cultivo, en el día 9 de su turno. Al cambiar una hélice del ROV en el pontón, la mano se le resbala y se hace un corte profundo en un dedo. Se pone cinta aislante para no "complicar" a nadie y sigue trabajando. Dos días después el dedo está hinchado y con fiebre. Va a un centro de salud por su cuenta, paga la consulta con su previsión y le dan reposo. Nadie en GL se entera hasta que vuelve del turno.' },
    { tipo: 'abierta', p: '¿Qué errores cometió Matías y qué falló a su alrededor?', min: 40,
      modelo: 'No avisó de inmediato a la Jefa de Operaciones ni al jefe de centro. No fue atendido en la ACHS. Nadie presentó la DIAT dentro de 24 horas. Pagó una atención que debía ser gratuita. Además, manipuló la hélice probablemente sin desenergizar y sin guantes, y el control del trabajo aislado (reporte diario) no detectó que algo le había pasado.' },
    { tipo: 'abierta', p: 'Si esto te pasa en GL, ¿qué debes hacer paso a paso?', min: 40,
      modelo: 'Detener la tarea y dar primeros auxilios. Avisar de inmediato a la Jefa de Operaciones (Mery Leal) y al jefe de centro, aunque parezca leve. Ir a la ACHS o al centro asistencial más cercano (urgencias ACHS 1404). La Jefa de Operaciones presenta la DIAT dentro de 24 horas. Si la empresa no la hace, la puedes hacer tú, un familiar o un compañero.' },
    { tipo: 'escenario', casos: [{ titulo: 'El seguro de la Ley 16.744', pasos: [
      { p: '¿Cuál es el organismo administrador del seguro en GL?', o: [
        { t: 'ACHS (Asociación Chilena de Seguridad).', ok: true, fb: 'Correcto. Entrega atención médica gratuita, subsidios, rehabilitación y prevención.' },
        { t: 'FONASA.', fb: 'FONASA es la salud común. Los accidentes del trabajo los cubre la ACHS.' },
        { t: 'La isapre de cada trabajador.', fb: 'Las isapres no cubren accidentes del trabajo: los cubre la ACHS.' }] },
      { p: '¿Qué prestaciones tienes si te accidentas trabajando?', o: [
        { t: 'Atención médica gratuita, subsidio mientras estás con licencia y rehabilitación si la necesitas.', ok: true, fb: 'Correcto. Y si queda una secuela, indemnización o pensión según el grado de invalidez.' },
        { t: 'Solo la atención de urgencia.', fb: 'El seguro cubre la atención completa hasta el alta, más subsidios y rehabilitación.' }] },
      { p: 'La ACHS dice que tu caso no es laboral y no estás de acuerdo. ¿Qué puedes hacer?', o: [
        { t: 'Reclamar ante la Superintendencia de Seguridad Social (SUSESO).', ok: true, fb: 'Correcto. La Asesora en Prevención te puede orientar con el trámite.' },
        { t: 'Nada, la decisión es definitiva.', fb: 'Tienes derecho a reclamar ante la SUSESO.' }] }
    ] }] },
    { tipo: 'abierta', p: 'Reflexión final: ¿qué derecho o deber no conocías antes de este módulo?', min: 20,
      modelo: 'No hay respuesta única. Lo importante es que sepas que puedes detener tu trabajo ante un riesgo grave e inminente, que la atención por accidente es gratuita y que tienes un Delegado de SST (Damián González) que te representa.' }
  ]
};

CONTENIDO.talleres['ds44.t2'] = {
  intro: 'Este taller reemplaza "MIPER grupal" y "Mapa de riesgos en grupos". Vas a evaluar riesgos reales de tu cargo con la misma regla de la Matriz IPER de GL y a armar un mapa de riesgos.',
  partes: [
    { tipo: 'lectura', titulo: 'Cómo evalúa GL un riesgo', texto: 'Cada riesgo se evalúa multiplicando la Probabilidad (P) por la Severidad (S), según la guía del ISP.\n\nProbabilidad: Baja = 1, Media = 2, Alta = 4.\nSeveridad: Ligeramente dañino = 1 (lesiones superficiales), Dañino = 2 (laceraciones, quemaduras, esguinces), Extremadamente dañino = 4 (lesiones graves, amputaciones, muerte).\n\nResultado: 1 o 2 Tolerable · 4 Moderado · 8 Importante · 16 Intolerable. Con Importante o Intolerable no se comienza ni continúa el trabajo hasta reducir el riesgo.' },
    { tipo: 'vep', desdeIper: true, n: 2 },
    { tipo: 'abierta', p: 'Elige uno de los riesgos que evaluaste. ¿Qué medidas de control propones, empezando por la más eficaz?', min: 40,
      modelo: 'Primero eliminar o sustituir (por ejemplo, sacar los aerosoles del banco de soldadura o cambiar el limpiacontactos con n-hexano por uno sin n-hexano). Luego ingeniería (gabinete de inflamables, extractor de humos, barandas en el pontón). Después lo administrativo (PTS, checklist, supervisión, pausas). Al final el EPP (lentes, guantes de nitrilo, chaleco salvavidas).' },
    { tipo: 'emparejar', titulo: 'Mapa de riesgos del taller', pares: [
      { a: 'Banco de soldadura con aerosoles al lado', b: 'Incendio' },
      { a: 'Zona de carga de baterías de litio', b: 'Incendio por sobrecalentamiento' },
      { a: 'Repisas altas con maletas Pelican', b: 'Caída de objetos' },
      { a: 'Estufas a parafina y a leña encendidas', b: 'Intoxicación por monóxido de carbono' },
      { a: 'Carretes de umbilical y cajas en el piso', b: 'Caída al mismo nivel' },
      { a: 'ROV abierto con la batería conectada', b: 'Cortocircuito y contacto eléctrico' }
    ] }
  ]
};

CONTENIDO.talleres['ds44.t3'] = {
  intro: 'Este taller reemplaza "Personas especialmente sensibles y medidas de control". Analiza los casos y propone medidas.',
  partes: [
    { tipo: 'lectura', titulo: 'Personas especialmente sensibles', texto: 'Son personas que, por su condición, pueden sufrir más daño frente al mismo riesgo: alguien que vuelve de una lesión, una trabajadora embarazada o en lactancia, una persona con una enfermedad crónica o con discapacidad, o un estudiante en práctica sin experiencia. La empresa debe evaluar su puesto y aplicar ajustes razonables. La Matriz IPER de GL tiene columnas para estas personas y para consideraciones sexogenéricas, como tallas reales de EPP.' },
    { tipo: 'lectura', titulo: 'Caso: Felipe', texto: 'Felipe es piloto ROV y vuelve de una licencia por una lesión lumbar. Su próxima faena incluye subir y bajar maletas con el ROV y baterías desde la panga al pontón.' },
    { tipo: 'abierta', p: '¿Qué riesgos aumentan para Felipe en esta faena?', min: 30,
      modelo: 'La manipulación manual de las maletas y baterías, en especial al embarcar y desembarcar en superficies que se mueven, puede agravar su lesión lumbar. También las posturas mantenidas en la consola, el frío y la fatiga.' },
    { tipo: 'clasificar', titulo: 'Clasifica las medidas para el caso de Felipe', categorias: [{ id: 'eliminacion', nombre: 'Eliminación o sustitución' }, { id: 'ingenieria', nombre: 'Ingeniería' }, { id: 'administrativo', nombre: 'Administrativa' }, { id: 'epp', nombre: 'EPP' }],
      items: [
        { t: 'Trasladar las maletas con carro o con la grúa de la embarcación', c: 'ingenieria', fb: 'Es un medio mecánico que reduce la carga física.' },
        { t: 'Que otra persona del centro haga los traslados mientras se recupera', c: 'eliminacion', fb: 'Se elimina su exposición al riesgo mientras se recupera.' },
        { t: 'Rotular el peso de cada maleta y levantar entre dos sobre 25 kg', c: 'administrativo', fb: 'Organizar el trabajo es un control administrativo.' },
        { t: 'Guantes con buen agarre', c: 'epp', fb: 'Ayuda, pero es la última barrera.' },
        { t: 'Que el médico de la ACHS indique sus restricciones antes de volver', c: 'administrativo', fb: 'La vigilancia de salud orienta el ajuste razonable.' }
      ] },
    { tipo: 'lectura', titulo: 'Caso: Camila', texto: 'Camila es estudiante en práctica en el taller y tiene 19 años. Es su primera semana. Le interesa mucho la impresión 3D y quiere ayudar con la limpieza de componentes con solventes y con las pruebas del ROV.' },
    { tipo: 'abierta', p: '¿Qué medidas propondrías para Camila?', min: 30,
      modelo: 'Inducción e IRL-04 antes de empezar, con el recorrido del taller y el PDR-02. Solo tareas permitidas y siempre con su supervisor presente. Puede lavar y curar piezas 3D y limpiar con solventes en cantidad mínima, con guantes de nitrilo y lentes. Las pruebas energizadas y de estanqueidad solo las observa a distancia. Nunca queda sola en el taller.' }
  ]
};

CONTENIDO.talleres['ds44.t4'] = {
  intro: 'Este taller reemplaza "Detectives de señalética" y el uso práctico de extintores. Tu respuesta a la última pregunta le llega a la Asesora en Prevención de Riesgos.',
  partes: [
    { tipo: 'checklist', titulo: '¿Qué debe estar señalizado en el taller?', msgFalta: 'Esto sí debe estar señalizado.', cierre: 'La señalética se revisa en las inspecciones. Si falta algo, avísale al encargado de taller o a la Asesora.',
      items: [
        { t: 'Ubicación de extintores', ok: true }, { t: 'Salida y vía de evacuación', ok: true },
        { t: 'Riesgo eléctrico en el tablero', ok: true }, { t: 'Prohibido fumar e inflamables en el gabinete', ok: true },
        { t: 'Zona de carga de baterías', ok: true }, { t: 'Botiquín de primeros auxilios', ok: true },
        { t: 'Uso obligatorio de lentes en el banco', ok: true },
        { t: 'Horario de colación', ok: false, fb: 'Es información útil, pero no es señalización de seguridad.' },
        { t: 'Nombre de cada equipo ROV en su maleta', ok: false, fb: 'Sirve para el orden, pero no es señalética de seguridad.' }
      ] },
    { tipo: 'escenario', casos: [{ titulo: 'Simulación: amago de incendio', pasos: [
      { p: 'Ves humo saliendo de un cargador de baterías en el taller. ¿Qué haces primero?', o: [
        { t: 'Dar la alarma a viva voz y cortar la energía si es seguro.', ok: true, fb: 'Correcto. Luego, si el fuego es incipiente, se usa el extintor.' },
        { t: 'Ir a buscar agua.', fb: 'Con equipos eléctricos y baterías el agua es peligrosa. Primero alarma y corte de energía.' }] },
      { p: 'Tomas el extintor PQS. ¿Dónde te ubicas?', o: [
        { t: 'Con la salida asegurada detrás de mí.', ok: true, fb: 'Correcto. Así puedes retirarte si el fuego crece.' },
        { t: 'Lo más cerca posible del fuego, aunque quede encerrado.', fb: 'Nunca te quedes sin salida.' }] },
      { p: '¿Hacia dónde apuntas la boquilla?', o: [
        { t: 'A la base de las llamas, barriendo de lado a lado.', ok: true, fb: 'Correcto.' },
        { t: 'A la punta de las llamas.', fb: 'El fuego se apaga atacando la base.' }] }
    ] }] },
    { tipo: 'abierta', p: 'Mira tu lugar de trabajo (pontón, embarcación, taller u oficina). ¿Qué señal, extintor o recurso de emergencia falta o está en mal estado?', min: 15, alApr: true,
      modelo: 'Gracias. Tu respuesta queda registrada para la Asesora en Prevención de Riesgos. También puedes avisar directamente a la Jefa de Operaciones o al Delegado de SST.' }
  ]
};

/* =====================================================================
   IRL · LOS RIESGOS DE TU CARGO
   ===================================================================== */
var _DONDE = {
  faena: 'Trabajas en centros de cultivo, pontones y embarcaciones de las empresas mandantes, en turnos de 14 por 14 días, habitualmente como única persona de GL en la faena.',
  taller: 'Trabajas en el taller de mantención y reparación de equipos ROV de GL, de lunes a sábado de 09:00 a 13:00 y de 14:00 a 17:00 horas.',
  mixto: 'Trabajas en la oficina, visitas el taller y las faenas, y conduces a puertos y trámites.'
};
CONTENIDO.lecciones['irl.l1'] = function (cargo) {
  var R = _riesgosCargo(cargo), top = R.filter(function (r) { return r.nivel >= 2; }).slice(0, 6);
  if (top.length < 3) top = R.slice(0, 6);
  var data = (window.IPER_EMPRESA || {})[cargo] || {};
  var d = [{ t: 'Tu derecho a saber', x: 'El D.S. 44 obliga a ' + CONTENIDO.empresa.nombre + ' a informarte, antes de empezar y cada vez que cambie tu trabajo, los riesgos de tu cargo, las medidas para controlarlos y la forma correcta de trabajar.\n\nEsta cápsula sale de la Matriz IPER v02 de la empresa para el cargo de ' + _nombreCargo(cargo) + '.',
    l: [_DONDE[PLAN.area(cargo)] || '', (data.procesos || []).length ? 'Tareas evaluadas para tu cargo: ' + data.procesos.length + '.' : ''].filter(Boolean) }];
  top.forEach(function (r) {
    d.push({ t: r.riesgo + ' · ' + r.nivelTxt, x: 'Peligro: ' + (r.peligros[0] || ''), l: ['Puede causar: ' + (r.consecuencias[0] || '')].concat(
      [].concat(r.ingenieria.slice(0, 1), r.administrativo.slice(0, 2)).filter(Boolean).map(function (c) { return 'Control: ' + c; }),
      r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 5).join(', ')] : []) });
  });
  d.push({ t: 'Tu rol en una emergencia', l: CONTENIDO.rolEmergencia[cargo] || [] });
  d.push({ t: 'Tus derechos', l: ['Detener tu trabajo y alejarte ante un riesgo grave e inminente, avisando de inmediato.', 'Recibir tu EPP gratis y su reposición cuando se deteriora.', 'Ser capacitado en los riesgos y procedimientos de tu trabajo.', cargo === 'alumno' ? 'Atención gratuita con el seguro escolar si te accidentas en la práctica.' : 'Atención médica gratuita en la ACHS si te accidentas o enfermas por el trabajo.', 'Acudir al Delegado de SST, Damián González Mansilla, con cualquier problema de seguridad.'] });
  var procs = CONTENIDO.procedimientosDe(cargo);
  d.push({ t: 'Tus procedimientos', x: 'Estos documentos explican cómo hacer tu trabajo de forma segura. Varios tienen su propia capacitación en la plataforma.', l: procs.map(function (p) { return p.id + ' · ' + p.titulo; }) });
  return { diapositivas: d };
};
CONTENIDO.juegos['irl.j1'] = { intro: 'Une cada riesgo de tu cargo con lo que puede causar, según la Matriz IPER de GL.', partes: [{ tipo: 'emparejar', desdeIper: true }] };
CONTENIDO.firmas['irl.f1'] = function (cargo) {
  var R = _riesgosCargo(cargo);
  return { texto: 'Declaro que ' + CONTENIDO.empresa.nombre + ' me informó, mediante esta capacitación, los riesgos de mi cargo de ' + _nombreCargo(cargo) + ' identificados en la Matriz IPER vigente, las medidas preventivas para controlarlos, los métodos de trabajo correctos, mi rol en emergencias y los procedimientos que me aplican, conforme al artículo 15 del D.S. N° 44/2024. Tuve la posibilidad de consultar mis dudas a la Asesora en Prevención de Riesgos.',
    lista: R.map(function (r) { return [r.riesgo + ' (' + r.nivelTxt + ')', [].concat(r.administrativo.slice(0, 1), r.eppItems.slice(0, 3)).join('; ')]; }) };
};

/* ---------- IRL ampliada (3 horas, art. 15 D.S. 44) ---------- */
function _lista(a, n) { return (a || []).filter(Boolean).slice(0, n || 4); }
/* Protocolos y normas de vigilancia que activan los riesgos del cargo */
var _PROTOCOLOS = [
  { re: /ruido/i, id: 'PREXOR', nombre: 'Protocolo de Exposición Ocupacional a Ruido (PREXOR, MINSAL)', l: ['Se mide la dosis de ruido del puesto (compresores, herramientas, motores de la embarcación).', 'Si supera el criterio de acción, ingresas a vigilancia con audiometrías en la ACHS.', 'Protección auditiva donde esté indicado.'] },
  { re: /radiaci.*(uv|no ionizante)/i, id: 'RUV', nombre: 'Guía Técnica de Radiación Ultravioleta de origen solar (MINSAL)', l: ['En el mar la radiación UV llega directa y reflejada en el agua, aun nublado.', 'GL tiene el informe cualitativo de exposición a radiación UV de los pilotos.', 'Protector solar, ropa manga larga, gorro legionario y lentes con filtro UV.', 'Revisa el índice UV del día.'] },
  { re: /fr[ií]o/i, id: 'FRIO', nombre: 'Exposición a frío a la intemperie (D.S. 594 y guía del ISP)', l: ['Aplica al trabajo al aire libre con 10 °C o menos, considerando viento y lluvia.', 'Ropa en capas, cambio de ropa mojada, pausas de recuperación y vigilancia de síntomas de hipotermia.'] },
  { re: /repetitivo/i, id: 'TMERT', nombre: 'Protocolo de vigilancia de trastornos musculoesqueléticos de extremidades superiores (TMERT-EESS, MINSAL)', l: ['Identifica tareas con movimientos repetidos de manos, muñecas y brazos (joystick, consola, armado fino en el banco).', 'Si el riesgo no es aceptable se aplican pausas, rotación y cambios en la tarea.'] },
  { re: /manipulaci[oó]n manual/i, id: 'MMC', nombre: 'Ley 20.949 y Guía técnica de Manejo Manual de Carga', l: ['Peso máximo de 25 kg por persona; 20 kg para mujeres y menores de edad.', 'Las maletas del ROV, el umbilical y las baterías se levantan entre dos o con ayuda mecánica.', 'Carga pegada al cuerpo, espalda recta y sin girar el tronco.'] },
  { re: /postural|postura/i, id: 'ERGO', nombre: 'Evaluación de sobrecarga postural (Guía técnica MINSAL y D.S. 594)', l: ['Posturas forzadas o mantenidas: inclinado sobre el banco, cuello flectado frente a la pantalla, sentado por horas.', 'Pausas activas, altura del banco y de la pantalla ajustadas y alternar posturas.'] },
  { re: /psicosocial|carga de trabajo|equilibrio/i, id: 'CEAL', nombre: 'Protocolo de vigilancia de riesgos psicosociales · cuestionario CEAL-SM (SUSESO)', l: ['GL aplica el cuestionario CEAL-SM; tu participación es voluntaria y anónima.', 'Con los resultados se definen medidas sobre carga de trabajo, turnos y apoyo.'] },
  { re: /violencia|acoso/i, id: 'KARIN', nombre: 'Ley 21.643 (Ley Karin) · prevención del acoso y la violencia en el trabajo', l: ['GL tiene un protocolo de prevención y canales de denuncia.', 'Puedes denunciar en la empresa o directamente en la Inspección del Trabajo; la investigación es reservada.'] },
  { re: /aerosol|gases|vapores|qu[ií]mic/i, id: 'QUIM', nombre: 'D.S. 594 · agentes químicos y Hojas de Datos de Seguridad', l: ['Limpiacontactos, solventes, resinas, masillas y humos de soldadura tienen límites de exposición.', 'Revisa la HDS, ventila y usa la protección que indica.'] },
  { re: /biol[oó]gic/i, id: 'BIO', nombre: 'D.S. 594 · agentes biológicos', l: ['Contacto con agua de mar, mortalidad, biofouling y residuos orgánicos al recuperar y limpiar el ROV.', 'Guantes, higiene de manos y desinfección de equipos entre centros.'] }
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

/* Cápsula 2: el lugar de trabajo */
CONTENIDO.lecciones['irl.lw'] = function (cargo) {
  var area = PLAN.area(cargo), I = (window.IPER_EMPRESA || {})[cargo] || { riesgos: [], procesos: [] }, tareas = [];
  I.riesgos.forEach(function (r) { (r.tareas || []).forEach(function (t) { if (tareas.indexOf(t) < 0) tareas.push(t); }); });
  var d = [];
  if (area === 'faena') d.push({ t: 'Dónde trabajas', x: _DONDE.faena, l: ['Pontones, módulos y pasillos de jaulas de los centros de cultivo, embarcaciones de apoyo, pangas y muelles de las mandantes.', 'Superficies mojadas, inestables y en movimiento por el oleaje.', 'Clima cambiante: viento, lluvia, frío y radiación UV incluso nublado.', 'Lugares aislados: la ayuda médica puede estar a horas de distancia y dependes de la embarcación del centro.'] });
  else if (area === 'taller') d.push({ t: 'Dónde trabajas', x: _DONDE.taller, l: ['Recinto del taller con bancos de trabajo, repisas, bodega de equipos y zona de carga de baterías.', 'Oficina, cocina y baños en el primer piso; escalera interior y comedor en el segundo piso.', 'Calefacción con estufa a parafina y combustión lenta a leña: riesgo de incendio y de monóxido de carbono.', 'Una sola salida al exterior: debe estar siempre despejada.'] });
  else d.push({ t: 'Dónde trabajas', x: _DONDE.mixto, l: ['Oficina y gestión administrativa de la empresa.', 'Visitas al taller de mantención ROV.', 'Visitas a faenas: pontones y embarcaciones de las mandantes.', 'Conducción a puertos, centros y trámites.'] });
  if (tareas.length) d.push({ t: 'Tus tareas según la Matriz IPER', x: 'Estas son las tareas registradas para el cargo de ' + _nombreCargo(cargo) + ':', l: tareas.slice(0, 12) });
  if (tareas.length > 12) d.push({ t: 'Más tareas de tu cargo', l: tareas.slice(12, 24) });
  if (area === 'faena') {
    d.push({ t: 'El ambiente de trabajo en el pontón', l: ['Pasillos y cubiertas resbaladizos: calzado antideslizante y manos libres al desplazarte.', 'Bordes sin baranda: chaleco salvavidas puesto y abrochado siempre.', 'Ruido de generadores y motores: protección auditiva donde esté indicado.', 'Buzos en el agua: el ROV no opera sin coordinación formal con el centro.'] });
    d.push({ t: 'Equipos y herramientas', l: ['ROV (' + CONTENIDO.empresa.equipos.join(', ') + '), consola, umbilical y fuente de poder.', 'Baterías de litio y cargadores: se cargan sobre superficie no combustible y con supervisión.', 'Dron: solo con autorización y según DAN 151 de la DGAC.', 'Herramientas de corte de tensores y de extracción de mortalidad: revisa su estado antes de usarlas.'] });
  } else if (area === 'taller') {
    d.push({ t: 'Equipos y herramientas del taller', l: ['Cautín y estación de soldadura: soporte, extractor de humos y nada inflamable cerca.', 'Herramientas eléctricas: carcasa y cable sin daños, conectadas a enchufes en buen estado.', 'ROV en mantención: se desarma con la batería desconectada y con lentes de seguridad.', 'Baterías de litio: carga en la zona definida, sobre superficie no combustible y nunca sin supervisión.'] });
  } else {
    d.push({ t: 'Ambiente y equipos', l: ['Puesto de trabajo con pantalla a la altura de los ojos y pausas activas.', 'Vehículo de la empresa: revisión antes de salir, cinturón y sin celular al conducir.', 'En visitas a faena o al taller: el mismo EPP que exige el lugar.'] });
  }
  d.push({ t: 'Orden y aseo', x: 'El orden y el aseo son una medida de control: evitan caídas, golpes, incendios y pérdida de herramientas.', l: area === 'faena' ? ['Umbilical adujado y sin cruzar pasillos.', 'Maletas y equipos estibados y amarrados.', 'Residuos en sus contenedores; nada al mar.', 'Herramientas de vuelta en su lugar al terminar.'] : area === 'taller' ? ['Bancos despejados: inflamables en el gabinete, no junto al cautín.', 'Pasillos y salida sin maletas, bolsas ni cajas.', 'Repisas altas sin maletas pesadas.', 'Paños con solvente en tarro metálico con tapa; cenizas frías en recipiente metálico.'] : ['Pasillos y salidas libres.', 'Cables ordenados y enchufes sin sobrecarga.', 'Archivos y cajas en repisas firmes.'] });
  d.push({ t: 'Servicios para ti', l: area === 'faena' ? ['Agua potable, alimentación y servicios higiénicos según la faena y la mandante.', 'Botiquín y medios de rescate del centro y de la embarcación.', 'Comunicación con la Jefa de Operaciones al inicio y al término de cada jornada.'] : ['Servicios higiénicos, cocina y comedor en el segundo piso.', 'Botiquín de primeros auxilios (sin medicamentos).', 'Extintores, lavaojos y teléfonos de emergencia publicados.'] });
  return { diapositivas: d };
};

/* Cápsula 3: cada riesgo del cargo */
CONTENIDO.lecciones['irl.l2'] = function (cargo) {
  var R = _riesgosCargo(cargo).slice().sort(function (a, b) { return b.nivel - a.nivel; });
  var d = [{ t: 'Tus riesgos, uno por uno', x: 'La Matriz IPER v02 de GL identifica ' + R.length + ' riesgos para el cargo de ' + _nombreCargo(cargo) + '. En cada tarjeta verás:',
    l: ['Dónde aparece (tarea y peligro).', 'Qué te puede pasar.', 'Cómo se evalúa (Probabilidad × Severidad).', 'Qué controles existen y qué EPP usas.', 'Qué procedimiento lo regula.'],
    tip: 'Lee cada tarjeta con calma y piensa en un momento real de tu trabajo en que te pasa. Puedes usar el botón Escuchar.' }];
  R.forEach(function (r, i) {
    var ctrl = [].concat(
      _lista(r.eliminacion, 1).map(function (c) { return 'Eliminar: ' + c; }),
      _lista(r.sustitucion, 1).map(function (c) { return 'Sustituir: ' + c; }),
      _lista(r.ingenieria, 2).map(function (c) { return 'Ingeniería: ' + c; }),
      _lista(r.senalizacion, 1).map(function (c) { return 'Señalización: ' + c; }),
      _lista(r.administrativo, 3).map(function (c) { return 'Administrativo: ' + c; }));
    d.push({ t: (i + 1) + '. ' + r.riesgo + ' · ' + r.nivelTxt + (r.tipo ? ' (' + r.tipo + ')' : ''),
      x: 'Dónde aparece: ' + _lista(r.tareas, 2).join(' / ') + '.\nPeligro: ' + _lista(r.peligros, 2).join(' / ') + '.\nPuede causar: ' + _lista(r.consecuencias, 2).join(' / ') + '.',
      l: [(r.p && r.s) ? 'Evaluación: P ' + r.p + ' × S ' + r.s + ' = ' + (r.p * r.s) + ' → ' + r.nivelTxt : 'Evaluación: ' + r.nivelTxt].concat(ctrl,
        r.eppItems && r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 6).join(', ')] : [],
        r.pts && r.pts.length ? ['Procedimiento: ' + _lista(r.pts, 2).join(', ')] : []) });
  });
  var P = _protocolosCargo(cargo);
  if (P.length) {
    d.push({ t: 'Protocolos y normas que aplican a tu cargo', x: 'Según tus funciones, estos protocolos de vigilancia y normas se aplican a tu puesto. Algunos implican mediciones o evaluaciones de salud en la ACHS.', l: P.map(function (p) { return p.nombre; }) });
    P.forEach(function (p) { d.push({ t: p.nombre, x: 'Riesgos de tu cargo que lo activan: ' + p.riesgos.join(', ') + '.', l: p.l }); });
  }
  d.push({ t: 'Lo importante', l: ['Los riesgos Importantes o Intolerables no se aceptan: si sus controles no están, el trabajo no empieza.', 'Si ves un riesgo que no aparece aquí, avísalo: la Matriz se actualiza con lo que informan los trabajadores.', 'Tienes derecho a detener tu trabajo ante un riesgo grave e inminente, avisando de inmediato.'] });
  return { diapositivas: d };
};
CONTENIDO.talleres['irl.t1'] = {
  intro: 'Este taller te ayuda a mirar tu propio puesto con la Matriz IPER en la mano. No hay respuestas únicas: lo que escribas queda registrado para la Asesora en Prevención de Riesgos y sirve para mejorar la Matriz.',
  partes: [
    { tipo: 'vep', desdeIper: true, n: 4 },
    { tipo: 'abierta', p: 'Elige la tarea de tu trabajo donde te sientes más expuesto. ¿Qué tarea es, qué te podría pasar y qué control usas hoy para evitarlo?', min: 60, alApr: true,
      modelo: 'Una buena respuesta nombra la tarea concreta (por ejemplo, recuperar el ROV desde el borde del pontón o desarmar un equipo en el banco), el riesgo (caída al agua, corte, incendio de batería) y el control real que se aplica (chaleco puesto, batería desconectada, lentes, guantes, coordinación con el centro).' },
    { tipo: 'abierta', p: '¿Has visto un incidente o un "casi accidente" en tu trabajo? Cuéntalo sin nombres: qué pasó, por qué crees que pasó y qué habría que cambiar.', min: 40, alApr: true,
      modelo: 'Los casi accidentes son avisos gratuitos. Informarlos permite corregir antes de que alguien se lesione. También puedes informarlos a la Jefa de Operaciones o al Delegado de SST.' },
    { tipo: 'abierta', p: '¿Qué riesgo de tu trabajo crees que falta en la Matriz IPER, o cuál crees que está mal evaluado?', min: 20, alApr: true,
      modelo: 'Gracias. La Asesora revisa estas respuestas al actualizar la Matriz IPER.' }
  ]
};

/* Cápsula 4: controles y método de trabajo */
CONTENIDO.lecciones['irl.l3'] = function (cargo) {
  var area = PLAN.area(cargo);
  var d = [
    { t: 'La jerarquía de controles', x: 'No todos los controles protegen igual. La Matriz IPER de GL ordena las medidas de la más a la menos eficaz:', l: ['1. Eliminar el peligro.', '2. Sustituirlo por algo menos peligroso.', '3. Controles de ingeniería: resguardos, gabinete de inflamables, extractor de humos, zona de carga no combustible.', '4. Señalización y advertencias.', '5. Administrativos: procedimientos, AST, capacitación, supervisión, pausas.', '6. EPP: la última barrera.'] },
    { t: 'Método de trabajo correcto', l: area === 'faena' ? ['Antes: inducción de la mandante, aviso de inicio a la Jefa de Operaciones, pronóstico y checklist preoperacional.', 'Durante: seguir el PTS-ROV-001, coordinar con el centro y no operar con buzos en el agua sin coordinación.', 'Al terminar: limpiar y desinfectar el equipo, ordenar y avisar el término de la jornada.', 'Si algo no está claro: detente y pregunta.'] : area === 'taller' ? ['Antes: orden del banco, inflamables guardados y EPP de la tarea.', 'Durante: seguir el PTS-TAL-001; batería desconectada antes de desarmar; carga de baterías supervisada.', 'Al terminar: apagar el cautín y los cargadores, ordenar y registrar en el libro del taller.', 'Si algo no está claro: detente y pregunta al encargado.'] : ['Planificar las faenas y los recursos con anticipación.', 'Exigir y verificar el cumplimiento de los procedimientos.', 'Suspender o reprogramar ante condiciones inseguras.', 'Dar el ejemplo: el mismo EPP y las mismas reglas en las visitas.'] },
    { t: 'Cuándo detener el trabajo', l: area === 'faena' ? ['Viento, oleaje o visibilidad fuera de lo seguro.', 'Buzos en el agua sin coordinación previa.', 'Falla crítica del equipo o pérdida de control o comunicación.', 'Cualquier riesgo grave e inminente: te alejas y avisas de inmediato.'] : ['Humo, olor a quemado o una batería que se calienta o se hincha.', 'Un equipo o herramienta dañado.', 'Mareo o dolor de cabeza con las estufas encendidas.', 'Cualquier riesgo grave e inminente: te alejas y avisas de inmediato.'] }
  ];
  CONTENIDO.procedimientosDe(cargo).forEach(function (p) {
    var x = _PTS[p.id];
    if (!x) { d.push({ t: p.id + ' · ' + p.titulo, x: 'Documento que aplica a tu cargo. Lo puedes revisar completo en la plataforma.' }); return; }
    var rol = (x.roles && x.roles[cargo]) || [];
    var claves = [].concat.apply([], (x.pasos || []).map(function (s) { return (s.l || []).slice(0, 2); })).slice(0, 5);
    d.push({ t: p.id + ' · ' + p.titulo, x: x.objetivo, l: [].concat(rol.length ? ['Tu responsabilidad: ' + rol.slice(0, 2).join(' ')] : [], claves.map(function (c) { return 'Paso clave: ' + c; }), (x.detener || []).slice(0, 2).map(function (c) { return 'Detener si: ' + c; })) });
  });
  d.push({ t: 'Tu parte', l: ['Conocer y aplicar los procedimientos de tu cargo.', 'Usar los controles que existen y no retirarlos.', 'Informar cuando un control no está o no sirve.', 'Cada procedimiento tiene su capacitación con certificado en la plataforma.'] });
  return { diapositivas: d };
};
CONTENIDO.juegos['irl.j2'] = CONTENIDO.juegos['ds44.j4'];

/* Cápsula 5: productos y sustancias peligrosas */
CONTENIDO.lecciones['irl.ls'] = function (cargo) {
  var area = PLAN.area(cargo);
  var R = _riesgosCargo(cargo).filter(function (r) { return /qu[ií]mic|gases|vapores|aerosol/i.test(r.riesgo); });
  var d = [{ t: 'Productos peligrosos en GL', x: 'En el trabajo se usan productos que pueden dañar tu salud o provocar un incendio si no se manejan bien.', l: ['Limpiacontactos en aerosol (contiene n-hexano: inflamable y dañino si se inhala).', 'Masillas, resinas y epóxicos: irritan la piel y los ojos y pueden causar alergia.', 'Alcohol isopropílico y solventes de limpieza.', 'Parafina de la estufa y combustibles de las embarcaciones.', 'Desinfectantes para lavar el ROV entre centros de cultivo.', 'Baterías de litio: no son un producto químico de uso, pero pueden incendiarse y liberar gases tóxicos.'] },
    { t: 'La Hoja de Datos de Seguridad (HDS)', x: 'Cada producto químico tiene su HDS. Es obligatoria y debe estar disponible donde se usa.', l: ['Qué peligros tiene el producto.', 'Qué EPP usar al manipularlo.', 'Cómo almacenarlo y qué no mezclar.', 'Qué hacer si te salpica, lo inhalas o lo tragas.', 'Cómo actuar ante un derrame o un incendio.'] },
    { t: 'La etiqueta y los pictogramas (SGA)', x: 'Los envases llevan pictogramas con borde rojo en forma de rombo:', l: ['Llama: inflamable.', 'Corrosión: quema piel y ojos.', 'Calavera: tóxico agudo.', 'Signo de exclamación: irritante o nocivo.', 'Silueta con estrella en el pecho: daño a la salud a largo plazo.', 'Cilindro: gas a presión.', 'Pez y árbol: peligroso para el medio acuático.'], tip: 'Las frases H del envase dicen el peligro exacto. Por ejemplo, la masilla del taller trae H315 (irrita la piel), H317 (alergia), H318 (daño ocular grave) y H412 (nociva para la vida acuática).' },
    { t: 'Reglas de oro', l: ['Usa solo productos rotulados; nunca en botellas de bebida.', 'Nunca mezcles productos.', area === 'taller' ? 'Aerosoles y solventes lejos del cautín, de la estufa y de la combustión lenta.' : 'Aplica los productos con ventilación y lejos de fuentes de calor.', 'Guarda los productos cerrados, en el gabinete o lugar definido.', 'Ante un derrame: ventila, aleja fuentes de ignición, usa el kit de derrames y avisa.', 'Si te salpica en los ojos: lavaojos o agua corriente por 15 minutos y atención en la ACHS.'] }];
  R.forEach(function (r) { d.push({ t: 'En tu cargo: ' + r.riesgo, x: 'Peligro: ' + _lista(r.peligros, 2).join(' / ') + '.', l: [].concat(_lista(r.administrativo, 2).map(function (c) { return 'Control: ' + c; }), r.eppItems && r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 6).join(', ')] : []) }); });
  if (!R.length) d.push({ t: 'En tu cargo', x: 'La Matriz IPER no registra exposición directa a sustancias peligrosas en tu cargo. Igual aplican estas reglas para productos de aseo, combustibles y en tus visitas al taller.' });
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

/* Cápsula 6: frío, lluvia y radiación UV */
CONTENIDO.lecciones['irl.lf'] = function (cargo) {
  var area = PLAN.area(cargo), R = _riesgosCargo(cargo);
  var fr = R.filter(function (x) { return /fr[ií]o/i.test(x.riesgo); })[0], uv = R.filter(function (x) { return /radiaci/i.test(x.riesgo); })[0];
  var d = [{ t: 'Trabajo a la intemperie en Aysén', x: area === 'faena' ? 'Los pilotos trabajan gran parte del año con 10 °C o menos, viento y lluvia, y además expuestos a la radiación UV del sol, que en el mar llega directa y reflejada en el agua.' : area === 'taller' ? 'En el taller trabajas bajo techo, pero sales al patio, cargas equipos y viajas a faenas. Además, la calefacción del taller trae sus propios riesgos.' : 'Tus visitas a faena, la navegación y la conducción te exponen a frío, lluvia y radiación UV.',
    l: ['El viento y la ropa mojada hacen que el cuerpo pierda calor mucho más rápido.', 'El agua fría enfría el cuerpo mucho más rápido que el aire: una caída al agua es también un riesgo de hipotermia.', 'La radiación UV daña la piel y los ojos aunque el día esté nublado.'] }];
  if (fr) d.push({ t: 'Frío en tu cargo', x: 'La Matriz IPER evalúa la exposición a frío como ' + fr.nivelTxt + ' para ' + _nombreCargo(cargo) + '.', l: ['Tareas: ' + _lista(fr.tareas, 3).join(' / ') + '.'].concat(_lista(fr.administrativo, 3).map(function (c) { return 'Control: ' + c; }), fr.eppItems && fr.eppItems.length ? ['EPP: ' + fr.eppItems.slice(0, 6).join(', ')] : []) });
  d.push({ t: 'Qué le hace el frío al cuerpo', l: ['Hipotermia: empieza con tiritones fuertes, torpeza y cansancio; sigue con confusión, habla arrastrada y somnolencia. Es una emergencia.', 'Sabañones: enrojecimiento, picazón e inflamación de dedos, orejas y mejillas.', 'Manos frías: pierdes fuerza y precisión, y aumentan los cortes y los golpes.'] },
    { t: 'Cómo te proteges del frío', l: ['Ropa en tres capas: interior que saque la humedad (no algodón), intermedia que abrigue y exterior impermeable y cortaviento.', 'Cabeza, manos y pies protegidos.', 'Ropa mojada se cambia de inmediato: lleva ropa seca de recambio.', 'Pausas para recuperar temperatura en un lugar abrigado y bebidas calientes; nunca alcohol.'] },
    { t: 'Si alguien presenta hipotermia', l: ['Avisa de inmediato al jefe de centro o a la Jefa de Operaciones.', 'Llévalo a un lugar abrigado y protegido del viento.', 'Quítale la ropa mojada y abrígalo, empezando por el tronco.', 'Si está consciente, bebidas tibias y dulces.', 'No le frotes la piel; si está confuso o inconsciente, es una emergencia: ACHS 1404 o Autoridad Marítima 137.'] });
  if (uv) d.push({ t: 'Radiación UV en tu cargo', x: 'La Matriz IPER evalúa la exposición a radiación UV como ' + uv.nivelTxt + '. GL tiene el informe cualitativo de exposición de los pilotos.', l: ['Protector solar factor 50 cada 2 horas, aun nublado.', 'Ropa manga larga, gorro legionario y lentes con filtro UV.', 'Revisa el índice UV del día y busca sombra en las pausas.'] });
  if (area === 'taller') d.push({ t: 'La calefacción del taller', l: ['Estufa a parafina fuera de la vía de evacuación; se carga afuera, apagada y fría.', 'Combustión lenta sin papeles ni cartón alrededor; cenizas frías en tarro metálico con tapa.', 'Ventila el taller y respeta el detector de monóxido de carbono.', 'Mareo o dolor de cabeza: apagar, ventilar y salir al aire libre.'] });
  d.push({ t: 'Tus derechos ante el clima', l: ['Recibir ropa de trabajo y EPP adecuados al frío y a la radiación UV, sin costo.', 'Pausas de recuperación cuando las condiciones lo exigen.', 'Detener la tarea si el frío, el viento o la lluvia la hacen insegura, avisando de inmediato.', 'Pedir la reposición de la ropa o el EPP dañado.'] });
  return { diapositivas: d };
};

/* Cápsula 7: emergencias y tu rol */
CONTENIDO.lecciones['irl.l4'] = function (cargo) {
  var base = (CONTENIDO.lecciones['prrd.l1'] && CONTENIDO.lecciones['prrd.l1'].diapositivas) || [];
  return { diapositivas: base.slice(0, base.length - 1).concat([{ t: 'Tu rol como ' + _nombreCargo(cargo), l: CONTENIDO.rolEmergencia[cargo] || [] },
    { t: 'Números que debes conocer', l: CONTENIDO.directorio.slice(0, 9).map(function (x) { return x.n + ': ' + x.t; }) }]) };
};
CONTENIDO.juegos['irl.j3'] = CONTENIDO.juegos['ds44.j5'];

/* Cápsula 8: EPP y accidentes */
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
      modelo: 'Ejemplo: 1) Caída al agua: chaleco puesto y abrochado en todo momento en el pontón y la embarcación. 2) Incendio de baterías: cargarlas sobre superficie no combustible y nunca sin supervisión. 3) Cortes y proyección de partículas en el banco: lentes y guantes, y batería desconectada antes de desarmar.' },
    { tipo: 'abierta', p: '¿A quién avisas, y cómo, si ves una condición insegura o te accidentas?', min: 30,
      modelo: 'A la Jefa de Operaciones (y en faena al jefe de centro; en el taller al encargado) de inmediato, aunque parezca leve. Si te accidentas: primeros auxilios, atención en la ACHS y la empresa presenta la DIAT dentro de 24 horas. También puedes acudir al Delegado de SST.' }
  ]
};

/* =====================================================================
   REGLAMENTO INTERNO DE ORDEN, HIGIENE Y SEGURIDAD (RIOHS 2026)
   ===================================================================== */
CONTENIDO.lecciones['riohs.l1'] = { documento: 'pts/RIOHS.pdf', diapositivas: [
  { t: 'Para qué sirve el Reglamento Interno', x: 'El Reglamento Interno de Orden, Higiene y Seguridad (RIOHS) 2026 de GL fija las normas de orden de la empresa, las obligaciones y prohibiciones de todas las personas, y las normas de higiene y seguridad para pilotos, taller y estudiantes en práctica.', l: ['Lo exigen el Código del Trabajo (arts. 153 y siguientes) y la Ley 16.744 (art. 67).', 'Se entrega a cada trabajador al ingresar, y tú firmas su recepción.', 'Lo puedes revisar completo en el documento de esta cápsula.'] },
  { t: 'Cómo está organizado', l: ['Capítulo I · Normas de orden: ingreso, contrato, jornada, horas extraordinarias, remuneraciones, feriado, licencias y permisos, obligaciones, prohibiciones, sanciones y reclamos.', 'Capítulo II · Normas de higiene y seguridad: obligaciones y prohibiciones en prevención, EPP, accidentes, organización preventiva, protocolos de salud y riesgos específicos de GL.', 'Protocolos incorporados: Ley Karin, radiación UV, manejo manual de carga, TMERT, ruido, riesgos psicosociales y emergencias.'] },
  { t: 'Ingreso y contrato', l: ['Al ingresar entregas tus antecedentes personales y la documentación que pide la empresa.', 'El contrato se firma por escrito y se te entrega una copia.', 'Cualquier cambio de tus datos (domicilio, estado civil, cargas) lo informas a la empresa.'] },
  { t: 'Jornada de trabajo', l: ['La jornada ordinaria se ajusta a la Ley 21.561: baja gradualmente hasta 40 horas semanales en 2028.', 'Los pilotos trabajan en turnos de 14 por 14 días, de 08:00 a 20:00, autorizados por la Dirección del Trabajo.', 'El taller funciona de lunes a sábado, de 09:00 a 13:00 y de 14:00 a 17:00.', 'Las horas extraordinarias se pactan por escrito y se pagan con recargo.'] },
  { t: 'Remuneraciones', l: ['Se pagan en la fecha y forma de tu contrato, con liquidación de sueldo.', 'Solo se descuentan las cotizaciones legales y lo que autorices por escrito, con los límites de la ley.', 'Hombres y mujeres que hacen un mismo trabajo reciben igual remuneración: si crees que no se cumple, puedes reclamar por escrito y la Gerencia responde en 30 días.'] },
  { t: 'Feriado, licencias y permisos', l: ['Feriado anual de 15 días hábiles con remuneración íntegra.', 'Licencias médicas: avisa a la empresa y entrégala dentro del plazo legal.', 'Permisos legales: por nacimiento de un hijo, por matrimonio o acuerdo de unión civil, por fallecimiento de familiares, y permiso postnatal parental, entre otros.'] },
  { t: 'Sanciones', x: 'Las faltas al Reglamento que no son causal de término del contrato se sancionan en forma gradual:', l: ['Primera falta leve: amonestación verbal o escrita del jefe directo.', 'Falta no leve o segunda amonestación: siempre por escrito, con copia a la Inspección del Trabajo.', 'Reincidencia: multa de hasta el 25% de la remuneración diaria.', 'Puedes reclamar una multa ante la Inspección del Trabajo.'] },
  { t: 'Peticiones y reclamos', l: ['Puedes hacer consultas, peticiones o reclamos a la Jefa de Operaciones o a la Gerencia.', 'Para las materias de seguridad también puedes acudir al Delegado de SST o a la Asesora externa en Prevención de Riesgos.', 'Siempre puedes recurrir a la Inspección del Trabajo.'] }
] };
CONTENIDO.lecciones['riohs.l2'] = function (cargo) {
  var area = PLAN.area(cargo);
  return { documento: 'pts/RIOHS.pdf', diapositivas: [
    { t: 'Cómo se organiza la prevención en GL', l: ['Gerente General y Representante Legal: ' + CONTENIDO.empresa.gerente + '.', 'Jefa de Operaciones y Encargada de Seguridad y Salud en el Trabajo: ' + CONTENIDO.empresa.encargada + '.', 'Asesora externa en Prevención de Riesgos: ' + CONTENIDO.empresa.apr + '.', 'Delegado de Seguridad y Salud en el Trabajo: ' + CONTENIDO.empresa.delegado + '.', 'GL no tiene Comité Paritario porque ninguna faena reúne a más de 25 personas; por eso existe el Delegado.', 'Organismo administrador del seguro: ' + CONTENIDO.empresa.organismo + '.'] },
    { t: 'Tus obligaciones en seguridad', l: ['Cumplir los procedimientos de trabajo seguro y las normas de la mandante.', 'Usar y cuidar el EPP que se te entrega, y pedir su reposición cuando se daña.', 'Informar de inmediato todo accidente, incidente o condición insegura.', 'Participar en las capacitaciones, inducciones y simulacros.', 'Mantener el orden y aseo de tu lugar de trabajo.', 'Informar si estás tomando un medicamento que pueda afectar tu desempeño.'] },
    { t: 'Prohibiciones en seguridad', l: ['Trabajar bajo los efectos del alcohol, drogas o medicamentos que alteren tus capacidades.', 'Operar equipos sin autorización o facilitarlos a personas no autorizadas.', 'Retirar o anular protecciones, resguardos o dispositivos de seguridad.', 'Intervenir equipos energizados o baterías conectadas.', 'Fumar o usar llama abierta cerca de inflamables, baterías en carga o en lugares prohibidos.', 'Hacer bromas o juegos que pongan en riesgo a otros.'] },
    { t: 'Tus derechos', l: ['Derecho a saber: conocer los riesgos de tu trabajo, sus medidas de control y los métodos correctos (IRL).', 'Interrumpir el trabajo y alejarte ante un riesgo grave e inminente, avisando de inmediato (Código del Trabajo, art. 184 bis), sin que eso te perjudique.', 'Recibir el EPP sin costo.', 'Atención médica, rehabilitación y subsidios del seguro de la Ley 16.744 en la ACHS si te accidentas o enfermas por el trabajo.'] },
    { t: 'Accidentes y enfermedades profesionales', l: ['Todo accidente, por leve que sea, se informa de inmediato a la Jefa de Operaciones.', 'La atención se hace en la ACHS; los estudiantes en práctica, en el servicio de salud público con el seguro escolar.', 'La empresa presenta la DIAT dentro de 24 horas.', 'Los accidentes graves y fatales suspenden la faena y se notifican de inmediato a la Inspección del Trabajo y a la SEREMI de Salud (600 42 000 22).', 'Debes colaborar con la investigación del accidente.'] },
    { t: area === 'faena' ? 'Normas específicas para los pilotos' : area === 'taller' ? 'Normas específicas para el taller' : 'Normas específicas para la gerencia', l: area === 'faena' ? ['Chaleco salvavidas puesto y abrochado en pontones, embarcaciones y muelles.', 'Avisar el inicio y el término de cada jornada a la Jefa de Operaciones.', 'No operar el ROV con buzos en el agua sin coordinación formal.', 'Respetar las normas y la inducción de cada mandante.'] : area === 'taller' ? ['Desconectar la batería antes de desarmar un ROV y usar lentes de seguridad.', 'Cargar las baterías en la zona definida y nunca sin supervisión.', 'Inflamables en el gabinete, lejos del cautín y de la calefacción.', 'Los estudiantes en práctica trabajan siempre supervisados y no hacen tareas reservadas al encargado.'] : ['Disponer los recursos para la prevención y exigir su cumplimiento.', 'Conducir con licencia vigente, cinturón y sin usar el celular.', 'Usar el mismo EPP que exige el lugar en las visitas a faena y al taller.'] },
    { t: 'Alcohol, drogas y tabaco', l: ['Está prohibido ingresar, consumir o trabajar bajo los efectos del alcohol o de drogas.', 'La empresa puede aplicar controles preventivos según su programa.', 'Prohibido fumar en el taller, en la oficina, en las embarcaciones y en los lugares señalizados.'] },
    { t: 'Protocolos de salud incluidos en el Reglamento', l: ['Radiación UV de origen solar.', 'Manejo manual de carga (Ley 20.949): máximo 25 kg.', 'Trastornos musculoesqueléticos de extremidades superiores (TMERT).', 'Ruido (PREXOR).', 'Riesgos psicosociales (CEAL-SM).', 'Acoso y violencia en el trabajo (Ley Karin), que tiene su propia capacitación.'] }
  ] };
};
CONTENIDO.juegos['riohs.j1'] = { intro: 'Según el Reglamento Interno, decide si cada conducta está permitida o prohibida.', partes: [{ tipo: 'clasificar',
  categorias: [{ id: 'si', nombre: 'Permitido o correcto' }, { id: 'no', nombre: 'Prohibido' }],
  items: [
    { t: 'Detener la operación del ROV porque se viene el temporal', c: 'si', fb: 'Es tu derecho ante un riesgo grave e inminente (art. 184 bis).' },
    { t: 'Prestar el ROV a un trabajador del centro para que "pruebe"', c: 'no', fb: 'Prohibido facilitar equipos a personas no autorizadas.' },
    { t: 'Trabajar con resaca después de una celebración', c: 'no', fb: 'Prohibido trabajar con tus capacidades alteradas.' },
    { t: 'Avisar un incidente sin lesionados', c: 'si', fb: 'Los incidentes se informan: así se previenen accidentes.' },
    { t: 'Fumar junto a las baterías que se están cargando', c: 'no', fb: 'Prohibido fumar en el taller y cerca de baterías o inflamables.' },
    { t: 'Pedir que te repongan los guantes rotos', c: 'si', fb: 'El EPP dañado se repone sin costo.' },
    { t: 'Retirar la protección del esmeril porque molesta', c: 'no', fb: 'Prohibido retirar o anular protecciones.' },
    { t: 'Reclamar una multa ante la Inspección del Trabajo', c: 'si', fb: 'Es un derecho que te reconoce el Reglamento.' },
    { t: 'Desarmar un ROV con la batería conectada para ahorrar tiempo', c: 'no', fb: 'Prohibido intervenir equipos energizados.' }
  ] }] };
CONTENIDO.talleres['riohs.t1'] = function (cargo) {
  return { intro: 'Aplica el Reglamento a situaciones reales de tu trabajo. Tus respuestas quedan registradas para la Asesora en Prevención de Riesgos.', partes: [
    { tipo: 'lectura', titulo: 'Situación', texto: PLAN.area(cargo) === 'faena' ? 'Llevas 10 días de turno. Un trabajador del centro te pide que lo dejes manejar el ROV "un ratito" para grabar un video. El jefe de centro dice que no hay problema.' : PLAN.area(cargo) === 'taller' ? 'Un viernes en la tarde hay apuro por entregar un equipo. Un compañero propone desarmarlo sin desconectar la batería y fumar un cigarro adentro porque afuera llueve.' : 'Visitas una faena con un cliente. En el pontón nadie usa chaleco salvavidas y te ofrecen uno "si quieres".' },
    { tipo: 'abierta', p: '¿Qué dice el Reglamento sobre esta situación y qué haces tú?', min: 60, alApr: true, modelo: 'El Reglamento prohíbe facilitar equipos a personas no autorizadas, intervenir equipos energizados y fumar en lugares prohibidos, y obliga a usar el EPP. Lo correcto es negarse con respeto, explicar la norma y avisar a la Jefa de Operaciones si hay presión para incumplirla.' },
    { tipo: 'abierta', p: '¿Qué norma del Reglamento te parece más difícil de cumplir en tu trabajo y por qué? ¿Qué propondrías?', min: 40, alApr: true, modelo: 'Gracias. Las propuestas sirven para revisar el Reglamento y las condiciones de trabajo.' }
  ] };
};
CONTENIDO.quiz.riohs = { n: 6, preguntas: [
  { p: '¿Quién es la Encargada de Seguridad y Salud en el Trabajo de GL?', op: ['La Asesora externa', 'Mery Leal Vargas, Jefa de Operaciones', 'El jefe de centro de la mandante', 'El Delegado'], ok: 2, fbOk: 'Correcto.', fbNo: 'Es Mery Leal Vargas, Jefa de Operaciones.' },
  { p: '¿Por qué GL no tiene Comité Paritario?', op: ['Porque no es obligatorio en ninguna empresa', 'Porque ninguna faena reúne a más de 25 personas; por eso tiene Delegado de SST', 'Porque la mandante lo prohíbe', 'Porque es una empresa nueva'], ok: 2, fbOk: 'Correcto.', fbNo: 'Ninguna faena supera las 25 personas: por eso GL tiene Delegado de SST.' },
  { p: '¿Qué está prohibido según el RIOHS?', op: ['Usar el EPP', 'Trabajar bajo los efectos del alcohol o drogas', 'Avisar un incidente', 'Detener una tarea peligrosa'], ok: 2, fbOk: 'Correcto.', fbNo: 'Trabajar bajo los efectos del alcohol o drogas está prohibido.' },
  { p: 'Reincides en una falta al Reglamento. ¿Cuál es la multa máxima?', op: ['Un día de sueldo', 'Hasta el 25% de la remuneración diaria', 'El 50% del sueldo mensual', 'No hay multas'], ok: 2, fbOk: 'Correcto.', fbNo: 'La multa no puede exceder el 25% de la remuneración diaria.' },
  { p: 'Hay un riesgo grave e inminente en tu faena. ¿Qué te permite el Reglamento?', op: ['Nada: debes seguir hasta que te autoricen', 'Interrumpir el trabajo y alejarte, avisando de inmediato', 'Irte a tu casa sin avisar', 'Solo llamar a la mandante'], ok: 2, fbOk: 'Correcto (Código del Trabajo, art. 184 bis).', fbNo: 'Puedes interrumpir el trabajo y alejarte, avisando de inmediato.' },
  { p: '¿Dentro de qué plazo la empresa presenta la DIAT?', op: ['24 horas', '5 días', '30 días', 'Solo si el accidente es grave'], ok: 1, fbOk: 'Correcto.', fbNo: 'La DIAT se presenta dentro de 24 horas.' },
  { p: '¿Cuál es el peso máximo de carga manual por persona?', op: ['15 kg', '25 kg', '50 kg', 'No hay límite'], ok: 2, fbOk: 'Correcto (Ley 20.949).', fbNo: 'El máximo es 25 kg (20 kg para mujeres y menores de edad).' }
] };
CONTENIDO.firmas['riohs.f1'] = function () { return { texto: 'Declaro que recibí el Reglamento Interno de Orden, Higiene y Seguridad 2026 de ' + CONTENIDO.empresa.nombre + ', que se me explicó su contenido mediante esta capacitación y que me comprometo a cumplirlo.' }; };

/* =====================================================================
   LEY KARIN (Ley 21.643) · PROTOCOLO DE PREVENCIÓN DE GL
   ===================================================================== */
CONTENIDO.lecciones['karin.l1'] = { documento: 'pts/LEY-KARIN.pdf', diapositivas: [
  { t: 'Un trabajo libre de violencia', x: 'La Ley 21.643, conocida como Ley Karin, obliga a todas las empresas a prevenir, investigar y sancionar el acoso laboral, el acoso sexual y la violencia en el trabajo. GL tiene su Protocolo de prevención, actualizado en noviembre de 2026.', l: ['Aplica a todas las personas que trabajan o se relacionan con GL: gerencia, pilotos, taller, estudiantes en práctica, contratistas, mandantes, clientes y visitas.', 'Aplica en el taller, en las faenas, en las embarcaciones, en los traslados y también en los medios digitales (WhatsApp, correo, redes).'] },
  { t: 'Acoso sexual', x: 'Requerimientos de carácter sexual, por cualquier medio, no consentidos por quien los recibe, que amenazan o perjudican su situación laboral o sus oportunidades en el empleo.', l: ['Comentarios, insinuaciones o contacto físico de carácter sexual no deseado.', 'Envío de mensajes, fotos o videos sexuales.', 'Incluye el acoso por medios digitales.', 'La falta de consentimiento, la jerarquía y el aislamiento (por ejemplo, en una faena) son claves para evaluarlo.'] },
  { t: 'Acoso laboral', x: 'Toda agresión u hostigamiento, por cualquier medio, de la empresa o de uno o más trabajadores contra otro, una sola vez o de manera reiterada, que provoque menoscabo, maltrato o humillación, o que amenace o perjudique su situación laboral.', l: ['Basta una sola vez: ya no se exige que sea reiterado.', 'Ejemplos: humillar o gritar frente a otros, aislar a alguien, burlarse de su acento u origen, asignar tareas imposibles para que falle, difundir rumores.'] },
  { t: 'Violencia de terceros', x: 'Conductas que afectan a los trabajadores por parte de personas ajenas a la relación laboral: clientes, mandantes, proveedores, usuarios o visitas.', l: ['Ejemplo: un trabajador de la mandante te insulta o amenaza en el pontón.', 'En GL es especialmente relevante en las faenas y en la coordinación con los centros de cultivo.', 'También se denuncia y la empresa debe protegerte.'] },
  { t: 'Conductas incívicas y sexismo', l: ['Conductas incívicas: tratos descorteses o groseros que, aunque no busquen dañar, deterioran el respeto y pueden escalar a violencia.', 'Sexismo: expresiones o prácticas basadas en la idea de inferioridad por sexo o género, incluso como "bromas".', 'GL las gestiona como señales tempranas: se corrigen antes de que escalen.'] },
  { t: 'Los principios del protocolo', l: ['Confidencialidad y reserva.', 'Imparcialidad: quien investiga no depende de las partes.', 'Celeridad: dentro de los plazos legales.', 'Debido proceso: ambas partes son oídas.', 'No revictimización: no se hace repetir el relato ni se expone a la persona.', 'Protección: medidas de resguardo inmediatas, que no son una sanción anticipada.', 'Perspectiva de género.'] },
  { t: 'Tus derechos y deberes', l: ['Derecho a un trato respetuoso y libre de violencia.', 'Derecho a denunciar sin represalias.', 'Deber de tratar con respeto a todas las personas.', 'Deber de colaborar con las investigaciones con información veraz.', 'Deber de respetar la confidencialidad.', 'Deber de informar riesgos psicosociales que observes, sobre todo en faena.'] }
] };
CONTENIDO.juegos['karin.j1'] = { intro: 'Según la Ley Karin y el protocolo de GL, clasifica cada situación.', partes: [{ tipo: 'clasificar',
  categorias: [{ id: 'sex', nombre: 'Acoso sexual' }, { id: 'lab', nombre: 'Acoso laboral' }, { id: 'ter', nombre: 'Violencia de terceros' }, { id: 'no', nombre: 'No es acoso ni violencia' }],
  items: [
    { t: 'Un compañero te envía por WhatsApp fotos de carácter sexual que no pediste', c: 'sex', fb: 'Es acoso sexual, también por medios digitales.' },
    { t: 'Tu jefe te grita y te trata de inútil frente a todo el taller', c: 'lab', fb: 'Basta una vez si hay menoscabo o humillación: es acoso laboral.' },
    { t: 'Un trabajador del centro de cultivo te amenaza porque el ROV demoró la faena', c: 'ter', fb: 'Es violencia ejercida por un tercero (la mandante).' },
    { t: 'Tu jefa te pide corregir un informe técnico con errores, con respeto', c: 'no', fb: 'Corregir el trabajo con respeto es parte normal de la supervisión.' },
    { t: 'Dejan fuera a un compañero de toda la información de los turnos para que falle', c: 'lab', fb: 'Aislar a alguien para perjudicarlo es acoso laboral.' },
    { t: 'Un supervisor le insinúa a una estudiante en práctica que su evaluación depende de salir con él', c: 'sex', fb: 'Es acoso sexual, agravado por la relación de poder.' },
    { t: 'Un cliente insulta por teléfono a la Jefa de Operaciones', c: 'ter', fb: 'Es violencia de terceros; también se denuncia.' },
    { t: 'No te asignan horas extraordinarias porque no hay trabajo extra', c: 'no', fb: 'No es acoso si no hay trato hostil ni perjuicio intencional.' }
  ] }] };
CONTENIDO.lecciones['karin.l2'] = function (cargo) {
  return { documento: 'pts/LEY-KARIN.pdf', diapositivas: [
    { t: 'Cómo prevenimos en GL', l: ['Política de tolerancia cero al acoso y la violencia, y de buen trato.', 'Identificación de los riesgos psicosociales en la Matriz IPER.', 'Cuestionario CEAL-SM con apoyo de la ACHS.', 'Reglas de convivencia en faena y en el taller, y gestión de la carga de trabajo y los turnos.', 'Pautas para la relación con mandantes y clientes.', 'Capacitación anual y difusión de los canales de denuncia dos veces al año.'] },
    { t: 'Riesgos que GL reconoce', l: ['Turnos largos y alta exigencia: fatiga e irritabilidad.', 'Aislamiento en faena y dependencia de una sola jefatura.', 'Cultura técnica jerárquica que normaliza el trato hostil.', 'Presión de mandantes y clientes por plazos.', 'Convivencia en el espacio reducido del taller y relación jerárquica con los estudiantes en práctica, que requieren especial resguardo.'] },
    { t: 'Cómo denunciar', l: ['Por escrito al correo glroboticasubmarina@gmail.com (recomendado, deja registro).', 'En forma verbal ante la responsable del protocolo, Mery Leal Vargas, Jefa de Operaciones: se levanta un acta y recibes copia.', 'Teléfono de orientación: +56 9 7828 1635.', 'Canal alternativo, si la denuncia involucra a la Gerencia o a la Jefatura de Operaciones: la Asesora externa en Prevención de Riesgos, ' + CONTENIDO.empresa.apr + '.', 'Directamente en la Inspección del Trabajo, en cualquier momento.'], tip: 'Antes de denunciar puedes pedir orientación, sin contar detalles íntimos ni obligación de denunciar.' },
    { t: 'Qué debe tener la denuncia', l: ['Quiénes están involucrados.', 'Qué pasó, cuándo y dónde.', 'Testigos, si los hay.', 'Pruebas: mensajes, correos, audios o fotos.', 'Cómo te ha afectado.', 'Si falta algo, la denuncia se recibe igual y se completa después.'] },
    { t: 'Medidas de resguardo', x: 'Al recibir la denuncia, GL adopta de inmediato (su estándar es dentro de 24 horas) medidas para proteger a quien denuncia. No son sanciones.', l: ['Separar espacios, turnos o faenas.', 'Redistribuir la jornada o cambiar funciones temporalmente sin bajar el sueldo.', 'Instrucción de no contacto.', 'Atención psicológica temprana en la ACHS.'] },
    { t: 'Investigación y plazos', l: ['En 3 días la empresa decide si investiga internamente o envía los antecedentes a la Inspección del Trabajo.', 'La investigación es escrita, reservada y ambas partes son oídas.', 'Debe terminar en un máximo de 30 días.', 'El informe se envía a la Inspección del Trabajo, que tiene 30 días para pronunciarse.', 'La empresa aplica las medidas o sanciones dentro de 15 días desde que recibe el informe.'] },
    { t: 'Sanciones y reparación', l: ['Sanciones según el Reglamento Interno: amonestación verbal o escrita, multa, capacitación obligatoria, cambio de funciones o término del contrato en los casos graves.', 'Medidas de reparación: apoyo psicológico en la ACHS, reintegro protegido y ajustes en la organización del trabajo, con seguimiento a los 30, 60 y 90 días.'] },
    { t: 'Prohibidas las represalias', l: ['Nadie puede ser castigado por denunciar, por ser víctima o por declarar como testigo.', 'Son represalias: cambios arbitrarios de turno, aislamiento, quitar funciones, amenazas u hostigamiento.', 'Cualquier represalia se investiga con prioridad y puede ser una falta grave.'] }
  ] };
};
CONTENIDO.talleres['karin.t1'] = function (cargo) {
  var faena = PLAN.area(cargo) === 'faena';
  return { intro: 'Lee cada caso y responde como si te pasara a ti o a un compañero. Tus respuestas quedan registradas de forma reservada para la Asesora en Prevención de Riesgos.', partes: [
    { tipo: 'lectura', titulo: 'Caso 1', texto: faena ? 'Estás solo en una faena. Desde hace una semana un trabajador del centro hace comentarios sobre tu cuerpo y te escribe mensajes de noche. Te da vergüenza contarlo.' : 'Una estudiante en práctica te cuenta que un trabajador del taller le hace comentarios de carácter sexual y que le da miedo decirlo porque puede afectar su evaluación.' },
    { tipo: 'abierta', p: '¿Qué tipo de conducta es, qué canales existen y qué medidas de resguardo se podrían pedir?', min: 70, alApr: true, modelo: 'Es acoso sexual (o violencia de un tercero, si viene de la mandante). Se puede pedir orientación y denunciar por correo, en forma verbal ante la Jefa de Operaciones, por el canal alternativo de la Asesora o en la Inspección del Trabajo. Medidas: separar a las personas, cambiar faena o turno, no contacto y atención psicológica en la ACHS. Guardar los mensajes como prueba.' },
    { tipo: 'lectura', titulo: 'Caso 2', texto: 'En el grupo de WhatsApp del trabajo se burlan a diario de un compañero por su forma de hablar. Él no dice nada, pero cada vez participa menos.' },
    { tipo: 'abierta', p: '¿Es acoso laboral? ¿Qué puedes hacer tú como compañero?', min: 50, alApr: true, modelo: 'Puede ser acoso laboral: hay menoscabo y humillación por medios digitales. Como compañero: no participar, apoyar a la persona, orientarla sobre los canales y, si corresponde, informar a la responsable del protocolo. Los testigos también están protegidos contra represalias.' }
  ] };
};
CONTENIDO.quiz.karin = { n: 6, preguntas: [
  { p: 'Según la Ley Karin, ¿el acoso laboral exige que la conducta sea reiterada?', op: ['Sí, siempre', 'No: puede bastar una sola vez si provoca menoscabo, maltrato o humillación', 'Solo si hay testigos', 'Solo si es por escrito'], ok: 2, fbOk: 'Correcto.', fbNo: 'Puede bastar una sola vez.' },
  { p: 'Un trabajador de la mandante te insulta y amenaza en el pontón. ¿Qué es?', op: ['Un problema personal', 'Violencia en el trabajo ejercida por terceros, que puedes denunciar', 'Nada, porque no es de GL', 'Acoso sexual'], ok: 2, fbOk: 'Correcto.', fbNo: 'Es violencia de terceros y se denuncia.' },
  { p: '¿Cuál de estos NO es un canal de denuncia en GL?', op: ['El correo de la empresa', 'La Inspección del Trabajo', 'Un comentario en el grupo de WhatsApp de la faena', 'La Asesora externa (canal alternativo)'], ok: 3, fbOk: 'Correcto. La denuncia se hace por los canales formales.', fbNo: 'Un comentario en un grupo no es una denuncia.' },
  { p: '¿En cuánto tiempo debe terminar la investigación?', op: ['5 días', '15 días', '30 días como máximo', 'No hay plazo'], ok: 3, fbOk: 'Correcto.', fbNo: 'La investigación termina en un máximo de 30 días.' },
  { p: '¿Qué son las medidas de resguardo?', op: ['Una sanción anticipada para el denunciado', 'Medidas inmediatas para proteger a quien denuncia, como separar espacios o dar atención psicológica', 'Un trámite opcional', 'Medidas que se aplican al final'], ok: 2, fbOk: 'Correcto.', fbNo: 'Son medidas inmediatas de protección; no son sanciones.' },
  { p: '¿Qué pasa con quien denuncia o declara como testigo?', op: ['Se le cambia de faena como castigo', 'Está protegido: cualquier represalia está prohibida', 'Debe pagar la investigación', 'Pierde su turno'], ok: 2, fbOk: 'Correcto.', fbNo: 'Las represalias están prohibidas.' },
  { p: '¿Quién recibe la denuncia si involucra a la Jefatura de Operaciones?', op: ['La misma Jefa de Operaciones', 'La Asesora externa en Prevención de Riesgos o la Inspección del Trabajo', 'Nadie', 'La mandante'], ok: 2, fbOk: 'Correcto.', fbNo: 'Se usa el canal alternativo: la Asesora externa o la Inspección del Trabajo.' }
] };
CONTENIDO.firmas['karin.f1'] = function () { return { texto: 'Declaro que recibí el Protocolo de prevención del acoso sexual, laboral y la violencia en el trabajo (Ley 21.643) de ' + CONTENIDO.empresa.nombre + ', que conozco los canales de denuncia y las medidas de resguardo, y que me comprometo a mantener un trato respetuoso y libre de violencia.' }; };

/* =====================================================================
   CÓMO LEER LA MATRIZ IPER
   ===================================================================== */
CONTENIDO.lecciones['iper.l1'] = { diapositivas: [
  { t: '¿Qué es la Matriz IPER?', x: 'Es la herramienta que exige el D.S. 44 para Identificar Peligros y Evaluar Riesgos de cada tarea. La de GL es la versión 02 de noviembre de 2026, elaborada por la Asesora externa y aprobada por la Gerencia General.', l: ['Cubre las 23 tareas de los pilotos ROV en faena, las tareas del nuevo taller de mantención (incluido el estudiante en práctica) y las de la gerencia.', 'Se revisa cuando cambian las tareas, los equipos o después de un accidente: por eso se agregaron la estufa a parafina, la combustión lenta y la escalera del taller.'] },
  { t: 'Cómo se lee una fila', x: 'Cada fila sigue el mismo orden:', l: ['Puesto de trabajo → Tarea', 'Peligro: la fuente del daño', 'Riesgo: lo que puede pasar (código ISP)', 'Consecuencias: el daño posible', 'Evaluación P × S y nivel', 'Medidas de control y procedimiento', 'Riesgo residual: cómo queda después de controlar'], tip: 'Ejemplo real: Piloto ROV · Preparación del equipo y checklist · Borde de pontón y movimiento de la embarcación · Caídas al agua · Ahogamiento o hipotermia.' },
  { t: 'Peligro no es lo mismo que riesgo', l: ['Peligro: un aerosol junto al cautín, una batería de litio cargando, el borde del pontón.', 'Riesgo: la posibilidad de que ese peligro te dañe: incendio, quemadura, caer al agua.', 'El riesgo depende de qué tan probable es y de qué tan grave sería el daño.'] },
  { t: 'Probabilidad × Severidad', l: ['Probabilidad: Baja = 1, Media = 2, Alta = 4.', 'Severidad 1: ligeramente dañino (cortes, molestias).', 'Severidad 2: dañino (laceraciones, quemaduras, esguinces).', 'Severidad 4: extremadamente dañino (amputaciones, lesiones graves, muerte).'], tip: 'VEP = P × S. Ejemplo: incendio por soldar junto a aerosoles, P = 2 y S = 4 da 8.' },
  { t: 'Qué significa cada nivel', l: ['1 o 2 · Tolerable: no requiere mejorar la acción preventiva.', '4 · Moderado: hay que hacer esfuerzos para reducirlo.', '8 · Importante: no se debe comenzar ni continuar el trabajo hasta reducir el riesgo.', '16 · Intolerable: no se comienza ni continúa hasta reducirlo; si no es posible, el trabajo se prohíbe.'] },
  { t: 'Riesgos que se miden con protocolos', x: 'Algunos riesgos de salud no se evalúan con P × S sino con protocolos del Ministerio de Salud:', l: ['Radiación UV de los pilotos: Guía técnica de radiación UV (GL ya tiene el informe cualitativo).', 'Solventes, resinas y vapores: D.S. 594 y la HDS de cada producto.', 'Posturas en la consola, el banco y el microscopio, y traslado de maletas: TMERT y MMC.', 'Carga de trabajo, trabajo aislado y turnos 14x14: cuestionario CEAL-SM.', 'Violencia y acoso: protocolo Ley Karin.'] },
  { t: 'La jerarquía de controles', l: ['Eliminación: sacar el peligro (retirar inflamables del banco).', 'Sustitución: cambiarlo por algo menos peligroso (limpiacontactos sin n-hexano).', 'Ingeniería: gabinete de inflamables, extractor de humos, zona de carga no combustible.', 'Señalización y advertencia.', 'Administrativos: PTS, checklist, capacitación, supervisión, pausas.', 'EPP: lentes, guantes, chaleco salvavidas. Es la última barrera.'] },
  { t: 'Riesgo residual y personas', l: ['Después de aplicar los controles se evalúa de nuevo: es el riesgo residual.', 'La matriz considera a personas especialmente sensibles, como el estudiante en práctica, y aspectos sexogenéricos, como EPP de la talla real.', 'Si ves un peligro que no está en la matriz, avísale a la Jefa de Operaciones o a la Asesora: así se actualiza.'] }
] };
CONTENIDO.talleres['iper.t1'] = {
  intro: 'Evalúa riesgos reales de tu cargo con la regla P × S de GL y compara con lo que dice la matriz.',
  partes: [
    { tipo: 'vep', desdeIper: true, n: 3 },
    { tipo: 'abierta', p: 'Piensa en una tarea tuya que no esté en la matriz o que haya cambiado. ¿Qué peligro tiene y qué control propones?', min: 30, alApr: true,
      modelo: 'Gracias. Tu aporte queda registrado para la Asesora en Prevención de Riesgos y sirve para actualizar la Matriz IPER.' }
  ]
};
CONTENIDO.quiz.iper = { n: 6, preguntas: [
  { p: '¿Cuál es la diferencia entre peligro y riesgo?', op: ['Son lo mismo', 'El peligro es la fuente del daño; el riesgo es la posibilidad de que ese daño ocurra y su gravedad', 'El riesgo es la fuente; el peligro es la consecuencia', 'El peligro solo existe en el mar'], ok: 2, fbOk: 'Correcto.', fbNo: 'Peligro: la fuente (un aerosol junto al cautín). Riesgo: la posibilidad y gravedad del daño (incendio).' },
  { p: 'Una tarea tiene Probabilidad Media (2) y Severidad Extremadamente dañina (4). ¿Qué nivel tiene?', op: ['Tolerable', 'Moderado', 'Importante', 'Intolerable'], ok: 3, fbOk: 'Correcto: 2 × 4 = 8, Importante.', fbNo: '2 × 4 = 8: nivel Importante.' },
  { p: '¿Qué indica un riesgo Importante en la matriz de GL?', op: ['Se puede trabajar sin cambios', 'No se debe comenzar ni continuar el trabajo hasta reducir el riesgo', 'Solo hay que usar EPP', 'Hay que avisar a fin de mes'], ok: 2, fbOk: 'Correcto.', fbNo: 'Con nivel Importante no se comienza ni continúa hasta reducir el riesgo.' },
  { p: '¿Con qué protocolo se evalúan las posturas en la consola y en el banco de trabajo?', op: ['CEAL-SM', 'PREXOR', 'TMERT', 'Ley Karin'], ok: 3, fbOk: 'Correcto.', fbNo: 'Las posturas y movimientos repetitivos se evalúan con TMERT.' },
  { p: '¿Qué medida es un control de ingeniería?', op: ['Lentes de seguridad', 'Charla de seguridad', 'Gabinete metálico para inflamables', 'Letrero de advertencia'], ok: 3, fbOk: 'Correcto.', fbNo: 'El gabinete es un cambio físico: control de ingeniería.' },
  { p: '¿Qué es el riesgo residual?', op: ['El riesgo antes de evaluar', 'El riesgo que queda después de aplicar los controles', 'Un riesgo que no se puede medir', 'El riesgo de otra empresa'], ok: 2, fbOk: 'Correcto.', fbNo: 'Es el nivel que queda después de aplicar las medidas de control.' },
  { p: 'Ves un peligro nuevo que no está en la matriz. ¿Qué haces?', op: ['Nada', 'Aviso a la Jefa de Operaciones o a la Asesora para actualizarla', 'Lo anoto para mí', 'Espero a la próxima auditoría'], ok: 2, fbOk: 'Correcto.', fbNo: 'Avisar permite actualizar la matriz y los controles.' }
] };

/* ---------- Matriz IPER ampliada: la matriz real del cargo y su revisión participativa ---------- */
CONTENIDO.juegos['iper.j1'] = CONTENIDO.juegos['ds44.j4'];
CONTENIDO.juegos['iper.j2'] = function (cargo) {
  var R = _riesgosCargo(cargo).slice(0, 12), it = [];
  R.slice(0, 5).forEach(function (r) { if (r.peligros[0]) it.push({ t: r.peligros[0], c: 'pel', fb: 'Es un peligro: la fuente o condición que puede causar daño.' }); });
  R.slice(0, 5).forEach(function (r) { it.push({ t: r.riesgo, c: 'rie', fb: 'Es un riesgo: la posibilidad de que el peligro te dañe (lo que puede pasar).' }); });
  return { intro: 'En la matriz, el peligro es la fuente del daño y el riesgo es lo que puede pasar. Clasifica estos textos reales de la Matriz IPER de tu cargo.', partes: [{ tipo: 'clasificar',
    categorias: [{ id: 'pel', nombre: 'Peligro' }, { id: 'rie', nombre: 'Riesgo' }], items: it }] };
};
CONTENIDO.lecciones['iper.l2'] = { diapositivas: [
  { t: 'Probabilidad (P)', x: '¿Qué tan seguido puede ocurrir?', l: ['Baja = 1: rara vez.', 'Media = 2: varias veces.', 'Alta = 4: siempre o casi siempre.'] },
  { t: 'Severidad (S)', x: '¿Qué tan grave sería el daño?', l: ['Ligeramente dañino = 1: lesiones superficiales, molestias.', 'Dañino = 2: laceraciones, quemaduras, esguinces, fracturas menores.', 'Extremadamente dañino = 4: lesiones graves, amputaciones, muerte.'] },
  { t: 'El nivel de riesgo: P × S', l: ['1 o 2 · Tolerable: se mantienen los controles.', '4 · Moderado: hay que reducirlo en un plazo definido.', '8 · Importante: no se empieza ni continúa hasta reducirlo.', '16 · Intolerable: no se empieza; si no se puede reducir, el trabajo se prohíbe.'], tip: 'Ejemplo: caída al agua desde el pontón, P 2 × S 4 = 8 Importante. Por eso el chaleco salvavidas es obligatorio siempre.' },
  { t: 'Riesgos que se evalúan con protocolo', x: 'Varios riesgos de salud no se evalúan con P × S sino con su protocolo o guía:', l: ['Radiación UV de origen solar: guía técnica MINSAL (GL tiene el informe cualitativo).', 'Frío a la intemperie: D.S. 594 y guía del ISP.', 'Movimientos repetitivos: TMERT-EESS.', 'Manejo manual de carga: Ley 20.949.', 'Riesgos psicosociales: CEAL-SM.', 'Químicos: D.S. 594 y la HDS de cada producto.'] },
  { t: 'La jerarquía de controles', l: ['1. Eliminación: quitar el peligro.', '2. Sustitución: cambiarlo por algo menos peligroso.', '3. Ingeniería: resguardos, gabinete de inflamables, extractor de humos, barandas.', '4. Señalización y advertencias.', '5. Administrativos: procedimientos, AST, capacitación, pausas.', '6. EPP: la última barrera.'], tip: 'Cuando revises tu matriz, pregúntate: ¿se podría subir un escalón? Un control de ingeniería protege aunque alguien se olvide.' },
  { t: 'El riesgo residual', x: 'Es el riesgo que queda después de aplicar los controles. La matriz lo vuelve a evaluar.', l: ['Si el residual sigue Importante o Intolerable, los controles no bastan y se agregan medidas.', 'El residual solo es real si los controles se cumplen todos los días.', 'Por eso tú eres parte del control: si falta uno, la tarea no empieza.'] },
  { t: 'Cuándo se actualiza la matriz', l: ['Cuando cambian las tareas, los equipos, los lugares o los productos.', 'Después de un accidente o incidente relevante.', 'Cuando cambia la normativa.', 'Cuando los trabajadores informan riesgos nuevos o medidas que no funcionan: eso es lo que harás en el taller de este curso.', 'Cada cambio queda registrado en la hoja «Control de cambios».'] }
] };

/* La matriz completa del cargo, fila por fila */
CONTENIDO.lecciones['iper.lm'] = function (cargo) {
  var I = (window.IPER_EMPRESA || {})[cargo] || { riesgos: [], procesos: [] }, R = I.riesgos.slice();
  R.sort(function (a, b) { return (b.nivel || 0) - (a.nivel || 0); });
  var cuenta = {}; R.forEach(function (r) { cuenta[r.nivelTxt] = (cuenta[r.nivelTxt] || 0) + 1; });
  var tareas = []; R.forEach(function (r) { (r.tareas || []).forEach(function (t) { if (tareas.indexOf(t) < 0) tareas.push(t); }); });
  var d = [{ t: 'La Matriz IPER de tu cargo', x: 'Ahora vas a leer la matriz real de GL para el cargo de ' + _nombreCargo(cargo) + ': ' + R.length + ' riesgos en ' + tareas.length + ' tareas. Léela con ojo crítico: al final del curso te vamos a preguntar si falta algo y si las medidas sirven.',
    l: Object.keys(cuenta).map(function (k) { return k + ': ' + cuenta[k] + ' riesgo' + (cuenta[k] === 1 ? '' : 's'); }),
    tip: 'La matriz completa en Excel es un documento que tienes derecho a conocer: pídela a la Jefa de Operaciones o a la Asesora.' }];
  d.push({ t: 'Las tareas de tu cargo', l: tareas.slice(0, 14) });
  if (tareas.length > 14) d.push({ t: 'Más tareas de tu cargo', l: tareas.slice(14, 28) });
  R.forEach(function (r, i) {
    function grupo(et, a) { return (a || []).filter(Boolean).map(function (c) { return et + ': ' + c; }); }
    d.push({ t: 'Fila ' + (i + 1) + ' de ' + R.length + ' · ' + r.riesgo + (r.codigo ? ' (' + r.codigo + ')' : ''),
      x: 'Tipo: ' + (r.tipo || '—') + '\nTareas: ' + (r.tareas || []).join(' / ') + '\nPeligros: ' + (r.peligros || []).join(' / ') + '\nConsecuencias: ' + (r.consecuencias || []).join(' / '),
      l: [(r.p && r.s) ? 'Evaluación: P ' + r.p + ' × S ' + r.s + ' = ' + (r.p * r.s) + ' → ' + r.nivelTxt : 'Evaluación: ' + r.nivelTxt].concat(
        grupo('Eliminar', r.eliminacion), grupo('Sustituir', r.sustitucion), grupo('Ingeniería', r.ingenieria), grupo('Señalización', r.senalizacion), grupo('Administrativo', r.administrativo),
        r.eppItems && r.eppItems.length ? ['EPP: ' + r.eppItems.join(', ')] : [], r.pts && r.pts.length ? ['Procedimiento: ' + r.pts.join(', ')] : []) });
  });
  d.push({ t: 'Ahora te toca a ti', l: ['¿Hay alguna tarea que haces y que no aparece?', '¿Hay algún peligro que conoces y que no está?', '¿Alguna evaluación te parece muy baja o muy alta para lo que vives en terreno?', '¿Las medidas se cumplen de verdad? ¿Falta algún control o EPP?', 'Lo vas a responder en el taller «Revisa tu matriz».'] });
  return { diapositivas: d };
};

/* Revisión participativa de la matriz del cargo */
CONTENIDO.talleres['iper.t2'] = function (cargo) {
  var R = _riesgosCargo(cargo).slice().sort(function (a, b) { return (b.nivel || 0) - (a.nivel || 0); });
  var items = R.map(function (r) { var c = [].concat(r.ingenieria || [], r.administrativo || []).filter(Boolean).slice(0, 2); return r.riesgo + ' (' + r.nivelTxt + ')' + (c.length ? ' · ' + c.join('; ') : '') + (r.eppItems && r.eppItems.length ? ' · EPP: ' + r.eppItems.slice(0, 3).join(', ') : ''); });
  return { intro: 'Este taller es tu revisión de la Matriz IPER. Lo que marques y escribas llega a la Asesora en Prevención de Riesgos y se usa para actualizar la matriz. No hay respuestas correctas o incorrectas: importa lo que pasa de verdad en tu trabajo.', partes: [
    { tipo: 'registro', titulo: 'Revisión de las medidas de la Matriz IPER (' + _nombreCargo(cargo) + ')', opciones: ['Correctas y se cumplen', 'Faltan o no se cumplen', 'No lo sé'], items: items },
    { tipo: 'abierta', p: '¿Qué tarea, peligro o riesgo de tu trabajo NO está en la matriz? Descríbelo: qué haces, dónde y qué te podría pasar.', min: 30, alApr: true, modelo: 'Gracias. Cada riesgo nuevo que informas se evalúa y, si corresponde, se agrega a la matriz con sus controles.' },
    { tipo: 'abierta', p: 'De los riesgos que marcaste con medidas que faltan o no se cumplen, elige uno: ¿qué pasa en la práctica y qué medida propones? Indica en qué escalón de la jerarquía está.', min: 40, alApr: true, modelo: 'Una buena propuesta prioriza eliminar, sustituir o aislar el peligro (ingeniería) antes que depender solo de instrucciones o del EPP.' },
    { tipo: 'abierta', p: '¿Alguna evaluación (P × S) te parece mal calculada para lo que vives en terreno? ¿Cuál y por qué?', min: 20, alApr: true, modelo: 'Gracias. Si la tarea se hace más seguido o con más peligro del registrado, la evaluación se revisa.' }
  ] };
};

/* =====================================================================
   EMERGENCIAS (PDR-01 FAENAS Y PDR-02 TALLER)
   ===================================================================== */
CONTENIDO.lecciones['prrd.l1'] = { documento: 'pts/PDR-02.pdf', diapositivas: [
  { t: 'Los planes de emergencia de GL', x: 'GL tiene dos planes: el PDR-01 para las faenas de pilotos y el PDR-02 para el taller de mantención ROV. En las faenas, además, manda el plan de emergencia de la empresa mandante y de la embarcación.', l: ['Faenas: centros de cultivo, pontones y embarcaciones de las mandantes.', 'Taller: recinto de mantención, oficina, cocina, baños, escalera y comedor del segundo piso.'] },
  { t: 'Las amenazas prioritarias', l: ['En faena: hombre al agua, temporal y marejada, accidente en zona aislada, sismo y tsunami.', 'En el taller: incendio por inflamables y soldadura, incendio de baterías de litio, intoxicación por monóxido de carbono de las estufas, derrame químico, emergencia eléctrica y sismo.'] },
  { t: '¿Quién dirige?', l: ['En faena: el jefe de centro o el patrón, según el plan de la mandante. El piloto suspende el ROV y sigue sus instrucciones.', 'En el taller: el encargado de taller es el líder de respuesta; el asistente lo apoya y lo reemplaza.', 'Desde la oficina: la Jefa de Operaciones coordina con la mandante y la ACHS.', 'La Gerencia dispone los recursos.'], tip: 'La respuesta inmediata no espera autorización: quien está a cargo actúa para proteger a las personas.' },
  { t: 'El método ACCEDER', x: 'Los planes siguen siete pasos:', l: ['A · Alerta y alarma', 'C · Comunicación', 'C · Coordinación', 'E · Evaluación preliminar', 'D · Decisiones', 'E · Evaluación complementaria', 'R · Readecuación del plan'] },
  { t: 'Incendio y baterías en el taller', l: ['Alarma a viva voz y corte de energía si es seguro.', 'Extintor PQS solo si el fuego es incipiente y tienes la salida a tu espalda.', 'Batería de litio que humea o se hincha: alejar personas y combustibles; no usar agua.', 'Si el fuego crece: evacuar, llamar a Bomberos (132) y no volver a entrar.'] },
  { t: 'Estufas y monóxido de carbono', l: ['La estufa a parafina va fuera de la vía de evacuación y se carga afuera, apagada y fría.', 'La combustión lenta se mantiene sin papeles ni cartón alrededor; las cenizas se retiran frías en un tarro metálico con tapa.', 'Mareo, dolor de cabeza o alarma del detector de CO: apagar, ventilar y salir todos al aire libre.', 'Fuego en el cañón: cerrar el tiraje, evacuar y llamar a Bomberos (132).'] },
  { t: 'Sismo y tsunami', l: ['En el taller: alejarse de las repisas altas, agacharse, cubrirse y afirmarse; luego evacuar a la zona de seguridad con recuento.', 'En el pontón: suspender la operación y afirmarse; no correr por los pasillos.', 'Si el sismo hace difícil mantenerse en pie, se aplica el plan de tsunami de inmediato, sin esperar alerta oficial.', 'Se vuelve solo cuando la autoridad cancela la alerta.'] },
  { t: 'Números de emergencia', l: CONTENIDO.directorio.slice(0, 9).map(function (d) { return d.n + ': ' + d.t; }) }
] };
CONTENIDO.juegos['prrd.j1'] = CONTENIDO.juegos['ds44.j5'];
CONTENIDO.juegos['prrd.j2'] = { intro: 'Antes de operar en una faena debes conocer los recursos de emergencia del centro y de la embarcación. Marca lo que debes verificar.',
  partes: [{ tipo: 'checklist', msgFalta: 'Esto sí debes conocer o verificar.', cierre: 'Si falta algo, avísale al jefe de centro y a la Jefa de Operaciones.',
    items: [
      { t: 'Dónde están los aros salvavidas y los medios de rescate', ok: true },
      { t: 'Dónde está el extintor más cercano al pontón', ok: true },
      { t: 'Cuál es la zona de seguridad y la vía de evacuación del centro', ok: true },
      { t: 'Cómo comunicarte con el jefe de centro y la embarcación (radio o celular)', ok: true },
      { t: 'Dónde está el botiquín', ok: true },
      { t: 'El horario de colación del centro', ok: false, fb: 'Es útil, pero no es un recurso de emergencia.' },
      { t: 'La clave del wifi del pontón', ok: false, fb: 'No es un recurso de emergencia.' }
    ] }] };
CONTENIDO.juegos['prrd.j2_taller'] = { intro: 'El PDR-02 define los recursos de emergencia del taller. Marca lo que el taller debe tener o cumplir.',
  partes: [{ tipo: 'checklist', msgFalta: 'Esto sí debe tener o cumplir el taller.', cierre: 'Varias de estas medidas están en el plan de acción de la inspección del taller. Si ves que falta algo, avísale al encargado de taller.',
    items: [
      { t: 'Extintores vigentes, señalizados y a no más de 1,30 m del piso', ok: true },
      { t: 'Botiquín completo y sin medicamentos', ok: true },
      { t: 'Detector de monóxido de carbono', ok: true },
      { t: 'Lavaojos y kit de derrames', ok: true },
      { t: 'Teléfonos de emergencia publicados', ok: true },
      { t: 'Salida despejada, sin estufa ni bolsas detrás de la puerta', ok: true },
      { t: 'Repisas altas sin maletas pesadas', ok: true },
      { t: 'Puerta de salida con llave durante la jornada', ok: false, fb: 'La salida debe poder abrirse siempre desde adentro.' },
      { t: 'Extintor guardado en la bodega para que no se pierda', ok: false, fb: 'El extintor debe estar a la vista y accesible.' },
      { t: 'Analgésicos en el botiquín por si alguien los necesita', ok: false, fb: 'El botiquín no debe tener medicamentos: no hay protocolo sanitario autorizado para entregarlos.' }
    ] }] };
CONTENIDO.quiz.prrd = { n: 6, preguntas: [
  { p: 'En una faena, ¿qué plan de emergencia sigues?', op: ['Solo el de GL', 'El de la mandante y de la embarcación, además del PDR-01 de GL', 'Ninguno', 'El del taller'], ok: 2, fbOk: 'Correcto.', fbNo: 'En faena manda el plan de la mandante y de la embarcación, complementado con el PDR-01.' },
  { p: '¿Qué significa la primera "A" del método ACCEDER?', op: ['Abandono', 'Alerta y alarma', 'Ayuda externa', 'Autorización'], ok: 2, fbOk: 'Correcto.', fbNo: 'A = Alerta y alarma.' },
  { p: '¿Quién es el líder de respuesta de una emergencia en el taller?', op: ['El estudiante en práctica', 'El encargado de taller', 'La mandante', 'Cualquiera'], ok: 2, fbOk: 'Correcto. El asistente lo apoya y lo reemplaza.', fbNo: 'El encargado de taller (PDR-02).' },
  { p: 'Una batería de litio empieza a humear en el taller. ¿Qué NO debes hacer?', op: ['Alejar a las personas', 'Echarle agua', 'Dar la alarma', 'Alejar combustibles si es seguro'], ok: 2, fbOk: 'Correcto.', fbNo: 'No se usa agua: alejar personas y combustibles y dar la alarma.' },
  { p: 'Tu compañero se marea y le duele la cabeza con las estufas encendidas. ¿Qué haces?', op: ['Le doy un analgésico', 'Apago la estufa, ventilo y salimos todos al aire libre', 'Subo la calefacción', 'Lo dejo descansar junto a la estufa'], ok: 2, fbOk: 'Correcto. Puede ser monóxido de carbono.', fbNo: 'Son síntomas de monóxido de carbono: aire fresco para todos.' },
  { p: '¿Cuándo se puede volver a la costa después de una alerta de tsunami?', op: ['Después de la primera ola', 'Cuando la autoridad cancela la alerta', 'A la hora', 'Cuando el mar se ve tranquilo'], ok: 2, fbOk: 'Correcto.', fbNo: 'Solo cuando la autoridad cancela la alerta.' },
  { p: '¿Cuál es el teléfono de rescate y urgencias de la ACHS?', op: ['131', '1404', '137', '600 360 7777'], ok: 2, fbOk: 'Correcto.', fbNo: 'ACHS: 1404.' }
] };

/* =====================================================================
   EPP (Procedimiento de EPP v02)
   ===================================================================== */
CONTENIDO.lecciones['epp.l1'] = { documento: 'pts/EPP.pdf', diapositivas: [
  { t: 'El EPP en GL', x: 'El Procedimiento de selección, entrega y reposición de EPP v02 se aplica a todo el personal de GL y a los estudiantes en práctica.', l: ['La selección la hace la Asesora externa con la Encargada de SST, según la Matriz IPER.', 'Solo se compra EPP certificado (D.S. 18).', 'Se entrega sin costo y con registro firmado.'], tip: 'El EPP es siempre la última medida: no reemplaza al gabinete de inflamables, al extractor de humos ni a los procedimientos.' },
  { t: 'EPP de los pilotos', l: ['Chaleco salvavidas certificado en cubierta, pontón, módulos y muelles.', 'Calzado de seguridad antideslizante.', 'Traje de agua y ropa térmica.', 'Guantes de seguridad y anticorte; guantes de nitrilo para desinfección.', 'Lentes con protección UV, protector solar y gorro legionario.', 'Casco con barbiquejo cuando lo exija la maniobra o la mandante.'] },
  { t: 'EPP del taller', l: ['Lentes de seguridad en el banco y con herramientas eléctricas.', 'Guantes de nitrilo para solventes, resina y epóxicos.', 'Guantes anticorte para herramientas y hélices.', 'Calzado de seguridad.', 'Careta facial en pruebas de estanqueidad.', 'Respirador para vapores orgánicos cuando la HDS lo indique.'] },
  { t: 'Cómo se usa', l: ['Todo el tiempo que estés expuesto al riesgo.', 'Revísalo antes de cada uso.', 'Úsalo solo para lo que fue entregado.', 'No compartas EPP personal: lentes, mascarillas, guantes.', 'No modifiques ni desarmes ningún EPP.'] },
  { t: 'Cómo se cuida', l: ['Límpialo y guárdalo en un lugar limpio y seco, lejos del sol, del calor y de químicos.', 'El chaleco salvavidas se enjuaga con agua dulce y se seca a la sombra.', 'Los EPP compartidos se limpian y desinfectan después de cada uso.'] },
  { t: 'Cuándo se repone', l: ['Desgaste o deterioro visible.', 'Falla: hebillas, costuras, filtros obstruidos.', 'Fecha de vencimiento cumplida.', 'Contacto con químicos, resina o material biológico.', 'Pérdida justificada o cambio de cargo.'], tip: 'El chaleco salvavidas se repone si tiene cortes, quemaduras, costuras dañadas o perdió flotabilidad.' }
] };
CONTENIDO.juegos['epp.j1'] = { intro: 'Según el procedimiento de EPP, decide si cada elemento sigue en uso o se repone.', partes: [{ tipo: 'clasificar',
  categorias: [{ id: 'usa', nombre: 'Sigue en uso' }, { id: 'repone', nombre: 'Se repone' }],
  items: [
    { t: 'Chaleco salvavidas con una costura abierta', c: 'repone', fb: 'Una costura dañada puede fallar en el agua.' },
    { t: 'Guantes de nitrilo rotos en la punta de un dedo', c: 'repone', fb: 'El solvente o la resina entran por la rotura.' },
    { t: 'Lentes de seguridad limpios y sin rayas', c: 'usa', fb: 'Están en buen estado.' },
    { t: 'Lentes con rayaduras que dificultan ver la placa', c: 'repone', fb: 'Si afectan la visión, se reponen.' },
    { t: 'Chaleco salvavidas mojado, enjuagado y sin daños', c: 'usa', fb: 'Mojarse es normal; lo importante es que esté íntegro.' },
    { t: 'Calzado de seguridad con la suela lisa', c: 'repone', fb: 'Una suela gastada no evita resbalones en el pontón.' },
    { t: 'Filtro del respirador con el que cuesta respirar', c: 'repone', fb: 'Está saturado.' },
    { t: 'Protector solar vencido', c: 'repone', fb: 'Caducidad: se repone.' }
  ] }] };
CONTENIDO.talleres['epp.t1'] = {
  intro: 'Toma tu propio EPP y revísalo pieza por pieza. Lo que marques como "requiere cambio" y tu comentario final le llegan a la Asesora en Prevención de Riesgos.',
  partes: [
    { tipo: 'registro', titulo: 'Autoinspección de mi EPP', opciones: ['Bien', 'Requiere cambio', 'No uso'], items: [
      'Chaleco salvavidas: cintas, hebillas, costuras y silbato',
      'Calzado de seguridad: suela con relieve, puntera cubierta, sin cortes',
      'Traje de agua o ropa térmica: sin roturas',
      'Guantes de seguridad o anticorte: sin cortes, con buen agarre',
      'Guantes de nitrilo: sin roturas',
      'Lentes de seguridad: sin rayas que dificulten la visión',
      'Careta facial: sin fisuras',
      'Casco: sin fisuras, con barbiquejo en buen estado'] },
    { tipo: 'abierta', p: '¿Qué EPP necesitas reponer, o cuál no te queda bien por talla o ajuste?', min: 5, alApr: true,
      modelo: 'Gracias. Tu respuesta queda registrada para la Asesora, que gestionará la reposición con la Jefa de Operaciones.' }
  ]
};
CONTENIDO.quiz.epp = { n: 6, preguntas: [
  { p: '¿Qué lugar ocupa el EPP en la jerarquía de controles?', op: ['La primera medida', 'La última barrera, cuando el riesgo no se pudo eliminar ni controlar', 'Reemplaza al gabinete de inflamables', 'Es opcional'], ok: 2, fbOk: 'Correcto.', fbNo: 'El EPP es siempre la última medida.' },
  { p: '¿Quién paga el EPP gastado por uso normal?', op: ['El trabajador', 'La empresa: está prohibido descontarlo', 'Se divide en partes iguales', 'El Delegado'], ok: 2, fbOk: 'Correcto.', fbNo: 'El EPP es gratuito (Ley 16.744, art. 68).' },
  { p: '¿Qué EPP usas al aplicar masilla epóxica o manipular resina?', op: ['Ninguno', 'Guantes de nitrilo y lentes de seguridad', 'Solo chaleco', 'Guantes de lana'], ok: 2, fbOk: 'Correcto.', fbNo: 'Guantes de nitrilo y lentes: irritan y sensibilizan la piel y los ojos.' },
  { p: '¿Cuándo usas el chaleco salvavidas como piloto?', op: ['Solo al navegar', 'En todo sector con riesgo de caída al agua', 'Solo si llueve', 'Nunca en el pontón'], ok: 2, fbOk: 'Correcto.', fbNo: 'En cubierta, pontón, módulos, muelles y todo sector con riesgo de caída al agua.' },
  { p: '¿Puedes compartir tus guantes o tu mascarilla con un compañero?', op: ['Sí, siempre', 'No, el EPP personal no se comparte', 'Solo los viernes', 'Solo si está limpio a la vista'], ok: 2, fbOk: 'Correcto.', fbNo: 'El EPP personal no se comparte.' },
  { p: 'Tus lentes tienen rayas que no te dejan ver bien la placa. ¿Qué haces?', op: ['Los sigo usando', 'Aviso y pido reposición', 'Trabajo sin lentes', 'Los limpio con lija'], ok: 2, fbOk: 'Correcto.', fbNo: 'Se avisa y se reponen.' }
] };
CONTENIDO.firmas['epp.f1'] = function () { return { texto: 'Declaro haber recibido la capacitación de ' + CONTENIDO.empresa.nombre + ' sobre el uso correcto, ajuste, mantención y criterios de reposición de mis elementos de protección personal, según el Procedimiento de selección, entrega y reposición de EPP y el D.S. N° 44/2024. Me comprometo a usarlos durante toda la exposición al riesgo y a avisar de inmediato cualquier daño o pérdida.' }; };

/* =====================================================================
   QUÉ HACER ANTE UN ACCIDENTE (PRO-ACC-01)
   ===================================================================== */
CONTENIDO.lecciones['acc.l1'] = { documento: 'pts/PRO-ACC-01.pdf', diapositivas: [
  { t: '¿Qué es un accidente del trabajo?', l: ['Toda lesión que sufres a causa o con ocasión del trabajo y que te produce incapacidad o muerte (Ley 16.744, art. 5).', 'También el accidente de trayecto: el que ocurre en el camino directo entre tu casa y el trabajo.', 'El organismo administrador de GL es la ACHS: atención gratuita, subsidios y rehabilitación.'], tip: 'Avisa siempre, aunque parezca leve. Una lesión que no se denuncia puede quedar sin cobertura.' },
  { t: 'Accidente grave', x: 'Es grave si cumple al menos una de estas condiciones:', l: ['Obliga a maniobras de reanimación.', 'Obliga a maniobras de rescate, incluida la búsqueda de una persona caída al agua.', 'Produce la amputación o pérdida de cualquier parte del cuerpo.', 'Es una caída de más de 1,8 metros.', 'Ocurre en condiciones hiperbáricas.', 'Afecta a un número de personas que altera el desarrollo normal de la faena.'] },
  { t: 'Accidente leve: los pasos', l: ['Detener la tarea, asegurar el lugar y dar primeros auxilios.', 'Avisar de inmediato a la Jefa de Operaciones (en faena, también al jefe de centro).', 'Atención en la ACHS (1404) o en el centro asistencial más cercano.', 'La Jefa de Operaciones presenta la DIAT dentro de 24 horas.', 'Investigación con la Asesora y el Delegado de SST.'] },
  { t: 'Accidente grave o fatal', l: ['Suspender de inmediato la faena afectada y evacuar si hay riesgo.', 'Notificar de inmediato a la Inspección del Trabajo y a la SEREMI de Salud: 600 42 000 22.', 'Avisar a la ACHS y a la empresa mandante; en el mar, a la Autoridad Marítima (137).', 'No alterar el lugar, salvo para rescatar o atender.', 'La faena se reanuda solo con autorización de la autoridad que la suspendió.'] },
  { t: 'Estudiantes en práctica', l: ['Los cubre el seguro escolar (D.S. 313).', 'Se atienden en un servicio de salud público (SAPU, SAR, CESFAM u hospital).', 'Se completa la Declaración Individual de Accidente Escolar y se avisa al CFT.'] },
  { t: 'La denuncia (DIAT)', l: ['La presenta la empresa dentro de 24 horas.', 'Si la empresa no la hace, puede hacerla el trabajador, un familiar, el médico o cualquier persona que conozca los hechos.', 'Una denuncia fuera de plazo no te hace perder los beneficios del seguro.', 'Si la ACHS rechaza tu caso como laboral, puedes reclamar ante la SUSESO.'] },
  { t: 'La investigación', l: ['Busca causas, no culpables.', 'Se inicia dentro de 24 horas y el informe se emite en 5 días hábiles.', 'Participan la Asesora, el Delegado de SST y la jefatura.', 'Después se actualizan la Matriz IPER, el PTS y el IRL.'] },
  { t: 'Tu parte', l: ['Avisar de inmediato cualquier accidente y también los incidentes (lo que pudo pasar).', 'No mover nada del lugar si fue grave o fatal.', 'Contar con honestidad lo que pasó: sirve para que no le pase a otro.'] }
] };
CONTENIDO.juegos['acc.j1'] = { intro: 'Clasifica cada situación según el procedimiento de accidentes de GL. Después ordena los pasos de un accidente leve.', partes: [
  { tipo: 'clasificar', categorias: [{ id: 'leve', nombre: 'Leve' }, { id: 'grave', nombre: 'Grave' }, { id: 'fatal', nombre: 'Fatal' }], items: [
    { t: 'Quemadura pequeña con el cautín; la curan en la ACHS y vuelve a trabajar', c: 'leve', fb: 'No cumple ninguna condición de accidente grave.' },
    { t: 'Un piloto cae al agua desde el pontón y hay que rescatarlo', c: 'grave', fb: 'Obliga a maniobras de rescate: grave.' },
    { t: 'El asistente cae por la escalera desde 2,2 metros', c: 'grave', fb: 'Caída de más de 1,8 metros: grave.' },
    { t: 'Corte en un dedo con la hélice del ROV, sin pérdida de tejido', c: 'leve', fb: 'Leve, pero igual se avisa y se denuncia.' },
    { t: 'Una persona inconsciente por monóxido a la que hay que reanimar', c: 'grave', fb: 'Obliga a maniobras de reanimación: grave.' },
    { t: 'Pérdida de la punta de un dedo atrapado en una hélice', c: 'grave', fb: 'Amputación de una parte del cuerpo: grave.' },
    { t: 'Un trabajador fallece en el trayecto al centro asistencial tras el accidente', c: 'fatal', fb: 'Fatal: se suspende, no se altera el lugar y se notifica de inmediato.' }
  ] },
  { tipo: 'ordenar', enunciado: 'Ordena los pasos ante un accidente leve.', items: ['Primeros auxilios y aviso a la Jefa de Operaciones', 'Atención en la ACHS', 'La Jefa de Operaciones presenta la DIAT dentro de 24 horas', 'Investigación con la Asesora y el Delegado', 'Medidas para que no se repita'], fb: 'Así lo establece el PRO-ACC-01.' }
] };
CONTENIDO.quiz.acc = { n: 6, preguntas: [
  { p: '¿En qué plazo se presenta la DIAT en la ACHS?', op: ['24 horas', '5 días', '30 días', 'Solo si hay licencia'], ok: 1, fbOk: 'Correcto.', fbNo: 'Dentro de 24 horas desde que se conoce el accidente.' },
  { p: 'Un piloto cae al agua y hay que buscarlo y rescatarlo. ¿Cómo se clasifica?', op: ['Leve', 'Grave', 'De trayecto', 'No es accidente si no se lesionó'], ok: 2, fbOk: 'Correcto: obliga a maniobras de rescate.', fbNo: 'Si obliga a maniobras de rescate es accidente grave, aunque la persona no tenga lesiones.' },
  { p: '¿A qué número se notifica un accidente grave o fatal?', op: ['1404', '600 42 000 22', '131', '137'], ok: 2, fbOk: 'Correcto: Inspección del Trabajo y SEREMI de Salud.', fbNo: '600 42 000 22, que avisa a la Inspección del Trabajo y a la SEREMI de Salud.' },
  { p: 'Si la empresa no hace la DIAT, ¿quién puede hacerla?', op: ['Nadie', 'El trabajador, un familiar, el médico o quien conozca los hechos', 'Solo la Gerencia', 'Solo la mandante'], ok: 2, fbOk: 'Correcto.', fbNo: 'Puede hacerla el propio trabajador, un familiar, el médico o cualquier persona que conozca los hechos.' },
  { p: 'Un estudiante en práctica se corta en el taller. ¿Dónde se atiende?', op: ['En la ACHS siempre', 'En un servicio de salud público, con el seguro escolar', 'En su casa', 'No tiene cobertura'], ok: 2, fbOk: 'Correcto.', fbNo: 'Lo cubre el seguro escolar en el servicio de salud público.' },
  { p: '¿Qué busca la investigación de un accidente?', op: ['Un culpable para sancionar', 'Las causas, para que no se repita', 'Cerrar el caso rápido', 'Bajar las estadísticas'], ok: 2, fbOk: 'Correcto.', fbNo: 'Busca causas, no culpables.' },
  { p: 'Casi te cae una maleta desde la repisa alta, pero no te pasa nada. ¿Qué haces?', op: ['Nada, no pasó nada', 'Lo informo como incidente', 'Me río', 'Lo cuento solo si alguien pregunta'], ok: 2, fbOk: 'Correcto. Los incidentes avisan lo que puede pasar.', fbNo: 'Se informa como incidente: es la oportunidad de corregir antes de que alguien se lesione.' }
] };

/* =====================================================================
   PROCEDIMIENTOS DE TRABAJO SEGURO Y PROTOCOLOS
   ===================================================================== */
var _PTS = {
  'PTS-ROV-001': {
    objetivo: 'Establecer la secuencia de trabajo segura para las actividades de los pilotos ROV en faenas de empresas mandantes: operación de ROV y dron, inspecciones, extracción de mortalidad, corte de tensores, navegación, mantención básica, limpieza, carga de baterías y cierre de faena.',
    alcance: ['Centros de cultivo, pontones, embarcaciones, plataformas flotantes y muelles de las mandantes.', 'Turnos de 14 por 14 días, habitualmente como única persona de GL en la faena.', 'La mantención mayor y las reparaciones se hacen en el taller (PTS-TAL-001).'],
    roles: { piloto: ['Cumplir el PTS y las normas de la mandante.', 'Hacer el checklist preoperacional y avisar el inicio y término de cada jornada a la Jefa de Operaciones.', 'Detener la operación ante riesgo no controlado.', 'Limpiar, desinfectar y hacer la mantención básica del equipo.'],
      jefa_operaciones: ['Planificar y coordinar las faenas con las mandantes.', 'Recibir los reportes de inicio y término de los pilotos.', 'Suspender o reprogramar ante condiciones inseguras.', 'Gestionar los accidentes según el PRO-ACC-01.'],
      gerente_general: ['Proporcionar los recursos, equipos y EPP.', 'Exigir el cumplimiento del procedimiento.'] },
    epp: ['Chaleco salvavidas certificado', 'Calzado de seguridad antideslizante', 'Traje de agua y ropa térmica', 'Guantes de seguridad y de nitrilo', 'Lentes con protección UV', 'Protector solar y gorro legionario', 'Casco con barbiquejo cuando corresponda'],
    pasos: [{ t: 'Antes de operar', l: ['Inducción de la mandante y conocer su plan de emergencia.', 'Avisar el inicio de la jornada a la Jefa de Operaciones.', 'Revisar pronóstico y estado del mar.', 'Completar el checklist preoperacional (anexo A).', 'Confirmar con el centro que no hay buzos en el agua sin coordinación.'] },
      { t: 'Durante la operación', l: ['Ingresar el ROV por un punto seguro y con maniobras controladas.', 'Distancia segura de tensores, estructuras y hélices de embarcaciones.', 'Corte de tensores solo con autorización formal y sin personas en el agua.', 'Pausas visuales y posturales en la consola.'] },
      { t: 'Al cerrar', l: ['Retirar el ROV de forma controlada y revisarlo.', 'Limpiar, desinfectar, desenergizar y almacenar seco.', 'Rotular y enviar al taller equipos o baterías dañados.', 'Registrar en la bitácora y avisar el término a la Jefa de Operaciones.'] }],
    detener: ['Riesgo no controlado o clima incompatible con la operación.', 'Falla crítica del equipo o pérdida de control o comunicación.', 'Buzos en el agua sin coordinación previa.', 'Incidente, accidente o emergencia.'],
    orden: ['Avisar el inicio de jornada a la Jefa de Operaciones', 'Revisar clima y completar el checklist preoperacional', 'Confirmar que no hay buzos sin coordinación', 'Operar el ROV con maniobras controladas', 'Limpiar, desinfectar y almacenar el equipo', 'Registrar y avisar el término de la jornada'],
    quiz: [
      { p: '¿Qué haces al iniciar cada jornada en la faena?', op: ['Nada especial', 'Aviso a la Jefa de Operaciones y completo el checklist preoperacional', 'Solo reviso el clima', 'Espero instrucciones del centro'], ok: 2 },
      { p: '¿Cuándo está prohibido operar el ROV?', op: ['Cuando llueve poco', 'Con buzos en el agua sin coordinación formal con la mandante', 'De mañana', 'Con el chaleco puesto'], ok: 2 },
      { p: 'Detectas una falla electrónica en el ROV. ¿Qué haces?', op: ['Abro la carcasa y la reparo', 'Lo retiro de servicio y lo envío al taller', 'Sigo operando', 'Lo desarmo en el pontón'], ok: 2 },
      { p: 'El ROV queda enredado en la red. ¿Qué está prohibido?', op: ['Avisar', 'Entrar al agua a recuperarlo sin autorización', 'Detener las maniobras', 'Coordinar con el centro'], ok: 2 },
      { p: '¿Dónde usas el chaleco salvavidas?', op: ['Solo en la panga', 'En todo sector con riesgo de caída al agua', 'Solo si hay oleaje', 'Nunca en el pontón'], ok: 2 }
    ] },
  'PTS-TAL-001': {
    objetivo: 'Establecer la secuencia de trabajo de las personas del taller en la recepción, mantención, reparación, prueba y almacenamiento de equipos ROV y sus componentes.',
    alcance: ['Encargado de taller, asistente y estudiantes en práctica.', 'Toda persona que ingrese al taller.', 'Desarme, soldadura, solventes, resinas, impresión 3D, ultrasonido, baterías, pruebas, orden, calefacción y cierre.'],
    roles: { encargado_taller: ['Dirigir el trabajo según el PTS y asignar tareas.', 'Supervisar al asistente y a los estudiantes.', 'Mantener los registros del taller (REG-TAL-01).', 'Detener cualquier tarea insegura.'],
      asistente_taller: ['Ejecutar las tareas según el PTS y las instrucciones del encargado.', 'Usar el EPP y avisar condiciones inseguras.'],
      alumno: ['Ejecutar solo las tareas autorizadas, siempre con el supervisor presente.', 'Consultar antes de cualquier tarea nueva.'],
      jefa_operaciones: ['Velar por la difusión y el cumplimiento del PTS.', 'Verificar los registros del taller.'] },
    epp: ['Lentes de seguridad', 'Guantes de nitrilo', 'Guantes anticorte', 'Calzado de seguridad', 'Careta facial en pruebas de estanqueidad', 'Respirador para vapores orgánicos según HDS'],
    pasos: [{ t: 'Desarme y armado', l: ['Apagar el ROV y desconectar consola, fuente y umbilical.', 'Aislar la batería interna y verificar ausencia de tensión.', 'Lentes de seguridad con el taladro atornillador.', 'No apoyar herramientas metálicas sobre la batería o las placas.', 'Reconectar la batería solo al final.'] },
      { t: 'Soldadura, solventes y resinas', l: ['Retirar aerosoles y solventes del banco de soldadura.', 'Encender el extractor de humos; el cautín siempre en su soporte.', 'Esperar la evaporación completa del solvente antes de energizar o soldar.', 'Guantes de nitrilo y lentes con resinas y epóxicos.'] },
      { t: 'Baterías y cierre', l: ['No cargar baterías hinchadas, golpeadas o calientes.', 'Cargar en la zona de carga, supervisado y registrado en la bitácora.', 'Ninguna batería queda cargando al cierre.', 'Apagar cautín, fuentes y cargadores; estufas apagadas o en condición segura.'] }],
    detener: ['Batería hinchada, caliente o con olor extraño.', 'Olor a solvente fuerte o derrame.', 'Mareo, dolor de cabeza o alarma del detector de CO.', 'Equipo con daño eléctrico visible.'],
    orden: ['Apagar el ROV y desconectar consola y umbilical', 'Aislar la batería interna', 'Verificar ausencia de tensión con el multímetro', 'Ponerse lentes y desarmar según el fabricante', 'Reparar y armar revisando sellos y cableado', 'Reconectar la batería al final'],
    quiz: [
      { p: '¿Qué haces antes de abrir la carcasa de un ROV?', op: ['Nada', 'Apagar, aislar la batería y verificar ausencia de tensión', 'Solo apagarlo', 'Calentarlo'], ok: 2 },
      { p: '¿Dónde no deben estar los aerosoles y solventes?', op: ['En el gabinete', 'Junto al cautín, la pistola de calor o las estufas', 'Cerrados', 'Rotulados'], ok: 2 },
      { p: 'Al cierre del taller, ¿qué pasa con las baterías en carga?', op: ['Quedan cargando', 'Se desconectan: ninguna queda cargando sin personas', 'Se tapan', 'Se mojan'], ok: 2 },
      { p: '¿Qué EPP usas con el taladro atornillador?', op: ['Ninguno', 'Lentes de seguridad', 'Chaleco salvavidas', 'Solo guantes de lana'], ok: 2 },
      { p: '¿Qué líquido se pone en el limpiador ultrasónico?', op: ['Alcohol isopropílico', 'Solo la solución indicada por el fabricante, nunca inflamables', 'Parafina', 'Cualquier solvente'], ok: 2 }
    ] },
  'PRT-EST-01': {
    objetivo: 'Establecer las condiciones de ingreso, inducción, supervisión, tareas permitidas y actuación ante accidentes de los estudiantes que hacen su práctica en el taller de GL.',
    alcance: ['Estudiantes en práctica del taller de mantención ROV.', 'Encargado y asistente de taller que los supervisan.', 'Los estudiantes no participan en faenas ni embarcan.'],
    roles: { alumno: ['Cumplir el protocolo, el PTS-TAL-001 y las instrucciones del supervisor.', 'Usar el EPP.', 'Consultar antes de cualquier tarea nueva.', 'Avisar de inmediato cualquier lesión o incidente.'],
      encargado_taller: ['Designar al supervisor y hacer la inducción.', 'Asignar solo tareas autorizadas.', 'Firmar la ficha de ingreso.', 'Avisar de inmediato cualquier accidente.'],
      asistente_taller: ['Estar presente mientras el estudiante trabaja.', 'Instruirlo en cada tarea y detenerlo si actúa de forma insegura.'] },
    epp: ['Lentes de seguridad', 'Guantes de nitrilo', 'Guantes anticorte', 'Calzado de seguridad', 'Ropa de trabajo de manga larga'],
    pasos: [{ t: 'Ingreso e inducción', l: ['Convenio con el CFT y plan de práctica revisado.', 'Recorrido por el taller: salidas, extintores, botiquín, lavaojos y zona de carga.', 'Entrega y firma del IRL-04 y del EPP.', 'Explicación del PTS-TAL-001 y del PDR-02.'] },
      { t: 'Tareas', l: ['Permitidas con supervisor: desarme básico con la batería aislada por el supervisor, soldadura supervisada, limpieza con solventes en cantidad mínima, impresión 3D, ultrasonido, orden y aseo.', 'Prohibidas: baterías de litio, apertura de carcasas con batería, pruebas energizadas y de estanqueidad, epóxicos, instalaciones eléctricas, encender estufas y quedarse solo en el taller.'] },
      { t: 'Si hay un accidente', l: ['Primeros auxilios y aviso al encargado y a la Jefa de Operaciones.', 'Atención en un servicio de salud público con el seguro escolar.', 'Declaración Individual de Accidente Escolar y aviso al CFT.'] }],
    detener: ['El supervisor no está presente.', 'La tarea no está en la lista de permitidas.', 'Tienes dudas sobre cómo hacerla de forma segura.'],
    orden: ['Convenio y plan de práctica revisados', 'Recorrido de inducción por el taller', 'Firma del IRL-04 y entrega de EPP', 'Explicación del PTS-TAL-001 y del PDR-02', 'Tareas autorizadas con el supervisor presente', 'Evaluación y término de la práctica'],
    quiz: [
      { p: '¿Puede el estudiante quedarse solo en el taller?', op: ['Sí, si conoce el taller', 'No, nunca', 'Solo los sábados', 'Solo en la tarde'], ok: 2 },
      { p: '¿Cuál de estas tareas está prohibida para el estudiante?', op: ['Limpieza ultrasónica', 'Carga de baterías de litio', 'Orden y aseo', 'Lavado de piezas 3D'], ok: 2 },
      { p: '¿Qué seguro cubre al estudiante si se accidenta?', op: ['Ninguno', 'El seguro escolar (D.S. 313)', 'Su isapre', 'El seguro del auto'], ok: 2 },
      { p: '¿Qué firma el estudiante antes de empezar?', op: ['Nada', 'El IRL-04 y el registro de entrega de EPP', 'Un contrato de trabajo', 'La bitácora de baterías'], ok: 2 }
    ] }
};

Object.keys(_PTS).forEach(function (cod) {
  var P = _PTS[cod], id = cod.toLowerCase(), proc = CONTENIDO.procedimientos.filter(function (x) { return x.id === cod; })[0] || { claves: [], archivo: '' };
  CONTENIDO.lecciones[id + '.l1'] = function (cargo) {
    var rol = P.roles[cargo] || P.roles._ || [];
    return { documento: proc.archivo, diapositivas: [
      { t: 'Para qué sirve el ' + cod, x: P.objetivo, l: P.alcance },
      { t: 'Tu rol como ' + _nombreCargo(cargo), l: rol },
      { t: 'EPP', l: P.epp, tip: 'Revísalo antes de usarlo. Si está dañado, avisa y pide reposición.' }
    ].concat(P.pasos.map(function (s) { return { t: 'Paso a paso: ' + s.t.toLowerCase(), l: s.l }; }), [
      { t: 'Detén el trabajo si…', l: P.detener, tip: 'Cualquier persona puede detener una tarea ante un riesgo grave e inminente, avisando de inmediato.' },
      { t: 'Puntos clave', l: proc.claves.length ? proc.claves : P.detener }
    ]) };
  };
  CONTENIDO.juegos[id + '.j1'] = { intro: 'Ordena los pasos principales del ' + cod + ', del primero al último.', partes: [{ tipo: 'ordenar', enunciado: 'Secuencia del ' + cod, items: P.orden, fb: 'Revisa el documento completo si tuviste dudas.' }] };
  CONTENIDO.quiz[id] = { n: P.quiz.length, preguntas: P.quiz.map(function (q) { return { p: q.p, op: q.op, ok: q.ok, fbOk: 'Correcto.', fbNo: 'La respuesta correcta es: ' + q.op[q.ok - 1] + '.' }; }) };
  CONTENIDO.firmas[id + '.f1'] = function (cargo) {
    return { texto: 'Declaro que recibí, leí y comprendí el ' + cod + ' de ' + CONTENIDO.empresa.nombre + ', su secuencia de trabajo, EPP y criterios de detención, y que me comprometo a cumplirlo en mi cargo de ' + _nombreCargo(cargo) + '.',
      lista: P.detener.map(function (d) { return ['Detener si', d]; }) };
  };
});

/* =====================================================================
   AMPLIACIÓN A 1 HORA: EMERGENCIAS, EPP, ACCIDENTES Y PROCEDIMIENTOS
   ===================================================================== */

/* ---------- Emergencias (PDR-01 y PDR-02) ---------- */
CONTENIDO.lecciones['prrd.l2'] = function (cargo) {
  var area = PLAN.area(cargo);
  var faena = [
    { t: 'Hombre al agua (PDR-01)', l: ['Grita «¡Hombre al agua!» indicando el lado, no pierdas de vista a la persona y señálala con el brazo.', 'Lanza un aro o elemento flotante.', 'Detén el ROV y déjalo quieto, lejos de la persona, para no golpearla ni enredarla con el umbilical.', 'Nadie se lanza al agua: el rescate lo dirige el patrón o el jefe de centro.', 'Recuperada la persona: abrigarla y evaluar hipotermia. Si es de GL, es accidente grave (rescate): PRO-ACC-01.'] },
    { t: 'Accidente grave en zona aislada', l: ['Detén la operación, asegura el lugar y da primeros auxilios.', 'Avisa al jefe de centro y a la Jefa de Operaciones.', 'Pide apoyo a la ACHS (1404), al SAMU (131) o a la Autoridad Marítima (137) para la evacuación.', 'La Jefa de Operaciones coordina el traslado y la recepción en puerto.', 'Si es grave o fatal: se suspende la faena, se notifica al 600 42 000 22 y no se altera el lugar.'] },
    { t: 'Temporal, viento y marejada', l: ['La Jefa de Operaciones revisa los avisos de mal tiempo y cierre de puertos y avisa a los pilotos.', 'Suspende la operación cuando el viento, el oleaje o la visibilidad no permiten trabajar seguro, aunque la faena no esté terminada.', 'Asegura el ROV, el umbilical y los equipos y repliégate a un lugar protegido.', 'Con puerto cerrado no se navega.'] },
    { t: 'Sismo y tsunami en faena', l: ['Suspende la operación y afírmate; no corras por pasillos ni pontones.', 'Si el sismo impide mantenerse en pie: plan de tsunami de inmediato, sin esperar alerta oficial.', 'Repliegue a la embarcación y salida a aguas profundas según el plan de la mandante; en tierra, a zona alta.', 'En fiordos, un deslizamiento puede generar olas sin aviso.', 'Se vuelve solo cuando la autoridad cancela la alerta.'] },
    { t: 'Pérdida de comunicación con el piloto', l: ['El piloto avisa a la Jefa de Operaciones el inicio, los cambios y el término de cada jornada.', 'Si no reporta, la Jefa de Operaciones lo llama, le escribe y luego contacta al jefe de centro o al patrón.', 'Si no se confirma que está bien, pide a la mandante que lo ubique y, si se teme un accidente en el mar, avisa a la Autoridad Marítima (137).', 'Si te quedas sin señal, usa la radio del centro o de la embarcación para avisar.'] }
  ];
  var taller = [
    { t: 'Incendio en el taller (PDR-02)', l: ['Da la alarma a viva voz: «¡Emergencia, evacuar!».', 'El encargado de taller corta la energía si es seguro.', 'Extintor solo si el fuego es incipiente y tienes la salida a tu espalda.', 'Si el fuego crece: todos a la zona de seguridad, llamar a Bomberos (132) y no volver a entrar.'] },
    { t: 'Incendio de baterías de litio', l: ['Batería que se calienta, se hincha, humea o huele a quemado: aleja a las personas y, si es seguro, los combustibles.', 'No uses agua sin instrucción ni la tomes con las manos.', 'Ventila y evacúa si hay humo: los gases son tóxicos.', 'Toda batería dañada se rotula y se retira de uso.'] },
    { t: 'Monóxido de carbono y calefacción', l: ['Mareo, dolor de cabeza, náuseas o alarma del detector de CO: apaga la estufa, ventila y salgan todos al aire libre.', 'Si alguien está confuso o inconsciente: SAMU (131) o ACHS (1404).', 'Fuego en el cañón de la combustión lenta: cerrar el tiraje, evacuar y llamar a Bomberos (132).'] },
    { t: 'Derrame químico y emergencia eléctrica', l: ['Derrame: ventila, aleja fuentes de ignición, usa el kit de derrames con guantes y avisa al encargado.', 'Salpicadura en los ojos: lavaojos o agua corriente por 15 minutos y atención en la ACHS.', 'Contacto eléctrico: corta la energía antes de tocar a la persona; nunca la toques si sigue en contacto.', 'Llama a la ACHS (1404) o al SAMU (131).'] },
    { t: 'Evacuación del taller', l: ['El encargado de taller es el líder de respuesta: activa la alarma y decide la evacuación.', 'El asistente es el encargado de evacuación: abre la salida, revisa baños, cocina, bodega y el comedor del segundo piso, y guía a las personas.', 'Nadie vuelve a buscar sus cosas.', 'En la zona de seguridad se cuenta a todos, incluidos estudiantes y visitas, y se informa si falta alguien.', 'Sismo: alejarse de las repisas altas, agacharse, cubrirse y afirmarse; luego evacuar.'] }
  ];
  var d = area === 'faena' ? faena : area === 'taller' ? taller : faena.slice(0, 2).concat(taller.slice(0, 1), faena.slice(4), taller.slice(4));
  return { documento: area === 'faena' ? 'pts/PDR-01.pdf' : 'pts/PDR-02.pdf', diapositivas: [{ t: 'Los planes de respuesta, paso a paso', x: 'Cada emergencia tiene su forma de actuar. Estas son las que más importan en tu trabajo como ' + _nombreCargo(cargo) + '.' }].concat(d) };
};
CONTENIDO.lecciones['prrd.l3'] = function (cargo) {
  var area = PLAN.area(cargo);
  return { diapositivas: [
    { t: 'Tu rol como ' + _nombreCargo(cargo), l: CONTENIDO.rolEmergencia[cargo] || [] },
    { t: 'Cómo se da el aviso', l: ['Quién informa y desde dónde (centro, embarcación o taller).', 'Qué pasó: tipo de emergencia.', 'Cuántas personas afectadas y cuántos lesionados.', 'Qué apoyo se necesita.', area === 'faena' ? 'Medios: celular, WhatsApp, radio del centro o VHF canal 16.' : 'Medios: celular; los teléfonos de emergencia están publicados en el taller.'] },
    { t: area === 'faena' ? 'Recursos de emergencia en la faena' : 'Recursos de emergencia del taller', l: area === 'faena' ? ['Del centro o la embarcación: aros salvavidas, balsa, extintores, botiquín, radio VHF y zona de seguridad. Los conoces en la inducción de la mandante.', 'Tuyos (los entrega GL): chaleco salvavidas certificado, ropa térmica e impermeable, celular con cargador, linterna y botiquín personal básico.'] : ['Extintores vigentes, señalizados y accesibles.', 'Botiquín sin medicamentos, lavaojos y kit de derrames.', 'Detector de monóxido de carbono.', 'Teléfonos de emergencia publicados y salida siempre despejada.'] },
    { t: 'Simulacros', l: ['GL hace al menos un ejercicio al año en el taller y otro en faena (de escritorio o práctico, coordinado con una mandante).', 'En cada simulacro se registran los participantes y se evalúa qué mejorar.', 'Participar es obligatorio: es la forma de saber que el plan funciona.'] },
    { t: 'Números de emergencia', l: CONTENIDO.directorio.map(function (x) { return x.n + ': ' + x.t; }) }
  ] };
};
CONTENIDO.talleres['prrd.t1'] = function (cargo) {
  var area = PLAN.area(cargo);
  var P = area === 'faena' ? [
    { tipo: 'lectura', titulo: 'Situación 1', texto: 'Estás operando el ROV desde el pontón. Un operario del centro que recogía cabos cae al agua por el lado del umbilical.' },
    { tipo: 'abierta', p: '¿Qué haces en los primeros 2 minutos?', min: 70, alApr: true, modelo: 'Gritar «¡Hombre al agua!» e indicar el lado, no perderlo de vista y señalarlo, lanzar un aro, detener el ROV lejos de la persona, no lanzarse al agua y avisar al jefe de centro, que dirige el rescate. Luego, abrigarlo y evaluar hipotermia.' },
    { tipo: 'lectura', titulo: 'Situación 2', texto: 'Estás en un centro alejado y se produce un sismo que hace difícil mantenerse en pie. No hay alerta oficial y no tienes señal de celular.' },
    { tipo: 'abierta', p: '¿Qué haces y cómo avisas a GL?', min: 60, alApr: true, modelo: 'Plan de tsunami de inmediato: suspender, seguir al jefe de centro o patrón, repliegue a la embarcación y salida a aguas profundas o a zona alta. Avisar por la radio del centro o de la embarcación para que informen a GL. Volver solo cuando la autoridad cancele la alerta.' },
    { tipo: 'registro', titulo: 'Recursos de emergencia que conoces en tu faena actual', opciones: ['Lo sé', 'No estoy seguro'], items: ['Dónde están los aros salvavidas y la balsa', 'Dónde está el extintor más cercano al pontón', 'Cuál es la zona de seguridad del centro', 'Cómo te comunicas con el jefe de centro', 'Dónde está el botiquín', 'Qué hacer si pierdes la señal de celular'] }
  ] : area === 'taller' ? [
    { tipo: 'lectura', titulo: 'Situación 1', texto: 'Son las 16:30. Una batería de litio que está cargando en el banco empieza a humear y se hincha. En el taller están tú, otra persona y un estudiante en práctica.' },
    { tipo: 'abierta', p: '¿Qué haces, en qué orden y quién hace qué?', min: 70, alApr: true, modelo: 'Dar la alarma, alejar a las personas, no tomar la batería ni echar agua, cortar la energía si es seguro, evacuar si hay humo y llamar a Bomberos (132) si el fuego crece. El encargado lidera; el asistente guía la evacuación y cuenta a las personas en la zona de seguridad.' },
    { tipo: 'lectura', titulo: 'Situación 2', texto: 'En la mañana, con las estufas encendidas, el estudiante dice que le duele la cabeza y está mareado.' },
    { tipo: 'abierta', p: '¿Qué puede estar pasando y qué hacen?', min: 50, alApr: true, modelo: 'Puede ser monóxido de carbono. Apagar la estufa, ventilar y salir todos al aire libre; si no mejora o está confuso, llamar al SAMU (131) o a la ACHS (1404); avisar al encargado y revisar la estufa y el detector.' },
    { tipo: 'registro', titulo: 'Recursos de emergencia del taller', opciones: ['Lo sé', 'No estoy seguro'], items: ['Dónde están los extintores y cuál usar', 'Dónde está el botiquín', 'Dónde está el lavaojos y el kit de derrames', 'Dónde está la zona de seguridad', 'Quién es el líder de respuesta y quién el encargado de evacuación', 'Dónde cortar la energía'] }
  ] : [
    { tipo: 'lectura', titulo: 'Situación 1', texto: 'Son las 20:45. Un piloto que trabaja solo en un centro alejado no ha avisado el término de su jornada y no contesta el celular.' },
    { tipo: 'abierta', p: '¿Qué pasos sigues para ubicarlo y cuándo das aviso a la autoridad?', min: 60, alApr: true, modelo: 'Intentar contacto por celular y WhatsApp, luego con el jefe de centro o el patrón; si no se confirma que está bien, pedir a la mandante que lo ubique y, si se teme un accidente en el mar, avisar a la Autoridad Marítima (137) con la última posición conocida.' },
    { tipo: 'lectura', titulo: 'Situación 2', texto: 'Te avisan que un piloto se cayó en el pontón y no puede mover la pierna. Está a 3 horas de navegación del puerto.' },
    { tipo: 'abierta', p: '¿A quién llamas y qué coordinas?', min: 50, alApr: true, modelo: 'Con la mandante y la ACHS (1404) se coordina la evacuación y la recepción en puerto. Si es grave, se suspende la faena, se notifica al 600 42 000 22 y se presenta la DIAT en 24 horas (PRO-ACC-01).' }
  ];
  return { intro: 'Simulacro de escritorio: lee cada situación y responde qué harías tú, según tu rol en el plan de emergencia. Tus respuestas quedan registradas para la Asesora en Prevención de Riesgos.', partes: P };
};

/* ---------- EPP ---------- */
CONTENIDO.lecciones['epp.l2'] = function (cargo) {
  var R = _riesgosCargo(cargo).filter(function (r) { return r.eppItems && r.eppItems.length; }).sort(function (a, b) { return b.nivel - a.nivel; }).slice(0, 14);
  return { diapositivas: [{ t: 'Cada EPP tiene un porqué', x: 'Tu EPP sale de la Matriz IPER: cada elemento protege de un riesgo concreto de tu cargo de ' + _nombreCargo(cargo) + '.' }].concat(
    R.map(function (r) { return { t: r.riesgo, x: 'Puede causar: ' + _lista(r.consecuencias, 1).join('') + '.', l: r.eppItems.slice(0, 7).map(function (e) { return 'EPP: ' + e; }) }; }),
    [{ t: 'Recuerda', l: ['El EPP es la última barrera: no reemplaza los otros controles.', 'Usa el EPP certificado que entrega GL, no uno propio.', 'Si un EPP te incomoda o no te queda, avisa: hay otras tallas o modelos.'] }]) };
};
CONTENIDO.juegos['epp.j2'] = function (cargo) {
  var usados = {}, pares = [];
  _riesgosCargo(cargo).slice().sort(function (a, b) { return b.nivel - a.nivel; }).forEach(function (r) {
    var e = (r.eppItems || []).filter(function (x) { return !usados[x.toLowerCase()]; })[0];
    if (e && pares.length < 6) { usados[e.toLowerCase()] = 1; pares.push({ a: r.riesgo, b: e }); }
  });
  return { intro: 'Une cada riesgo de tu cargo con un EPP que lo controla, según la Matriz IPER.', partes: [{ tipo: 'emparejar', pares: pares }] };
};
CONTENIDO.lecciones['epp.l3'] = { documento: 'pts/EPP.pdf', diapositivas: [
  { t: 'Chaleco salvavidas', l: ['Siempre puesto y abrochado en pontones, embarcaciones y muelles.', 'Revisa cierres, correas, flotación, silbato y luz.', 'Los autoinflables se revisan según el fabricante (cartucho y fecha).', 'Se enjuaga con agua dulce y se seca a la sombra; no se usa como cojín.'] },
  { t: 'Protección de ojos y cara', l: ['Lentes de seguridad en el banco, con herramientas eléctricas, al cortar tensores y al desarmar equipos.', 'Lentes con filtro UV en faena.', 'Limpios y sin rayas que impidan ver; se reponen si están dañados.'] },
  { t: 'Guantes: uno para cada riesgo', l: ['Nitrilo: solventes, limpiacontactos, resinas, masillas y desinfectantes.', 'Anticorte: hélices, herramientas cortantes y corte de tensores.', 'De seguridad: maniobras con el umbilical y maletas.', 'Térmicos: frío en faena.', 'Nunca guantes sueltos cerca de piezas que giran.'] },
  { t: 'Calzado, ropa y protección solar', l: ['Calzado de seguridad antideslizante, con puntera y suela en buen estado.', 'Traje de agua y ropa térmica en capas en faena.', 'Protector solar, gorro legionario y ropa manga larga ante la radiación UV.'] },
  { t: 'Protección respiratoria y auditiva', l: ['Mascarilla o respirador con el filtro que indica la HDS del producto o para humos de soldadura.', 'Sin barba en la zona de sellado; se prueba el ajuste cada vez.', 'Protector auditivo donde esté indicado, todo el tiempo de exposición.'] },
  { t: 'Entrega, cuidado y reposición', l: ['El EPP se entrega gratis y queda registrado con tu firma.', 'Límpialo, sécalo y guárdalo lejos del sol, del calor y de químicos.', 'Revísalo antes de cada jornada y pide reposición apenas se deteriora.', 'El EPP dañado se entrega para su eliminación; no se repara de forma casera.'] }
] };

/* ---------- Accidentes (PRO-ACC-01) ---------- */
CONTENIDO.lecciones['acc.l2'] = { documento: 'pts/PRO-ACC-01.pdf', diapositivas: [
  { t: 'La DIAT', x: 'La Denuncia Individual de Accidente del Trabajo informa el accidente a la ACHS.', l: ['La presenta la empresa dentro de 24 horas.', 'Si la empresa no la hace, puede hacerla el trabajador, un familiar, el médico tratante o cualquier persona que conozca los hechos.', 'Sin denuncia, la atención puede no quedar cubierta por el seguro.'] },
  { t: 'Accidente de trayecto', l: ['Es el que ocurre en el trayecto directo de ida o regreso entre tu casa y el trabajo (Ley 16.744).', 'Se acredita con parte de Carabineros, testigos, certificado de atención u otros medios.', 'Avisa a la Jefa de Operaciones y acude a la ACHS.', 'En los traslados a faenas por cuenta de la empresa, el accidente es del trabajo.'] },
  { t: 'Tus derechos en la ACHS', l: ['Atención médica gratuita hasta tu recuperación: consultas, exámenes, hospitalización, medicamentos y rehabilitación.', 'Subsidio mientras dura el reposo.', 'Indemnización o pensión si queda una incapacidad permanente.', 'Si la ACHS dice que tu caso no es laboral y no estás de acuerdo, puedes reclamar ante la SUSESO.'] },
  { t: 'Estudiantes en práctica', l: ['Los cubre el seguro escolar (Ley 16.744, art. 3, y D.S. 313).', 'Se atienden en un servicio de salud público: SAPU, SAR, CESFAM u hospital.', 'Se completa la declaración del accidente escolar y se avisa al CFT.', 'El encargado de taller avisa de inmediato a la Jefa de Operaciones.'] },
  { t: 'Accidente grave o fatal: lo que hace la empresa', l: ['Suspende de inmediato la faena y aísla el lugar.', 'Notifica de inmediato a la Inspección del Trabajo y a la SEREMI de Salud: 600 42 000 22.', 'Avisa a la ACHS y presenta la DIAT dentro de 24 horas.', 'Solo reanuda con autorización de la autoridad.', 'Investiga junto a la ACHS.'] }
] };
CONTENIDO.juegos['acc.j2'] = { intro: 'Ordena lo que se hace ante un accidente grave, del primer paso al último.', partes: [{ tipo: 'ordenar', enunciado: 'Accidente grave', items: ['Primeros auxilios y traslado del lesionado', 'Suspender la faena y aislar el lugar', 'Notificar de inmediato a la Inspección del Trabajo y a la SEREMI de Salud', 'Presentar la DIAT dentro de 24 horas', 'Investigar las causas con la ACHS', 'Reanudar solo con autorización de la autoridad'], fb: 'Primero las personas; luego suspender, notificar, denunciar e investigar.' }] };
CONTENIDO.lecciones['acc.l3'] = { documento: 'pts/PRO-ACC-01.pdf', diapositivas: [
  { t: 'Para qué se investiga', x: 'La investigación busca causas, no culpables. Su objetivo es que el accidente no se repita.', l: ['Se investigan los accidentes y también los incidentes o casi accidentes.', 'Se inicia dentro de 24 horas y participan la Asesora, el Delegado de SST, la jefatura directa y los involucrados.'] },
  { t: 'Los hechos', l: ['Se reconstruye lo que pasó: quién, qué, dónde, cuándo y cómo.', 'Se entrevista al accidentado y a los testigos por separado.', 'Se revisan fotos, equipos, EPP, el checklist y el procedimiento.', 'Solo hechos comprobados, sin opiniones ni juicios.'] },
  { t: 'El árbol de causas', x: 'Se parte del daño y se pregunta «¿qué fue necesario para que esto ocurriera?» hasta llegar a las causas de fondo.', l: ['Causas inmediatas: actos y condiciones (batería conectada, lentes sin usar, aerosol junto al cautín).', 'Causas básicas: factores personales y del trabajo (falta de capacitación, mantención, supervisión o planificación).', 'Cada causa debe tener al menos una medida.'] },
  { t: 'Medidas y seguimiento', l: ['Medidas inmediatas para que no vuelva a pasar mientras se investiga.', 'Medidas correctivas con responsable y plazo.', 'Se revisan la Matriz IPER y el procedimiento afectado.', 'Se comparten las lecciones aprendidas con todo el personal.'] }
] };
CONTENIDO.talleres['acc.t1'] = function (cargo) {
  var taller = PLAN.area(cargo) === 'taller';
  return { intro: 'Investiga un caso simulado como lo haría el equipo. Tus respuestas quedan registradas para la Asesora en Prevención de Riesgos.', partes: [
    { tipo: 'lectura', titulo: 'El caso (simulado)', texto: taller ? 'Un viernes en la tarde, con apuro por entregar un ROV, un trabajador empezó a desarmarlo con la batería conectada y sin lentes. Al soltar un conector saltó una chispa y una esquirla le golpeó el ojo. El aerosol limpiacontactos estaba abierto junto al banco.\n\nNo se había hecho la revisión de inicio y el encargado estaba fuera del taller.' : 'Al terminar la jornada con viento fuerte, un piloto recuperaba el ROV desde el borde del pontón. El pasillo estaba mojado y él llevaba el chaleco sin abrochar. Al tirar del umbilical resbaló y cayó al agua. Lo recuperaron en 3 minutos con hipotermia leve.\n\nEse día no avisó a la Jefa de Operaciones el cambio de tarea y el jefe de centro no sabía que estaba operando.' },
    { tipo: 'abierta', p: '¿Cuáles fueron las causas inmediatas (actos y condiciones)?', min: 50, alApr: true, modelo: taller ? 'Batería conectada, sin lentes, aerosol inflamable abierto junto al banco.' : 'Pasillo mojado, chaleco sin abrochar, tirar del umbilical desde el borde con viento fuerte.' },
    { tipo: 'abierta', p: '¿Cuáles fueron las causas básicas (por qué existían esas condiciones)?', min: 50, alApr: true, modelo: taller ? 'Apuro por la entrega, falta de supervisión, no se hizo la revisión de inicio, inflamables fuera del gabinete.' : 'Presión por terminar con mal clima, falta de coordinación con el centro y con la Jefa de Operaciones, sin verificación del chaleco.' },
    { tipo: 'abierta', p: 'Propón tres medidas, una de ellas de ingeniería, con su responsable.', min: 60, alApr: true, modelo: taller ? 'Gabinete para inflamables junto al banco (ingeniería, encargado de taller); checklist de inicio con batería desconectada (administrativo, encargado); lentes obligatorios en el banco (EPP, cada trabajador).' : 'Punto de recuperación con baranda o línea de vida provisoria (ingeniería, mandante y GL); aviso obligatorio de cambios de tarea (administrativo, piloto y Jefa de Operaciones); chaleco abrochado antes de cada maniobra (EPP, piloto).' },
    { tipo: 'abierta', p: '¿Qué hubiera pasado sin ese EPP o sin ayuda cerca? ¿Qué te dice esto?', min: 30, modelo: 'El EPP o la ayuda cercana evitó un daño mayor, pero es la última barrera: las causas de fondo se corrigen igual.' }
  ] };
};

/* ---------- Procedimientos (PTS-ROV-001, PTS-TAL-001, PRT-EST-01): cápsulas extra ---------- */
Object.keys(_PTS).forEach(function (cod) {
  var P = _PTS[cod], id = cod.toLowerCase(), proc = CONTENIDO.procedimientos.filter(function (x) { return x.id === cod; })[0] || { claves: [], archivo: '' };
  CONTENIDO.lecciones[id + '.ld'] = function (cargo) {
    var area = PLAN.area(cargo);
    var d = [{ t: 'Quién participa en el ' + cod, x: 'Un procedimiento funciona cuando cada persona sabe qué le toca. Estas son las responsabilidades de cada cargo:' }];
    Object.keys(P.roles).forEach(function (k) {
      d.push({ t: (k === cargo ? 'Tú: ' : '') + _nombreCargo(k), l: P.roles[k], tip: k === cargo ? 'Esta es tu parte. Si no puedes cumplir alguno de estos puntos, avisa antes de empezar.' : undefined });
    });
    d.push({ t: 'Antes de empezar', l: area === 'faena' ? ['Inducción de la mandante y conocer su plan de emergencia.', 'Aviso de inicio a la Jefa de Operaciones.', 'Revisión del clima, del estado del mar y de la coordinación con buzos y embarcaciones.', 'Checklist preoperacional del equipo (anexo A) y EPP completo.'] : ['Orden del banco e inflamables guardados.', 'Revisión de herramientas, cargadores y EPP.', 'Asignación de tareas: el estudiante solo hace las que su plan de práctica permite, siempre supervisado.', 'Registro en el libro del taller (REG-TAL-01).'] });
    if (proc.archivo) d.push({ t: 'Lee el documento completo', x: 'Abre el ' + cod + ' con el botón «Ver documento completo» y revísalo con calma: alcance, responsabilidades, desarrollo de cada actividad y registros.', l: ['Fíjate en los pasos que te tocan a ti.', 'Busca los criterios para detener el trabajo.', 'Anota tus dudas para consultarlas a la Jefa de Operaciones, al encargado de taller o a la Asesora.'], tip: 'El tiempo que pasas leyendo el documento cuenta para la duración de la capacitación.' });
    d.push({ t: 'Registros del procedimiento', l: area === 'faena' ? ['Checklist preoperacional del ROV.', 'Avisos de inicio y término de jornada.', 'Registro de entrega de EPP y de capacitación.', 'Reporte de incidentes y condiciones inseguras.'] : ['Libro de registros del taller (REG-TAL-01): mantenciones, carga de baterías, inducciones.', 'Registro de entrega de EPP y de capacitación.', 'Reporte de incidentes y condiciones inseguras.'] });
    return { documento: proc.archivo, diapositivas: d };
  };
  CONTENIDO.lecciones[id + '.lr'] = function (cargo) {
    var todos = _riesgosCargo(cargo), R = todos.filter(function (r) { return (r.pts || []).some(function (x) { return String(x).toUpperCase().indexOf(cod) >= 0; }); });
    if (R.length < 3) R = todos.filter(function (r) { return r.nivel >= 2; });
    R = R.slice().sort(function (a, b) { return b.nivel - a.nivel; }).slice(0, 14);
    var d = [{ t: 'Los riesgos de esta tarea', x: 'Según la Matriz IPER v02 de GL, al trabajar con el ' + cod + ' como ' + _nombreCargo(cargo) + ' te expones a estos riesgos. Para cada uno verás qué lo provoca, qué puede causar y cómo se controla.' }];
    R.forEach(function (r, i) {
      d.push({ t: (i + 1) + '. ' + r.riesgo + ' · ' + r.nivelTxt, x: 'Peligro: ' + _lista(r.peligros, 2).join(' / ') + '.\nPuede causar: ' + _lista(r.consecuencias, 1).join('') + '.',
        l: [].concat(_lista(r.ingenieria, 1).map(function (c) { return 'Ingeniería: ' + c; }), _lista(r.administrativo, 2).map(function (c) { return 'Administrativo: ' + c; }), r.eppItems && r.eppItems.length ? ['EPP: ' + r.eppItems.slice(0, 6).join(', ')] : []) });
    });
    d.push({ t: 'Recuerda', l: ['Los controles funcionan solo si están todos: si falta uno, la tarea no empieza.', 'Si ves un riesgo que no está en esta lista, avísalo: la Matriz se actualiza con lo que informan los trabajadores.'] });
    return { diapositivas: d };
  };
  CONTENIDO.juegos[id + '.j2'] = { intro: 'Durante el trabajo pasan cosas. Decide en cada caso si detienes el trabajo y avisas, o si puedes continuar según el ' + cod + '.', partes: [{ tipo: 'clasificar',
    categorias: [{ id: 'det', nombre: 'Detengo y aviso' }, { id: 'sig', nombre: 'Puedo continuar' }],
    items: P.detener.slice(0, 5).map(function (x) { return { t: x.charAt(0).toUpperCase() + x.slice(1), c: 'det', fb: 'Es un criterio de detención del ' + cod + ': se detiene, se avisa y solo se reanuda cuando se corrige.' }; }).concat(
      [].concat.apply([], P.pasos.map(function (st) { return st.l.slice(0, 2); })).slice(0, 4).map(function (x) { return { t: 'Se cumple: ' + x.charAt(0).toLowerCase() + x.slice(1), c: 'sig', fb: 'Es parte normal del procedimiento: si se cumple, la tarea sigue.' }; })) }] };
  CONTENIDO.talleres[id + '.t1'] = function (cargo) {
    var paso = P.pasos[Math.min(1, P.pasos.length - 1)], det = P.detener[0] || 'falta un control crítico', faena = PLAN.area(cargo) === 'faena';
    return { intro: 'Aplica el ' + cod + ' a situaciones reales. Tus respuestas quedan registradas para la Asesora en Prevención de Riesgos.', partes: [
      { tipo: 'abierta', p: 'En la etapa «' + paso.t + '», ¿qué podría salir mal y qué haces tú para evitarlo, en tu rol de ' + _nombreCargo(cargo) + '?', min: 60, alApr: true,
        modelo: 'Una buena respuesta nombra un paso concreto (por ejemplo: ' + (paso.l[0] || '') + '), el riesgo si no se cumple y la acción que te corresponde: verificar, avisar o detener.' },
      { tipo: 'abierta', p: 'Ocurre esto: «' + det + '». ¿Qué haces, a quién avisas y cuándo se puede reanudar el trabajo?', min: 50, alApr: true,
        modelo: faena ? 'Se detiene la operación de inmediato, se avisa al jefe de centro y a la Jefa de Operaciones, se corrige la condición y solo se reanuda cuando los controles están en su lugar.' : 'Se detiene la tarea de inmediato, se avisa al encargado de taller, se corrige la condición y solo se reanuda cuando los controles están en su lugar.' },
      { tipo: 'vep', desdeIper: true, n: 2 },
      { tipo: 'abierta', p: '¿Qué parte del ' + cod + ' cuesta más cumplir en la práctica y qué propondrías para mejorarla?', min: 30, alApr: true,
        modelo: 'Gracias. La Asesora revisa estas respuestas al actualizar el procedimiento.' }
    ] };
  };
});
