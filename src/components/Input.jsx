function Input({type, placeholder, name, value, onChange }) {
    return(
        <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} />
    )
}

export default Input;   