import { useForm, useFormContext } from "react-hook-form"
import { Stack, TextField } from "@mui/material"
import { formSchema, type FormSchema } from "../types/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { UsersProvider } from "./UsersProvider"
// import RHFAutocomplete from "../../components/RHFAutocomplete"


export default function Users() {

    const { register, formState: { errors } } = useFormContext<FormSchema>()

    // handleSubmit(onSubmit) will only run if the form values are OK.
    return (
        <>
            <Stack sx={{ gap: 2 }}>
                <TextField {...register("name")} label="Name" error={!!errors.name} helperText={errors.name?.message}></TextField>
                <TextField {...register("email")} label="Email" error={!!errors.email} helperText={errors.email?.message}></TextField>

            </Stack>

        </>
    )
}
