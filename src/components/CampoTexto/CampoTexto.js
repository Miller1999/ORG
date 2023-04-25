import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderMod}></input>
    </div>
}

export default CampoTexto