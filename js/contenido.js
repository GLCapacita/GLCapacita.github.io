/* PyV Capacita — contenidos propios de Servicios Acuícolas PyV Rain Vega SpA.
   Fuentes: Matriz IPER PyV 2026, PRRD PyV 2026 v02, procedimientos PTS de la empresa
   y curso tipo de la Subsecretaría de Previsión Social (Res. Ex. 1117/2026).
   Para editar textos, preguntas o juegos, modifica este archivo. */
var CONTENIDO = {};

CONTENIDO.empresa = {
  nombre: 'Servicios Acuícolas PyV Rain Vega SpA',
  corto: 'PyV',
  organismo: 'ACHS',
  delegado: 'Gustavo Barriga Zúñiga',
  apr: 'Iza Sandoval Salgado',
  embarcaciones: ['Yessica I', 'Juan Eduardo', 'La Minga', 'Don Santiago', 'Westhoff', 'Prime I', 'Don Jerónimo']
};

CONTENIDO.directorio = [
  { n: 'Emergencias marítimas (Armada)', t: '137' },
  { n: 'VHF socorro y llamada', t: 'Canal 16' },
  { n: 'ACHS rescate y urgencias', t: '1404' },
  { n: 'SAMU', t: '131' },
  { n: 'Bomberos', t: '132' },
  { n: 'Carabineros', t: '133' },
  { n: 'Capitanía de Puerto Chacabuco', t: '+56 67 235 1450' },
  { n: 'Capitanía de Puerto Aguirre', t: '+56 67 236 1233' },
  { n: 'Capitanía de Puerto Cisnes', t: '+56 67 234 6880' },
  { n: 'Capitanía de Puerto Melinka', t: '+56 67 243 1555' },
  { n: 'Jefe de Operaciones · Luciano Rain', t: '+56 9 7536 6406' },
  { n: 'Prevención de Riesgos · Iza Sandoval', t: '+56 9 3093 4654' },
  { n: 'Delegado SST · Gustavo Barriga', t: '+56 9 6673 5985' }
];

/* Rol de cada cargo en emergencias (PRRD punto 6.3 y planes ACCEDER) */
CONTENIDO.rolEmergencia = {
  patron: ['Eres la máxima autoridad operacional durante la navegación, el fondeo y las emergencias a bordo.', 'Diriges las maniobras según el zafarrancho vigente de la embarcación.', 'En hombre al agua activas el zafarrancho y marcas la posición en el GPS.', 'Solo tú ordenas el abandono de la embarcación (señal: seis pitazos largos y seguidos).', 'Antes de zarpar revisas pronóstico, avisos de mal tiempo y estado de puerto.'],
  motorista: ['Cumples las funciones que te asigna el zafarrancho y las instrucciones del Patrón.', 'En incendio a bordo cierras combustible y GLP y cortas la energía eléctrica según el zafarrancho.', 'Informas al Patrón cualquier falla eléctrica, de generador o de propulsión.', 'Ante vía de agua intervienes solo dentro de tus competencias y mantienes el achique.'],
  tripulante: ['Cumples las funciones que te asigna el zafarrancho y las instrucciones del Patrón o del Supervisor.', 'Si ves caer a alguien al agua: das la voz de alarma, no lo pierdes de vista, lo señalas y lanzas el aro.', 'Conoces dónde están chalecos, aros, balsa, extintores y el punto de reunión de tu embarcación.'],
  supervisor: ['Lideras la respuesta inicial durante los trabajos en módulos y jaulas.', 'Tienes autoridad para suspender la faena ante una condición peligrosa, incluido el mal tiempo.', 'Controlas y recuentas a la cuadrilla y coordinas con el Patrón.', 'Al llegar al centro informas a la mandante el número de personas, la embarcación y el canal de contacto.', 'Ante un accidente informas a Operaciones y Gerencia; la DIAT se envía al organismo administrador dentro de 24 horas.'],
  soldador: ['Cumples las funciones del zafarrancho y las instrucciones del Supervisor o del Patrón.', 'En un amago de incendio durante el trabajo en caliente cortas el equipo de inmediato; el vigía actúa con el extintor.', 'Trabajas siempre con Permiso de Trabajo en Caliente y con extintor PQS de 6 kg a menos de 5 metros.'],
  operario: ['Cumples las funciones asignadas en los zafarranchos y las instrucciones del Supervisor o del Patrón.', 'Ante alarma general del centro detienes la actividad y te repliegas a la embarcación para el recuento.', 'Puedes y debes detener tu trabajo ante un riesgo grave e inminente, y avisar de inmediato.'],
  operario_agua: ['Entras al agua solo si es estrictamente necesario y bajo supervisión del operario asistente.', 'Siempre asegurado con arnés y dos cabos de vida: anclas el segundo antes de soltar el primero.', 'Nunca te sumerges por completo: la cabeza siempre sobre el agua.', 'Trabajas un máximo de 2 horas en la jornada de mañana y 2 en la de tarde.', 'Avisas de inmediato si no estás en condiciones físicas o si sientes frío intenso.'],
  buzo: ['Ingresas al agua solo con autorización del Supervisor de Buceo y con bandera Alfa izada.', 'Ante variación del aire, olor o sabor extraño, o síntomas como mareo, dolor o frío intenso, avisas y sales de inmediato.', 'Tu línea de vida es independiente de la manguera de aire.', 'Al salir, el Supervisor de Buceo evalúa tu estado antes de continuar.'],
  gerente_general: ['Tienes la máxima responsabilidad organizacional del plan de emergencias (PRRD) y dispones los recursos.', 'Presides el Comité de Gestión del Riesgo de Desastres, que sesiona al menos cada tres meses y revisa el PRRD una vez al año.', 'Coordinas a nivel superior con la empresa mandante cuando una emergencia lo requiere.', 'En navegación respetas la autoridad del Patrón, y en los módulos la del Supervisor de faena.'],
  jefe_operaciones: ['Coordinas desde tierra la logística de la emergencia: mecánico, remolque, abastecimiento, lancha y recepción en puerto.', 'Después de un sismo o alerta de tsunami consolidas el estado y la posición de todas las dotaciones.', 'Si una embarcación no reporta, intentas contacto por VHF, celular, Starlink y la mandante; sin respuesta, avisas a la Autoridad Marítima con la última posición GPS o POSAT.', 'Integras el Comité de Gestión del Riesgo de Desastres.'],
  prevencion: ['Eres la coordinadora del PRRD: lo actualizas, capacitas, registras los ejercicios y evalúas las emergencias.', 'Ante un accidente coordinas con la ACHS (1404) y con Prevención de la mandante, y luego investigas.', 'Llevas el libro de actas del Comité de Gestión del Riesgo de Desastres.', 'Programas los simulacros: hombre al agua, incendio a bordo, sismo en oficina y alerta de tsunami.'],
  jefe_finanzas: ['En la oficina sigues las instrucciones del encargado/a de oficina, que lidera la alarma, la evacuación y el recuento.', 'En un sismo te agachas, te cubres y te afirmas lejos de ventanas, estanterías y del equipo de aire acondicionado; al terminar evacúas a la zona segura exterior.', 'Usas el extintor solo si el fuego es incipiente y tienes la salida asegurada a tu espalda.'],
  asistente_admin: ['En la oficina Las Rosas 121 apoyas al encargado/a de oficina: alarma, evacuación, recuento y llamado a Bomberos (132), SAMU (131) o Carabineros (133).', 'Mantienes al día el directorio de emergencia y su difusión en la oficina.', 'En un sismo te agachas, te cubres y te afirmas lejos de ventanas, estanterías y del aire acondicionado; al terminar evacúas a la zona segura exterior.', 'En un corte de luz desconectas los equipos; si falta calefacción o luz para trabajar seguro, se suspende la jornada.'],
  auxiliar_aseo: ['En la oficina sigues las instrucciones del encargado/a de oficina, que lidera la alarma, la evacuación y el recuento.', 'Mantienes despejadas la salida y el acceso al extintor y al botiquín.', 'En un sismo te agachas, te cubres y te afirmas lejos de ventanas y estanterías; al terminar evacúas a la zona segura exterior.', 'Señalizas el piso mojado mientras limpias y avisas de enchufes o cables dañados.'],
  buzo_supervisor: ['Eres la autoridad técnica de seguridad de la operación subacuática y no buceas mientras supervisas.', 'Autorizas cada inmersión después del chequeo y la prueba funcional del suministro de aire.', 'Declaras STOP WORK y ordenas la salida del buzo ante cualquier criterio de detención.', 'Coordinas con el Supervisor de Faena el rescate, el abrigo y la evacuación médica.']
};

