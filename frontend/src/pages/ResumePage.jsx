import { useState } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import jsPDF from "jspdf"

function ResumePage() {

    const [details, setDetails] = useState("")
    const [resume, setResume] = useState("")
    const [loading, setLoading] = useState(false)

    const generateResume = async () => {

        if (!details.trim()) return

        setLoading(true)

        try {

            const res = await axios.post(
                `http://localhost:8080/ai/resume?details=${details}`
            )

            setResume(res.data)

        } catch (error) {

            console.log(error)
        }

        setLoading(false)
    }

    // DOWNLOAD PDF

    const downloadPDF = () => {

        const doc = new jsPDF()

        doc.setFont("helvetica")

        doc.setFontSize(14)

        const lines =
            doc.splitTextToSize(resume, 180)

        doc.text(lines, 10, 20)

        doc.save("AI_Resume.pdf")
    }

    return (

        <div className="flex min-h-screen bg-[#020617] text-white overflow-x-hidden">

            <Sidebar />

            <div className="flex-1 p-4 md:p-10 w-full overflow-x-hidden">

                {/* HEADER */}

                <div className="mb-10">

                    <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-4 break-words">

                        AI Resume Builder 📄

                    </h1>

                    <p className="text-slate-400 text-sm md:text-lg">

                        Generate professional ATS-friendly resumes using AI.

                    </p>

                </div>

                {/* INPUT */}

                <textarea
                    placeholder="Enter skills, education, projects..."
                    className="w-full h-48 md:h-56 bg-[#0f172a] border border-slate-700 rounded-3xl p-4 md:p-6 outline-none text-sm md:text-lg text-white"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />

                {/* BUTTONS */}

                <div className="flex flex-col md:flex-row gap-4 mt-6">

                    <button
                        onClick={generateResume}
                        className="bg-cyan-500 hover:bg-cyan-600 px-6 md:px-8 py-4 rounded-2xl font-bold transition w-full md:w-auto"
                    >

                        Generate Resume

                    </button>

                    {
                        resume && (

                            <button
                                onClick={downloadPDF}
                                className="bg-green-500 hover:bg-green-600 px-6 md:px-8 py-4 rounded-2xl font-bold transition w-full md:w-auto"
                            >

                                Download PDF

                            </button>
                        )
                    }

                </div>

                {/* LOADING */}

                {
                    loading && (

                        <div className="mt-6">

                            <p className="text-cyan-400 text-lg animate-pulse">

                                Generating Resume...

                            </p>

                        </div>
                    )
                }

                {/* OUTPUT */}

                {
                    resume && (

                        <div className="mt-10 bg-gradient-to-br from-[#0f172a] to-[#111827]
                        border border-slate-800 rounded-3xl p-4 md:p-8 shadow-xl overflow-hidden">

                            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">

                                Generated Resume

                            </h2>

                            <div
                                className="bg-[#020617]
                                border border-slate-700
                                rounded-2xl
                                p-4 md:p-6
                                max-h-[600px]
                                overflow-x-auto
                                overflow-y-auto"
                            >

                                <div className="whitespace-pre-wrap text-slate-300 leading-7 md:leading-8 text-sm md:text-lg break-words">

                                    {resume}

                                </div>

                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default ResumePage