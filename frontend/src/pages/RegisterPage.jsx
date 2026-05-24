import { useState } from "react"

function RegisterPage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (

        <div className="min-h-screen bg-[#020617] flex justify-center items-center text-white">

            <div className="bg-[#0f172a] p-10 rounded-3xl w-[450px] border border-slate-800">

                <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">

                    Register 🚀

                </h1>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-[#1e293b] mb-6 outline-none"
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-[#1e293b] mb-6 outline-none"
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-[#1e293b] mb-8 outline-none"
                />

                <button
                    className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 rounded-2xl font-bold"
                >

                    Register

                </button>

            </div>

        </div>
    )
}

export default RegisterPage