/* js/contenido.js */
/* GL Capacita — contenidos propios de GL Robótica Submarina SpA.
   Fuentes: Matriz IPER GL v02 (nov. 2026), PTS-ROV-001 v04, PTS-TAL-001, PDR-01, PDR-02, PRO-ACC-01,
   Procedimiento de EPP v02, RIOHS 2026, Protocolo Ley Karin, PRT-EST-01, informe de inspección del taller
   y curso tipo de la Subsecretaría de Previsión Social (Res. Ex. 1117/2026).
   Para editar textos, preguntas o juegos, modifica este archivo. */
var CONTENIDO = {};

CONTENIDO.empresa = {
  nombre: 'GL Robótica Submarina SpA',
  corto: 'GL',
  rut: '77.016.015-4',
  organismo: 'ACHS',
  delegado: 'Damián González Mansilla',
  encargada: 'Mery Leal Vargas',
  gerente: 'Omar Guajardo Calbucan',
  apr: 'Iza Sandoval Salgado',
  equipos: ['DTG2', 'DTG3', 'Pibot', 'Fifish E-Go']
};

CONTENIDO.directorio = [
  { n: 'ACHS rescate y urgencias', t: '1404' },
  { n: 'SAMU', t: '131' },
  { n: 'Bomberos', t: '132' },
  { n: 'Carabineros', t: '133' },
  { n: 'PDI', t: '134' },
  { n: 'Emergencias marítimas (Autoridad Marítima)', t: '137' },
  { n: 'VHF socorro y llamada', t: 'Canal 16' },
  { n: 'Accidentes graves y fatales (Inspección del Trabajo y SEREMI de Salud)', t: '600 42 000 22' },
  { n: 'Salud Responde', t: '600 360 7777' },
  { n: 'Jefa de Operaciones y Encargada SST · Mery Leal', t: '+56 9 7828 1635' },
  { n: 'Asesora en Prevención de Riesgos · Iza Sandoval', t: '+56 9 3093 4654' }
];

/* Rol de cada cargo en emergencias (PDR-01, PDR-02, PTS-ROV-001 punto 11 y PRO-ACC-01) */
CONTENIDO.rolEmergencia = {
  piloto: ['En la faena eres la única persona de GL: al llegar recibes la inducción de la mandante y conoces su plan de emergencia, los medios de rescate y la zona de seguridad.', 'Ante cualquier emergencia suspendes la operación del ROV, sigues las instrucciones del jefe de centro o del patrón y avisas de inmediato a la Jefa de Operaciones.', 'Si ves caer a alguien al agua: das la alarma a viva voz, lanzas un salvavidas y no lo pierdes de vista.', 'Nunca entras al agua para recuperar el ROV sin autorización y procedimiento definido.', 'Si un sismo te impide mantenerte en pie, sigues de inmediato el plan de tsunami de la mandante o de la embarcación.'],
  encargado_taller: ['Eres el líder de respuesta de la emergencia en el taller (PDR-02): das la alarma, evalúas y decides la evacuación.', 'Llamas a Bomberos (132), SAMU (131) o ACHS (1404) según el caso e informas a la Jefa de Operaciones.', 'Cortas la energía del tablero si es seguro y usas el extintor solo si el fuego es incipiente y tienes la salida a tu espalda.', 'Haces el recuento en la zona de seguridad, incluidos el estudiante en práctica, las visitas y quien esté en el comedor del segundo piso.', 'Ante una batería de litio que humea o se calienta, la alejas de combustibles solo si es seguro y no la apagas con agua.'],
  asistente_taller: ['Apoyas al encargado de taller en la emergencia (PDR-02): revisas baños, cocina, bodega y el comedor del segundo piso y guías la evacuación.', 'Si el encargado no está, asumes su rol: alarma, llamado a Bomberos (132) o SAMU (131) y recuento.', 'Usas el extintor PQS solo si el fuego es incipiente y tienes la salida asegurada.', 'Ante mareo, dolor de cabeza o alarma del detector de CO: apagas la estufa, abres puertas y ventanas y sacan a todos al aire libre.'],
  alumno: ['Sigues las instrucciones de tu supervisor y evacúas por la vía señalizada hasta la zona de seguridad.', 'No intentas apagar fuegos ni manipular baterías: avisas a viva voz y te alejas.', 'Si te lesionas, por leve que sea, avisas de inmediato: te atienden en un servicio de salud público con el seguro escolar.', 'Nunca vuelves a entrar al taller durante una emergencia.'],
  gerente_general: ['Tienes la máxima responsabilidad del plan de emergencias y dispones los recursos.', 'Ante un accidente grave o fatal apoyas la suspensión de la faena, la notificación al 600 42 000 22 y la coordinación con la empresa mandante.', 'La faena solo se reanuda cuando la Inspección del Trabajo o la SEREMI de Salud lo autorizan.', 'En la oficina y en el taller sigues las instrucciones del líder de respuesta.'],
  jefa_operaciones: ['Recibes los avisos de inicio y término de jornada de los pilotos; si un piloto no reporta, intentas contacto por todos los medios y con la mandante.', 'Ante un accidente coordinas la atención (ACHS 1404), presentas la DIAT dentro de 24 horas y, si es grave o fatal, notificas al 600 42 000 22.', 'Coordinas con la mandante la suspensión de faenas por mal tiempo, sismo o emergencia.', 'Como Encargada de SST mantienes al día el directorio de emergencia y los registros de simulacros.']
};

