import React from 'react'
import './index.css'

function CampoTexto(props) {
    const placeHolder = `${props.placeholder}...`
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
  return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolder} type={props.type} />
    </div>
  )
}

export default CampoTexto