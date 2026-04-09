import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function TopBar() {
  const { user } = useAuth();
  
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : 'U';
  const firstName = user?.name ? user.name.split(' ')[0] : 'Usuario';

  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur shrink-0 flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Mobile Logo */}
      <div className="md:hidden flex items-center gap-2 text-primary">
        <div className="w-6 h-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
          S
        </div>
        <h1 className="font-bold text-lg tracking-tight">StudyMatch</h1>
      </div>

      {/* Desktop Welcome (hidden on mobile) */}
      <div className="hidden md:block">
        <h2 className="text-xl font-bold text-foreground">¡Hola, {firstName}! 👋</h2>
        <p className="text-sm text-muted-foreground">Qué bueno verte por acá.</p>
      </div>

      {/* User Avatar */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 text-accent flex items-center justify-center font-bold">
          {initial}
        </div>
      </div>
    </header>
  );
}
