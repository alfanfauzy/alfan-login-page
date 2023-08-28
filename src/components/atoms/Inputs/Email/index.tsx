type FormInput = {
	name: string;
	value: string;
	onChange: () => void;
	placeholder: string;
	type: string;
};

const FormInput = ({onChange, value, placeholder, name, type}: FormInput) => {
	return (
		<input
			type={type}
			id={name}
			name={name}
			className="w-full rounded-lg border p-4"
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default FormInput;
