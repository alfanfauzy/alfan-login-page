import FormInput from '../../atoms/Inputs/Email';
import FormInputPassword from '../../atoms/Inputs/Password';

type inputType = 'email' | 'password';

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
		const inputComponent: {[key in inputType]: JSX.Element} = {
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
				className="mb-2 block text-md font-semibold text-primary"
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
			{error && <p className="py-1 text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default FormField;
