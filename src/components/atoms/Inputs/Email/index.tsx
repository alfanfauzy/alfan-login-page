type FormInput = {
    name: string;
    value: string;
    onChange: () => void;
    placeholder: string;
    type: string;
};

const FormInput = ({ onChange, value, placeholder, name, type }: FormInput) => {
    return (
        <input
            type={type}
            id={name}
            name={name}
            className="border p-4 rounded-lg w-full"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default FormInput;
