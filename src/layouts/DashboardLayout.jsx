import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  MessageSquare,
  User,
  LogOut,
  BookOpen
} from 'lucide-react';
import { PiHandWavingDuotone } from "react-icons/pi";
import useAuth from '../hooks/useAuth';
import '../styles/DashboardLayout.css';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    {
      id: 'inicio',
      path: '/dashboard/inicio',
      icon: Home,
      label: 'Inicio'
    },
    {
      id: 'matching',
      path: '/dashboard/matching',
      icon: Users,
      label: 'Matching'
    },
    {
      id: 'grupos',
      path: '/dashboard/grupos',
      icon: MessageSquare,
      label: 'Grupos'
    },
    {
      id: 'perfil',
      path: '/dashboard/perfil',
      icon: User,
      label: 'Mi Perfil'
    },
  ];

  // CAMBIO DE TEXTO SEGÚN LA RUTA
  const getPageTitle = () => {
    if (location.pathname.includes('chat')) return 'Sala de Estudio';
    return 'Panel Principal';
  };

  // DATOS DEL USUARIO ACTUAL
  const userName = user?.name?.split(' ')[0] || 'Usuario';
  const initial = userName.charAt(0).toUpperCase();

  return (
    <div className="dashboard-layout flex h-screen">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar w-64 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-3 p-7">
            <div className="dashboard-logo-icon flex items-center justify-center p-2.5">
              <BookOpen className="w-7 h-7" />
            </div>
            <div>
              <h1 className="dashboard-logo-title text-2xl font-black">StudyMatch</h1>
              <span className="dashboard-logo-subtitle text-[11px] font-black uppercase ml-0.5">UNSTA</span>
            </div>
          </div>

          <nav className="px-5 mt-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `
                  dashboard-nav-item w-full flex items-center gap-3.5 px-4 py-3.5 font-bold
                  ${isActive ? 'dashboard-nav-item--active' : ''}
                `}
              >
                {() => (
                  <>
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-5">
          <button
            onClick={handleLogout}
            className="dashboard-logout-btn flex items-center justify-center gap-2 w-full px-4 py-3.5 font-bold"
          >
            <LogOut className="w-5 h-5" /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="dashboard-main flex-1 flex flex-col min-w-0 relative overflow-hidden">
        {/* HEADER */}
        <header className="dashboard-header h-20 flex items-center justify-between px-8 shrink-0 sticky top-0">
          <div className="dashboard-header-title text-sm font-bold uppercase">
            {getPageTitle()}
          </div>
          <div
            className="dashboard-user-widget flex items-center gap-4 p-2 cursor-pointer"
            onClick={() => navigate('/dashboard/perfil')}
          >
            <span className="text-sm flex items-center gap-2 font-bold">
              Hola, {userName} <PiHandWavingDuotone className="w-6 h-6" />
            </span>
            {/* Simple Avatar */}
            <div className="dashboard-avatar w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
              {initial}
            </div>
          </div>
        </header>

        {/* OUTLET FOR PAGES */}
        <div className="flex-1 relative overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default DashboardLayout;
