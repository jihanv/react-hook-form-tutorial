import { z } from "zod";
import { patterns } from "../../constants";

// Validate the email string against the predefined regex in patterns.email.
// Returns true if the input follows a valid email format, false otherwise.
export const formSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((userInput) => patterns.email.test(userInput), {
      message: "Email not valid",
    }),
});

//Convert schema into a type that can be used
export type FormSchema = z.infer<typeof formSchema>;
