import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "../../components/sections/LoginForm";

function LoginPage() {
    return (
        <AuthLayout>
            <h1 className="text-2xl font-bold mb-6 text-center">
                Bienvenido nuevamente 👋
            </h1>

            <LoginForm />
        </AuthLayout>
    );
}

export default LoginPage;