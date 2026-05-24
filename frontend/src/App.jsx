import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/Dashboard"
import ChatPage from "./pages/ChatPage"
import ResumePage from "./pages/ResumePage"
import EmailPage from "./pages/EmailPage"
import HistoryPage from "./pages/HistoryPage"

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* LANDING PAGE */}

                <Route
                    path="/"
                    element={<LandingPage />}
                />

                {/* LOGIN */}

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                {/* REGISTER */}

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                {/* DASHBOARD */}

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />

                {/* AI CHAT */}

                <Route
                    path="/chat"
                    element={<ChatPage />}
                />

                {/* RESUME BUILDER */}

                <Route
                    path="/resume"
                    element={<ResumePage />}
                />

                {/* EMAIL GENERATOR */}

                <Route
                    path="/email"
                    element={<EmailPage />}
                />

                {/* AI HISTORY */}

                <Route
                    path="/history"
                    element={<HistoryPage />}
                />

            </Routes>

        </BrowserRouter>
    )
}

export default App