/* Procedimientos de la empresa. archivo = PDF en la carpeta /pts */
CONTENIDO.procedimientos = [
  { id: 'PTS-001', titulo: 'Entrega, uso y mantención de EPP', archivo: 'pts/PTS-001.pdf', cargos: '*',
    claves: ['El EPP es siempre la última medida de control: primero se elimina o controla el riesgo.', 'La empresa entrega el EPP sin costo y no puede descontarlo por deterioro de uso normal.', 'Revisa tu EPP antes de usarlo; si está dañado avisa de inmediato y pide reposición.', 'No modifiques, desarmes ni alteres ningún componente del EPP.', 'El chaleco salvavidas se retira de uso si tiene cortes, quemaduras, costuras dañadas o perdió flotabilidad.'] },
  { id: 'PA-ACC', titulo: 'Procedimiento de accidentes del trabajo (leve, grave y fatal)', archivo: 'pts/PA-ACCIDENTES.pdf', cargos: '*',
    claves: ['Todo accidente se informa de inmediato a la jefatura directa, aunque parezca menor.', 'El lesionado se traslada al centro de la ACHS más cercano; la DIAT se envía dentro de 24 horas.', 'Accidente grave o fatal: se suspende la faena en el área y se notifica de inmediato.', 'En un accidente fatal no se altera la escena y se llama a Carabineros (133) y SAMU (131).'] },
  { id: 'PTS-018', titulo: 'Investigación de accidentes', archivo: 'pts/PTS-018.pdf', cargos: '*',
    claves: ['Reporta de inmediato a tu jefatura todo accidente y también los cuasi accidentes.', 'La investigación busca causas, no culpables, y define medidas para que no se repita.', 'El Delegado de SST participa en la investigación.'] },
  { id: 'PTS-003', titulo: 'Corte y soldadura', archivo: 'pts/PTS-003.pdf', cargos: ['soldador', 'supervisor', 'operario', 'tripulante', 'prevencion'],
    claves: ['Todo trabajo en caliente requiere Permiso de Trabajo en Caliente (PTC).', 'Retira o cubre materiales inflamables en un radio mínimo de 10 metros.', 'Extintor PQS de 6 kg como mínimo, a menos de 5 metros del punto de trabajo.', 'En embarcaciones, chalecos accesibles y tripulación informada del abandono.', 'Terminado el trabajo, se vigila la zona: un fuego controlado se enfría y vigila al menos 30 minutos.'] },
  { id: 'PTS-004', titulo: 'Apertura de centros de cultivo', archivo: 'pts/PTS-004.pdf', cargos: ['supervisor', 'operario', 'tripulante', 'patron', 'soldador', 'prevencion', 'jefe_operaciones'],
    claves: ['Charla de seguridad antes del turno y AST con todo el equipo.', 'Chaleco salvavidas en todo momento sobre módulos y embarcación.', 'Arnés y línea de vida donde exista riesgo de caída al agua o de altura.', 'Se evalúan mar, viento y visibilidad antes y durante la operación.'] },
  { id: 'PTS-005', titulo: 'Mantención de centros de cultivo', archivo: 'pts/PTS-005.pdf', cargos: ['supervisor', 'operario', 'tripulante', 'soldador', 'prevencion', 'jefe_operaciones'],
    claves: ['AST con todo el equipo antes de iniciar.', 'Posicionarse estable sobre el pasillo y con chaleco salvavidas puesto.', 'Las tapas de unión de pasillos se reponen: evitan caídas al agua.', 'Rodilleras en el resanado de pasillos.'] },
  { id: 'PTS-006', titulo: 'Limpieza y desinfección', archivo: 'pts/PTS-006.pdf', cargos: ['buzo', 'buzo_supervisor', 'supervisor', 'operario', 'tripulante', 'prevencion', 'jefe_operaciones'],
    claves: ['El Supervisor de Buceo autoriza la inmersión y no bucea mientras supervisa.', 'Sin bandera Alfa izada no hay inmersión: es STOP WORK.', 'STOP WORK ante variación del aire, olor o sabor extraño, enredo de manguera, corriente fuerte o síntomas del buzo.', 'La línea de vida es independiente de la manguera de aire (manguera naranja).', 'Desinfectantes: se preparan con protección química y según su hoja de datos de seguridad (HDS).'] },
  { id: 'PTS-007', titulo: 'Cambio de zunchos y flotadores', archivo: 'pts/PTS-007.pdf', cargos: ['operario_agua', 'operario', 'supervisor', 'tripulante', 'patron', 'prevencion', 'jefe_operaciones'],
    claves: ['El operario entra al agua solo si es extremadamente necesario, por la escalera y supervisado.', 'Siempre asegurado con arnés y dos cabos de vida: el segundo se ancla antes de soltar el primero.', 'Nunca sumergirse por completo: la cabeza siempre sobre el agua.', 'Máximo 2 horas en el agua en la mañana y 2 en la tarde, con pausas para recuperar temperatura.', 'Cabo de vida de máximo 3 metros, fijado al arnés con mosquetón.'] },
  { id: 'PTS-009', titulo: 'Raspado de estructuras flotantes', archivo: 'pts/PTS-009.pdf', cargos: ['buzo', 'buzo_supervisor', 'supervisor', 'operario', 'prevencion'],
    claves: ['AST del día firmada antes de comenzar.', 'Trajes de buceo adecuados y chaleco salvavidas.', 'Se suspende la faena si el viento o el oleaje no permiten trabajar seguro.', 'Herramientas de raspado guardadas y revisadas; guantes al manipular espátulas.'] },
  { id: 'PTS-010', titulo: 'Cierre de centros de cultivo', archivo: 'pts/PTS-010.pdf', cargos: ['supervisor', 'operario', 'tripulante', 'patron', 'soldador', 'prevencion', 'jefe_operaciones'],
    claves: ['Chaleco salvavidas en todo momento.', 'Arnés y línea de vida donde haya riesgo de caída.', 'Al desarmar postes y yugos se asegura la estabilidad de lo que queda en pie.', 'Inspección de equipos y herramientas antes de comenzar.'] },
  { id: 'PTS-012', titulo: 'Trabajo en altura', archivo: 'pts/PTS-012.pdf', cargos: ['supervisor', 'operario', 'soldador', 'tripulante', 'patron', 'buzo', 'prevencion', 'jefe_operaciones'],
    claves: ['Prohibido trabajar en altura con baja visibilidad: niebla espesa, lluvia intensa u oscuridad.', 'Prohibido trabajar en altura al mismo tiempo que una maniobra de atraque o desatraque.', 'Inspección personal del arnés antes de cada uso; prohibido EPP vencido o deteriorado.', 'Un arnés que detuvo una caída se retira de inmediato de servicio.', 'Kit de rescate disponible en la faena.'] },
  { id: 'PTS-017', titulo: 'Izaje y movimiento de cargas', archivo: 'pts/PTS-017.pdf', cargos: ['patron', 'motorista', 'tripulante', 'operario', 'supervisor', 'prevencion', 'jefe_operaciones'],
    claves: ['Prohibido pasar o permanecer bajo carga suspendida.', 'Nadie entra a la línea de tiro de un cable o cabo en tensión (efecto látigo).', 'No se excede la capacidad de la grúa (tabla de carga) ni del winche.', 'No se iza con vientos fuertes, marejada o visibilidad reducida.', 'El operador detiene de inmediato ante cualquier comportamiento irregular del cable o equipo.'] },
  { id: 'PTS-021', titulo: 'Instalación y retiro de pajareras', archivo: 'pts/PTS-021.pdf', cargos: ['supervisor', 'operario', 'tripulante', 'prevencion'],
    claves: ['El arco pajarero se levanta a mano con un mínimo de 4 trabajadores; con menos está prohibido.', 'Nadie bajo el sector donde se instala o retira el yugo.', 'Las manos nunca entre el poste y la base.', 'No intentes detener con el cuerpo un arco que pierde estabilidad.', 'Mientras haya alguien conectado a un cabo, nadie suelta ni modifica sus puntos de fijación.'] }
];
CONTENIDO.procedimientosDe = function (cargo) {
  return CONTENIDO.procedimientos.filter(function (p) { return p.cargos === '*' || p.cargos.indexOf(cargo) >= 0; });
};

