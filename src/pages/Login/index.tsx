import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
    const navigate = useNavigate();
    const [ userName, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("")
    const [ showPassword, setShowPassword ] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({ userName, password});
            navigate("/home");
        } catch (error : any) {
            setError(error.message || "Erro ao fazer login");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit= {handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <label className="block mb-2">
                    <span className="text-gray-700">Usuário</span>
                    <input 
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
                        required
                        placeholder="Digite o seu usuário"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Senha</span>
                    <input type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm pr-10"
                        required
                        placeholder="Digite a sua senha"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-9 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                    </button>
                </label>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Entrar
                </button>
            </form>
        </div>
    )
}