import { useForm } from "react-hook-form"
export default function Users() {

    const { register } = useForm<{ email: string }>()


    return (
        <>
            <input {...register("email")} />
        </>
    )
}
