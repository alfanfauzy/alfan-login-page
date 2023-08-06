import React from "react";
import ButtonsSocmed from "../../molecules/ButtonsSocmed";
import LoginForm from "../../organism/Login/Form";

const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-row w-screen h-screen">
            <div className="hidden md:block bg-iris-80 md:w-[900px] md:h-screen md:p-32">
                <div className="border backdrop-blur-sm bg-white/30 w-[600px] h-[500px] md:p-10">
                    <h1 className="text-[4rem] leading-none font-semibold text-white">
                        Lorem ipsum <br />
                        dolor <br />
                        si amet
                    </h1>
                    <h1 className="text-[3rem] font-semibold">consectetur</h1>
                    <p className="mt-10 text-[1rem]">
                        Lorem ipsum dolor sit amet, consectetur
                        <br /> adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna
                        <br /> aliqua.
                    </p>
                </div>
            </div>

            <div className="md:w-[700px] border min-h-screen flex items-center justify-center px-6 w-screen">
                <div className="bg-white w-96 text-primary flex flex-col gap-4">
                    <div className="mb-12">
                        <h1 className="text-heading-xl font-bold">Hello</h1>
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
