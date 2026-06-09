import { useState } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

function ChatPage() {

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {

        if (!message.trim()) return

        const userMessage = {
            role: "user",
            text: message
        }

        setMessages((prev) => [...prev, userMessage])

        setLoading(true)

        try {

            const email =
                localStorage.getItem("email")

            const res = await axios.post(
                `http://localhost:8080/ai/chat?message=${message}&email=${email}`
            )

            const aiMessage = {
                role: "ai",
                text: res.data
            }

            setMessages((prev) => [...prev, aiMessage])

        } catch (error) {

            console.log(error)

            const errorMessage = {
                role: "ai",
                text: "Error getting AI response"
            }

            setMessages((prev) => [...prev, errorMessage])
        }

        setMessage("")
        setLoading(false)
    }

    return (

        <div className="flex min-h-screen bg-[#020617] text-white overflow-x-hidden">

            <Sidebar />

            <div className="flex-1 flex flex-col w-full overflow-x-hidden">

                {/* HEADER */}

                <div className="p-4 md:p-8 border-b border-slate-800 bg-[#0f172a]">

                    <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 break-words">

                        AI Chat Assistant 🤖

                    </h1>

                </div>

                {/* CHAT AREA */}

                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 space-y-6">

                    {
                        messages.map((msg, index) => (

                            <div
                                key={index}
                                className={`

                                    w-full
                                    max-w-full
                                    md:max-w-5xl
                                    p-4 md:p-8
                                    rounded-3xl
                                    break-words
                                    overflow-hidden

                                    ${msg.role === "user"
                                    ? "bg-cyan-500 ml-auto text-right"
                                    : "bg-[#0f172a] border border-slate-800"}

                                `}
                            >

                                {
                                    msg.role === "user" ? (

                                        <p className="text-sm md:text-lg leading-7 md:leading-8 break-words">
                                            {msg.text}
                                        </p>

                                    ) : (

                                        <div className="space-y-3">

                                            {
                                                msg.text
                                                    .split("\n")
                                                    .map((line, i) => {

                                                        const cleanText = line
                                                            .replace(/\*\*/g, "")
                                                            .trim()

                                                        if (!cleanText) {
                                                            return <div key={i} className="h-2"></div>
                                                        }

                                                        // RED MAIN TOPIC

                                                        if (/^\d+\./.test(cleanText)) {

                                                            return (
                                                                <h1
                                                                    key={i}
                                                                    className="
                                        text-1g
                                        md:text-xl
                                        font-semibold
                                        text-red-400
                                        mt-3
                                        mb-2
                                        leading-8
                                    "
                                                                >
                                                                    {cleanText}
                                                                </h1>
                                                            )
                                                        }

                                                        // BLUE SUB TOPIC

                                                        if (cleanText.endsWith(":")) {

                                                            return (
                                                                <h2
                                                                    key={i}
                                                                    className="
                                        text-lg
                                        md:text-xl
                                        font-semibold
                                        text-cyan-400
                                        ml-4
                                        mb-2
                                    "
                                                                >
                                                                    • {cleanText}
                                                                </h2>
                                                            )
                                                        }

                                                        // WHITE CONTENT

                                                        return (
                                                            <p
                                                                key={i}
                                                                className="
                                    text-white
                                    text-base
                                    md:text-lg
                                    leading-8
                                    ml-6
                                    mb-2
                                "
                                                            >
                                                                {cleanText}
                                                            </p>
                                                        )
                                                    })
                                            }

                                        </div>

                                    )

                                }

                            </div>

                        ))
                    }

                    {/* LOADING */}

                    {/* LOADING */}

                    {
                        loading && (

                            <div className="bg-[#0f172a] border border-slate-800 p-4 md:p-5 rounded-3xl max-w-sm">

                                <p className="text-cyan-400 animate-pulse">

                                    AI is typing...

                                </p>

                            </div>
                        )
                    }

                </div>


                {/* INPUT AREA */}

                <div className="p-4 md:p-6 border-t border-slate-800 bg-[#0f172a] flex flex-col md:flex-row gap-4">

                    <input
                        type="text"
                        placeholder="Ask anything..."
                        className="
                            flex-1
                            bg-[#1e293b]
                            border
                            border-slate-700
                            rounded-2xl
                            p-4
                            outline-none
                            text-white
                            w-full
                        "
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button
                        onClick={sendMessage}
                        className="
                            bg-cyan-500
                            hover:bg-cyan-600
                            px-6
                            md:px-8
                            py-4
                            rounded-2xl
                            font-bold
                            transition
                            w-full
                            md:w-auto
                        "
                    >

                        Send

                    </button>

                </div>

            </div>

        </div>
    )
}

export default ChatPage