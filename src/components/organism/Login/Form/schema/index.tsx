import {z} from 'zod';

export const loginSchema = z.object({
	email: z.string().email('Please input valid email'),
	password: z
		.string()
		.nonempty('Please input password')
		.regex(
			/^(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
			'Password must be at least 8 Characters, 1 Uppercase and 1 Lowercase',
		),
	remember: z.boolean(),
});

export type ValidationLoginSchema = z.infer<typeof loginSchema>;
