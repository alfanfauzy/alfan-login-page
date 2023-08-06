import { toast } from "react-toastify";
import Button from "../../../atoms/Buttons";
import FormField from "../../../molecules/FormField";
import { ValidationLoginSchema, loginSchema } from "./schema";
import { useForm } from "../../../../hooks/useForm";
import { Controller } from "react-hook-form";
import { useState } from "react";

const LoginForm = () => {
    const [isLoading, setLoading] = useState(false);
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        schema: loginSchema,
        defaultValues: {
            remember: false,
        },
    });

    const handleSubmitLogin = (data: ValidationLoginSchema) => {
        setLoading(true);
        console.log(data);

        setTimeout(() => {
            setLoading(false);
        }, 500);

        toast.success(`You're login!`);
    };

    return (
        <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <div className="flex flex-col gap-6">
                <h3 className="text-2xl">Login</h3>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { name, onChange, value } }) => (
                        <FormField
                            field="Email"
                            name={name}
                            onChange={onChange}
                            value={value}
                            type="email"
                            placeholder="johndoe@test.com"
                            error={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field: { name, onChange, value } }) => (
                        <FormField
                            field="Password"
                            name={name}
                            onChange={onChange}
                            value={value}
                            type="password"
                            placeholder="Password"
                            error={errors.password?.message}
                        />
                    )}
                />

                <div className="flex items-center">
                    <Controller
                        name="remember"
                        control={control}
                        render={({ field: { name, onChange } }) => (
                            <>
                                <input
                                    name={name}
                                    onChange={onChange}
                                    type="checkbox"
                                    id="rememberMe"
                                    className="form-checkbox mr-2"
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="text-gray-700"
                                >
                                    Remember me
                                </label>
                            </>
                        )}
                    />
                    <a href="#" className="ml-auto underline">
                        Forgot Password?
                    </a>
                </div>
                <div className="flex gap-6">
                    <Button size="m" isLoading={isLoading}>
                        Login
                    </Button>
                    <Button
                        variant="secondary"
                        type="button"
                        onClick={() => toast.info("Go to Sign Up Page")}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
