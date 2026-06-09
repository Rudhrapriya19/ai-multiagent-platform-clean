import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function RegisterPage() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () => {

        try {

            const response = await axios.post(
                "http://localhost:8080/auth/register",
                {
                    name: name,
                    email: email,
                    password: password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            console.log(response.data)

            alert("Registration Successful 🚀")

            navigate("/login")

        } catch (error) {

            console.log(error)

            if (error.response) {

                console.log(error.response.data)
                console.log(error.response.status)
            }

            alert("Registration Failed ❌")
        }
    }

    return (

        <div className="min-h-screen bg-[#020617] flex justify-center items-center">

            <div className="bg-[#0f172a] p-10 rounded-3xl w-[400px] border border-slate-800">

                <h1 className="text-5xl text-cyan-400 font-bold text-center mb-10">

                    Register

                </h1>

                <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full p-4 rounded-xl bg-[#1e293b] text-white mb-6 outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full p-4 rounded-xl bg-[#1e293b] text-white mb-6 outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-4 rounded-xl bg-[#1e293b] text-white mb-8 outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleRegister}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-4 rounded-xl font-bold text-xl text-black"
                >

                    Register

                </button>

            </div>

        </div>
    )
}

export default RegisterPage