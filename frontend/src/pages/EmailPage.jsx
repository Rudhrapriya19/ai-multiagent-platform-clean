import { useState } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

function EmailPage() {

    const [prompt, setPrompt] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const generateEmail = async () => {

        if (!prompt.trim()) return

        setLoading(true)

        try {

            // IMPORTANT FIX

            const encodedPrompt =
                encodeURIComponent(prompt)

            const res = await axios.post(
                `http://localhost:8080/ai/email?prompt=${encodedPrompt}`
            )

            setEmail(res.data)

        } catch (error) {

            console.log(error)

            alert("Email generation failed")
        }

        setLoading(false)
    }

    return (

        <div className="flex min-h-screen bg-[#020617] text-white overflow-x-hidden">

            <Sidebar />

            <div className="flex-1 p-4 md:p-10 w-full overflow-x-hidden">

                {/* HEADER */}

                <div className="mb-10">

                    <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-4 break-words">

                        AI Email Generator 📧

                    </h1>

                    <p className="text-slate-400 text-sm md:text-lg">

                        Generate professional AI-powered emails instantly.

                    </p>

                </div>

                {/* TEXTAREA */}

                <textarea
                    placeholder="Enter email purpose..."
                    className="w-full h-56 bg-[#0f172a]
                    border border-slate-700
                    rounded-3xl
                    p-4 md:p-6
                    outline-none
                    text-white
                    text-sm md:text-lg"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                {/* BUTTON */}

                <button
                    onClick={generateEmail}
                    className="bg-cyan-500 hover:bg-cyan-600
                    px-6 md:px-8
                    py-3 md:py-4
                    rounded-2xl
                    font-bold
                    mt-6
                    transition
                    w-full md:w-auto"
                >

                    Generate Email

                </button>

                {/* LOADING */}

                {
                    loading && (

                        <div className="mt-6">

                            <p className="text-cyan-400 animate-pulse text-lg">

                                Generating Email...

                            </p>

                        </div>
                    )
                }

                {/* GENERATED EMAIL */}

                {
                    email && (

                        <div
                            className="mt-10
                            bg-gradient-to-br
                            from-[#0f172a]
                            to-[#111827]
                            p-4 md:p-8
                            rounded-3xl
                            border border-slate-800
                            break-words
                            overflow-hidden
                            shadow-xl"
                        >

                            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">

                                Generated Email

                            </h2>

                            <div
                                className="bg-[#020617]
                                border border-slate-700
                                rounded-2xl
                                p-4 md:p-6
                                overflow-x-auto"
                            >

                                <p
                                    className="whitespace-pre-wrap
                                    break-words
                                    leading-7 md:leading-8
                                    text-slate-300
                                    text-sm md:text-lg"
                                >

                                    {email}

                                </p>

                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default EmailPage