function AuthLayout({ children }) {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-100">
            <section className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                {children}
            </section>
        </main>
    );
}

export default AuthLayout;