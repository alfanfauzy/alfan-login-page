import { useState } from "react";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";

type FormInputPasswordProps = {
    name: string;
    value: string;
    onChange: () => void;
    placeholder: string;
};

const FormInputPassword = ({
    onChange,
    value,
    name,
    placeholder,
}: FormInputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-row gap-2 justify-between border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <input
                type={showPassword ? "text" : "password"}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full"
            />
            <button type="button" onClick={handleTogglePassword}>
                {showPassword ? (
                    <AiOutlineEye
                        size={20}
                        className="text-gray-500 cursor-pointer"
                    />
                ) : (
                    <AiFillEyeInvisible
                        size={20}
                        className="text-gray-500 cursor-pointer"
                    />
                )}
            </button>
        </div>
    );
};

export default FormInputPassword;
