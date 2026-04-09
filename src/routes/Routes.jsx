import { Routes, Route } from "react-router-dom";

import Landing from "../pages/PageLanding.jsx";
import Login from "../pages/PageLogin.jsx";
import Register from "../pages/PageRegister.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default AppRoutes;