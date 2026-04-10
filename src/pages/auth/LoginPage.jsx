import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "../../components/sections/LoginForm";
import "../../styles/AuthPages.css";

function LoginPage() {
    return (
        <AuthLayout>
            <h1 className="auth-page-title">
                Bienvenido nuevamente
            </h1>

            <LoginForm />
        </AuthLayout>
    );
}

export default LoginPage;