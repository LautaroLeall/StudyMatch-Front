function Input({
    label,
    type = "text",
    placeholder,
    name,
    register,
    error,
}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium text-slate-700">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                {...(register ? register(name) : {})}
                className={`
                    w-full
                    border
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    transition-all    
                    ${error
                        ? "border-red-500"
                        : "border-slate-300 focus:border-[#1D4BA0]"
                    }
                `}
            />

            {error && (
                <span className="text-red-500 text-sm">
                    {error.message}
                </span>
            )}
        </div>
    );
}

export default Input;