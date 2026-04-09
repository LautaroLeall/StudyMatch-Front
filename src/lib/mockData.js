// ===== MOCK DATA =====
// Simulated backend data for StudyMatch UNSTA

export const careers = [
  { id: 'career-1', name: 'Ingeniería en Sistemas' },
  { id: 'career-2', name: 'Ingeniería Civil' },
  { id: 'career-3', name: 'Contador Público' },
  { id: 'career-4', name: 'Abogacía' },
  { id: 'career-5', name: 'Psicología' },
];

export const subjects = [
  // Ing. Sistemas - Año 1
  { id: 'sub-1', name: 'Análisis Matemático I', career_id: 'career-1', year: 1 },
  { id: 'sub-2', name: 'Álgebra y Geometría Analítica', career_id: 'career-1', year: 1 },
  { id: 'sub-3', name: 'Programación I', career_id: 'career-1', year: 1 },
  { id: 'sub-4', name: 'Física I', career_id: 'career-1', year: 1 },
  { id: 'sub-5', name: 'Introducción a la Ingeniería', career_id: 'career-1', year: 1 },
  // Ing. Sistemas - Año 2
  { id: 'sub-6', name: 'Análisis Matemático II', career_id: 'career-1', year: 2 },
  { id: 'sub-7', name: 'Programación II', career_id: 'career-1', year: 2 },
  { id: 'sub-8', name: 'Física II', career_id: 'career-1', year: 2 },
  { id: 'sub-9', name: 'Estadística y Probabilidad', career_id: 'career-1', year: 2 },
  { id: 'sub-10', name: 'Base de Datos I', career_id: 'career-1', year: 2 },
  // Ing. Sistemas - Año 3
  { id: 'sub-11', name: 'Sistemas Operativos', career_id: 'career-1', year: 3 },
  { id: 'sub-12', name: 'Redes de Computadoras', career_id: 'career-1', year: 3 },
  { id: 'sub-13', name: 'Ingeniería de Software I', career_id: 'career-1', year: 3 },
  { id: 'sub-14', name: 'Base de Datos II', career_id: 'career-1', year: 3 },
  { id: 'sub-15', name: 'Programación III', career_id: 'career-1', year: 3 },
  // Ing. Sistemas - Año 4
  { id: 'sub-16', name: 'Inteligencia Artificial', career_id: 'career-1', year: 4 },
  { id: 'sub-17', name: 'Ingeniería de Software II', career_id: 'career-1', year: 4 },
  { id: 'sub-18', name: 'Seguridad Informática', career_id: 'career-1', year: 4 },
  // Ing. Sistemas - Año 5
  { id: 'sub-19', name: 'Proyecto Final', career_id: 'career-1', year: 5 },
  { id: 'sub-20', name: 'Gestión de Proyectos', career_id: 'career-1', year: 5 },
];

export const mockUsers = [
  {
    id: 'user-2', name: 'María Fernández', email: 'maria@unsta.edu.ar',
    career: 'Ingeniería en Sistemas', year: 3, intention: 'help',
    bio: 'Me encanta programar y ayudar a otros con las materias de sistemas.',
    subjects: ['Sistemas Operativos', 'Redes de Computadoras', 'Base de Datos II'],
  },
  {
    id: 'user-3', name: 'Tomás García', email: 'tomas@unsta.edu.ar',
    career: 'Ingeniería en Sistemas', year: 2, intention: 'seek',
    bio: 'Buscando compañeros para Análisis II y Programación.',
    subjects: ['Análisis Matemático II', 'Programación II', 'Estadística y Probabilidad'],
  },
  {
    id: 'user-4', name: 'Valentina Ruiz', email: 'vale@unsta.edu.ar',
    career: 'Ingeniería en Sistemas', year: 3, intention: 'both',
    bio: 'Trabajo y estudio, busco grupos flexibles.',
    subjects: ['Ingeniería de Software I', 'Base de Datos II', 'Programación III'],
  },
  {
    id: 'user-5', name: 'Santiago López', email: 'santi@unsta.edu.ar',
    career: 'Ingeniería en Sistemas', year: 1, intention: 'seek',
    bio: 'Primer año, necesito ayuda con Análisis y Programación.',
    subjects: ['Análisis Matemático I', 'Programación I', 'Física I'],
  },
  {
    id: 'user-6', name: 'Camila Torres', email: 'cami@unsta.edu.ar',
    career: 'Ingeniería en Sistemas', year: 4, intention: 'help',
    bio: 'Próxima a recibirme, quiero devolver la ayuda que recibí.',
    subjects: ['Inteligencia Artificial', 'Ingeniería de Software II', 'Seguridad Informática'],
  },
  {
    id: 'user-7', name: 'Facundo Méndez', email: 'facu@unsta.edu.ar',
    career: 'Ingeniería en Sistemas', year: 2, intention: 'both',
    bio: 'Recursante de Análisis II, puedo ayudar en Programación I.',
    subjects: ['Análisis Matemático II', 'Programación II', 'Base de Datos I'],
  },
  {
    id: 'user-8', name: 'Lucía Herrera', email: 'lucia@unsta.edu.ar',
    career: 'Ingeniería en Sistemas', year: 3, intention: 'seek',
    bio: 'Necesito grupo de estudio para Redes y SO.',
    subjects: ['Sistemas Operativos', 'Redes de Computadoras', 'Ingeniería de Software I'],
  },
];

