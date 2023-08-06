import FormInput from "../../atoms/Inputs/Email";
import FormInputPassword from "../../atoms/Inputs/Password";

type inputType = "email" | "password";

type FormFieldProps = {
    field: string;
    name: string;
    value: string;
    onChange: () => void;
    type: inputType;
    placeholder: string;
    error: string | undefined;
};

const FormField = ({
    field,
    name,
    onChange,
    value,
    placeholder,
    type,
    error,
}: FormFieldProps) => {
    const renderInput = ({
        name,
        onChange,
        value,
        placeholder,
    }: FormFieldProps): JSX.Element => {
        const inputComponent: { [key in inputType]: JSX.Element } = {
            email: (
                <FormInput
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    type={type}
                />
            ),
            password: (
                <FormInputPassword
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                />
            ),
        };

        return inputComponent[type];
    };

    return (
        <div>
            <label
                htmlFor={name}
                className="block text-primary text-md font-semibold mb-2"
            >
                {field}
            </label>
            {renderInput({
                name,
                onChange,
                value,
                placeholder,
                type,
                field,
                error,
            })}
            {error && <p className="text-sm text-red-500 py-1">{error}</p>}
        </div>
    );
};

export default FormField;
