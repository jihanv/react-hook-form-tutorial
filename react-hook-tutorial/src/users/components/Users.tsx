import { useForm } from "react-hook-form"
import { TextField } from "@mui/material"
import type { FormSchema } from "../types/schema"



export default function Users() {


    // Destructure the `errors` object from formState.
    // `formState` contains the current status of the form (like validation errors, touched fields, isValid, etc.)
    // Here we only extract `errors` to easily display validation messages for specific fields.
    const { register } = useForm<FormSchema>({ mode: "all" })


    // handleSubmit(onSubmit) will only run if the form values are OK.
    return (
        <>
            <TextField {...register("email")}></TextField>
        </>
    )
}
