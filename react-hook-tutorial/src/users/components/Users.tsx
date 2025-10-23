import { useState } from "react"

export default function Users() {

    const [input, setInput] = useState("ererere")
    return (
        <div><input value={input} /></div>
    )
}
