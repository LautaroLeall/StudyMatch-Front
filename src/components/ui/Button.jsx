function Button({
    children,
    type = "button",
    onClick,
    className = "",
    disabled = false,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                w-full
                bg-[#1D4BA0]
                hover:bg-[#163D84]
                text-white
                font-medium
                py-3
                px-4
                rounded-lg
                transition-all
                duration-300
                cursor-pointer
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${className}
            `}
        >
            {children}
        </button>
    );
}

export default Button;