import { useForm } from "react-hook-form"
export default function Users() {


    // Destructure the `errors` object from formState.
    // `formState` contains the current status of the form (like validation errors, touched fields, isValid, etc.)
    // Here we only extract `errors` to easily display validation messages for specific fields.
    const { register, formState: { errors }, handleSubmit } = useForm<{ email: string }>({ mode: "all" })

    const onSubmit = () => {
        console.log("submit")
    }

    // handleSubmit(onSubmit) will only run if the form values are OK.
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", {
                required: {
                    value: true,
                    message: "Email is required",
                },
                maxLength: {
                    value: 20,
                    message: "Too many characters",
                }
            })}
                placeholder="Email" />
            <p>{errors.email?.message}</p>
        </form>
    )
}