export const studyGroups = [
  {
    id: 'group-1', name: 'Grupo SO — Parcial 2', subject_name: 'Sistemas Operativos',
    modality: 'Presencial', schedule: 'Lunes y Miércoles 18:00', type: 'study',
    member_count: 4, max_members: 6, created_by: 'user-2',
  },
  {
    id: 'group-2', name: 'Redes — Práctica Labs', subject_name: 'Redes de Computadoras',
    modality: 'Híbrido', schedule: 'Martes 20:00', type: 'practice',
    member_count: 3, max_members: 5, created_by: 'user-4',
  },
  {
    id: 'group-3', name: 'Análisis II — Finales', subject_name: 'Análisis Matemático II',
    modality: 'Virtual', schedule: 'Jueves y Sábado 10:00', type: 'exam_prep',
    member_count: 5, max_members: 8, created_by: 'user-3',
  },
  {
    id: 'group-4', name: 'DB II — Proyecto Integrador', subject_name: 'Base de Datos II',
    modality: 'Presencial', schedule: 'Viernes 16:00', type: 'project',
    member_count: 2, max_members: 4, created_by: 'user-1',
  },
  {
    id: 'group-5', name: 'Programación III — Consultas', subject_name: 'Programación III',
    modality: 'Virtual', schedule: 'Miércoles 21:00', type: 'tutoring',
    member_count: 6, max_members: 10, created_by: 'user-6',
  },
];

export const groupMembers = [
  { id: 'gm-1', group_id: 'group-1', user_id: 'user-1', user_name: 'Lautaro Leal' },
  { id: 'gm-2', group_id: 'group-1', user_id: 'user-2', user_name: 'María Fernández' },
  { id: 'gm-3', group_id: 'group-1', user_id: 'user-4', user_name: 'Valentina Ruiz' },
  { id: 'gm-4', group_id: 'group-1', user_id: 'user-8', user_name: 'Lucía Herrera' },
  { id: 'gm-5', group_id: 'group-2', user_id: 'user-1', user_name: 'Lautaro Leal' },
  { id: 'gm-6', group_id: 'group-2', user_id: 'user-4', user_name: 'Valentina Ruiz' },
  { id: 'gm-7', group_id: 'group-2', user_id: 'user-8', user_name: 'Lucía Herrera' },
  { id: 'gm-8', group_id: 'group-3', user_id: 'user-3', user_name: 'Tomás García' },
  { id: 'gm-9', group_id: 'group-3', user_id: 'user-7', user_name: 'Facundo Méndez' },
  { id: 'gm-10', group_id: 'group-4', user_id: 'user-1', user_name: 'Lautaro Leal' },
  { id: 'gm-11', group_id: 'group-4', user_id: 'user-2', user_name: 'María Fernández' },
];

