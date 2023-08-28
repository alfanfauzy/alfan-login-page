import React from 'react';
import ButtonsSocmed from '../../molecules/ButtonsSocmed';
import LoginForm from '../../organism/Login/Form';

const LoginPage: React.FC = () => {
	return (
		<div className="flex h-screen w-screen flex-row">
			<div className="hidden bg-iris-80 md:block md:h-screen md:w-[900px] md:p-32">
				<div className="h-[500px] w-[600px] border bg-white/30 backdrop-blur-sm md:p-10">
					<h1 className="text-[4rem] font-semibold leading-none text-white">
						Lorem ipsum <br />
						dolor <br />
						si amet
					</h1>
					<h1 className=" text-[3rem] font-semibold">consectetur</h1>
					<p className=" mt-10 text-[1rem]">
						Lorem ipsum dolor sit amet, consectetur
						<br /> adipiscing elit, sed do eiusmod tempor <br />
						incididunt ut labore et dolore magna
						<br /> aliqua.
					</p>
				</div>
			</div>

			<div className="  flex min-h-screen w-screen items-center justify-center border px-6 md:w-[700px]">
				<div className="flex w-96 flex-col gap-4 bg-white text-primary">
					<div className="mb-12">
						<h1 className="text-heading-xl font-bold">Hello Everybody</h1>
						<p className="text-lg font-normal">
							Enter your email and password to login.
						</p>
					</div>
					<LoginForm />
					<ButtonsSocmed />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
