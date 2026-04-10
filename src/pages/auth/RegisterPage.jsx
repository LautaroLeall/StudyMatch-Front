import AuthLayout from "../../layouts/AuthLayout";
import RegisterForm from "../../components/sections/RegisterForm";

function RegisterPage() {
    return (
        <AuthLayout>
            <h1 className="text-2xl font-bold mb-6 text-center">
                Crear Cuenta 🚀
            </h1>

            <RegisterForm />
        </AuthLayout>
    );
}

export default RegisterPage;