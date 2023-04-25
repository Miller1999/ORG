import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const [valor,setValor] = useState("")
    const placeholderMod = `${props.placeholder}...`
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderMod} required={props.required} value={props.valor} onChange={manejarCambio}></input>
    </div> 
}

export default CampoTexto