/* ---------------- Juegos por módulo ---------------- */
CONTENIDO.juegos = {};

CONTENIDO.juegos['ds44.j1'] = {
  intro: 'Cada tarjeta es una situación real a bordo o en el centro. Decide si es un derecho tuyo, una obligación tuya o una obligación de la empresa.',
  partes: [{
    tipo: 'clasificar',
    categorias: [{ id: 'der', nombre: 'Derecho del trabajador' }, { id: 'obt', nombre: 'Obligación del trabajador' }, { id: 'obe', nombre: 'Obligación de la empresa' }],
    items: [
      { t: 'Detener tu trabajo y alejarte ante un riesgo grave e inminente, avisando de inmediato.', c: 'der', fb: 'Es un derecho: puedes interrumpir tus labores ante un riesgo grave e inminente para tu vida o salud.' },
      { t: 'Usar el chaleco salvavidas en cubierta y sobre los módulos.', c: 'obt', fb: 'Usar correctamente el EPP entregado es una obligación del trabajador.' },
      { t: 'Entregar el chaleco, el casco y los guantes sin costo para ti.', c: 'obe', fb: 'La empresa debe proporcionar el EPP gratuitamente y no puede descontarlo por uso normal.' },
      { t: 'Avisar de inmediato a tu supervisor cuando te lesionas, aunque sea leve.', c: 'obt', fb: 'Informar todo accidente o incidente es tu obligación: así se activa la cobertura de la Ley 16.744.' },
      { t: 'Informarte los riesgos de tu cargo y cómo controlarlos antes de empezar.', c: 'obe', fb: 'El D.S. 44 obliga a la empresa a informar los riesgos de cada puesto de trabajo.' },
      { t: 'Recibir atención en la ACHS por un accidente del trabajo, sin pagar.', c: 'der', fb: 'Las prestaciones médicas del seguro de la Ley 16.744 son gratuitas para el trabajador.' },
      { t: 'Mantener los extintores de la embarcación cargados y vigentes.', c: 'obe', fb: 'La empresa debe mantener los medios de extinción en condiciones de uso.' },
      { t: 'Participar en la elección del Delegado de Seguridad y Salud en el Trabajo.', c: 'der', fb: 'En empresas como PyV, sin Comité Paritario, los trabajadores eligen a su Delegado de SST.' },
      { t: 'Asistir a la charla de seguridad antes del turno.', c: 'obt', fb: 'Participar en las actividades preventivas es una obligación del trabajador.' }
    ]
  }, {
    tipo: 'ordenar',
    enunciado: 'Un compañero se corta la mano en el módulo. Ordena lo que debe pasar, de lo primero a lo último.',
    items: ['Avisar de inmediato al Supervisor', 'Dar primeros auxilios y detener la actividad si corresponde', 'Trasladarlo al centro de la ACHS más cercano', 'La jefatura envía la DIAT dentro de 24 horas', 'Prevención registra e investiga el accidente'],
    fb: 'Primero el aviso y la atención; luego el traslado a la ACHS. La DIAT se envía dentro de 24 horas y después se investiga para que no se repita.'
  }]
};

/* j2: escena dibujada (ver juegos.js) */
CONTENIDO.juegos['ds44.j2'] = {
  intro: 'Esta es una embarcación de apoyo trabajando junto a un módulo. Toca en la imagen cada peligro que encuentres. Hay 6.',
  partes: [{ tipo: 'hotspot', escena: 'cubierta' }]
};

CONTENIDO.juegos['ds44.j3'] = {
  intro: 'Une cada peligro de tu trabajo con el daño que puede producir en tu salud.',
  partes: [{
    tipo: 'emparejar',
    pares: [
      { a: 'Viento, agua fría y humedad durante la navegación', b: 'Hipotermia y entumecimiento' },
      { a: 'Ruido del motor y del compresor', b: 'Pérdida de audición (hipoacusia)' },
      { a: 'Sol directo en el mar, aun nublado', b: 'Quemaduras y cáncer de piel' },
      { a: 'Humos de soldadura', b: 'Daño respiratorio' },
      { a: 'Desinfectantes y cloro', b: 'Quemadura química en piel y ojos' },
      { a: 'Levantar flotadores, cabos y postes', b: 'Lumbago y lesiones musculares' },
      { a: 'Turnos 14x14 lejos de la familia', b: 'Estrés y fatiga mental' }
    ]
  }]
};

CONTENIDO.juegos['ds44.j4'] = {
  intro: 'Estas medidas salen de la Matriz IPER de PyV para tu cargo. Clasifica cada una según el tipo de control. Después ordena los controles del más al menos eficaz.',
  partes: [{ tipo: 'clasificar', desdeIper: true,
    categorias: [{ id: 'eliminacion', nombre: 'Eliminación' }, { id: 'sustitucion', nombre: 'Sustitución' }, { id: 'ingenieria', nombre: 'Control de ingeniería' }, { id: 'administrativo', nombre: 'Administrativo o señalización' }, { id: 'epp', nombre: 'EPP' }],
    items: [] },
  { tipo: 'ordenar', enunciado: 'Ordena la jerarquía de controles, del más eficaz al menos eficaz.',
    items: ['Eliminación', 'Sustitución', 'Controles de ingeniería', 'Controles administrativos y señalización', 'Elementos de protección personal (EPP)'],
    fb: 'El EPP es la última barrera: se usa cuando el riesgo no se pudo eliminar ni controlar en su origen.' }]
};