export const groupMessages = [
  { id: 'msg-1', group_id: 'group-1', user_id: 'user-2', sender_name: 'María Fernández', content: '¡Hola! Arranquemos con los ejercicios del módulo 3', created_at: '2026-04-07T14:00:00' },
  { id: 'msg-2', group_id: 'group-1', user_id: 'user-1', sender_name: 'Lautaro Leal', content: 'Dale, yo ya hice los de scheduling. ¿Empezamos por paginación?', created_at: '2026-04-07T14:02:00' },
  { id: 'msg-3', group_id: 'group-1', user_id: 'user-4', sender_name: 'Valentina Ruiz', content: 'Sí, paginación me costó bastante. Necesito repasar', created_at: '2026-04-07T14:03:00' },
  { id: 'msg-4', group_id: 'group-1', user_id: 'user-2', sender_name: 'María Fernández', content: 'Perfecto, les comparto mis apuntes por acá', created_at: '2026-04-07T14:05:00' },
  { id: 'msg-5', group_id: 'group-1', user_id: 'user-8', sender_name: 'Lucía Herrera', content: '¡Genial! Yo llego a las 18:15, espérenme', created_at: '2026-04-07T14:10:00' },
  { id: 'msg-6', group_id: 'group-1', user_id: 'user-1', sender_name: 'Lautaro Leal', content: 'Tranqui, te esperamos 👍', created_at: '2026-04-07T14:12:00' },
];

export const groupEvents = [
  { id: 'evt-1', group_id: 'group-1', group_name: 'Grupo SO — Parcial 2', title: 'Sesión de estudio — Paginación', description: 'Repasar paginación y memoria virtual', date_time: '2026-04-09T18:00:00', location: 'Aula 3B — UNSTA YB' },
  { id: 'evt-2', group_id: 'group-1', group_name: 'Grupo SO — Parcial 2', title: 'Simulacro Parcial 2', description: 'Resolver parciales anteriores', date_time: '2026-04-14T18:00:00', location: 'Laboratorio 2 — UNSTA YB' },
  { id: 'evt-3', group_id: 'group-2', group_name: 'Redes — Práctica Labs', title: 'Lab Subnetting', description: 'Práctica de subnetting y VLSM', date_time: '2026-04-10T20:00:00', location: 'Virtual — Google Meet' },
  { id: 'evt-4', group_id: 'group-3', group_name: 'Análisis II — Finales', title: 'Repaso Integrales', description: 'Integrales dobles y triples', date_time: '2026-04-11T10:00:00', location: 'Virtual — Zoom' },
  { id: 'evt-5', group_id: 'group-4', group_name: 'DB II — Proyecto Integrador', title: 'Diseño del Modelo ER', description: 'Definir entidades y relaciones del proyecto', date_time: '2026-04-12T16:00:00', location: 'Biblioteca — UNSTA YB' },
];

export const directMessages = [
  { id: 'dm-1', from_user_id: 'user-2', from_user_name: 'María Fernández', to_user_id: 'user-1', content: '¡Hola Lautaro! ¿Querés unirte al grupo de SO?', subject_name: 'Sistemas Operativos', created_at: '2026-04-06T10:00:00' },
  { id: 'dm-2', from_user_id: 'user-1', from_user_name: 'Lautaro Leal', to_user_id: 'user-2', content: '¡Sí, claro! ¿Cuándo se juntan?', subject_name: 'Sistemas Operativos', created_at: '2026-04-06T10:05:00' },
  { id: 'dm-3', from_user_id: 'user-2', from_user_name: 'María Fernández', to_user_id: 'user-1', content: 'Lunes y miércoles a las 18h. Te agrego 😊', subject_name: 'Sistemas Operativos', created_at: '2026-04-06T10:07:00' },
];

// ===== MOCK USER SUBJECTS =====
export const userSubjects = [
  { id: 'us-1', user_id: 'user-1', subject_id: 'sub-11', subject_name: 'Sistemas Operativos', status: 'cursando', level: 'intermediate', intention: 'both' },
  { id: 'us-2', user_id: 'user-1', subject_id: 'sub-12', subject_name: 'Redes de Computadoras', status: 'cursando', level: 'beginner', intention: 'seek' },
  { id: 'us-3', user_id: 'user-1', subject_id: 'sub-13', subject_name: 'Ingeniería de Software I', status: 'cursando', level: 'intermediate', intention: 'help' },
  { id: 'us-4', user_id: 'user-1', subject_id: 'sub-14', subject_name: 'Base de Datos II', status: 'cursando', level: 'advanced', intention: 'help' },
  { id: 'us-5', user_id: 'user-1', subject_id: 'sub-1', subject_name: 'Análisis Matemático I', status: 'aprobada', level: 'advanced', intention: 'help' },
  { id: 'us-6', user_id: 'user-1', subject_id: 'sub-3', subject_name: 'Programación I', status: 'aprobada', level: 'advanced', intention: 'help' },
  { id: 'us-7', user_id: 'user-1', subject_id: 'sub-7', subject_name: 'Programación II', status: 'aprobada', level: 'advanced', intention: 'help' },
];
