import {useState} from 'react';
import {AiOutlineEye, AiFillEyeInvisible} from 'react-icons/ai';

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
		<div className="flex flex-row justify-between gap-2 rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600">
			<input
				type={showPassword ? 'text' : 'password'}
				value={value}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				className="w-full"
			/>
			<button type="button" onClick={handleTogglePassword}>
				{showPassword ? (
					<AiOutlineEye size={20} className="cursor-pointer text-gray-500" />
				) : (
					<AiFillEyeInvisible
						size={20}
						className="cursor-pointer text-gray-500"
					/>
				)}
			</button>
		</div>
	);
};

export default FormInputPassword;
