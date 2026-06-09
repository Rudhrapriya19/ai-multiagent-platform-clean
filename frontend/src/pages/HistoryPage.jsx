import { useEffect, useState } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"

function HistoryPage() {

    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchHistory()

    }, [])

    const fetchHistory = async () => {

        try {

            const email =
                localStorage.getItem("email")

            const res = await axios.get(
                `http://localhost:8080/ai/history/${email}`
            )

            setHistory(res.data)

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)
        }
    }

    return (

        <div className="flex min-h-screen bg-[#020617] text-white overflow-x-hidden w-full">

            <Sidebar />

            <div className="flex-1 p-4 md:p-10 w-full overflow-x-hidden">

                {/* HEADER */}

                <div className="mb-10">

                    <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-4 break-words">

                        AI History 📜

                    </h1>

                    <p className="text-slate-400 text-sm md:text-lg break-words">

                        View all your previous AI-generated responses and prompts.

                    </p>

                </div>

                {/* LOADING */}

                {
                    loading && (

                        <div className="flex justify-center items-center h-40">

                            <p className="text-cyan-400 text-xl animate-pulse">

                                Loading History...

                            </p>

                        </div>
                    )
                }

                {/* EMPTY STATE */}

                {
                    !loading && history.length === 0 && (

                        <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 md:p-10 text-center w-full">

                            <h2 className="text-2xl font-bold text-cyan-400 mb-4">

                                No History Found

                            </h2>

                            <p className="text-slate-400">

                                Your AI prompts and responses will appear here.

                            </p>

                        </div>
                    )
                }

                {/* HISTORY CARDS */}

                <div className="space-y-8 w-full">

                    {
                        history.map((item) => (

                            <div
                                key={item.id}
                                className="w-full max-w-full bg-gradient-to-br from-[#0f172a] to-[#111827]
                                border border-slate-800
                                rounded-3xl
                                p-4 md:p-8
                                shadow-xl
                                hover:scale-[1.01]
                                transition-all duration-300
                                overflow-hidden"
                            >

                                {/* PROMPT */}

                                <div className="mb-8">

                                    <h2 className="text-cyan-400 text-xl md:text-2xl font-bold mb-4">

                                        Prompt 💡

                                    </h2>

                                    <div className="bg-[#020617] border border-slate-700 rounded-2xl p-4 overflow-hidden">

                                        <p className="text-slate-300 whitespace-pre-wrap break-words leading-7 text-sm md:text-lg w-full">

                                            {item.prompt}

                                        </p>

                                    </div>

                                </div>

                                {/* RESPONSE */}

                                <div>

                                    <h2 className="text-cyan-400 text-xl md:text-2xl font-bold mb-4">

                                        Response 🤖

                                    </h2>

                                    <div
                                        className="bg-[#020617]
                                        border border-slate-700
                                        rounded-2xl
                                        p-4
                                        max-h-[500px]
                                        overflow-x-auto
                                        overflow-y-auto
                                        w-full"
                                    >

                                        <p className="text-slate-300 whitespace-pre-wrap break-words leading-7 md:leading-8 text-sm md:text-lg w-full">

                                            {item.response}

                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default HistoryPage