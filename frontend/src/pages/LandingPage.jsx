import { Link } from "react-router-dom"

function LandingPage() {

    return (

        <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

            {/* NAVBAR */}

            <nav className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 md:p-8 border-b border-slate-800">

                <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 text-center">

                    AI Platform 🚀

                </h1>

                <div className="flex flex-col md:flex-row gap-4">

                    <Link to="/login">

                        <button className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition w-full md:w-auto">

                            Login

                        </button>

                    </Link>

                    <Link to="/register">

                        <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-bold w-full md:w-auto">

                            Get Started

                        </button>

                    </Link>

                </div>

            </nav>

            {/* HERO SECTION */}

            <div className="flex flex-col justify-center items-center text-center max-w-full px-4 md:px-10 py-20 md:py-32">

                <h1 className="text-3xl md:text-7xl leading-tight font-extrabold max-w-5xl">

                    AI Multi-Agent

                    <span className="text-cyan-400 block">

                        Business Platform

                    </span>

                </h1>

                <p className="text-slate-400 text-lg md:text-2xl mt-10 max-w-3xl leading-8 md:leading-10">

                    Chat with AI, generate resumes, create emails,
                    manage AI history and automate productivity workflows.

                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-12 w-full md:w-auto justify-center">

                    <Link to="/register">

                        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold transition w-full">

                            Start Free

                        </button>

                    </Link>

                    <Link to="/login">

                        <button className="bg-slate-800 hover:bg-slate-700 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl transition w-full">

                            Login

                        </button>

                    </Link>

                </div>

            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20 pb-24">

                {/* CARD 1 */}

                <div className="bg-[#0f172a] w-full p-6 md:p-10 rounded-3xl border border-slate-800">

                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 break-words">

                        AI Chat Assistant

                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-8">

                        Ask questions, learn concepts and interact with AI in real time.

                    </p>

                </div>

                {/* CARD 2 */}

                <div className="bg-[#0f172a] w-full p-6 md:p-10 rounded-3xl border border-slate-800">

                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">

                        Resume Builder

                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-8">

                        Generate ATS-friendly professional resumes instantly.

                    </p>

                </div>

                {/* CARD 3 */}

                <div className="bg-[#0f172a] w-full p-6 md:p-10 rounded-3xl border border-slate-800">

                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">

                        Email Generator

                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-8">

                        Create internship, HR and professional emails using AI.

                    </p>

                </div>

                {/* CARD 4 */}

                <div className="bg-[#0f172a] w-full p-6 md:p-10 rounded-3xl border border-slate-800">

                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">

                        AI History

                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-8">

                        Access and manage all your previous AI responses.

                    </p>

                </div>

            </div>

        </div>
    )
}

export default LandingPage