CONTENIDO.juegos['ds44.j5'] = {
  intro: 'Situaciones reales del Plan de Reducción del Riesgo de Desastres de PyV. Elige qué hacer en cada momento.',
  partes: [{ tipo: 'escenario', casos: [
    { titulo: 'Hombre al agua', para: 'faena', pasos: [
      { p: 'Estás en el módulo y ves caer al agua a un compañero. ¿Qué haces primero?', o: [
        { t: 'Gritar "¡Hombre al agua!", no perderlo de vista, señalarlo y lanzar un aro salvavidas.', ok: true, fb: 'Correcto. La voz de alarma y el contacto visual permiten que el Patrón active el zafarrancho y marque la posición.' },
        { t: 'Lanzarte al agua para sacarlo.', fb: 'No. Nadie se lanza al agua sin chaleco y línea de vida: podrías terminar siendo una segunda víctima.' },
        { t: 'Correr a la embarcación a buscar al Patrón.', fb: 'Si te vas, nadie lo ve. Da la alarma a viva voz y mantén el contacto visual.' }] },
      { p: '¿Quién dirige la maniobra para recuperarlo?', o: [
        { t: 'El Patrón, según el zafarrancho de hombre al agua.', ok: true, fb: 'Así es. El Supervisor detiene la faena y recuenta a la cuadrilla.' },
        { t: 'El que esté más cerca.', fb: 'La maniobra la dirige el Patrón; el resto cumple su función del zafarrancho.' },
        { t: 'La empresa mandante.', fb: 'A bordo y en la maniobra manda el Patrón. A la mandante se le informa.' }] },
      { p: 'Lo recuperan consciente, pero tirita y estuvo 10 minutos en el agua. ¿Qué corresponde?', o: [
        { t: 'Abrigarlo, evaluarlo por hipotermia y no dejarlo volver a la faena si necesita evaluación médica.', ok: true, fb: 'Correcto. Si hay lesión o hipotermia se activa el plan de emergencia médica.' },
        { t: 'Darle un café y que siga trabajando.', fb: 'La hipotermia puede empeorar después del rescate. Se abriga, se evalúa y no continúa si necesita atención.' }] }
    ] },
    { titulo: 'Sismo fuerte en el fiordo', para: 'faena', pasos: [
      { p: 'Estás trabajando en un módulo y empieza un sismo. ¿Qué haces?', o: [
        { t: 'Detener la faena, afirmarme y no correr por los pasillos.', ok: true, fb: 'Correcto. Correr por pasillos que se mueven puede terminar en caída al agua.' },
        { t: 'Correr hacia la embarcación.', fb: 'Durante el movimiento te afirmas. El repliegue se hace cuando sea seguro.' }] },
      { p: 'El sismo fue tan fuerte que costaba mantenerse en pie. Terminó. ¿Qué haces?', o: [
        { t: 'Esperar el aviso oficial de tsunami por radio.', fb: 'En un sismo así no se espera: la regla de autoprotección del PRRD dice actuar de inmediato.' },
        { t: 'Replegarnos a la embarcación y salir hacia aguas profundas, lejos de las laderas.', ok: true, fb: 'Correcto. En fiordos un deslizamiento puede generar olas sin aviso, como en Aysén en 2007.' }] },
      { p: '¿Cuándo pueden volver al centro?', o: [
        { t: 'Cuando la autoridad cancele la alerta, porque pueden llegar varias olas.', ok: true, fb: 'Así es. El retorno solo se hace con la alerta cancelada.' },
        { t: 'Apenas pase la primera ola.', fb: 'Después de la primera ola pueden venir otras, incluso más grandes.' }] }
    ] },
    { titulo: 'Fuego durante la soldadura', para: 'faena', pasos: [
      { p: 'Saltan chispas sobre una red y empieza un fuego pequeño junto al soldador. ¿Qué pasa primero?', o: [
        { t: 'Aviso inmediato; el soldador corta el equipo y el vigía usa el extintor dispuesto en el puesto.', ok: true, fb: 'Correcto. Por eso el PTC exige vigía y extintor PQS a menos de 5 metros.' },
        { t: 'Tirarle agua con un balde.', fb: 'Con un equipo eléctrico encendido el agua es peligrosa. Primero se corta el equipo y se usa el extintor.' }] },
      { p: 'El fuego se apagó. ¿Qué se hace?', o: [
        { t: 'Enfriar la zona y vigilarla al menos 30 minutos.', ok: true, fb: 'Correcto. Redes, cabos y plásticos pueden volver a encenderse.' },
        { t: 'Seguir soldando de inmediato.', fb: 'Primero se enfría y se vigila al menos 30 minutos, y se revisa el control de trabajo en caliente.' }] },
      { p: 'Si el fuego no se hubiera podido controlar, ¿qué correspondía?', o: [
        { t: 'Replegarse a la embarcación, alejarse del módulo y avisar a la mandante para activar su plan.', ok: true, fb: 'Correcto.' },
        { t: 'Seguir intentando con todos los extintores del centro.', fb: 'Si no se controla al inicio, la prioridad son las personas: repliegue y aviso.' }] }
    ] },
    { titulo: 'Se viene el temporal', para: 'faena', pasos: [
      { p: 'Durante la faena aumenta el viento y la marejada mueve fuerte los módulos. ¿Quién puede suspender el trabajo?', o: [
        { t: 'El Supervisor, que tiene autoridad para suspender ante una condición peligrosa.', ok: true, fb: 'Correcto. Si la mandante lo pide, se respalda con fotos o video.' },
        { t: 'Solo la empresa mandante.', fb: 'El Supervisor de PyV tiene autoridad para suspender. Además cualquier trabajador puede detenerse ante riesgo grave e inminente.' }] },
      { p: '¿Qué se hace al suspender?', o: [
        { t: 'Detener maniobras expuestas, replegarse a la embarcación y asegurar equipos y materiales.', ok: true, fb: 'Correcto. Luego el Patrón decide dónde trasladarse o permanecer.' },
        { t: 'Terminar rápido lo que falta antes de irse.', fb: 'Apurarse con mal tiempo es como ocurren las caídas al agua.' }] }
    ] },
    { titulo: 'Accidente en un centro aislado', para: 'todos', pasos: [
      { p: 'Un compañero queda con una fractura en un centro lejos del puerto. ¿A quién se llama para apoyar la evacuación?', o: [
        { t: 'A la Autoridad Marítima (137 o canal 16) y a ACHS (1404), además de avisar al Supervisor y al Patrón.', ok: true, fb: 'Correcto. Operaciones coordina la lancha y la recepción en puerto.' },
        { t: 'Esperar a volver a puerto al final del turno.', fb: 'Una lesión grave en zona aislada requiere activar la evacuación de inmediato.' }] },
      { p: '¿Qué plazo tiene la empresa para enviar la denuncia del accidente (DIAT) a la ACHS?', o: [
        { t: '24 horas.', ok: true, fb: 'Correcto. Si la empresa no la hace, puede hacerla el trabajador, un familiar o un compañero.' },
        { t: 'Una semana.', fb: 'El plazo es de 24 horas desde que se conoce el accidente.' },
        { t: 'Solo si el trabajador queda con licencia.', fb: 'Todo accidente del trabajo se denuncia, tenga o no licencia.' }] }
    ] },
    { titulo: 'Sismo en la oficina', para: 'oficina', pasos: [
      { p: 'Estás en la oficina de Las Rosas 121 y empieza un sismo fuerte. ¿Qué haces?', o: [
        { t: 'Agacharme, cubrirme y afirmarme lejos de ventanas, estanterías y del aire acondicionado.', ok: true, fb: 'Correcto. En la oficina hay estanterías altas, una repisa y un equipo de aire en altura que pueden caer.' },
        { t: 'Correr a la calle de inmediato.', fb: 'Correr durante el movimiento expone a caídas y a objetos que caen. Primero protégete; evacúa al terminar.' }] },
      { p: 'Terminó el movimiento. ¿Qué sigue?', o: [
        { t: 'Evacuar a la zona segura exterior, hacer recuento y cortar la energía si hay daños.', ok: true, fb: 'Correcto. El encargado/a de oficina dirige la evacuación y el recuento.' },
        { t: 'Volver a ordenar los archivadores caídos.', fb: 'Primero las personas: evacuar y contar a todos. Lo material después.' }] },
      { p: 'El sismo fue tan fuerte que costaba mantenerse en pie. ¿Qué indica el PRRD?', o: [
        { t: 'Aplicar el plan de tsunami sin esperar la alerta oficial y evacuar a pie a zona alta si la oficina está en zona de inundación.', ok: true, fb: 'Correcto. Puerto Aysén figura como localidad con riesgo de tsunami.' },
        { t: 'Esperar que avise la radio.', fb: 'Un sismo que impide mantenerse en pie es en sí mismo la alerta: se actúa de inmediato.' }] }
    ] },
    { titulo: 'Incendio en la oficina', para: 'oficina', pasos: [
      { p: 'Sientes olor a quemado y ves humo saliendo del calefactor eléctrico. ¿Qué haces primero?', o: [
        { t: 'Avisar a viva voz a los presentes.', ok: true, fb: 'Correcto. Luego el encargado/a llama a Bomberos (132) e informa a Gerencia.' },
        { t: 'Abrir la ventana y seguir trabajando.', fb: 'El aire alimenta el fuego. Primero se da la alarma a viva voz.' }] },
      { p: 'El fuego es pequeño y tienes la salida detrás de ti. ¿Qué corresponde?', o: [
        { t: 'Una persona capacitada usa el extintor y se corta la energía del sector.', ok: true, fb: 'Correcto. Después se ventila y se revisa la instalación eléctrica.' },
        { t: 'Echarle agua al calefactor enchufado.', fb: 'Con equipos energizados el agua es peligrosa. Se corta la energía y se usa el extintor.' }] },
      { p: 'Si el fuego crece y no se controla, ¿qué haces?', o: [
        { t: 'Evacuar sin volver a entrar, esperar a Bomberos y hacer recuento en la zona segura.', ok: true, fb: 'Correcto.' },
        { t: 'Volver a buscar el computador y los documentos.', fb: 'Nunca se vuelve a entrar. Los documentos se recuperan; las personas no.' }] }
    ] },
    { titulo: 'Asalto en la oficina', para: 'oficina', pasos: [
      { p: 'Una persona entra a la oficina y exige dinero con amenazas. ¿Qué haces?', o: [
        { t: 'Cumplir sus instrucciones, no oponer resistencia y no dar alarmas visibles.', ok: true, fb: 'Correcto. Lo primero es tu integridad.' },
        { t: 'Enfrentarlo para defender la caja.', fb: 'Nunca se enfrenta al agresor. Lo material se recupera.' }] },
      { p: 'Se retiró. ¿Qué sigue?', o: [
        { t: 'Llamar a Carabineros (133), avisar a Gerencia y no tocar el lugar hasta que lleguen.', ok: true, fb: 'Correcto. La ACHS puede dar apoyo psicológico a los afectados.' },
        { t: 'Ordenar todo y limpiar antes de que llegue alguien.', fb: 'No se altera el lugar: puede haber evidencia para Carabineros.' }] }
    ] }
  ] }]
};

