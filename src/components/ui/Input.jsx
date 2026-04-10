import '../../styles/Input.css';

function Input({
    label,
    type = "text",
    placeholder,
    name,
    register,
    error,
}) {
    return (
        <div className="input-wrapper">
            <label className="input-label">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                {...(register ? register(name) : {})}
                className={`input-field ${error ? 'input-field-error' : 'input-field-normal'}`}
            />

            {error ? (
                <span className="input-error-text">
                    {error.message}
                </span>
            ) : (
                <span className="input-error-placeholder"></span>
            )}
        </div>
    );
}

export default Input;