/* Procedimientos de la empresa. archivo = PDF en la carpeta /pts */
CONTENIDO.procedimientos = [
  { id: 'RIOHS', titulo: 'Reglamento Interno de Orden, Higiene y Seguridad 2026', archivo: 'pts/RIOHS.pdf', cargos: '*',
    claves: ['Detén tu trabajo ante un riesgo grave e inminente y avisa de inmediato: es tu derecho.', 'Usa siempre el EPP entregado; la empresa lo entrega gratis.', 'Prohibido trabajar bajo los efectos del alcohol o drogas.', 'Todo accidente o incidente se informa de inmediato a la jefatura.'] },
  { id: 'LEY-KARIN', titulo: 'Protocolo de prevención del acoso sexual, laboral y la violencia en el trabajo', archivo: 'pts/LEY-KARIN.pdf', cargos: '*',
    claves: ['El acoso sexual, el acoso laboral y la violencia en el trabajo están prohibidos.', 'Puedes denunciar ante la Jefatura de Operaciones, la Gerencia General, la Asesora externa o directamente en la Inspección del Trabajo.', 'La denuncia es reservada y está prohibida cualquier represalia.'] },
  { id: 'EPP', titulo: 'Procedimiento de selección, entrega y reposición de EPP', archivo: 'pts/EPP.pdf', cargos: '*',
    claves: ['El EPP es la última barrera: primero se elimina o controla el riesgo.', 'GL entrega el EPP certificado sin costo y lo registra.', 'Revisa tu EPP antes de usarlo; si está dañado, avisa y pide reposición.'] },
  { id: 'PRO-ACC-01', titulo: 'Notificación e investigación de accidentes', archivo: 'pts/PRO-ACC-01.pdf', cargos: '*',
    claves: ['Todo accidente o incidente se informa de inmediato a la Jefa de Operaciones, aunque parezca leve.', 'La DIAT se presenta en la ACHS dentro de 24 horas.', 'Accidente grave o fatal: se suspende la faena y se notifica al 600 42 000 22.', 'La investigación busca causas, no culpables.'] },
  { id: 'PTS-ROV-001', titulo: 'Operaciones con ROV en faenas', archivo: 'pts/PTS-ROV-001.pdf', cargos: ['piloto', 'jefa_operaciones', 'gerente_general'],
    claves: ['Checklist preoperacional antes de cada operación y aviso de inicio de jornada a la Jefa de Operaciones.', 'No operar el ROV con buzos en el agua sin coordinación formal con la mandante.', 'Chaleco salvavidas en cubierta, pontón y todo sector con riesgo de caída al agua.', 'En faena solo mantención básica: las fallas y baterías dañadas se envían al taller.', 'Prohibido entrar al agua para recuperar el equipo sin autorización.'] },
  { id: 'PDR-01', titulo: 'Plan de respuesta ante emergencias en faenas', archivo: 'pts/PDR-01.pdf', cargos: ['piloto', 'jefa_operaciones', 'gerente_general'],
    claves: ['En faena se aplica el plan de emergencia de la mandante y de la embarcación.', 'Hombre al agua: alarma, salvavidas y contacto visual; avisar a la Autoridad Marítima (137).', 'Sismo fuerte: aplicar el plan de tsunami sin esperar la alerta oficial.'] },
  { id: 'PTS-TAL-001', titulo: 'Mantención y reparación de equipos ROV en taller', archivo: 'pts/PTS-TAL-001.pdf', cargos: ['encargado_taller', 'asistente_taller', 'alumno', 'jefa_operaciones'],
    claves: ['Antes de abrir un ROV: apagar, aislar la batería y verificar ausencia de tensión.', 'Ningún aerosol ni solvente junto al cautín, la pistola de calor o las estufas.', 'Baterías de litio: carga supervisada en la zona de carga y nunca al cierre del taller.', 'Lentes de seguridad con herramientas eléctricas; guantes de nitrilo con químicos y resina.'] },
  { id: 'PDR-02', titulo: 'Plan de respuesta ante emergencias del taller', archivo: 'pts/PDR-02.pdf', cargos: ['encargado_taller', 'asistente_taller', 'alumno', 'jefa_operaciones', 'gerente_general'],
    claves: ['El encargado de taller es el líder de respuesta; el asistente lo apoya.', 'Incendio incipiente: extintor PQS con la salida a tu espalda; si crece, evacuar.', 'Batería de litio que humea: alejar personas y combustibles; no usar agua.', 'Alarma de CO o mareo: apagar estufas, ventilar y salir al aire libre.'] },
  { id: 'PRT-EST-01', titulo: 'Protocolo de estudiantes en práctica', archivo: 'pts/PRT-EST-01.pdf', cargos: ['alumno', 'encargado_taller', 'asistente_taller'],
    claves: ['El estudiante trabaja siempre con su supervisor presente y nunca queda solo en el taller.', 'Solo realiza las tareas autorizadas; baterías, pruebas energizadas y epóxicos están prohibidos.', 'Ante un accidente: servicio de salud público y Declaración Individual de Accidente Escolar.'] }
];
CONTENIDO.procedimientosDe = function (cargo) {
  return CONTENIDO.procedimientos.filter(function (p) { return p.cargos === '*' || p.cargos.indexOf(cargo) >= 0; });
};

