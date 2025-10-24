import { useForm } from "react-hook-form"
import { Stack, TextField } from "@mui/material"
import { formSchema, type FormSchema } from "../types/schema"
import { zodResolver } from "@hookform/resolvers/zod"


export default function Users() {

    // zodResolver(formSchema) is a bridge between your Zod schema and React Hook Form.
    // It tells React Hook Form:
    // “Use this Zod schema(formSchema) to validate the form inputs.”
    // Automatically validate your form values against formSchema whenever a field changes or the form is submitted.
    // Collect any Zod validation errors(like invalid email, required field missing, etc.).
    // Populate them into formState.errors, so you can easily show messages to users.
    const { register } = useForm<FormSchema>({
        mode: "all",
        resolver: zodResolver(formSchema),
    },

    )


    // handleSubmit(onSubmit) will only run if the form values are OK.
    return (
        <>
            <Stack>
                <TextField {...register("name")} label="Name"></TextField>
                <TextField {...register("email")} label="Email"></TextField>
            </Stack>

        </>
    )
}
