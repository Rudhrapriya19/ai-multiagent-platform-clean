import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {

        try {

            const res = await axios.post(

                "http://localhost:8080/auth/login",

                {

                    email,
                    password

                }
            )

            localStorage.setItem(

                "token",
                res.data
            )

            alert("Login Successful 🚀")

            navigate("/dashboard")

        } catch (error) {

            console.log(error)

            alert("Invalid Credentials ❌")
        }
    }

    return (

        <div className="min-h-screen bg-[#020617] flex justify-center items-center text-white">

            <div className="bg-[#0f172a] p-10 rounded-3xl w-[450px] border border-slate-800">

                <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">

                    Login 🚀

                </h1>

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
                    onClick={handleLogin}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 rounded-2xl font-bold"
                >

                    Login

                </button>

                <p className="text-slate-400 mt-8 text-center">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-cyan-400 ml-2"
                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>
    )
}

export default LoginPage