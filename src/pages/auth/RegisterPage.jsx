import AuthLayout from "../../layouts/AuthLayout";
import RegisterForm from "../../components/sections/RegisterForm";
import "../../styles/AuthPages.css";

function RegisterPage() {
    return (
        <AuthLayout>
            <h1 className="auth-page-title">
                Crear Cuenta
            </h1>

            <RegisterForm />
        </AuthLayout>
    );
}

export default RegisterPage;