CONTENIDO.juegos['ds44.j6'] = {
  intro: 'Mira la forma y el color de cada señal y elige qué tipo de señal es.',
  partes: [{ tipo: 'clasificar', conIcono: true,
    categorias: [{ id: 'prohibicion', nombre: 'Prohibición' }, { id: 'obligacion', nombre: 'Obligación' }, { id: 'advertencia', nombre: 'Advertencia' }, { id: 'salvamento', nombre: 'Salvamento o evacuación' }, { id: 'incendio', nombre: 'Equipo contra incendio' }],
    items: [
      { senal: 'prohibicion', icono: 'cigarro', t: 'Prohibido fumar', c: 'prohibicion', fb: 'Círculo rojo con franja diagonal: prohíbe una acción. Clave cerca del combustible y del GLP.' },
      { senal: 'obligacion', icono: 'chaleco', t: 'Uso obligatorio de chaleco salvavidas', c: 'obligacion', fb: 'Círculo azul: indica algo que debes hacer.' },
      { senal: 'advertencia', icono: 'rayo', t: 'Riesgo eléctrico', c: 'advertencia', fb: 'Triángulo amarillo con borde negro: advierte un peligro.' },
      { senal: 'salvamento', icono: 'cruz', t: 'Primeros auxilios', c: 'salvamento', fb: 'Rectángulo verde: salvamento, primeros auxilios o vía de evacuación.' },
      { senal: 'incendio', icono: 'extintor', t: 'Extintor', c: 'incendio', fb: 'Cuadrado rojo: ubicación de un equipo contra incendio.' },
      { senal: 'advertencia', icono: 'mano', t: 'Riesgo de atrapamiento de manos', c: 'advertencia', fb: 'Triángulo amarillo: peligro. Típico en winches, brazo hidráulico y bases de postes.' },
      { senal: 'obligacion', icono: 'casco', t: 'Uso obligatorio de casco', c: 'obligacion', fb: 'Círculo azul: obligación.' },
      { senal: 'salvamento', icono: 'salida', t: 'Salida de emergencia', c: 'salvamento', fb: 'Verde: indica por dónde evacuar.' },
      { senal: 'prohibicion', icono: 'persona', t: 'Prohibido el paso', c: 'prohibicion', fb: 'Círculo rojo con franja: prohíbe. Por ejemplo, el paso bajo carga suspendida.' },
      { senal: 'advertencia', icono: 'llama', t: 'Material inflamable', c: 'advertencia', fb: 'Triángulo amarillo: advierte el peligro de incendio.' }
    ] }]
};

CONTENIDO.juegos['ds44.j7'] = {
  intro: 'Une cada fuego que puede ocurrir en PyV con su clase y el extintor adecuado. Después ordena los pasos para usar un extintor.',
  partes: [{ tipo: 'emparejar',
    pares: [
      { a: 'Redes, cabos o casco de madera (Yessica I)', b: 'Clase A · PQS (polvo químico seco) ABC' },
      { a: 'Petróleo en la sala de máquinas', b: 'Clase B · PQS o CO2' },
      { a: 'Tablero eléctrico o generador energizado', b: 'Clase C · CO2 o PQS, nunca agua' },
      { a: 'Aceite de la cocina a bordo', b: 'Clase K · extintor de cocina' }
    ] },
  { tipo: 'ordenar', enunciado: 'Ordena los pasos para usar un extintor portátil.',
    items: ['Retirar el seguro (pasador)', 'Apuntar la boquilla a la base del fuego', 'Presionar la manilla', 'Barrer de lado a lado sobre la base de las llamas'],
    fb: 'Siempre con el viento a tu espalda y una salida asegurada detrás de ti.' }]
};

CONTENIDO.juegos['ds44.pyv_j'] = {
  intro: 'Antes de zarpar se completa el checklist de inicio de turno (Anexo G del PRRD). Marca solo lo que se debe verificar.',
  partes: [{ tipo: 'checklist',
    items: [
      { t: 'VHF operativo (prueba de radio)', ok: true },
      { t: 'Chalecos salvavidas suficientes y en buen estado', ok: true },
      { t: 'Balsa salvavidas con certificación vigente', ok: true },
      { t: 'Extintores cargados, vigentes y accesibles', ok: true },
      { t: 'Pronóstico, avisos de mal tiempo y estado de puerto revisados', ok: true },
      { t: 'GLP: cilindro sujeto y sin fugas', ok: true },
      { t: 'Combustible para la operación y un retorno de emergencia', ok: true },
      { t: 'Nómina de la dotación informada a Operaciones', ok: true },
      { t: 'Que todos tengan saldo en el celular personal', ok: false, fb: 'Las comunicaciones de emergencia son VHF, celular de la embarcación y Starlink.' },
      { t: 'Que la cubierta esté recién pintada', ok: false, fb: 'No es parte del checklist. Lo que importa en cubierta es orden y superficies antideslizantes.' },
      { t: 'Que el Patrón tenga su licencia en la billetera', ok: false, fb: 'La licencia vigente se controla, pero no es un ítem del checklist de zarpe.' }
    ] }]
};

CONTENIDO.juegos['ds44.pyv_j_oficina'] = {
  intro: 'El PRRD de PyV revisó la oficina de Las Rosas 121. Marca lo que la oficina debe tener o cumplir para una emergencia.',
  partes: [{ tipo: 'checklist',
    msgFalta: 'Esto sí debe tener o cumplir la oficina.', cierre: 'Varias de estas medidas están en el programa del PRRD para la oficina. Si ves que falta algo, avísale a Prevención de Riesgos.',
    items: [
      { t: 'Extintor vigente, señalizado y accesible', ok: true },
      { t: 'Botiquín de primeros auxilios completo', ok: true },
      { t: 'Iluminación de emergencia', ok: true },
      { t: 'Números de emergencia visibles', ok: true },
      { t: 'Zona de seguridad exterior definida y conocida', ok: true },
      { t: 'Estanterías, repisa y aire acondicionado asegurados para que no caigan en un sismo', ok: true },
      { t: 'Salida despejada durante toda la jornada', ok: true },
      { t: 'Puerta de salida con llave durante la jornada para mayor seguridad', ok: false, fb: 'La salida debe poder abrirse siempre desde adentro para evacuar.' },
      { t: 'Extintor guardado en una bodega cerrada para que no se pierda', ok: false, fb: 'El extintor debe estar a la vista y accesible.' },
      { t: 'Varios alargadores en cadena para conectar todos los equipos', ok: false, fb: 'Las conexiones improvisadas están prohibidas en la IPER de la oficina: riesgo eléctrico y de incendio.' }
    ] }]
};

