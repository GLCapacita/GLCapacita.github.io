/* js/plan.js */
/* GL Capacita — catálogo de cursos (compartido entre la app y el servidor).
   Si cambias algo aquí, pega el mismo contenido en Plan.gs del Apps Script. */
var PLAN = {
  version: '2026.11-gl1',
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
      horas: 8, doc: 'certificado', vigenciaMeses: 24, plazoMeses: 3,
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

    { id: 'irl', titulo: 'Los riesgos de tu cargo (IRL)', sub: 'Información de los riesgos laborales · art. 15 D.S. 44', obligatorio: true,
      horas: 1, doc: 'certificado', vigenciaMeses: 0, plazoMeses: 0, cargos: '*',
      contenidos: 'Riesgos del cargo según la Matriz IPER v02 · Medidas preventivas y métodos de trabajo correctos · Rol en emergencias · Derechos de la persona trabajadora',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula: lo que puede pasar en tu trabajo', minMin: 8 },
        { id: 'j1', tipo: 'juego', titulo: 'Riesgo y consecuencia' },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'pyv' },
        { id: 'f1', tipo: 'firma', titulo: 'Firma de recepción de la IRL' }
      ] },

    { id: 'riohs', titulo: 'Reglamento Interno y Ley Karin', sub: 'RIOHS 2026 · Protocolo de prevención del acoso y la violencia', obligatorio: true,
      horas: 1, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Obligaciones y prohibiciones del RIOHS · Organización preventiva de GL · Delegado de SST · Acoso sexual, laboral y violencia en el trabajo · Canales de denuncia · Investigación y medidas de resguardo',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula: las reglas de GL y tus derechos', minMin: 10 },
        { id: 'j1', tipo: 'juego', titulo: '¿Se puede o no se puede?' },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'riohs' },
        { id: 'f1', tipo: 'firma', titulo: 'Firma: recibí el RIOHS y el protocolo Ley Karin' }
      ] },

    { id: 'iper', titulo: 'Cómo leer la Matriz IPER de GL', sub: 'Peligro, riesgo, P × S y jerarquía de controles',
      horas: 1, doc: 'certificado', vigenciaMeses: 0, plazoMeses: 0, cargos: ['piloto', 'encargado_taller', 'asistente_taller', 'gerente_general', 'jefa_operaciones'],
      contenidos: 'Estructura de la Matriz IPER v02 · Evaluación P × S y niveles de riesgo · Protocolos MINSAL · Jerarquía de controles · Riesgo residual',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula: cómo se lee la matriz', minMin: 8 },
        { id: 't1', tipo: 'taller', titulo: 'Taller: evalúa tres riesgos reales', minMin: 12 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'iper' }
      ] },

    { id: 'prrd', titulo: 'Emergencias en faena y en el taller', sub: 'PDR-01 faenas · PDR-02 taller de mantención ROV',
      horas: 1, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Amenazas en faena y en el taller · Organización y roles · Hombre al agua · Incendio y baterías de litio · Calefacción y monóxido de carbono · Sismo y tsunami · Teléfonos de emergencia',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula: los planes de emergencia de GL', minMin: 8 },
        { id: 'j1', tipo: 'juego', titulo: '¿Qué haces? Situaciones de emergencia' },
        { id: 'j2', tipo: 'juego', titulo: 'Recursos de emergencia del taller' },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'prrd' }
      ] },

    { id: 'epp', titulo: 'EPP: uso, cuidado y reposición', sub: 'Procedimiento de EPP v02 · capacitación de 1 hora',
      horas: 1, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: '*',
      contenidos: 'Selección y certificación del EPP · Entrega gratuita y registro · Uso y ajuste correcto · Mantención · Criterios de reposición',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula: tu EPP de principio a fin', minMin: 10 },
        { id: 'j1', tipo: 'juego', titulo: '¿Sirve o se repone?' },
        { id: 't1', tipo: 'taller', titulo: 'Taller: inspecciona tu propio EPP', minMin: 15 },
        { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: 'epp' },
        { id: 'f1', tipo: 'firma', titulo: 'Firma de la capacitación en EPP' }
      ] },

    { id: 'acc', titulo: 'Qué hacer ante un accidente', sub: 'PRO-ACC-01 · notificación e investigación',
      horas: 1, doc: 'certificado', vigenciaMeses: 0, plazoMeses: 0, cargos: '*',
      contenidos: 'Accidente del trabajo, de trayecto, grave y fatal · Denuncia DIAT · Suspensión y notificación · Investigación · Estudiantes y seguro escolar',
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula: paso a paso ante un accidente', minMin: 8 },
        { id: 'j1', tipo: 'juego', titulo: '¿Leve, grave o fatal?' },
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
      horas: 1, doc: 'certificado', vigenciaMeses: 12, plazoMeses: 0, cargos: p[2],
      contenidos: 'Objetivo y alcance · Responsabilidades · EPP · Secuencia de trabajo · Criterios de detención · Puntos clave del ' + p[0],
      etapas: [
        { id: 'l1', tipo: 'leccion', titulo: 'Cápsula: el procedimiento paso a paso', minMin: 8 },
        { id: 'j1', tipo: 'juego', titulo: 'Ordena la secuencia' },
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
  var c = { id: x.id, titulo: x.titulo, sub: x.sub || 'Capacitación de la empresa', extra: true, horas: x.horas || 1, doc: 'certificado', vigenciaMeses: x.vigenciaMeses || 0, plazoMeses: 0,
    cargos: x.cargos, contenidos: x.sub || x.titulo, documentoUrl: x.documentoUrl || '',
    etapas: [{ id: 'l1', tipo: 'leccion', titulo: 'Cápsula', minMin: Math.max(2, Math.min(20, ((x.contenido && x.contenido.diapositivas) || []).length)) },
      { id: 'q1', tipo: 'quiz', titulo: 'Evaluación', banco: x.id }] };
  if (x.firma) c.etapas.push({ id: 'f1', tipo: 'firma', titulo: 'Firma de la capacitación' });
  c.etapas.forEach(function (e) { e.curso = c.id; e.local = e.id; e.id = c.id + '.' + e.id; e.modulo = 0; PLAN.etapas.push(e); });
  PLAN.cursos.push(c);
  return c;
};
