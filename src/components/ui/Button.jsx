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
            className={`btn-primary ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;