/* ---------------- Juegos por módulo ---------------- */
CONTENIDO.juegos = {};

CONTENIDO.juegos['ds44.j1'] = {
  intro: 'Cada tarjeta es una situación real en la faena o en el taller. Decide si es un derecho tuyo, una obligación tuya o una obligación de la empresa.',
  partes: [{
    tipo: 'clasificar',
    categorias: [{ id: 'der', nombre: 'Derecho del trabajador' }, { id: 'obt', nombre: 'Obligación del trabajador' }, { id: 'obe', nombre: 'Obligación de la empresa' }],
    items: [
      { t: 'Detener la operación del ROV y alejarte ante un riesgo grave e inminente, avisando de inmediato.', c: 'der', fb: 'Es un derecho: puedes interrumpir tus labores ante un riesgo grave e inminente para tu vida o salud.' },
      { t: 'Usar el chaleco salvavidas en el pontón y en cubierta.', c: 'obt', fb: 'Usar correctamente el EPP entregado es una obligación del trabajador.' },
      { t: 'Entregar los lentes, los guantes y el chaleco sin costo para ti.', c: 'obe', fb: 'La empresa debe proporcionar el EPP gratuitamente y no puede descontarlo por uso normal.' },
      { t: 'Avisar de inmediato a la Jefa de Operaciones cuando te lesionas, aunque sea leve.', c: 'obt', fb: 'Informar todo accidente o incidente es tu obligación: así se activa la cobertura de la Ley 16.744.' },
      { t: 'Informarte los riesgos de tu cargo y cómo controlarlos antes de empezar (IRL).', c: 'obe', fb: 'El art. 15 del D.S. 44 obliga a la empresa a informar los riesgos de cada puesto de trabajo.' },
      { t: 'Recibir atención en la ACHS por un accidente del trabajo, sin pagar.', c: 'der', fb: 'Las prestaciones médicas del seguro de la Ley 16.744 son gratuitas para el trabajador.' },
      { t: 'Mantener los extintores del taller cargados, señalizados y vigentes.', c: 'obe', fb: 'La empresa debe mantener los medios de extinción en condiciones de uso (D.S. 594).' },
      { t: 'Participar en la elección del Delegado de Seguridad y Salud en el Trabajo.', c: 'der', fb: 'En GL no corresponde Comité Paritario en ninguna faena: los trabajadores eligieron a su Delegado de SST, Damián González.' },
      { t: 'Completar el checklist preoperacional antes de operar el ROV.', c: 'obt', fb: 'Cumplir los procedimientos de trabajo seguro es una obligación del trabajador.' }
    ]
  }, {
    tipo: 'ordenar',
    enunciado: 'Un piloto se corta la mano con la hélice del ROV en el pontón. Ordena lo que debe pasar, de lo primero a lo último.',
    items: ['Detener el equipo y dar primeros auxilios', 'Avisar de inmediato a la Jefa de Operaciones y al jefe de centro', 'Trasladarlo a la ACHS o al centro asistencial más cercano', 'La Jefa de Operaciones presenta la DIAT dentro de 24 horas', 'Se investiga el accidente con el Delegado de SST'],
    fb: 'Primero la atención y el aviso; luego el traslado. La DIAT se presenta dentro de 24 horas y después se investiga para que no se repita.'
  }]
};

/* j2: escena dibujada (ver juegos.js) */
CONTENIDO.juegos['ds44.j2'] = {
  intro: 'Un piloto de GL opera el ROV desde el pontón de un centro de cultivo. Toca en la imagen cada peligro que encuentres. Hay 6.',
  partes: [{ tipo: 'hotspot', escena: 'ponton' }]
};
CONTENIDO.juegos['ds44.j2_taller'] = {
  intro: 'Este es un taller de mantención de ROV. Toca en la imagen cada peligro que encuentres. Hay 6, y varios se vieron en la inspección del taller de GL.',
  partes: [{ tipo: 'hotspot', escena: 'taller' }]
};

CONTENIDO.juegos['ds44.j3'] = {
  intro: 'Une cada peligro de tu trabajo con el daño que puede producir en tu salud.',
  partes: [{
    tipo: 'emparejar',
    pares: [
      { a: 'Viento, agua fría y humedad en el pontón', b: 'Hipotermia y entumecimiento' },
      { a: 'Sol directo en el mar, aun nublado', b: 'Quemaduras y cáncer de piel' },
      { a: 'Horas frente a los monitores de la consola o el microscopio', b: 'Fatiga visual y dolor cervical' },
      { a: 'Humos de soldadura con fundente', b: 'Irritación respiratoria' },
      { a: 'Limpiacontactos con n-hexano y solventes', b: 'Mareo y daño a la salud por vapores' },
      { a: 'Resina de impresión 3D y masilla epóxica', b: 'Dermatitis y alergia en la piel' },
      { a: 'Turnos 14x14 lejos de la familia y trabajo solo en faena', b: 'Estrés y fatiga mental' }
    ]
  }]
};

