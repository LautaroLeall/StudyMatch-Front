import React from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Home, Users, MessageSquare, User, LogOut, BookOpen
} from 'lucide-react';
import useAuth from '../hooks/useAuth';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { id: 'inicio', path: '/dashboard/inicio', icon: Home, label: 'Inicio' },
    { id: 'matching', path: '/dashboard/matching', icon: Users, label: 'Matching' },
    { id: 'grupos', path: '/dashboard/grupos', icon: MessageSquare, label: 'Grupos' },
    { id: 'perfil', path: '/dashboard/perfil', icon: User, label: 'Mi Perfil' },
  ];

  // Helper function to determine the title based on the path
  const getPageTitle = () => {
    if (location.pathname.includes('chat')) return 'Sala de Estudio';
    return 'Panel Principal';
  };

  // User might not be fully loaded initially if checking session
  const userName = user?.name?.split(' ')[0] || 'Usuario';
  const initial = userName.charAt(0).toUpperCase();

  return (
    <div className="flex h-screen bg-[#F1F5F9] font-sans text-gray-800 selection:bg-blue-200">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20">
        <div>
          <div className="p-7 flex items-center gap-3">
            <div className="bg-linear-to-br from-blue-700 to-blue-900 p-2.5 rounded-2xl shadow-inner border border-blue-600">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-black text-2xl text-gray-900 tracking-tight leading-none">StudyMatch</h1>
              <span className="text-[11px] text-blue-600 font-black uppercase tracking-widest ml-0.5">UNSTA</span>
            </div>
          </div>

          <nav className="px-5 mt-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `
                  w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-bold transition-all duration-200
                  ${isActive
                    ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                    {item.label}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-5 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 text-gray-500 hover:text-red-600 hover:bg-red-50 w-full px-4 py-3.5 rounded-2xl font-bold transition"
          >
            <LogOut className="w-5 h-5" /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* HEADER */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10 sticky top-0">
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            {getPageTitle()}
          </div>
          <div
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition"
            onClick={() => navigate('/dashboard/perfil')}
          >
            <span className="text-sm font-bold text-gray-700">Hola, {userName} 👋</span>
            {/* Simple Avatar */}
            <div className="w-8 h-8 text-sm rounded-full bg-linear-to-br from-blue-100 to-blue-200 text-blue-800 flex items-center justify-center font-bold shrink-0 border border-white shadow-sm">
              {initial}
            </div>
          </div>
        </header>

        {/* OUTLET FOR PAGES */}
        <div className="flex-1 overflow-y-auto relative scroll-smooth">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default DashboardLayout;
