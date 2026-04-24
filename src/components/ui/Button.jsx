import '../../styles/Button.css';

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
            className={`btn-primary flex items-center justify-center gap-2 py-3 px-4 ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;