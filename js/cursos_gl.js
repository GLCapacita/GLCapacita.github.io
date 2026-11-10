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

/* =====================================================================
   REGLAMENTO INTERNO Y LEY KARIN
   ===================================================================== */
CONTENIDO.lecciones['riohs.l1'] = { documento: 'pts/RIOHS.pdf', diapositivas: [
  { t: 'Para qué sirve el Reglamento Interno', x: 'El Reglamento Interno de Orden, Higiene y Seguridad (RIOHS) 2026 de GL fija las obligaciones, prohibiciones y sanciones de todas las personas de la empresa, y las normas de seguridad para pilotos, taller y estudiantes en práctica.', l: ['Se entrega una copia a cada trabajador.', 'Se envía a la Inspección del Trabajo y a la SEREMI de Salud.', 'Rige para todas las faenas y para el taller.'] },
  { t: 'Cómo se organiza la prevención en GL', l: ['Gerente General y Representante Legal: Omar Guajardo Calbucan.', 'Jefa de Operaciones y Encargada de Seguridad y Salud en el Trabajo: Mery Leal Vargas.', 'Asesora externa en Prevención de Riesgos: Iza Sandoval Salgado.', 'Delegado de Seguridad y Salud en el Trabajo: Damián González Mansilla, elegido por los trabajadores.', 'Organismo administrador del seguro: ACHS.'], tip: 'GL no tiene Comité Paritario porque ninguna faena reúne a más de 25 personas.' },
  { t: 'Tus obligaciones principales', l: ['Cumplir los procedimientos de trabajo seguro y las normas de la mandante.', 'Usar y cuidar el EPP entregado.', 'Informar de inmediato todo accidente, incidente o condición insegura.', 'Participar en capacitaciones, simulacros y en la entrega del IRL.', 'Mantener el orden y aseo en el puesto de trabajo.'] },
  { t: 'Prohibiciones principales', l: ['Trabajar bajo los efectos del alcohol, drogas o medicamentos que alteren tus capacidades.', 'Operar equipos sin autorización o facilitarlos a personas no autorizadas.', 'Intervenir equipos energizados o retirar protecciones.', 'Fumar o encender fuego cerca de inflamables o baterías.', 'Ocultar accidentes o incidentes.'], tip: 'Las infracciones se sancionan con amonestación verbal, escrita o multa, según el RIOHS.' },
  { t: 'Ley Karin: qué está prohibido', l: ['Acoso sexual: requerimientos de carácter sexual no consentidos que amenazan o perjudican tu situación laboral.', 'Acoso laboral: agresión u hostigamiento, una sola vez o reiterado, que menoscaba, maltrata o humilla.', 'Violencia en el trabajo: la que ejercen terceros, como clientes o personal de la mandante.'] },
  { t: 'Cómo denunciar', l: ['Ante la Jefatura de Operaciones o la Gerencia General.', 'Por el canal alternativo: la Asesora externa en Prevención de Riesgos.', 'Directamente ante la Inspección del Trabajo.', 'La denuncia puede ser verbal o escrita y es reservada.'], tip: 'Está prohibida cualquier represalia contra quien denuncia o declara como testigo.' },
  { t: 'Qué pasa después', l: ['Se aplican medidas de resguardo de inmediato: por ejemplo, separar espacios o turnos.', 'Se investiga internamente o la Inspección del Trabajo, en los plazos de la ley.', 'Se ofrece atención psicológica temprana a través de la ACHS.', 'Las conclusiones se comunican y se aplican las medidas y sanciones.'] }
] };
CONTENIDO.juegos['riohs.j1'] = { intro: 'Según el Reglamento Interno y el protocolo Ley Karin, decide si cada conducta está permitida o prohibida.', partes: [{ tipo: 'clasificar',
  categorias: [{ id: 'si', nombre: 'Permitido o correcto' }, { id: 'no', nombre: 'Prohibido' }],
  items: [
    { t: 'Detener la operación del ROV porque se viene el temporal', c: 'si', fb: 'Es tu derecho ante un riesgo grave e inminente.' },
    { t: 'Prestar el ROV a un trabajador del centro para que "pruebe"', c: 'no', fb: 'Prohibido facilitar equipos a personas no autorizadas.' },
    { t: 'Burlarse a diario del acento de un compañero frente a otros', c: 'no', fb: 'Puede ser acoso laboral.' },
    { t: 'Denunciar directamente en la Inspección del Trabajo', c: 'si', fb: 'Es uno de los canales de denuncia.' },
    { t: 'Trabajar con resaca después de una celebración', c: 'no', fb: 'Prohibido trabajar con tus capacidades alteradas.' },
    { t: 'Avisar un incidente sin lesionados', c: 'si', fb: 'Los incidentes se informan: así se previenen accidentes.' },
    { t: 'Enviar mensajes de connotación sexual no deseados a una compañera', c: 'no', fb: 'Es acoso sexual.' },
    { t: 'Cambiar de turno a quien denunció, como castigo', c: 'no', fb: 'Las represalias están prohibidas.' }
  ] }] };
