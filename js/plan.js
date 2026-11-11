/* js/plan.js */
/* GL Capacita — catálogo de cursos (compartido entre la app y el servidor).
   Si cambias algo aquí, pega el mismo contenido en Plan.gs del Apps Script. */
var PLAN = {
  version: '2026.11-gl2',
  notaAprobacion: 0.7,

  /* area: faena (pilotos en centros de cultivo y embarcaciones), taller (taller de mantención ROV) o mixto (gerencia: oficina, taller y visitas a faena) */
  cargos: [
    { id: 'piloto', nombre: 'Piloto ROV', area: 'faena' },
    { id: 'encargado_taller', nombre: 'Encargado de taller', area: 'taller' },
    { id: 'asistente_taller', nombre: 'Asistente de taller', area: 'taller' },
    { id: 'alumno', nombre: 'Estudiante en práctica (taller)', area: 'taller' },
    { id: 'gerente_general', nombre: 'Gerente General', area: 'mixto' },
    { id: 'jefa_operaciones', nombre: 'Jefa de Operaciones', area: 'mixto' }
  ],

  /* Cursos. doc: 'certificado' o 'constancia'. vigenciaMeses: 0 = sin vencimiento. plazoMeses: 0 = sin plazo.
     Etapas: manual | scorm | juego | quiz | pyv | taller | leccion | firma | encuesta | sesiones.
     minMin = minutos mínimos de permanencia real para dar la etapa por completada. */
  cursos: [
    { id: 'ds44', titulo: 'Curso obligatorio de prevención de riesgos', sub: 'Art. 16 D.S. 44 · 8 horas · Res. Ex. 1117/2026', obligatorio: true,
      horas: 8, duracionMin: 480, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 3,
      cargos: ['piloto', 'encargado_taller', 'asistente_taller', 'gerente_general', 'jefa_operaciones'],
      contenidos: 'Derechos y obligaciones (Ley 16.744 y D.S. 44) · Identificación de peligros y MIPER · Efectos en la salud · Medidas de control · Emergencias y desastres · Señalización · Incendios y extintores · Riesgos del cargo en GL · Talleres prácticos',
      modulos: [
        { n: 0, titulo: 'Inicio' }, { n: 1, titulo: 'Módulo 1 · Derechos y obligaciones' }, { n: 2, titulo: 'Módulo 2 · Identificación de peligros' },
        { n: 3, titulo: 'Módulo 3 · Efectos en la salud' }, { n: 4, titulo: 'Módulo 4 · Medidas de control' }, { n: 5, titulo: 'Módulo 5 · Emergencias y desastres' },
        { n: 6, titulo: 'Módulo 6 · Señalización' }, { n: 7, titulo: 'Módulo 7 · Incendios y extintores' }, { n: 8, titulo: 'Tu trabajo en GL' }, { n: 9, titulo: 'Cierre del curso' }],
      etapas: [
        { id: 'manual', tipo: 'manual', titulo: 'Manual del participante', modulo: 0 },
        { id: 'm0', tipo: 'scorm', titulo: 'Bienvenida al curso', modulo: 0, carpeta: 'm0', minMin: 5 },
        { id: 'm1', tipo: 'scorm', titulo: 'Derechos, obligaciones y Ley 16.744', modulo: 1, carpeta: 'm1', minMin: 28 },
        { id: 'j1', tipo: 'juego', titulo: '¿Derecho u obligación?', modulo: 1 },
        { id: 't1', tipo: 'taller', titulo: 'Taller: el caso de Matías', modulo: 1, minMin: 20 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación módulo 1', modulo: 1, banco: 'm1' },
        { id: 'm2', tipo: 'scorm', titulo: 'Peligros y evaluación de riesgos', modulo: 2, carpeta: 'm2', minMin: 16 },
        { id: 'j2', tipo: 'juego', titulo: 'Encuentra el peligro en el pontón', tituloTaller: 'Encuentra el peligro en el taller', modulo: 2 },
        { id: 't2', tipo: 'taller', titulo: 'Taller: tu propia MIPER y mapa de riesgos', modulo: 2, minMin: 25 },
        { id: 'q2', tipo: 'quiz', titulo: 'Evaluación módulo 2', modulo: 2, banco: 'm2' },
        { id: 'm3', tipo: 'scorm', titulo: 'Efectos en la salud y enfermedades profesionales', modulo: 3, carpeta: 'm3', minMin: 18 },
        { id: 'j3', tipo: 'juego', titulo: 'Peligro y efecto', modulo: 3 },
        { id: 'q3', tipo: 'quiz', titulo: 'Evaluación módulo 3', modulo: 3, banco: 'm3' },
        { id: 'm4', tipo: 'scorm', titulo: 'Medidas de control', modulo: 4, carpeta: 'm4', minMin: 20 },
        { id: 'j4', tipo: 'juego', titulo: 'Ordena los controles', modulo: 4 },
        { id: 't3', tipo: 'taller', titulo: 'Taller: personas especialmente sensibles', modulo: 4, minMin: 20 },
        { id: 'q4', tipo: 'quiz', titulo: 'Evaluación módulo 4', modulo: 4, banco: 'm4' },
        { id: 'm5', tipo: 'scorm', titulo: 'Emergencias, catástrofes y desastres', modulo: 5, carpeta: 'm5', minMin: 11 },
        { id: 'j5', tipo: 'juego', titulo: '¿Qué haces? Emergencias en GL', modulo: 5 },
        { id: 'q5', tipo: 'quiz', titulo: 'Evaluación módulo 5', modulo: 5, banco: 'm5' },
        { id: 'm6', tipo: 'scorm', titulo: 'Señalización de seguridad', modulo: 6, carpeta: 'm6', minMin: 13 },
        { id: 'j6', tipo: 'juego', titulo: 'Lee la señal', modulo: 6 },
        { id: 'q6', tipo: 'quiz', titulo: 'Evaluación módulo 6', modulo: 6, banco: 'm6' },
        { id: 'm7', tipo: 'scorm', titulo: 'Prevención de incendios y extintores', modulo: 7, carpeta: 'm7', minMin: 11 },
        { id: 'j7', tipo: 'juego', titulo: 'El extintor correcto', modulo: 7 },
        { id: 't4', tipo: 'taller', titulo: 'Taller: detectives de seguridad', modulo: 7, minMin: 20 },
        { id: 'q7', tipo: 'quiz', titulo: 'Evaluación módulo 7', modulo: 7, banco: 'm7' },
        { id: 'pyv', tipo: 'pyv', titulo: 'Tu trabajo en GL: riesgos, emergencias y procedimientos', modulo: 8, minMin: 8 },
        { id: 'pyv_j', tipo: 'juego', titulo: 'Checklist antes de operar el ROV', tituloTaller: 'Revisión del taller antes de empezar', modulo: 8 },
        { id: 'pyv_q', tipo: 'quiz', titulo: 'Evaluación Tu trabajo en GL', modulo: 8, banco: 'pyv' },
        { id: 'final', tipo: 'quiz', titulo: 'Evaluación final', modulo: 9, banco: 'final' },
        { id: 'sesiones', tipo: 'sesiones', titulo: 'Sesiones con la facilitadora', modulo: 9 },
        { id: 'encuesta', tipo: 'encuesta', titulo: 'Encuesta de satisfacción', modulo: 9 }
      ] },

    { id: 'irl', titulo: 'Los riesgos de tu cargo (IRL)', sub: 'Obligación de informar los riesgos laborales · art. 15 D.S. 44', obligatorio: true,
      horas: 3, duracionMin: 180, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Características del lugar de trabajo, equipos y orden y aseo · Riesgos del cargo según la Matriz IPER v02 · Evaluación P × S · Jerarquía de controles y métodos de trabajo correctos · Procedimientos del cargo · Productos y sustancias peligrosas (HDS y SGA) · Exposición a frío y radiación UV · Emergencias y rol en el plan · EPP · Qué hacer ante un accidente · Derechos y obligaciones',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula 1: tu derecho a saber', minMin: 10 },
        { id: 'lw', tipo: 'leccion', titulo: 'Cápsula 2: tu lugar de trabajo', minMin: 15 },
        { id: 'l2', tipo: 'leccion', titulo: 'Cápsula 3: cada riesgo de tu cargo, uno por uno', minMin: 25 },
        { id: 'j1', tipo: 'juego', titulo: 'Riesgo y consecuencia' },
        { id: 't1', tipo: 'taller', titulo: 'Taller: los riesgos de mi puesto', minMin: 20 },
        { id: 'l3', tipo: 'leccion', titulo: 'Cápsula 4: cómo se controlan y cómo trabajar bien', minMin: 25 },
        { id: 'j2', tipo: 'juego', titulo: 'Ordena los controles' },
        { id: 'ls', tipo: 'leccion', titulo: 'Cápsula 5: productos y sustancias peligrosas', minMin: 10 },
        { id: 'lf', tipo: 'leccion', titulo: 'Cápsula 6: frío, lluvia y radiación UV', minMin: 10 },
        { id: 'js', tipo: 'juego', titulo: 'Pictogramas de peligro' },
        { id: 'l4', tipo: 'leccion', titulo: 'Cápsula 7: emergencias en GL y tu rol', minMin: 15 },
        { id: 'j3', tipo: 'juego', titulo: '¿Qué hago si…? Emergencias' },
        { id: 'l5', tipo: 'leccion', titulo: 'Cápsula 8: tu EPP y qué hacer ante un accidente', minMin: 15 },
        { id: 'j4', tipo: 'juego', titulo: 'Derechos y obligaciones' },
        { id: 't2', tipo: 'taller', titulo: 'Taller final: mi compromiso de seguridad', minMin: 10 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'pyv' },
        { id: 'f1', tipo: 'firma', titulo: 'Firma de recepción de la IRL' }
      ] },

    { id: 'riohs', titulo: 'Reglamento Interno de Orden, Higiene y Seguridad', sub: 'RIOHS 2026 de GL Robótica Submarina', obligatorio: true,
      horas: 1, duracionMin: 60, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Para qué sirve el RIOHS · Ingreso, contrato, jornada y remuneraciones · Obligaciones y prohibiciones · Normas de higiene y seguridad · Organización preventiva y Delegado de SST · Derecho a saber y a detener el trabajo · Accidentes y denuncia · Alcohol, drogas y tabaco · Sanciones, multas y reclamos',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula 1: normas de orden', minMin: 15 },
        { id: 'l2', tipo: 'leccion', titulo: 'Cápsula 2: normas de higiene y seguridad', minMin: 15 },
        { id: 'j1', tipo: 'juego', titulo: '¿Se puede o no se puede?' },
        { id: 't1', tipo: 'taller', titulo: 'Taller: el reglamento en tu trabajo', minMin: 15 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'riohs' },
        { id: 'f1', tipo: 'firma', titulo: 'Firma: recibí el Reglamento Interno' }
      ] },

    { id: 'karin', titulo: 'Ley Karin: prevención del acoso y la violencia en el trabajo', sub: 'Ley 21.643 · Protocolo de prevención de GL', obligatorio: true,
      horas: 1, duracionMin: 60, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Acoso sexual, acoso laboral y violencia de terceros · Conductas incívicas y sexismo · Principios del protocolo · Derechos y deberes · Riesgos psicosociales en faena y taller · Canales de denuncia · Medidas de resguardo · Investigación y plazos · Sanciones, reparación y protección contra represalias',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula 1: qué es acoso y violencia en el trabajo', minMin: 15 },
        { id: 'j1', tipo: 'juego', titulo: '¿Es acoso, violencia o no?' },
        { id: 'l2', tipo: 'leccion', titulo: 'Cápsula 2: cómo prevenimos y cómo se denuncia en GL', minMin: 15 },
        { id: 't1', tipo: 'taller', titulo: 'Taller: casos en faena y en el taller', minMin: 15 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'karin' },
        { id: 'f1', tipo: 'firma', titulo: 'Firma: recibí el protocolo Ley Karin' }
      ] },

    { id: 'iper', titulo: 'La Matriz IPER de GL: cómo se lee y qué dice de tu cargo', sub: 'Peligro, riesgo, P × S, controles y la matriz real de tu cargo',
      horas: 1.5, duracionMin: 90, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: ['piloto', 'encargado_taller', 'asistente_taller', 'gerente_general', 'jefa_operaciones'],
      contenidos: 'Estructura de la Matriz IPER v02 · Peligro y riesgo · Evaluación P × S y niveles · Protocolos MINSAL e ISP · Jerarquía de controles · Riesgo residual · La matriz completa del cargo, fila por fila · Revisión participativa: riesgos faltantes y medidas',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula 1: cómo se lee la matriz', minMin: 8 },
        { id: 'j2', tipo: 'juego', titulo: '¿Peligro o riesgo?' },
        { id: 'l2', tipo: 'leccion', titulo: 'Cápsula 2: evaluar, controlar y el riesgo residual', minMin: 8 },
        { id: 'j1', tipo: 'juego', titulo: 'Clasifica y ordena los controles' },
        { id: 'lm', tipo: 'leccion', titulo: 'Cápsula 3: la Matriz IPER de tu cargo, fila por fila', minMin: 25 },
        { id: 't1', tipo: 'taller', titulo: 'Taller: evalúa riesgos reales con P × S', minMin: 10 },
        { id: 't2', tipo: 'taller', titulo: 'Taller: revisa tu matriz (¿falta algo? ¿las medidas sirven?)', minMin: 20 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'iper' }
      ] },

    { id: 'prrd', titulo: 'Emergencias en faena y en el taller', sub: 'PDR-01 faenas · PDR-02 taller de mantención ROV',
      horas: 1, duracionMin: 60, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Amenazas en faena y en el taller · Organización y roles (LRC, encargado de evacuación) · Método ACCEDER · Hombre al agua · Accidente en zona aislada · Temporal · Sismo y tsunami · Pérdida de comunicación · Incendio y baterías de litio · Monóxido de carbono · Derrames y emergencia eléctrica · Evacuación · Recursos y teléfonos · Simulacro de escritorio',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula 1: los planes de emergencia de GL', minMin: 10 },
        { id: 'l2', tipo: 'leccion', titulo: 'Cápsula 2: los planes de respuesta paso a paso', minMin: 15 },
        { id: 'j1', tipo: 'juego', titulo: '¿Qué haces? Situaciones de emergencia' },
        { id: 'l3', tipo: 'leccion', titulo: 'Cápsula 3: tu rol, recursos y comunicaciones', minMin: 10 },
        { id: 'j2', tipo: 'juego', titulo: 'Recursos de emergencia', tituloTaller: 'Recursos de emergencia del taller' },
        { id: 't1', tipo: 'taller', titulo: 'Taller: simulacro de escritorio', minMin: 15 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'prrd' }
      ] },

    { id: 'epp', titulo: 'EPP: uso, cuidado y reposición', sub: 'Procedimiento de EPP v02 · capacitación de 1 hora',
      horas: 1, duracionMin: 60, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Selección y certificación del EPP · EPP según los riesgos del cargo (Matriz IPER) · Entrega gratuita y registro · Uso y ajuste correcto · Mantención · Criterios de reposición · Autoinspección',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula 1: tu EPP de principio a fin', minMin: 10 },
        { id: 'l2', tipo: 'leccion', titulo: 'Cápsula 2: el EPP de cada riesgo de tu cargo', minMin: 10 },
        { id: 'j2', tipo: 'juego', titulo: '¿Qué EPP para cada riesgo?' },
        { id: 'l3', tipo: 'leccion', titulo: 'Cápsula 3: cómo se usa, ajusta y cuida', minMin: 10 },
        { id: 'j1', tipo: 'juego', titulo: '¿Sirve o se repone?' },
        { id: 't1', tipo: 'taller', titulo: 'Taller: inspecciona tu propio EPP', minMin: 15 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'epp' },
        { id: 'f1', tipo: 'firma', titulo: 'Firma de la capacitación en EPP' }
      ] },

    { id: 'acc', titulo: 'Qué hacer ante un accidente', sub: 'PRO-ACC-01 · notificación e investigación',
      horas: 1, duracionMin: 60, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Accidente del trabajo, de trayecto, grave y fatal · Primeros pasos · Denuncia DIAT · Suspensión y notificación · Derechos en la ACHS · Estudiantes y seguro escolar · Investigación y árbol de causas · Taller de investigación',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula 1: paso a paso ante un accidente', minMin: 10 },
        { id: 'j1', tipo: 'juego', titulo: '¿Leve, grave o fatal?' },
        { id: 'l2', tipo: 'leccion', titulo: 'Cápsula 2: la DIAT, el trayecto y tus derechos', minMin: 10 },
        { id: 'j2', tipo: 'juego', titulo: 'Ordena el accidente grave' },
        { id: 'l3', tipo: 'leccion', titulo: 'Cápsula 3: investigar para que no se repita', minMin: 10 },
        { id: 't1', tipo: 'taller', titulo: 'Taller: investiga un accidente', minMin: 15 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'acc' }
      ] }
  ]
};

