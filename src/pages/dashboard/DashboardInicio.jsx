import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, Clock, Users, Info, MessageCircle, Search } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import { MOCK_GROUPS, MOCK_USERS, PLAN_ESTUDIO } from '../../data/mockData';

// Reusable Helper Components
const Badge = ({ children, type }) => {
  const styles = {
    apoyo: "bg-blue-100 text-blue-700",
    final: "bg-red-100 text-red-700",
    cursada: "bg-yellow-100 text-yellow-800",
    aprobada: "bg-green-100 text-green-700",
    recursando: "bg-orange-100 text-orange-700",
    debe_rendir: "bg-yellow-100 text-yellow-700",
    no_cursada: "bg-gray-200 text-gray-700",
    default: "bg-gray-100 text-gray-800"
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${styles[type?.toLowerCase().replace(' ', '_')] || styles.default}`}>
      {children}
    </span>
  );
};

const Avatar = ({ name, size = "md" }) => {
  const sizes = { sm: "w-8 h-8 text-sm", md: "w-12 h-12 text-lg", lg: "w-16 h-16 text-2xl" };
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  return (
    <div className={`${sizes[size]} rounded-full bg-linear-to-br from-blue-100 to-blue-200 text-blue-800 flex items-center justify-center font-bold shrink-0 border border-white shadow-sm`}>
      {initial}
    </div>
  );
};

const SubjectName = ({ subjectId }) => {
  const subject = PLAN_ESTUDIO.find(s => s.id === subjectId);
  return <>{subject ? subject.name : 'Materia Desconocida'}</>;
};

const DashboardInicio = () => {
  const navigate = useNavigate();
  // We use useAuth() to get the real logged in user, but for now the user shape from context 
  // might lack `materias` and `gruposUnidos`. We will mock it temporarily or assume it's there.
  const { user } = useAuth();

  // Temporary: we merge the auth user with the MOCK user shape so it doesn't crash
  const currentUser = {
    id: user?.id || 'u_me',
    name: user?.name || 'Lautaro Work',
    email: user?.email || 'lautarostock@gmail.com',
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

  const materiasActivas = currentUser.materias
    .filter(m => ['cursando', 'recursando', 'debe_rendir'].includes(m.estado))
    .map(m => m.id);

  const suggestedGroups = useMemo(() => {
    return MOCK_GROUPS.filter(g => materiasActivas.includes(g.subjectId) && !currentUser.gruposUnidos.includes(g.id));
  }, [materiasActivas, currentUser.gruposUnidos]);

  const compatibleUsers = useMemo(() => {
    return MOCK_USERS.filter(u => u.materias.some(m => materiasActivas.includes(m.id)));
  }, [materiasActivas]);

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Resumen de tu actividad</h1>
        <p className="text-gray-500 mt-1">Acá tenés sugerencias inteligentes basadas en tu perfil académico actual.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grupos Sugeridos */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
              <BookOpen className="w-5 h-5 text-blue-600" /> Grupos Sugeridos
            </h2>
            <button
              onClick={() => navigate('/dashboard/grupos')}
              className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center transition"
            >
              Ver todos <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {suggestedGroups.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
              <Info className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">No hay sugerencias nuevas por el momento.</p>
            </div>
          ) : (
            suggestedGroups.slice(0, 3).map(g => (
              <div
                key={g.id}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition cursor-pointer flex justify-between items-center group"
                onClick={() => navigate(`/dashboard/grupos?chat=${g.id}`)}
              >
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition">{g.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1.5">
                    <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> <SubjectName subjectId={g.subjectId} /></span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {g.schedule.split(' ')[0]}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {g.members.length}</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Badge type={g.type}>{g.type}</Badge>
                    <Badge type={g.modality === 'Virtual' ? 'default' : 'aprobada'}>{g.modality}</Badge>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded-full group-hover:bg-blue-50 transition">
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Estudiantes Compatibles */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
              <Users className="w-5 h-5 text-blue-600" /> Estudiantes Compatibles
            </h2>
            <button
              onClick={() => navigate('/dashboard/matching')}
              className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center transition"
            >
              Ver todos <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          {compatibleUsers.slice(0, 4).map(u => (
            <div key={u.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <Avatar name={u.name} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{u.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{u.materiaComun} · <span className="font-medium text-gray-700">{u.intencion}</span></p>
                  <div className="mt-1.5">
                    <Badge type={u.estado}>{u.estado.replace('_', ' ')}</Badge>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/dashboard/matching')}
                className="p-2.5 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-full transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-700 to-blue-500 rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-center shadow-lg relative overflow-hidden mt-8">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-center gap-5 z-10">
          <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner"><Search className="w-8 h-8 text-white" /></div>
          <div>
            <h3 className="text-2xl font-bold">¿Necesitás ayuda con una materia?</h3>
            <p className="text-blue-100 mt-1 max-w-lg">Nuestro algoritmo busca estudiantes avanzados dispuestos a dar tutorías en las materias que te cuestan.</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/dashboard/matching')}
          className="mt-6 md:mt-0 bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 transition shadow-md z-10 w-full md:w-auto text-center"
        >
          Buscar Tutor Ahora
        </button>
      </div>
    </div>
  );
};

export default DashboardInicio;