CONTENIDO.juegos['ds44.j4'] = {
  intro: 'Estas medidas salen de la Matriz IPER de GL para tu cargo. Clasifica cada una según el tipo de control. Después ordena los controles del más al menos eficaz.',
  partes: [{ tipo: 'clasificar', desdeIper: true,
    categorias: [{ id: 'eliminacion', nombre: 'Eliminación' }, { id: 'sustitucion', nombre: 'Sustitución' }, { id: 'ingenieria', nombre: 'Control de ingeniería' }, { id: 'administrativo', nombre: 'Administrativo o señalización' }, { id: 'epp', nombre: 'EPP' }],
    items: [] },
  { tipo: 'ordenar', enunciado: 'Ordena la jerarquía de controles, del más eficaz al menos eficaz.',
    items: ['Eliminación', 'Sustitución', 'Controles de ingeniería', 'Controles administrativos y señalización', 'Elementos de protección personal (EPP)'],
    fb: 'El EPP es la última barrera: se usa cuando el riesgo no se pudo eliminar ni controlar en su origen.' }]
};

CONTENIDO.juegos['ds44.j5'] = {
  intro: 'Situaciones reales de los planes de emergencia de GL. Elige qué hacer en cada momento.',
  partes: [{ tipo: 'escenario', casos: [
    { titulo: 'Hombre al agua en el centro', para: 'faena', pasos: [
      { p: 'Estás operando el ROV desde el pontón y ves caer al agua a un operario del centro. ¿Qué haces primero?', o: [
        { t: 'Gritar "¡Hombre al agua!", lanzar un salvavidas y no perderlo de vista.', ok: true, fb: 'Correcto. La voz de alarma y el contacto visual permiten que el centro y la embarcación activen su rescate.' },
        { t: 'Lanzarte al agua para sacarlo.', fb: 'No. Nadie se lanza al agua: podrías terminar siendo una segunda víctima.' },
        { t: 'Terminar la inspección y luego avisar.', fb: 'Se suspende de inmediato la operación del ROV. La persona es lo primero.' }] },
      { p: '¿Y el ROV que está en el agua?', o: [
        { t: 'Lo detengo y lo dejo quieto, lejos de la persona, para no golpearla ni enredarla con el umbilical.', ok: true, fb: 'Correcto. El equipo se recupera después, cuando el rescate terminó.' },
        { t: 'Lo uso para empujar a la persona hacia el pontón.', fb: 'Las hélices y el umbilical pueden herirla o enredarla. El ROV se detiene.' }] },
      { p: 'Rescatan a la persona. ¿A quién más avisas?', o: [
        { t: 'A la Jefa de Operaciones; el centro avisa a la Autoridad Marítima (137) según su plan.', ok: true, fb: 'Correcto. Si la persona es de GL, se gestiona además la atención en la ACHS y la DIAT.' },
        { t: 'A nadie, porque no era de GL.', fb: 'Igual se informa: es un incidente grave en la faena donde trabajas.' }] }
    ] },
    { titulo: 'Sismo fuerte en el pontón', para: 'faena', pasos: [
      { p: 'Estás en el pontón y empieza un sismo. ¿Qué haces?', o: [
        { t: 'Suspender la operación, afirmarme y no correr por los pasillos.', ok: true, fb: 'Correcto. Correr por pasillos que se mueven puede terminar en caída al agua.' },
        { t: 'Correr a recoger el ROV.', fb: 'Primero te proteges. El equipo se recupera cuando sea seguro.' }] },
      { p: 'El sismo fue tan fuerte que costaba mantenerse en pie. ¿Qué haces?', o: [
        { t: 'Esperar el aviso oficial de tsunami por radio.', fb: 'En un sismo así no se espera: se actúa de inmediato.' },
        { t: 'Seguir de inmediato el plan de tsunami de la mandante o de la embarcación.', ok: true, fb: 'Correcto. En fiordos un deslizamiento puede generar olas sin aviso, como en Aysén en 2007.' }] }
    ] },
    { titulo: 'Batería que se calienta en la faena', para: 'faena', pasos: [
      { p: 'Al sacar una batería del ROV notas que está hinchada y muy caliente. ¿Qué haces?', o: [
        { t: 'No cargarla, dejarla lejos de combustibles y personas si es seguro, avisar y rotularla para el taller.', ok: true, fb: 'Correcto. Una batería dañada no se carga ni se abre.' },
        { t: 'Cargarla igual para terminar la faena.', fb: 'Una batería hinchada puede incendiarse. Nunca se carga.' }] },
      { p: 'Empieza a salir humo de la batería. ¿Qué haces?', o: [
        { t: 'Alejar a las personas, avisar a la tripulación o al centro y usar el extintor solo si es seguro.', ok: true, fb: 'Correcto. No se intenta apagar con agua sin instrucción.' },
        { t: 'Tomarla con las manos y tirarla al mar.', fb: 'Podría quemarte o explotar en tus manos.' }] }
    ] },
    { titulo: 'Fuego en el banco de soldadura', para: 'taller', pasos: [
      { p: 'Mientras sueldas una placa se inflama un paño con limpiacontactos que estaba en el banco. ¿Qué haces primero?', o: [
        { t: 'Dar la alarma a viva voz y cortar la energía del banco si es seguro.', ok: true, fb: 'Correcto. Luego, si el fuego es incipiente, se usa el extintor.' },
        { t: 'Echarle agua de la botella.', fb: 'Con equipos energizados el agua es peligrosa. Primero alarma y corte de energía.' }] },
      { p: 'El fuego es pequeño. ¿Cómo usas el extintor PQS?', o: [
        { t: 'Con la salida a mi espalda, apuntando a la base de las llamas y barriendo.', ok: true, fb: 'Correcto.' },
        { t: 'Lo más cerca posible, aunque quede entre el fuego y la pared.', fb: 'Nunca te quedes sin salida.' }] },
      { p: 'Se apagó. ¿Qué se aprende?', o: [
        { t: 'Que los aerosoles y paños con solvente no van junto al cautín: se guardan en el gabinete y se espera que el solvente se evapore antes de soldar.', ok: true, fb: 'Correcto. Es el hallazgo H02 de la inspección del taller.' },
        { t: 'Que hay que soldar más rápido.', fb: 'La causa es la cercanía de inflamables a una fuente de calor.' }] }
    ] },
    { titulo: 'Alarma de monóxido en el taller', para: 'taller', pasos: [
      { p: 'Es invierno, la estufa a parafina y la combustión lenta están encendidas y a tu compañero le duele la cabeza y está mareado. ¿Qué haces?', o: [
        { t: 'Apagar la estufa a parafina, cerrar el tiraje de la combustión lenta, abrir puertas y ventanas y salir todos al aire libre.', ok: true, fb: 'Correcto. Son síntomas de intoxicación por monóxido de carbono.' },
        { t: 'Darle un analgésico y seguir trabajando.', fb: 'El monóxido no se ve ni se huele. Primero aire fresco para todos.' }] },
      { p: 'Al aire libre no mejora y está confundido. ¿Qué corresponde?', o: [
        { t: 'Llamar al SAMU (131) y a la ACHS (1404).', ok: true, fb: 'Correcto. Si no respira, RCP si hay personal capacitado.' },
        { t: 'Esperar a que se le pase.', fb: 'La confusión es un signo de gravedad: se pide ayuda de inmediato.' }] }
    ] },
    { titulo: 'Sismo en el taller', para: 'taller', pasos: [
      { p: 'Estás en el banco y empieza un sismo fuerte. ¿Qué haces?', o: [
        { t: 'Alejarme de las repisas altas con maletas, agacharme, cubrirme y afirmarme.', ok: true, fb: 'Correcto. Las maletas y cajas en altura pueden caer.' },
        { t: 'Correr a la escalera del segundo piso.', fb: 'En la escalera durante el movimiento te puedes caer. Primero protégete.' }] },
      { p: 'Terminó el movimiento. ¿Qué sigue?', o: [
        { t: 'Evacuar por la vía señalizada a la zona de seguridad, con recuento de todos, incluido el comedor del segundo piso.', ok: true, fb: 'Correcto. El encargado de taller dirige la evacuación y el recuento.' },
        { t: 'Ordenar las repisas antes de salir.', fb: 'Primero las personas. Lo material después.' }] }
    ] },
    { titulo: 'Accidente grave', para: 'todos', pasos: [
      { p: 'Un compañero sufre una lesión grave y hay que trasladarlo. ¿Qué pasa con la tarea?', o: [
        { t: 'Se suspende la faena afectada y se notifica de inmediato al 600 42 000 22.', ok: true, fb: 'Correcto. La notificación la hace la Jefa de Operaciones; la faena se reanuda solo con autorización de la autoridad.' },
        { t: 'Se sigue trabajando para no atrasar al cliente.', fb: 'Un accidente grave obliga a suspender y notificar.' }] },
      { p: '¿Qué plazo tiene la empresa para presentar la DIAT a la ACHS?', o: [
        { t: '24 horas.', ok: true, fb: 'Correcto. Si la empresa no la hace, puede hacerla el trabajador, un familiar o un compañero.' },
        { t: 'Una semana.', fb: 'El plazo es de 24 horas desde que se conoce el accidente.' },
        { t: 'Solo si el trabajador queda con licencia.', fb: 'Todo accidente del trabajo se denuncia, tenga o no licencia.' }] }
    ] }
  ] }]
};

