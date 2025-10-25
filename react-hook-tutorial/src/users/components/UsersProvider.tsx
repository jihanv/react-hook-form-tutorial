import { FormProvider, useForm } from "react-hook-form";
import Users from "./Users";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormSchema } from "../types/schema";

export function UsersProvider() {

    // zodResolver(formSchema) is a bridge between your Zod schema and React Hook Form.
    // It tells React Hook Form:
    // “Use this Zod schema(formSchema) to validate the form inputs.”
    // Automatically validate your form values against formSchema whenever a field changes or the form is submitted.
    // Collect any Zod validation errors(like invalid email, required field missing, etc.).
    // Populate them into formState.errors, so you can easily show messages to users.

    const methods = useForm<FormSchema>({
        mode: "all",
        resolver: zodResolver(formSchema),
    },

    )

    return (
        <FormProvider {...methods}>
            <Users />
        </FormProvider>
    )
}