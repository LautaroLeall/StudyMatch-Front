import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Layout
import AppLayout from './components/layout/AppLayout';

// Pages
import Landing from './pages/Landing';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Matching from './pages/Matching';
import Groups from './pages/Groups';
import GroupDetail from './pages/GroupDetail';
import Profile from './pages/Profile';
import Docs from './pages/Docs';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return children;
}

function OnboardingGuard({ children }) {
  const { user } = useAuth();
  if (user && !user.onboardingComplete) return <Navigate to="/onboarding" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Landing />} />
      <Route path="/register" element={<Register />} />

      {/* Onboarding */}
      <Route path="/onboarding" element={
        <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
      } />

      {/* Protected Routes with AppLayout */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <OnboardingGuard>
            <AppLayout><Dashboard /></AppLayout>
          </OnboardingGuard>
        </ProtectedRoute>
      } />
      <Route path="/matching" element={
        <ProtectedRoute>
          <OnboardingGuard>
            <AppLayout><Matching /></AppLayout>
          </OnboardingGuard>
        </ProtectedRoute>
      } />
      <Route path="/groups" element={
        <ProtectedRoute>
          <OnboardingGuard>
            <AppLayout><Groups /></AppLayout>
          </OnboardingGuard>
        </ProtectedRoute>
      } />
      <Route path="/groups/:id" element={
        <ProtectedRoute>
          <OnboardingGuard>
            <AppLayout><GroupDetail /></AppLayout>
          </OnboardingGuard>
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <OnboardingGuard>
            <AppLayout><Profile /></AppLayout>
          </OnboardingGuard>
        </ProtectedRoute>
      } />
      <Route path="/docs" element={
        <ProtectedRoute>
          <OnboardingGuard>
            <AppLayout><Docs /></AppLayout>
          </OnboardingGuard>
        </ProtectedRoute>
      } />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
