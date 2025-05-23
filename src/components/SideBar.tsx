    import { createElement, useState } from "react";
    import { appRoutes } from "../routes";
    import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

    export default function SideBarI() {
        const [isOpen, setIsOpen] = useState(false);
        const navigate = useNavigate();

        const handleLogout = () => {
            localStorage.removeItem("token");
            navigate("/")
        }

        return (
            <div
                className={`h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? "w-64": "w-16"} flex flex-col`}>
                <button
                    onClick={() => setIsOpen((v) => !v)}
                    className='p-4 focus:outline-none'
                >
                    <span className='block text-x1'>☰</span>
                </button>
                <nav className ="flex-1 mt-4">
                    {appRoutes.map(({ path, label, icon }) => (
                        <NavLink
                            to={path}
                            key={path}
                            className={({ isActive }) => `flex items-center gap-4 p-2 mx-2 mb-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`}
                        >
                            <span>{icon && createElement(icon)}</span>
                            {isOpen && <span className="whitespace-nowrap">{label}</span>}
                        </NavLink>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 p-2 mx-2 rounded hover:bg-gray-700 text-left"
                    >
                        <span>{createElement(LogOut)}</span>
                        {isOpen && <span className="whitespace-nowrap">Sair</span>}
                    </button>
                </div>
            </div>
        )
    }