CONTENIDO.quiz.riohs = { n: 6, preguntas: [
  { p: '¿Quién es la Encargada de Seguridad y Salud en el Trabajo de GL?', op: ['La Asesora externa', 'Mery Leal Vargas, Jefa de Operaciones', 'El jefe de centro de la mandante', 'El Delegado'], ok: 2, fbOk: 'Correcto.', fbNo: 'Es Mery Leal Vargas, Jefa de Operaciones.' },
  { p: '¿Por qué GL no tiene Comité Paritario?', op: ['Porque no es obligatorio en ninguna empresa', 'Porque ninguna faena reúne a más de 25 personas; por eso tiene Delegado de SST', 'Porque la mandante lo prohíbe', 'Porque es una empresa nueva'], ok: 2, fbOk: 'Correcto.', fbNo: 'El Comité se exige por faena con más de 25 personas; GL tiene Delegado de SST.' },
  { p: '¿Cuál de estos NO es un canal de denuncia de la Ley Karin en GL?', op: ['Jefatura de Operaciones', 'Inspección del Trabajo', 'Un comentario en el grupo de WhatsApp de la faena', 'Asesora externa (canal alternativo)'], ok: 3, fbOk: 'Correcto. La denuncia es reservada.', fbNo: 'La denuncia se hace por los canales formales, de forma reservada.' },
  { p: 'Un trabajador de la mandante te insulta y amenaza en el pontón. ¿Qué es?', op: ['Un problema personal', 'Violencia en el trabajo ejercida por terceros, que puedes denunciar', 'Nada, porque no es de GL', 'Acoso sexual'], ok: 2, fbOk: 'Correcto.', fbNo: 'Es violencia en el trabajo y también está cubierta por el protocolo.' },
  { p: '¿Qué pasa con quien denuncia?', op: ['Se le cambia de faena como sanción', 'Está protegido: cualquier represalia está prohibida', 'Debe pagar la investigación', 'Pierde su turno'], ok: 2, fbOk: 'Correcto.', fbNo: 'Las represalias están prohibidas.' },
  { p: '¿Qué está prohibido según el RIOHS?', op: ['Usar el EPP', 'Trabajar bajo los efectos del alcohol o drogas', 'Avisar un incidente', 'Detener una tarea peligrosa'], ok: 2, fbOk: 'Correcto.', fbNo: 'Trabajar bajo los efectos del alcohol o drogas está prohibido.' }
] };
CONTENIDO.firmas['riohs.f1'] = function () { return { texto: 'Declaro que recibí el Reglamento Interno de Orden, Higiene y Seguridad 2026 y el Protocolo de prevención del acoso sexual, laboral y la violencia en el trabajo de ' + CONTENIDO.empresa.nombre + ', que conozco los canales de denuncia y que me comprometo a cumplir sus normas.' }; };

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

