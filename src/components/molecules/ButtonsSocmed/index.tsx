import {toast} from 'react-toastify';
import Button from '../../atoms/Buttons';

const ButtonsSocmed = () => {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-center">Or, login with</p>
			<div className="flex gap-4">
				<Button
					variant="secondary"
					size="s"
					onClick={() => toast.info('Login With Facebook')}
				>
					Facebook
				</Button>
				<Button
					variant="secondary"
					size="s"
					onClick={() => toast.info('Login With Linkedin')}
				>
					Linkedin
				</Button>
			</div>
		</div>
	);
};

export default ButtonsSocmed;
