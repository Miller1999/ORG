import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () => {
    //e.preventDefault -> evitar el comportamiento default de e siendo e el evento 
    const envio = (e) => {
        e.preventDefault()
    }

    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar el nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar el puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de la foto"/>
            <ListaOpciones />
            <Boton>
                Crear
            </Boton> 
        </form>
    </section>
}

export default Formulario