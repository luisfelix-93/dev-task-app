import React, { useState }from 'react'
import './index.css'
import Layout from '../../components/Layout'
import CampoTexto from '../../components/CampoTexto'
import Botao from '../../components/Botao'
function Login(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoLogar({
      user,
      password
    })
  }
  return (
    <div className='login'>
      <Layout/>
      <div className='login-form'>
      <section>
        <CampoTexto
          obrigatorio={true}
          label="Usuário"
          placeholder = "Insira aqui teu usuário"
          valor={user}
          aoAlterado={setUser}
          type="text"
        />
        <CampoTexto
        obrigatorio={true}
        label="Senha"
        placeholder="Insira aqui a tua senha"
        valor={password}
        aoAlterado={setPassword}
        type="password"
        />
        <Botao>
          Login
        </Botao>
        <a href="/new_user">Esqueci Usuário/Senha</a>
      </section>
    </div>
    </div>
  )
}

export default Login