CONTENIDO.juegos['ds44.j6'] = {
  intro: 'Mira la forma y el color de cada señal y elige qué tipo de señal es.',
  partes: [{ tipo: 'clasificar', conIcono: true,
    categorias: [{ id: 'prohibicion', nombre: 'Prohibición' }, { id: 'obligacion', nombre: 'Obligación' }, { id: 'advertencia', nombre: 'Advertencia' }, { id: 'salvamento', nombre: 'Salvamento o evacuación' }, { id: 'incendio', nombre: 'Equipo contra incendio' }],
    items: [
      { senal: 'prohibicion', icono: 'cigarro', t: 'Prohibido fumar', c: 'prohibicion', fb: 'Círculo rojo con franja diagonal: prohíbe una acción. Clave junto a los inflamables y la zona de carga de baterías.' },
      { senal: 'obligacion', icono: 'chaleco', t: 'Uso obligatorio de chaleco salvavidas', c: 'obligacion', fb: 'Círculo azul: indica algo que debes hacer.' },
      { senal: 'advertencia', icono: 'rayo', t: 'Riesgo eléctrico', c: 'advertencia', fb: 'Triángulo amarillo con borde negro: advierte un peligro.' },
      { senal: 'salvamento', icono: 'cruz', t: 'Primeros auxilios', c: 'salvamento', fb: 'Rectángulo verde: salvamento, primeros auxilios o vía de evacuación.' },
      { senal: 'incendio', icono: 'extintor', t: 'Extintor', c: 'incendio', fb: 'Cuadrado rojo: ubicación de un equipo contra incendio.' },
      { senal: 'advertencia', icono: 'mano', t: 'Riesgo de atrapamiento de manos', c: 'advertencia', fb: 'Triángulo amarillo: peligro. Típico en las hélices del ROV.' },
      { senal: 'obligacion', icono: 'casco', t: 'Uso obligatorio de casco', c: 'obligacion', fb: 'Círculo azul: obligación.' },
      { senal: 'salvamento', icono: 'salida', t: 'Salida de emergencia', c: 'salvamento', fb: 'Verde: indica por dónde evacuar.' },
      { senal: 'prohibicion', icono: 'persona', t: 'Prohibido el paso', c: 'prohibicion', fb: 'Círculo rojo con franja: prohíbe. Por ejemplo, el paso al área de pruebas de estanqueidad.' },
      { senal: 'advertencia', icono: 'llama', t: 'Material inflamable', c: 'advertencia', fb: 'Triángulo amarillo: advierte el peligro de incendio, como en el gabinete de aerosoles.' }
    ] }]
};

