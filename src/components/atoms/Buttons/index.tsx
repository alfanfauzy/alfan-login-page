import {ButtonHTMLAttributes, ReactNode} from 'react';
import Loading from '../Loading';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isLoading?: boolean;
	children: ReactNode;
	size?: 's' | 'm' | 'l';
	variant?: 'primary' | 'secondary';
};

const Button = ({
	children,
	isLoading,
	size = 's',
	variant = 'primary',
	...rest
}: ButtonProps) => {
	const variantButton = {
		primary: 'bg-iris-80 text-white',
		secondary: 'text-primary',
	};

	const sizeButton = {
		s: 'p-2 font-medium',
		m: 'p-4 font-semibold',
		l: 'p-6',
	};
	return (
		<button
			className={`w-full rounded-md border ${sizeButton[size]} ${variantButton[variant]}`}
			{...rest}
		>
			{isLoading ? <Loading size="s" /> : children}
		</button>
	);
};

export default Button;
