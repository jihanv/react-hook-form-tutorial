import { useState } from "react"

export default function Users() {

    const [input, setInput] = useState("")
    return (
        <div><input value={input} onChange={(e) => setInput(e.target.value)} /></div>
    )
}