CONTENIDO.juegos['ds44.j7'] = {
  intro: 'Une cada fuego que puede ocurrir en GL con su clase y el extintor adecuado. Después ordena los pasos para usar un extintor.',
  partes: [{ tipo: 'emparejar',
    pares: [
      { a: 'Cajas, papeles y cartón junto a la combustión lenta', b: 'Clase A · PQS (polvo químico seco) ABC' },
      { a: 'Alcohol isopropílico, parafina o aerosoles', b: 'Clase B · PQS o CO2' },
      { a: 'Fuente de poder o cargador energizado', b: 'Clase C · CO2 o PQS, nunca agua' },
      { a: 'Aceite en la cocina del taller', b: 'Clase K · extintor de cocina' }
    ] },
  { tipo: 'ordenar', enunciado: 'Ordena los pasos para usar un extintor portátil.',
    items: ['Retirar el seguro (pasador)', 'Apuntar la boquilla a la base del fuego', 'Presionar la manilla', 'Barrer de lado a lado sobre la base de las llamas'],
    fb: 'Siempre con el viento o la salida a tu espalda.' }]
};

CONTENIDO.juegos['ds44.pyv_j'] = {
  intro: 'Antes de operar se completa el checklist preoperacional del PTS-ROV-001 (anexo A). Marca solo lo que se debe verificar.',
  partes: [{ tipo: 'checklist',
    items: [
      { t: 'Pronóstico y estado del mar compatibles con la operación', ok: true },
      { t: 'Coordinación con el centro y sin buzos en el agua (o coordinados)', ok: true },
      { t: 'Carcasa, hélices y protectores sin daños', ok: true },
      { t: 'Baterías sin hinchazón, golpes ni temperatura anormal', ok: true },
      { t: 'Umbilical, cables y conectores secos y sin daños', ok: true },
      { t: 'Radio o medio de comunicación operativo', ok: true },
      { t: 'EPP completo: chaleco salvavidas, ropa de agua, calzado, guantes y lentes', ok: true },
      { t: 'Inicio de jornada informado a la Jefa de Operaciones', ok: true },
      { t: 'Que el ROV esté recién pintado', ok: false, fb: 'No es parte del checklist. Importa que la carcasa no tenga daños.' },
      { t: 'Que el celular tenga todas las aplicaciones actualizadas', ok: false, fb: 'Lo que importa es tener un medio de comunicación operativo.' },
      { t: 'Que el pontón tenga wifi', ok: false, fb: 'No es un requisito de seguridad de la operación.' }
    ] }]
};

CONTENIDO.juegos['ds44.pyv_j_taller'] = {
  intro: 'Antes de empezar la jornada en el taller se revisa el puesto (PTS-TAL-001, punto 8.1). Marca solo lo que se debe verificar.',
  partes: [{ tipo: 'checklist',
    msgFalta: 'Esto sí se revisa al iniciar la jornada.', cierre: 'Si algo no está bien, avisa al encargado de taller antes de empezar.',
    items: [
      { t: 'Vías de evacuación y salida despejadas', ok: true },
      { t: 'Extintores en su lugar y accesibles', ok: true },
      { t: 'Ninguna batería caliente, deformada o con olor en la zona de carga', ok: true },
      { t: 'Aerosoles y solventes en el gabinete, no junto al cautín', ok: true },
      { t: 'Cables y enchufes sin daño visible', ok: true },
      { t: 'Estufa a parafina fuera de la vía de evacuación y detector de CO funcionando', ok: true },
      { t: 'Tareas del estudiante en práctica asignadas y con supervisor', ok: true },
      { t: 'Puerta de salida con llave para que nadie entre', ok: false, fb: 'La salida debe poder abrirse siempre desde adentro.' },
      { t: 'Baterías cargando desde la noche anterior', ok: false, fb: 'Prohibido: ninguna batería queda cargando al cierre ni sin personas.' },
      { t: 'Varios alargadores en cadena para conectar todo el banco', ok: false, fb: 'Las conexiones en cadena sobrecargan la instalación: riesgo eléctrico y de incendio.' }
    ] }]
};

