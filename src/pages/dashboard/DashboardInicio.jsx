import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, Clock, Users, Info, MessageCircle, Search } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import { MOCK_GROUPS, MOCK_USERS, PLAN_ESTUDIO } from '../../data/mockData';
import '../../styles/DashboardInicio.css';

// Reusable Helper Components
const Badge = ({ children, type }) => {
  const typeClass = type ? `inicio-badge--${type.toLowerCase().replace(' ', '_')}` : 'inicio-badge--default';
  return (
    <span className={`inicio-badge px-2.5 py-1 text-xs font-semibold ${typeClass}`}>
      {children}
    </span>
  );
};

const Avatar = ({ name, size = "md" }) => {
  const sizes = { sm: "w-8 h-8 text-sm", md: "w-12 h-12 text-lg", lg: "w-16 h-16 text-2xl" };
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  return (
    <div className={`inicio-avatar ${sizes[size]} flex items-center justify-center font-bold shrink-0`}>
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
  // Obtenemos el usuario actual autenticado
  const { user } = useAuth();

  // Temporal: fusionamos el usuario autenticado con la forma de usuario MOCK para que no falle
  const currentUser = {
    id: user?.id || 'u_me',
    name: user?.name || 'Lautaro Work',
    email: user?.email || 'lautarostock@gmail.com',
    carrera: 'Ingeniería en Informática',
    añoActual: 4,
    intencion: 'ambas',
    materias: [
      {
        id: 'm1',
        estado: 'aprobada',
        nivel: 'avanzado'
      },
      {
        id: 'm2',
        estado: 'aprobada',
        nivel: 'intermedio'
      },
      {
        id: 'm4',
        estado: 'aprobada',
        nivel: 'intermedio'
      },
      {
        id: 'm7',
        estado: 'cursando',
        nivel: 'basico'
      },
      {
        id: 'm10',
        estado: 'cursando',
        nivel: 'basico'
      }
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
    <div className="inicio-container p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in">
      <div>
        <h1 className="inicio-title text-3xl font-bold">
          Resumen de tu actividad
        </h1>
        <p className="inicio-subtitle mt-1">
          Acá tenés sugerencias inteligentes basadas en tu perfil académico actual.
        </p>
      </div>

      <div className="inicio-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grupos Sugeridos */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="inicio-section-title text-xl font-bold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Grupos Sugeridos
            </h2>
            <button
              onClick={() => navigate('/dashboard/grupos')}
              className="inicio-section-link text-sm font-medium flex items-center"
            >
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {suggestedGroups.length === 0 ? (
            <div className="inicio-empty p-8 text-center">
              <Info className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">
                No hay sugerencias nuevas por el momento.
              </p>
            </div>
          ) : (
            suggestedGroups.slice(0, 3).map(g => (
              <div
                key={g.id}
                className="inicio-card p-5 flex justify-between items-center group"
                onClick={() => navigate(`/dashboard/grupos?chat=${g.id}`)}
              >
                <div>
                  <h3 className="inicio-card-title font-bold">{g.name}</h3>
                  <div className="inicio-card-info flex items-center gap-3 text-sm mt-1.5">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <SubjectName subjectId={g.subjectId} />
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {g.schedule.split(' ')[0]}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> {g.members.length}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Badge type={g.type}>{g.type}</Badge>
                    <Badge type={g.modality === 'Virtual' ? 'default' : 'aprobada'}>
                      {g.modality}
                    </Badge>
                  </div>
                </div>
                <div className="inicio-card-action p-2">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Estudiantes Compatibles */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="inicio-section-title text-xl font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" /> Estudiantes Compatibles
            </h2>
            <button
              onClick={() => navigate('/dashboard/matching')}
              className="inicio-section-link text-sm font-medium flex items-center"
            >
              Ver todos <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          {compatibleUsers.slice(0, 4).map(u => (
            <div key={u.id} className="inicio-user-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar name={u.name} />
                <div>
                  <h4 className="inicio-user-name font-semibold text-sm">{u.name}</h4>
                  <p className="inicio-user-intent text-xs mt-0.5">{u.materiaComun} · <span className="font-medium">{u.intencion}</span></p>
                  <div className="mt-1.5">
                    <Badge type={u.estado}>{u.estado.replace('_', ' ')}</Badge>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/dashboard/matching')}
                className="inicio-user-action p-2.5"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="inicio-banner p-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden mt-8">
        <div className="inicio-banner-bg absolute -right-10 -top-10 w-40 h-40 pointer-events-none"></div>
        <div className="flex items-center gap-5 z-10">
          <div className="inicio-banner-icon-wrap p-4">
            <Search className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">¿Necesitás ayuda con una materia?</h3>
            <p className="mt-1 max-w-lg opacity-90">Nuestro algoritmo busca estudiantes avanzados dispuestos a dar tutorías en las materias que te cuestan.</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/dashboard/matching')}
          className="inicio-banner-btn mt-6 md:mt-0 px-8 py-3 font-bold z-10 w-full md:w-auto text-center"
        >
          Buscar Tutor Ahora
        </button>
      </div>
    </div>
  );
};

export default DashboardInicio;
