import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/user";

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignUpModal: FC<SignUpModalProps> = ({ isOpen, onClose}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    
    const handleRegister = async () => {
        setError("");
        if (!username || !password || !confirmPassword) {
            setError("Preencha todos os campos.");
            console.log("erro");
            return;
        }

        if (password !== confirmPassword) {
            setError("As senhas não coincidem");
            return null;
        }
        setLoading(true);
        try {
            const exists = await getUser(username);
            if (exists) {
                setError("Usuário já existe");
            } else {
                navigate("/signup", {state: { username, password}});
            }
        } catch (error) {
            console.error("Erro ao verificar usuário:", error);
            setError("Erro ao verificar usuário");
        } finally {
            setLoading(false);
        }
    }

    if (!isOpen) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md shadow-xl'>
                <h2 className='text-2xl font-bold mb-4'>Criar Conta</h2>
                {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
                <form className='space-y-4'>
                    <input 
                        type='text'
                        placeholder='Nome do usuário'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full px-4 py-2 border rounded'
                    />
                    <input 
                        type='password'
                        placeholder='Defina uma senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-2 border rounded'
                    />
                    <input 
                        type='password'
                        placeholder='Confirmar senha'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='w-full px-4 py-2 border rounded'
                    />

                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={() => handleRegister()}
                    >
                        {loading ? "Verificando..." : "Cadastrar"}
                    </button>
                </form>
                <div className='mt-4 text-center'>
                        <p className='text-sm text-gray-500 mb-2'>Ou entre com:</p>
                    <button className='flex items-center justify-center gap-2 w-full border px-4 py-2 rounded hover:bg-gray-100'>
                        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Github' className='w-5 h-5' />
                    </button>
                </div>

                <button
                    className='mt-6 text-sm text-gray-600 hover:underline block mx-auto'
                    onClick={onClose}
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
}

export default SignUpModal;