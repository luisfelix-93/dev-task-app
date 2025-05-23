import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login, register, type User } from "../../api/user";

interface LocationState {
    username: string;
    password: string;
}

export default function SignUp() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as LocationState;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!fullName || !email) {
            setError("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        try {
            const newUser: User = {
                userName: state.username,
                password: state.password,
                email,
                fullName
            }

            await register(newUser);
            console.log("Usuário cadastrado com sucesso!", newUser);
            // Redirecionar ou mostrar mensagem de sucesso
            await login({userName: state.username, password: state.password});
            const token = localStorage.getItem("token");
            console.log("Usuário logado com sucesso", token)
            navigate("/home")

        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            setError("Erro ao cadastrar usuário. Tente novamente.");
        }
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50'>
            <form
                onSubmit={handleSubmit}
                className='bg-white p-8 rounded shadow-md w-full max-w-sm'
            >
                <h2 className='text-2x1 font-bold mb-6 text-center'> Finalizar Cadastro</h2>

                {error && <p className='text-red-500 text-sm mb-4'> {error} </p>}

                <label className='block mb-2 text-sm font-medium'>Nome de Usuário:</label>
                <input
                    type='text'
                    value={state.username}
                    disabled
                    className='w-full p-2 border rounded bg-gray-100 text-gray-600 cursor-not-allowed mb-4'
                />
                <label className='block mb-2 text-sm font-medium'>Nome Completo:</label>
                <input 
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className='w-full p-2 border rounded mb-4'
                />
                <label className='block mb-2 text-sm font-medium'>Email:</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full p-2 border rounded mb-4'
                />
                <label className='block mb-2 text-sm font-medium'>Senha:</label>
                <input 
                    type="password"
                    value={state.password}
                    disabled
                    className='w-full p-2 border rounded bg-gray-100 text-gray-600 cursor-not-allowed mb-4'
                />
                <button
                    type='submit'
                    className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition'
                >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}