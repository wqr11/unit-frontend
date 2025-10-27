import { z } from "zod";

export const SignUpFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });

export type SignUpFormType = z.infer<typeof SignUpFormSchema>;

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
