import LoginPage from './components/pages/login';
import {ToastContainer} from 'react-toastify';

function App() {
	return (
		<div className="max-h-full bg-white sm:max-w-screen-sm">
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<LoginPage />
		</div>
	);
}

export default App;
