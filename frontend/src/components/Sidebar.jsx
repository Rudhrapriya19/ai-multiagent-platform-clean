import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Sidebar() {

    const [open, setOpen] = useState(false)

    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("email")

        alert("Logged Out Successfully 🚪")

        navigate("/login")
    }

    return (

        <>

            {/* MOBILE MENU BUTTON */}

            <button
                onClick={() => setOpen(!open)}
                className="md:hidden fixed top-4 left-4 z-50 bg-cyan-500 text-white p-3 rounded-xl"
            >

                ☰

            </button>

            {/* SIDEBAR */}

            <div
                className={`

                    fixed md:static top-0 left-0 h-screen
                    bg-[#0f172a]
                    text-white
                    w-64
                    p-6
                    transform
                    transition-transform
                    duration-300
                    z-40
                    flex
                    flex-col

                    ${open ? "translate-x-0" : "-translate-x-full"}

                    md:translate-x-0

                `}
            >

                <h1 className="text-4xl font-bold text-cyan-400 mb-10">

                    AI Platform

                </h1>

                <div className="flex flex-col gap-6">

                    <Link to="/dashboard">
                        Dashboard
                    </Link>

                    <Link to="/chat">
                        AI Chat
                    </Link>

                    <Link to="/resume">
                        Resume Builder
                    </Link>

                    <Link to="/email">
                        Email Generator
                    </Link>

                    <Link to="/history">
                        AI History
                    </Link>

                </div>

                {/* LOGOUT BUTTON */}

                <div className="mt-auto">

                    <button
                        onClick={handleLogout}
                        className="
                            w-full
                            bg-red-500
                            hover:bg-red-600
                            transition
                            p-3
                            rounded-xl
                            font-bold
                            mt-8
                        "
                    >

                        Logout 🚪

                    </button>

                </div>

            </div>

        </>
    )
}

export default Sidebar