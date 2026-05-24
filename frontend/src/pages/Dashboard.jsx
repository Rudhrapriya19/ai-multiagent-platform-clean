import Sidebar from "../components/Sidebar"

function DashboardPage() {

    return (

        <div className="flex flex-col md:flex-row min-h-screen bg-[#020617] text-white">

            <Sidebar />

            <div className="flex-1 ml-0 md:ml-64 p-4 md:p-10">

                <h1 className="text-xl md:text-5xl break-words font-bold text-cyan-400 mb-10">

                    AI Dashboard 🚀

                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* AI CHAT */}

                    <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800">

                        <h2 className="text-3xl font-bold text-cyan-400 mb-4">

                            AI Chat Assistant

                        </h2>

                        <p className="text-slate-300">

                            Chat with AI assistant.

                        </p>

                    </div>

                    {/* RESUME */}

                    <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800">

                        <h2 className="text-3xl font-bold text-cyan-400 mb-4">

                            Resume Builder

                        </h2>

                        <p className="text-slate-300">

                            Create ATS-friendly resumes.

                        </p>

                    </div>

                    {/* EMAIL */}

                    <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800">

                        <h2 className="text-3xl font-bold text-cyan-400 mb-4">

                            Email Generator

                        </h2>

                        <p className="text-slate-300">

                            Generate professional emails instantly.

                        </p>

                    </div>

                    {/* HISTORY */}

                    <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800">

                        <h2 className="text-3xl font-bold text-cyan-400 mb-4">

                            AI History

                        </h2>

                        <p className="text-slate-300">

                            View all previous AI responses.

                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default DashboardPage