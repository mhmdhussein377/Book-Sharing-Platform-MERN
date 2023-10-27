
const TextInput = ({
    label,
    name,
    type,
    value,
    onChange,
    error
}) => {
    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required/> 
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default TextInput;
