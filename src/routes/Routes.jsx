import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardInicio from "../pages/dashboard/DashboardInicio";
import DashboardMatching from "../pages/dashboard/DashboardMatching";
import DashboardGrupos from "../pages/dashboard/DashboardGrupos";
import DashboardPerfil from "../pages/dashboard/DashboardPerfil";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Protected Dashboard Routes */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="inicio" element={<DashboardInicio />} />
                    <Route path="matching" element={<DashboardMatching />} />
                    <Route path="grupos" element={<DashboardGrupos />} />
                    <Route path="perfil" element={<DashboardPerfil />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;