/* Un curso por cada procedimiento de trabajo seguro y protocolo operativo */
(function () {
  var P = [
    ['PTS-ROV-001', 'Operaciones con ROV en faenas', ['piloto', 'jefa_operaciones', 'gerente_general']],
    ['PTS-TAL-001', 'Mantención y reparación de equipos ROV en taller', ['encargado_taller', 'asistente_taller', 'alumno', 'jefa_operaciones']],
    ['PRT-EST-01', 'Protocolo de estudiantes en práctica', ['alumno', 'encargado_taller', 'asistente_taller']]
  ];
  P.forEach(function (p) {
    var id = p[0].toLowerCase();
    PLAN.cursos.push({ id: id, titulo: p[0] + ' · ' + p[1], sub: p[0].indexOf('PRT') === 0 ? 'Protocolo de la empresa' : 'Procedimiento de trabajo seguro', pts: p[0],
      horas: 1, duracionMin: 60, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: p[2],
      contenidos: 'Objetivo y alcance · Responsabilidades por cargo · EPP · Secuencia de trabajo · Riesgos de la tarea según la Matriz IPER · Criterios de detención · Taller de casos · Puntos clave del ' + p[0],
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula 1: el procedimiento paso a paso', minMin: 10 },
        { id: 'ld', tipo: 'leccion', titulo: 'Cápsula 2: quién hace qué y el documento completo', minMin: 12 },
        { id: 'j1', tipo: 'juego', titulo: 'Ordena la secuencia' },
        { id: 'lr', tipo: 'leccion', titulo: 'Cápsula 3: los riesgos de esta tarea (Matriz IPER)', minMin: 12 },
        { id: 'j2', tipo: 'juego', titulo: '¿Detengo o continúo?' },
        { id: 't1', tipo: 'taller', titulo: 'Taller: casos del procedimiento', minMin: 12 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: id },
        { id: 'f1', tipo: 'firma', titulo: 'Firma: recibí y comprendí el ' + p[0] }
      ] });
  });
})();

