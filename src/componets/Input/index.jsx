import "./style.css";

export function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
}) {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}