import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpModal from "../../components/SignupModal";

export default function Index() {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Bem vindo ao DevTask</h1>
            <p className="mt-4 text-lg">O teu organizador de tarefas</p>

            <div className='mt-8 flex gap-4'>
                <Link 
                    to='/login'
                    className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
                >
                Entrar
                </Link>
                <button onClick={() => setIsSignUpOpen(true)} className='bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition'>
                    Criar conta
                </button>
            </div>
            <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}/>
        </div>
    
    );
}