/* índices y ayudas */
PLAN.etapas = [];
PLAN.cursos.forEach(function (c) {
  c.etapas.forEach(function (e) { e.curso = c.id; e.local = e.id; e.id = c.id + '.' + e.id; if (e.modulo == null) e.modulo = 0; PLAN.etapas.push(e); });
});
PLAN.duracionTxt = function (min) {
  min = Math.round(+min || 0);
  if (min < 60) return min + ' minutos';
  var h = Math.floor(min / 60), m = min % 60;
  return h + (h === 1 ? ' hora' : ' horas') + (m ? ' ' + m + ' minutos' : '') + ' cronológica' + (h === 1 && !m ? '' : 's');
};
PLAN.curso = function (id) { for (var i = 0; i < PLAN.cursos.length; i++) if (PLAN.cursos[i].id === id) return PLAN.cursos[i]; return null; };
PLAN.etapa = function (id) { for (var i = 0; i < PLAN.etapas.length; i++) if (PLAN.etapas[i].id === id) return PLAN.etapas[i]; return null; };
PLAN.cargo = function (id) { for (var i = 0; i < PLAN.cargos.length; i++) if (PLAN.cargos[i].id === id) return PLAN.cargos[i]; return null; };
PLAN.area = function (cargo) { var c = PLAN.cargo(cargo); return c ? c.area : 'faena'; };
PLAN.tituloEtapa = function (e, cargo) { return (e.tituloTaller && PLAN.area(cargo) === 'taller') ? e.tituloTaller : e.titulo; };
PLAN.cursosDe = function (cargo) { return PLAN.cursos.filter(function (c) { return c.cargos === '*' || c.cargos.indexOf(cargo) >= 0; }); };
if (typeof module !== 'undefined') module.exports = PLAN;

