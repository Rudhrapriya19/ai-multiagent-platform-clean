import { useState } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

function ResumePage() {

    const [prompt, setPrompt] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const handleGenerate = async () => {

        if (!prompt.trim()) return

        setLoading(true)

        try {

            const email =
                localStorage.getItem("email")

            const res = await axios.post(
                `http://localhost:8080/ai/resume?prompt=${prompt}&email=${email}`
            )

            console.log(res.data)

            setResult(res.data)

        } catch (error) {

            console.log(error)

            alert("Error generating resume")
        }

        setLoading(false)
    }

    return (

        <div className="flex min-h-screen bg-[#020617] text-white">

            <Sidebar />

            <div className="flex-1 p-8">

                <h1 className="text-5xl font-bold text-cyan-400 mb-10">

                    AI Resume Generator 🚀

                </h1>

                <textarea
                    placeholder="Enter resume details..."
                    className="
                        w-full
                        h-52
                        bg-[#0f172a]
                        border
                        border-slate-700
                        rounded-3xl
                        p-6
                        outline-none
                        text-lg
                    "
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <button
                    onClick={handleGenerate}
                    className="
                        mt-6
                        bg-cyan-500
                        hover:bg-cyan-600
                        px-10
                        py-4
                        rounded-2xl
                        text-xl
                        font-bold
                    "
                >

                    Generate Resume

                </button>

                {
                    loading && (

                        <p className="mt-6 text-cyan-400">

                            AI is generating...

                        </p>
                    )
                }

                {
                    result && (

                        <>

                            <div
                                className="
                    mt-10
                    bg-[#0f172a]
                    border
                    border-slate-800
                    rounded-3xl
                    p-8
                    whitespace-pre-wrap
                    leading-10
                    text-white
                    text-lg
                "
                            >

                                {result}

                            </div>

                            <button
                                onClick={() => {

                                    const blob = new Blob(
                                        [result],
                                        { type: "text/plain" }
                                    )

                                    const url =
                                        window.URL.createObjectURL(blob)

                                    const link =
                                        document.createElement("a")

                                    link.href = url

                                    link.download = "Resume.txt"

                                    link.click()

                                    window.URL.revokeObjectURL(url)

                                }}
                                className="
                    mt-6
                    bg-green-500
                    hover:bg-green-600
                    px-8
                    py-4
                    rounded-2xl
                    font-bold
                "
                            >

                                Download Resume

                            </button>

                        </>

                    )
                }

            </div>

        </div>
    )
}

export default ResumePage