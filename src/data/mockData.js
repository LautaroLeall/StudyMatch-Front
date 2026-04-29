// --- CONSTANTES Y CONFIGURACIÓN ---
export const ESTADOS = [
  { value: "", label: "— Estado —", color: "bg-gray-100 text-gray-600" },
  { value: "no_cursada", label: "No cursada", color: "bg-gray-200 text-gray-700" },
  { value: "cursando", label: "Cursando", color: "bg-blue-100 text-blue-700" },
  { value: "debe_rendir", label: "Debe rendir", color: "bg-yellow-100 text-yellow-700" },
  { value: "recursando", label: "Recursando", color: "bg-orange-100 text-orange-700" },
  { value: "aprobada", label: "Aprobada", color: "bg-green-100 text-green-700" },
];

export const NIVELES = [
  { value: "", label: "— Nivel —" },
  { value: "basico", label: "Básico" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
];

export const INTENCIONES = [
  { value: "apoyo", label: "Buscar apoyo", iconName: "Search" },
  { value: "ayudar", label: "Ayudar a otros", iconName: "BookOpen" },
  { value: "ambas", label: "Ambas", iconName: "Users" },
];

export const PLAN_ESTUDIO = [
  { id: 'm1', name: 'Matemática I', year: 1 },
  { id: 'm2', name: 'Sistemas y Organizaciones', year: 1 },
  { id: 'm3', name: 'Introducción a la Informática', year: 1 },
  { id: 'm4', name: 'Programación I', year: 2 },
  { id: 'm5', name: 'Base de Datos I', year: 2 },
  { id: 'm6', name: 'Arquitectura de Computadoras', year: 2 },
  { id: 'm7', name: 'Programación II', year: 3 },
  { id: 'm8', name: 'Estadística', year: 3 },
  { id: 'm9', name: 'Redes de Datos', year: 3 },
  { id: 'm10', name: 'Inteligencia Artificial', year: 4 },
];

export const TOTAL_ANIOS_CARRERA = 5;

// --- DATOS MOCK AVANZADOS ---
export const INITIAL_USER = {
  id: 'u_me',
  name: 'Lautaro Work',
  email: 'lautarostock@gmail.com',
  carrera: 'Ingeniería en Informática',
  añoActual: 4,
  intencion: 'ambas',
  materias: [
    { id: 'm1', estado: 'aprobada', nivel: 'avanzado' },
    { id: 'm2', estado: 'aprobada', nivel: 'intermedio' },
    { id: 'm4', estado: 'aprobada', nivel: 'intermedio' },
    { id: 'm7', estado: 'cursando', nivel: 'basico' },
    { id: 'm10', estado: 'cursando', nivel: 'basico' }
  ],
  gruposUnidos: ['g2', 'g1']
};

export const MOCK_USERS = [
  { id: 'u2', name: 'lautaroleal4@gmail.com', intencion: 'ayudar', materiaComun: 'Matemática I', estado: 'aprobada', nivel: 'Avanzado', materias: [{ id: 'm1', estado: 'aprobada', nivel: 'avanzado' }] },
  { id: 'u3', name: 'kevinlobo0@gmail.com', intencion: 'ambas', materiaComun: 'Programación II', estado: 'recursando', nivel: 'Básico', materias: [{ id: 'm7', estado: 'recursando', nivel: 'basico' }] },
  { id: 'u4', name: 'maria.gomez@gmail.com', intencion: 'apoyo', materiaComun: 'Inteligencia Artificial', estado: 'cursando', nivel: 'Básico', materias: [{ id: 'm10', estado: 'cursando', nivel: 'basico' }] },
  { id: 'u5', name: 'juan.perez@gmail.com', intencion: 'ambas', materiaComun: 'Programación I', estado: 'debe_rendir', nivel: 'N/A', materias: [{ id: 'm4', estado: 'debe_rendir', nivel: 'basico' }] },
];

export const MOCK_GROUPS = [
  { id: 'g1', name: 'Tutorías Matemática', subjectId: 'm1', type: 'Apoyo', modality: 'Virtual', schedule: 'Lunes 15:00 - 17:00', members: ['u2', 'u_me', 'u4', 'u5'], events: [], messages: [{ id: 1, sender: 'lautaroleal4', text: 'Bienvenidos a las tutorías', time: '10:00' }] },
  {
    id: 'g2', name: 'IA - Proyecto Final', subjectId: 'm10', type: 'Final', modality: 'Virtual', schedule: 'Viernes 16:00 - 18:00', members: ['u_me', 'u4'],
    events: [{ id: 'e1', title: 'Repaso Final', date: '2024-04-22', displayDate: '22 ABR', time: '11:30 hs', location: 'Biblioteca UNSTA' }],
    messages: [{ id: 1, sender: 'maria.gomez', text: '¿Alguien empezó el tp?', time: '13:45' }]
  },
  { id: 'g3', name: 'Práctica Base de Datos', subjectId: 'm5', type: 'Cursada', modality: 'Presencial', schedule: 'Martes 10:00 - 12:00', members: ['u3'], events: [], messages: [] },
  { id: 'g4', name: 'Estudio Prog I - Final', subjectId: 'm4', type: 'Final', modality: 'Virtual', schedule: 'Jueves 18:00 - 20:00', members: ['u5'], events: [], messages: [] },
];