/* Capacitaciones creadas desde el panel (se guardan en la hoja CursosExtra). */
PLAN.registrarExtra = function (x) {
  var viejo = PLAN.curso(x.id);
  if (viejo) { PLAN.cursos.splice(PLAN.cursos.indexOf(viejo), 1); PLAN.etapas = PLAN.etapas.filter(function (e) { return e.curso !== x.id; }); }
  var c = { id: x.id, titulo: x.titulo, sub: x.sub || 'Capacitación de la empresa', extra: true, horas: x.horas || 1, duracionMin: Math.max(60, Math.round((parseFloat(String(x.horas || 1).replace(',', '.')) || 1) * 60)), doc: 'certificado', vigenciaMeses: x.vigenciaMeses || 12, plazoMeses: 0,
    cargos: x.cargos, contenidos: x.sub || x.titulo, documentoUrl: x.documentoUrl || '',
    etapas: [{ id: 'l1', tipo: 'leccion', titulo: 'Cápsula', minMin: Math.max(2, Math.min(20, ((x.contenido && x.contenido.diapositivas) || []).length)) },
      { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: x.id }] };
  if (x.firma) c.etapas.push({ id: 'f1', tipo: 'firma', titulo: 'Firma de la capacitación' });
  c.etapas.forEach(function (e) { e.curso = c.id; e.local = e.id; e.id = c.id + '.' + e.id; e.modulo = 0; PLAN.etapas.push(e); });
  PLAN.cursos.push(c);
  return c;
};
