import { useState } from "react";
import { Link } from "react-router-dom";

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

            {isSignUpOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md shadow-xl'>
                        <h2 className='text-2xl font-bold mb-4'>Criar Conta</h2>

                        <form className='space-y-4'>
                            <input 
                                type='text'
                                placeholder='Nome do usuário'
                                className='w-full px-4 py-2 border rounded'
                            />
                            <input 
                                type='password'
                                placeholder='Defina uma senha'
                                className='w-full px-4 py-2 border rounded'
                            />
                            <input 
                                type='password'
                                placeholder='Confirmar senha'
                                className='w-full px-4 py-2 border rounded'
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Cadastrar
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
                            onClick={() => setIsSignUpOpen(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    
    );
}