/* ---------------- Evaluación Tu trabajo en GL ---------------- */
/* comunes: para todos (o según área). porCargo: se agregan según el cargo. Se toman todas las del cargo + comunes hasta 7. */
CONTENIDO.quizPyv = {
  comunes: [
    { area: 'faena', p: 'Hay buzos trabajando en la jaula donde debes inspeccionar. ¿Qué haces?', op: ['Opero igual con cuidado', 'No opero el ROV hasta que exista coordinación formal con la mandante', 'Opero solo si los buzos me ven', 'Le pido a los buzos que salgan'], ok: 2, fbOk: 'Correcto. La operación simultánea con buzos sin coordinación está prohibida.', fbNo: 'Sin coordinación formal con la mandante no se opera con buzos en el agua.' },
    { area: 'faena', p: '¿Cuál es el teléfono de emergencias marítimas?', op: ['131', '133', '137', '1404'], ok: 3, fbOk: 'Correcto. También el canal 16 de VHF.', fbNo: 'Emergencias marítimas: 137 o canal 16 de VHF. ACHS es el 1404.' },
    { area: 'faena', p: 'Trabajas solo en la faena. ¿Qué haces al iniciar y terminar la jornada?', op: ['Nada', 'Aviso a la Jefa de Operaciones el inicio, la tarea y el término', 'Solo aviso si hay un problema', 'Aviso al final del turno de 14 días'], ok: 2, fbOk: 'Correcto. Es el control del trabajo aislado.', fbNo: 'Se avisa el inicio y el término de cada jornada a la Jefa de Operaciones.' },
    { area: 'taller', p: '¿Qué haces antes de abrir la carcasa de un ROV?', op: ['Nada, se abre con cuidado', 'Apagar, aislar la batería interna y verificar que no queda tensión', 'Solo apagarlo', 'Mojarlo para que no haga chispa'], ok: 2, fbOk: 'Correcto (PTS-TAL-001, punto 8.3).', fbNo: 'Apagar, aislar la batería y verificar ausencia de tensión antes de abrir.' },
    { area: 'taller', p: '¿Dónde van los aerosoles y solventes del taller?', op: ['En el banco, a mano', 'En el gabinete de inflamables, lejos del cautín, la zona de carga y las estufas', 'Junto a la estufa para que no se congelen', 'En el comedor'], ok: 2, fbOk: 'Correcto.', fbNo: 'En el gabinete de inflamables, lejos de toda fuente de calor.' },
    { area: 'taller', p: 'Al cierre del taller queda una batería a medio cargar. ¿Qué haces?', op: ['La dejo cargando para mañana', 'La desconecto: ninguna batería queda cargando sin personas', 'La tapo con un paño', 'La pongo junto a la estufa'], ok: 2, fbOk: 'Correcto.', fbNo: 'Prohibido dejar baterías cargando al cierre o sin supervisión.' },
    { p: 'Te caes y te lesionas en el trayecto directo de tu casa al trabajo. ¿Qué es?', op: ['Un accidente común, sin cobertura', 'Un accidente de trayecto, cubierto por la Ley 16.744', 'Un problema personal', 'Solo cubierto si vas en vehículo de la empresa'], ok: 2, fbOk: 'Correcto. Avisa a la empresa y acude a la ACHS.', fbNo: 'Es accidente de trayecto y lo cubre la Ley 16.744.' },
    { p: '¿Quién es el Delegado de Seguridad y Salud en el Trabajo de GL?', op: ['El jefe de centro de la mandante', 'Damián González Mansilla', 'La Asesora externa', 'No hay delegado'], ok: 2, fbOk: 'Correcto. Fue elegido por los trabajadores en junio de 2026 y participa en las investigaciones.', fbNo: 'Es Damián González Mansilla, elegido por los trabajadores en junio de 2026.' }
  ],
  porCargo: {
    piloto: [
      { p: 'Según el PTS-ROV-001, ¿qué mantención haces en la faena?', op: ['Cualquier reparación', 'Solo mantención básica: limpieza, lubricación y revisión; las fallas van al taller', 'Abrir la carcasa si hace falta', 'Ninguna'], ok: 2, fbOk: 'Correcto.', fbNo: 'En faena solo mantención básica; abrir carcasas y reparar se hace en el taller.' },
      { p: 'El ROV queda atrapado en la red. ¿Qué está prohibido?', op: ['Informar a la Jefa de Operaciones', 'Entrar al agua para recuperarlo sin autorización y procedimiento', 'Suspender las maniobras', 'Coordinar con el centro'], ok: 2, fbOk: 'Correcto.', fbNo: 'Nunca se entra al agua a recuperar el equipo sin autorización y procedimiento definido.' },
      { p: '¿Cuándo usas el chaleco salvavidas?', op: ['Solo al navegar', 'En cubierta, pontón, módulos, muelles y todo sector con riesgo de caída al agua', 'Solo si llueve', 'Solo si lo pide la mandante'], ok: 2, fbOk: 'Correcto.', fbNo: 'En todo sector con riesgo de caída al agua.' }
    ],
    encargado_taller: [
      { p: 'Durante una emergencia en el taller, ¿cuál es tu rol según el PDR-02?', op: ['Esperar instrucciones de la Gerencia', 'Líder de respuesta: alarma, evaluación, evacuación y recuento', 'Solo llamar a Bomberos', 'Ninguno'], ok: 2, fbOk: 'Correcto.', fbNo: 'El encargado de taller es el líder de respuesta.' },
      { p: 'Un estudiante en práctica quiere cargar una batería. ¿Qué corresponde?', op: ['Se lo permites si tiene cuidado', 'Está prohibido: la carga de baterías no la hace el estudiante', 'Lo dejas solo para que aprenda', 'Depende del día'], ok: 2, fbOk: 'Correcto (PRT-EST-01).', fbNo: 'La carga y manipulación de baterías está prohibida para el estudiante.' },
      { p: '¿Con qué frecuencia se hace la inspección semanal del taller?', op: ['Una vez al año', 'Cada lunes, con el registro REG-TAL-01', 'Solo si hay un accidente', 'Cuando venga la Asesora'], ok: 2, fbOk: 'Correcto.', fbNo: 'Cada lunes, en el libro de registros del taller.' }
    ],
    asistente_taller: [
      { p: 'Vas a limpiar contactos con aerosol junto a la placa recién soldada. ¿Qué haces antes?', op: ['Nada', 'Apagar el cautín, alejar calor y esperar la evaporación completa antes de energizar', 'Aplicar más cantidad', 'Calentarlo con la pistola de aire'], ok: 2, fbOk: 'Correcto.', fbNo: 'Sin fuentes de calor cerca y con evaporación completa antes de energizar o soldar.' },
      { p: '¿Qué EPP usas al cargar o vaciar resina de la impresora 3D?', op: ['Ninguno', 'Guantes de nitrilo y lentes de seguridad', 'Solo guantes de lana', 'Solo mascarilla'], ok: 2, fbOk: 'Correcto.', fbNo: 'Guantes de nitrilo y lentes: la resina irrita y sensibiliza la piel.' }
    ],
    alumno: [
      { p: '¿Cuándo puedes trabajar en el taller?', op: ['Cuando quieras', 'Solo con tu supervisor presente', 'Solo los sábados', 'Solo si está el Delegado'], ok: 2, fbOk: 'Correcto.', fbNo: 'Siempre con tu supervisor presente; nunca solo en el taller.' },
      { p: '¿Cuál de estas tareas tienes prohibida?', op: ['Limpieza ultrasónica', 'Carga de baterías de litio', 'Orden y aseo', 'Lavado de piezas 3D'], ok: 2, fbOk: 'Correcto.', fbNo: 'La carga y manipulación de baterías está prohibida para el estudiante.' },
      { p: 'Te haces un corte pequeño. ¿Qué haces?', op: ['Nada, es leve', 'Aviso de inmediato para que me atiendan con el seguro escolar', 'Me pongo una curita y sigo sin decir nada', 'Aviso al final de la práctica'], ok: 2, fbOk: 'Correcto.', fbNo: 'Siempre avisas: así se activa el seguro escolar.' }
    ],
    gerente_general: [
      { p: 'Ocurre un accidente grave en una faena. ¿Qué corresponde de inmediato?', op: ['Esperar el informe al final del turno', 'Suspender la faena afectada y notificar de inmediato al 600 42 000 22', 'Solo enviar la DIAT a la semana', 'Cambiar al trabajador de cargo'], ok: 2, fbOk: 'Correcto. La faena no se reanuda sin autorización de la autoridad.', fbNo: 'Se suspende y se notifica de inmediato.' },
      { p: 'Con 34 trabajadores repartidos en faenas de 1 a 3 personas, ¿qué instancia de participación tiene GL?', op: ['Comité Paritario', 'Delegado de Seguridad y Salud en el Trabajo', 'Ninguna', 'Comité de la mandante'], ok: 2, fbOk: 'Correcto. El Comité Paritario se exige por faena con más de 25 personas.', fbNo: 'GL tiene Delegado de SST: ninguna faena supera las 25 personas.' }
    ],
    jefa_operaciones: [
      { p: 'Un piloto no reporta el término de su jornada. ¿Qué haces?', op: ['Espero al día siguiente', 'Intento contacto por todos los medios y con la mandante; sin respuesta, activo la búsqueda', 'Nada', 'Le descuento el día'], ok: 2, fbOk: 'Correcto. Es el control del trabajo aislado.', fbNo: 'Se intenta contacto de inmediato y, sin respuesta, se activa la búsqueda con la mandante.' },
      { p: '¿Qué plazo tienes para presentar la DIAT en la ACHS?', op: ['24 horas desde que se conoce el accidente', '5 días hábiles', '30 días', 'Solo si hay licencia'], ok: 1, fbOk: 'Correcto.', fbNo: 'Dentro de 24 horas.' }
    ]
  }
};

/* ---------------- Encuesta de satisfacción ---------------- */
CONTENIDO.encuesta = [
  { id: 'claridad', p: 'Los contenidos fueron claros', tipo: 'escala' },
  { id: 'utilidad', p: 'Lo aprendido me sirve en mi trabajo diario', tipo: 'escala' },
  { id: 'empresa', p: 'Los ejemplos de GL reflejan mi trabajo real', tipo: 'escala' },
  { id: 'plataforma', p: 'La plataforma fue fácil de usar en mi celular', tipo: 'escala' },
  { id: 'facilitadora', p: 'Las sesiones con la facilitadora me ayudaron', tipo: 'escala' },
  { id: 'comentario', p: '¿Qué mejorarías o qué tema te gustaría reforzar?', tipo: 'texto' }
];