/* ---------------- Evaluación A bordo con PyV ---------------- */
/* comunes: para todos. porCargo: se agregan según el cargo. Se toman todas las del cargo + comunes hasta 7. */
CONTENIDO.quizPyv = {
  comunes: [
    { area: 'faena', p: 'Según la guía del ISP actualizada en 2026, ¿desde qué temperatura al aire libre se considera exposición a frío?', op: ['0 °C o menos', '10 °C o menos, considerando también viento y lluvia', 'Solo bajo -10 °C', 'Solo cuando nieva'], ok: 2, fbOk: 'Correcto. El viento y la lluvia aumentan la pérdida de calor.', fbNo: 'Aplica a trabajos a la intemperie con 10 °C o menos, considerando además viento y lluvia.' },
    { area: 'faena', p: 'Un compañero tirita fuerte, está torpe y confundido después de horas en cubierta mojado. ¿Qué haces?', op: ['Le das un trago de alcohol para que entre en calor', 'Avisas, lo llevas a un lugar abrigado, le cambias la ropa mojada y le das bebida tibia', 'Le frotas fuerte las manos', 'Esperas que termine la tarea'], ok: 2, fbOk: 'Correcto: son signos de hipotermia, una emergencia.', fbNo: 'Son signos de hipotermia: avisar, abrigar, cambiar la ropa mojada, bebida tibia sin alcohol y traslado a la ACHS.' },
    { area: 'faena', p: '¿Cuál es la señal de abandono de la embarcación según el zafarrancho revisado en el PRRD?', op: ['Tres pitazos cortos', 'Seis pitazos largos y seguidos', 'Una sirena continua', 'Luces intermitentes'], ok: 2, fbOk: 'Correcto: seis pitazos largos y seguidos, chaleco puesto y al punto de reunión.', fbNo: 'La señal es de seis pitazos largos y seguidos. Solo el Patrón ordena el abandono.' },
    { area: 'faena', p: 'Hay una alarma general en el centro de cultivo de la mandante. ¿Qué hace la cuadrilla de PyV?', op: ['Sigue trabajando hasta recibir instrucciones', 'Detiene la actividad y se repliega a su embarcación para el recuento', 'Se dirige al pontón del centro', 'Llama a la ACHS'], ok: 2, fbOk: 'Correcto. El Supervisor recuenta y se comunica por radio o teléfono con el centro.', fbNo: 'PyV detiene la actividad y se repliega a su embarcación; ahí el Supervisor hace el recuento.' },
    { area: 'faena', p: '¿Cuál es el teléfono de emergencias marítimas de la Armada?', op: ['131', '133', '137', '1404'], ok: 3, fbOk: 'Correcto. También el canal 16 de VHF.', fbNo: 'Emergencias marítimas: 137 o canal 16 de VHF. ACHS es el 1404.' },
    { area: 'faena', p: 'Según el procedimiento de EPP de PyV, ¿qué haces si tu chaleco salvavidas tiene una costura rota?', op: ['Lo sigo usando hasta fin de turno', 'Lo reparo yo mismo', 'Aviso de inmediato y pido reposición', 'Lo cambio con el de un compañero'], ok: 3, fbOk: 'Correcto. Un chaleco dañado se retira de uso y la empresa lo repone sin costo.', fbNo: 'No se usa ni se modifica: avisa de inmediato y pide reposición sin costo.' },
    { p: 'Te caes y te lesionas en el trayecto directo de tu casa al trabajo. ¿Qué es?', op: ['Un accidente común, sin cobertura', 'Un accidente de trayecto, cubierto por la Ley 16.744', 'Un problema personal', 'Solo cubierto si vas en vehículo de la empresa'], ok: 2, fbOk: 'Correcto. Avisa a la empresa y acude a la ACHS.', fbNo: 'Es un accidente de trayecto y tiene la cobertura de la Ley 16.744. Acude a la ACHS.' },
    { area: 'oficina', p: 'Empieza un sismo fuerte en la oficina. ¿Qué haces?', op: ['Salgo corriendo a la calle', 'Me agacho, me cubro y me afirmo lejos de ventanas, estanterías y del aire acondicionado', 'Me paro bajo el marco de la ventana', 'Sigo trabajando'], ok: 2, fbOk: 'Correcto. Al terminar el movimiento se evacúa a la zona segura exterior.', fbNo: 'Durante el sismo: agacharse, cubrirse y afirmarse lejos de lo que puede caer. Al terminar, evacuar.' },
    { area: 'oficina', p: 'Aparece humo en un enchufe de la oficina y el fuego es pequeño. ¿Cuándo usas el extintor?', op: ['Siempre, aunque el fuego sea grande', 'Solo si el fuego es incipiente y tienes la salida asegurada a tu espalda', 'Nunca, solo se llama a Bomberos', 'Después de abrir todas las ventanas'], ok: 2, fbOk: 'Correcto. Si no se controla, se evacúa sin volver a entrar y se llama a Bomberos (132).', fbNo: 'Solo con fuego incipiente y salida asegurada. Si crece, se evacúa y se llama a Bomberos (132).' },
    { p: '¿Quién es el Delegado de Seguridad y Salud en el Trabajo de PyV?', op: ['El Patrón de cada embarcación', 'Gustavo Barriga Zúñiga', 'El supervisor de la mandante', 'No hay delegado'], ok: 2, fbOk: 'Correcto. Representa a los trabajadores y participa en el comité de emergencias y en las investigaciones.', fbNo: 'El Delegado de SST es Gustavo Barriga Zúñiga, elegido por los trabajadores.' }
  ],
  porCargo: {
    patron: [
      { p: 'Durante la navegación y una emergencia a bordo, ¿quién es la máxima autoridad operacional?', op: ['El Supervisor de faena', 'El Patrón', 'La empresa mandante', 'El Jefe de Operaciones desde tierra'], ok: 2, fbOk: 'Correcto. El Patrón dirige las maniobras según el zafarrancho.', fbNo: 'Es el Patrón: dirige las maniobras según el zafarrancho vigente.' },
      { p: 'Según PTS-017, ¿con qué condiciones no se iza con el brazo hidráulico?', op: ['Con vientos fuertes, marejada o visibilidad reducida', 'Solo de noche', 'Solo si llueve', 'Siempre se puede si la carga es liviana'], ok: 1, fbOk: 'Correcto.', fbNo: 'No se iza con vientos fuertes, marejada o visibilidad reducida.' },
      { p: 'Navegando recibes alerta oficial de tsunami. ¿Qué indica el PRRD?', op: ['Entrar al puerto más cercano', 'Alejarse de la costa hacia aguas profundas y no entrar a puertos ni bahías', 'Fondear junto a la costa', 'Apagar motores y esperar'], ok: 2, fbOk: 'Correcto. Referencia SHOA: más de 150 m de profundidad.', fbNo: 'Se navega hacia aguas profundas (más de 150 m) y no se entra a puertos ni bahías.' }
    ],
    motorista: [
      { p: 'Hay incendio a bordo. Según el PRRD, ¿qué función típica cumple el motorista en el zafarrancho?', op: ['Lanzar la balsa', 'Cerrar combustible y GLP y cortar la energía eléctrica', 'Llamar a la mandante', 'Preparar la comida de emergencia'], ok: 2, fbOk: 'Correcto. Sin combustible ni energía, el fuego pierde alimentación.', fbNo: 'El motorista cierra combustible y GLP y corta la energía según el zafarrancho.' },
      { p: 'Detectas aumento de agua en la sentina y la bomba no da abasto. ¿Qué haces primero?', op: ['Informar inmediatamente al Patrón', 'Seguir achicando sin avisar', 'Esperar a llegar a puerto', 'Avisar al final del turno'], ok: 1, fbOk: 'Correcto. El Patrón dirige la respuesta ante vía de agua.', fbNo: 'Cualquier ingreso anormal de agua se informa de inmediato al Patrón.' },
      { p: 'Según PTS-017, ¿dónde nunca debes ubicarte durante una maniobra de izaje o de winche?', op: ['En la cabina', 'Bajo la carga suspendida o en la línea de tiro del cable', 'En la popa', 'Junto al Patrón'], ok: 2, fbOk: 'Correcto.', fbNo: 'Prohibido bajo carga suspendida y en la línea de tiro (efecto látigo).' }
    ],
    tripulante: [
      { p: 'Durante una maniobra con el brazo hidráulico, ¿dónde está prohibido ubicarse?', op: ['En la cabina', 'Bajo la carga suspendida o en la línea de tiro del cable', 'A más de 5 metros', 'En el muelle'], ok: 2, fbOk: 'Correcto.', fbNo: 'Nunca bajo carga suspendida ni en la línea de tiro de un cable en tensión.' },
      { p: 'Ves caer a alguien al agua. Después de dar la alarma, ¿qué es lo más importante?', op: ['No perderlo de vista y señalar su posición', 'Ir a buscar el botiquín', 'Llamar a la casa del trabajador', 'Seguir con la maniobra'], ok: 1, fbOk: 'Correcto. Y lanzar el aro salvavidas.', fbNo: 'Mantener el contacto visual y señalar la posición es clave para recuperarlo.' }
    ],
    supervisor: [
      { p: 'Al llegar a un centro en apertura sin personal de la mandante, ¿qué debe informar el Supervisor?', op: ['Nada, porque no hay nadie', 'Número de personas, embarcación y canal de contacto', 'Solo la hora de llegada', 'El listado de materiales'], ok: 2, fbOk: 'Correcto. Así la mandante sabe a quién buscar ante una emergencia.', fbNo: 'Siempre se informa a la mandante el número de personas, la embarcación y el canal de contacto.' },
      { p: 'Ocurre un accidente grave en la faena. ¿Qué debe pasar de inmediato?', op: ['Seguir trabajando y avisar al final del día', 'Suspender la faena en el área y notificar de inmediato', 'Solo llenar la DIAT', 'Esperar instrucciones de la mandante'], ok: 2, fbOk: 'Correcto. La faena no se reanuda hasta que se autorice.', fbNo: 'Se suspende la faena en el área afectada y se notifica de inmediato según el procedimiento de accidentes.' },
      { p: 'Según PTS-021, ¿cuántos trabajadores se necesitan como mínimo para levantar a mano un arco pajarero?', op: ['2', '3', '4', '6'], ok: 3, fbOk: 'Correcto. Con menos está prohibido.', fbNo: 'Mínimo 4. Con menos se suspende y se pide apoyo.' }
    ],
    soldador: [
      { p: '¿A qué distancia máxima debe estar el extintor PQS de 6 kg del punto de soldadura?', op: ['5 metros', '10 metros', '20 metros', 'Basta con que esté en la embarcación'], ok: 1, fbOk: 'Correcto.', fbNo: 'A menos de 5 metros del punto de trabajo.' },
      { p: '¿En qué radio se retiran o cubren los materiales inflamables antes de soldar?', op: ['1 metro', '3 metros', '10 metros', 'No es necesario'], ok: 3, fbOk: 'Correcto: redes, cabos, flotadores y combustibles.', fbNo: 'En un radio mínimo de 10 metros.' },
      { p: '¿Qué documento autoriza cada trabajo de corte y soldadura?', op: ['La guía de despacho', 'El Permiso de Trabajo en Caliente (PTC)', 'La licencia de conducir', 'Ninguno'], ok: 2, fbOk: 'Correcto.', fbNo: 'Todo trabajo en caliente requiere Permiso de Trabajo en Caliente.' }
    ],
    operario: [
      { p: 'Según PTS-021, ¿cuántos trabajadores se necesitan como mínimo para levantar a mano un arco pajarero?', op: ['2', '3', '4', '6'], ok: 3, fbOk: 'Correcto. Con menos está prohibido.', fbNo: 'Mínimo 4. Con menos no se hace y se pide apoyo.' },
      { p: 'Un arco pajarero empieza a perder estabilidad mientras lo levantan. ¿Qué haces?', op: ['Lo sujeto con el cuerpo', 'Me alejo de la línea de fuego y aviso; no se detiene con el cuerpo', 'Lo empujo hacia el agua', 'Me subo a la baranda para afirmarlo'], ok: 2, fbOk: 'Correcto.', fbNo: 'El procedimiento prohíbe detener con el cuerpo un arco que pierde estabilidad.' },
      { p: 'Durante una maniobra con el brazo hidráulico, ¿dónde está prohibido ubicarse?', op: ['Bajo la carga suspendida', 'En la cabina', 'En el muelle', 'A 10 metros'], ok: 1, fbOk: 'Correcto.', fbNo: 'Nunca bajo la carga suspendida.' }
    ],
    operario_agua: [
      { p: 'Según PTS-007, ¿cuánto tiempo máximo puedes trabajar dentro del agua?', op: ['4 horas seguidas', '2 horas en la mañana y 2 en la tarde', 'Todo el turno si usas traje', '1 hora en total'], ok: 2, fbOk: 'Correcto, con pausas para recuperar la temperatura.', fbNo: 'Máximo 2 horas en la jornada de mañana y 2 en la de tarde.' },
      { p: 'Debes cambiar de posición bajo el pasillo. ¿Cómo usas los dos cabos de vida?', op: ['Suelto los dos y me muevo rápido', 'Anclo el segundo antes de soltar el primero', 'Uso solo uno', 'Le pido a otro que me sujete'], ok: 2, fbOk: 'Correcto: siempre anclado.', fbNo: 'Siempre anclas el segundo cabo antes de soltar el primero.' },
      { p: '¿Qué indica el procedimiento sobre sumergirse?', op: ['Puedes sumergirte si aguantas la respiración', 'Nunca te sumerges por completo: la cabeza siempre sobre el agua', 'Solo con antiparras', 'Hasta 1 metro'], ok: 2, fbOk: 'Correcto. El trabajo bajo el agua es de buzos.', fbNo: 'Nunca sumergirse por completo: la cabeza siempre sobre el agua.' }
    ],
    buzo: [
      { p: 'Sientes un olor o sabor extraño en el aire durante la inmersión. ¿Qué haces?', op: ['Termino el sector y salgo', 'Aviso y salgo de inmediato: es criterio de STOP WORK', 'Respiro más lento', 'Cambio de regulador bajo el agua'], ok: 2, fbOk: 'Correcto. El Supervisor de Buceo ordena la salida.', fbNo: 'Olor o sabor extraño en el aire es STOP WORK: se sale de inmediato.' },
      { p: '¿Qué señal debe estar izada antes de cualquier inmersión?', op: ['Bandera Alfa', 'Bandera chilena', 'Luz verde', 'Ninguna'], ok: 1, fbOk: 'Correcto. Sin bandera Alfa no hay inmersión.', fbNo: 'La bandera Alfa. Su ausencia es criterio de detención.' },
      { p: '¿Quién autoriza tu ingreso al agua?', op: ['El Patrón', 'El Supervisor de Buceo', 'La mandante', 'Tú mismo'], ok: 2, fbOk: 'Correcto.', fbNo: 'El Supervisor de Buceo, después del chequeo y la prueba funcional del aire.' }
    ],
    gerente_general: [
      { p: '¿Cada cuánto debe sesionar como mínimo el Comité de Gestión del Riesgo de Desastres que presides?', op: ['Una vez al año', 'Cada tres meses, y además después de una emergencia o simulacro relevante', 'Solo cuando hay una emergencia', 'Todos los días'], ok: 2, fbOk: 'Correcto. Y el PRRD se revisa y aprueba al menos una vez al año.', fbNo: 'Al menos trimestralmente y en forma extraordinaria después de una emergencia, simulacro relevante o cambio de operación.' },
      { p: 'Ocurre un accidente grave en una faena. ¿Qué corresponde de inmediato?', op: ['Esperar el informe del supervisor al final del turno', 'Suspender la faena en el área afectada y notificar de inmediato', 'Solo enviar la DIAT a la semana', 'Cambiar al trabajador de cargo'], ok: 2, fbOk: 'Correcto. La faena no se reanuda hasta que se autorice.', fbNo: 'Se suspende la faena en el área y se notifica de inmediato, según el procedimiento de accidentes.' },
      { p: 'Durante una emergencia a bordo, ¿quién dirige las maniobras?', op: ['La Gerencia General por teléfono', 'El Patrón, según el zafarrancho', 'La mandante', 'El que tenga más experiencia'], ok: 2, fbOk: 'Correcto. La Gerencia dispone recursos y coordina con la mandante, sin interferir con las atribuciones del Patrón.', fbNo: 'A bordo dirige el Patrón. La Gerencia dispone recursos y coordina con la mandante.' }
    ],
    jefe_operaciones: [
      { p: 'Una embarcación no reporta en el horario acordado. ¿Qué indica el PRRD?', op: ['Esperar al día siguiente', 'Intentar contacto por todos los medios y la mandante; sin respuesta, avisar a la Autoridad Marítima con la última posición', 'Enviar otra embarcación sin avisar a nadie', 'Llamar a la familia del Patrón'], ok: 2, fbOk: 'Correcto. VHF, celular, Starlink y la mandante; luego Autoridad Marítima con la posición POSAT o GPS.', fbNo: 'Se intenta contacto por todos los medios y, sin respuesta tras un plazo razonable, se avisa a la Autoridad Marítima con la última posición.' },
      { p: 'Una embarcación tiene una falla mayor de propulsión que no se puede reparar a bordo. ¿Qué gestionas?', op: ['Que la tripulación lo arregle como pueda', 'Mecánico o remolque a un lugar seguro', 'Que sigan navegando con la falla', 'Nada hasta volver a puerto'], ok: 2, fbOk: 'Correcto. Si hay riesgo inmediato, el Patrón fondea si es posible y pide auxilio.', fbNo: 'Operaciones gestiona mecánico o remolque. Ante riesgo inmediato se fondea y se pide auxilio.' },
      { p: 'Después de un sismo fuerte, ¿cuál es tu tarea principal según el PRRD?', op: ['Consolidar el estado y la posición de todas las dotaciones', 'Revisar las facturas pendientes', 'Ordenar que todos sigan trabajando', 'Esperar instrucciones de la prensa'], ok: 1, fbOk: 'Correcto. Patrones y supervisores informan el estado de su personal a Operaciones.', fbNo: 'Operaciones consolida el estado de todas las dotaciones y mantiene el contacto con las embarcaciones.' }
    ],
    prevencion: [
      { p: '¿Qué plazo tiene la DIAT de un accidente del trabajo?', op: ['24 horas desde que se conoce el accidente', '5 días hábiles', '30 días', 'Solo si hay licencia médica'], ok: 1, fbOk: 'Correcto.', fbNo: 'La DIAT se envía al organismo administrador dentro de 24 horas.' },
      { p: 'Según PTS-018, ¿por cuánto tiempo se conserva el informe de investigación de un accidente?', op: ['1 año', '2 años', 'Mínimo 5 años', 'Hasta cerrar las medidas'], ok: 3, fbOk: 'Correcto, a disposición de las autoridades fiscalizadoras.', fbNo: 'Mínimo 5 años, a disposición de la Dirección del Trabajo, SEREMI y otras autoridades.' },
      { p: 'En un simulacro de hombre al agua según el Anexo H del PRRD, ¿qué se lanza al agua?', op: ['Un trabajador con chaleco', 'Un maniquí o boya lastrada, nunca una persona', 'Nada, se hace solo de palabra', 'Un aro salvavidas vacío'], ok: 2, fbOk: 'Correcto.', fbNo: 'Un objeto flotante lastrado (maniquí o boya). Ningún trabajador entra al agua como víctima simulada.' }
    ],
    jefe_finanzas: [
      { p: 'Durante un asalto en la oficina, ¿qué corresponde?', op: ['Enfrentar al agresor', 'Cumplir sus instrucciones, no oponer resistencia y, cuando se retire, llamar a Carabineros (133)', 'Activar una alarma a la vista', 'Perseguirlo para ver la patente'], ok: 2, fbOk: 'Correcto. Después no se toca el lugar hasta que llegue Carabineros.', fbNo: 'No se enfrenta ni se da alarma visible. Cuando se retire: Carabineros (133) y no alterar el lugar.' },
      { p: 'Sientes una carga de trabajo excesiva por plazos simultáneos. ¿Qué dice la Matriz IPER sobre este riesgo?', op: ['No es un riesgo laboral', 'Es un riesgo psicosocial que se evalúa con el cuestionario CEAL-SM y tiene medidas de control', 'Se soluciona solo con vacaciones', 'Solo aplica a quienes trabajan en el mar'], ok: 2, fbOk: 'Correcto. Coméntalo con tu jefatura o con prevención.', fbNo: 'La carga de trabajo es un riesgo psicosocial evaluado con CEAL-SM, con medidas de control.' }
    ],
    asistente_admin: [
      { p: 'Se corta la luz en la oficina y no hay calefacción. ¿Qué indica el PRRD?', op: ['Seguir trabajando con frío', 'Desconectar los equipos; si la falta de luz o calefacción impide trabajar seguro, suspender la jornada presencial', 'Encender una estufa a gas dentro de la oficina', 'Esperar sin avisar a nadie'], ok: 2, fbOk: 'Correcto. Se informa a Gerencia si el corte se prolonga.', fbNo: 'Se desconectan equipos y, si no se puede trabajar seguro, se suspende y se retira al personal.' },
      { p: 'Ves un alargador con varios enchufes conectados y el cable caliente. ¿Qué haces?', op: ['Nada, es normal', 'Desconectarlo y avisar: la IPER prohíbe las conexiones improvisadas', 'Taparlo con papeles', 'Agregarle otro alargador'], ok: 2, fbOk: 'Correcto. Es riesgo de contacto eléctrico e incendio.', fbNo: 'Las conexiones improvisadas están prohibidas en la IPER de la oficina: se desconecta y se avisa.' }
    ],
    auxiliar_aseo: [
      { p: '¿Por qué nunca se mezcla cloro con otros productos de limpieza, como amoníaco o ácidos?', op: ['Porque pierde el olor', 'Porque libera gases tóxicos que dañan las vías respiratorias', 'Porque mancha el piso', 'Se puede mezclar sin problema'], ok: 2, fbOk: 'Correcto. Usa cada producto solo, según su etiqueta y hoja de seguridad.', fbNo: 'La mezcla libera gases tóxicos. Cada producto se usa solo, según su etiqueta.' },
      { p: 'Estás trapeando el pasillo de la oficina. ¿Qué haces mientras el piso está mojado?', op: ['Nada', 'Señalizar el piso mojado para evitar caídas', 'Cerrar la oficina con llave', 'Secar con estufa'], ok: 2, fbOk: 'Correcto. Las caídas al mismo nivel son un riesgo evaluado en la oficina.', fbNo: 'Se señaliza el piso mojado: las caídas al mismo nivel están evaluadas en la IPER de la oficina.' }
    ],
    buzo_supervisor: [
      { p: '¿Puede el Supervisor de Buceo bucear mientras supervisa la operación?', op: ['Sí, si falta personal', 'No, es la autoridad de seguridad y no ejecuta buceo mientras supervisa', 'Solo en profundidades menores a 3 m', 'Sí, con autorización de la mandante'], ok: 2, fbOk: 'Correcto.', fbNo: 'No: el Supervisor de Buceo controla la operación desde superficie.' },
      { p: '¿Cuál de estas situaciones es criterio de STOP WORK según PTS-006?', op: ['El buzo informa mareo o fatiga marcada', 'Cambio de turno de la mandante', 'Faltan 10 minutos para el almuerzo', 'Llovizna leve'], ok: 1, fbOk: 'Correcto. Síntomas del buzo implican salida y evaluación.', fbNo: 'Los síntomas del buzo (mareo, disnea, dolor, fatiga marcada, hipotermia) son STOP WORK.' },
      { p: 'Antes de autorizar la inmersión, ¿qué se hace con el sistema de aire?', op: ['Nada si funcionó ayer', 'Chequeo completo y prueba funcional con el buzo respirando en superficie', 'Solo se mira el manómetro', 'Se prueba bajo el agua'], ok: 2, fbOk: 'Correcto.', fbNo: 'Se hace el chequeo y la prueba funcional con el buzo respirando en superficie.' }
    ]
  }
};

/* ---------------- Encuesta de satisfacción ---------------- */
CONTENIDO.encuesta = [
  { id: 'claridad', p: 'Los contenidos fueron claros', tipo: 'escala' },
  { id: 'utilidad', p: 'Lo aprendido me sirve en mi trabajo diario', tipo: 'escala' },
  { id: 'pyv', p: 'Los ejemplos de PyV reflejan mi trabajo real', tipo: 'escala' },
  { id: 'plataforma', p: 'La plataforma fue fácil de usar en mi celular', tipo: 'escala' },
  { id: 'facilitadora', p: 'Las sesiones con la facilitadora me ayudaron', tipo: 'escala' },
  { id: 'comentario', p: '¿Qué mejorarías o qué tema te gustaría reforzar?', tipo: 'texto' }
];
