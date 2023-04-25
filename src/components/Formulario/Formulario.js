import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")  
    const [equipo,actualizarEquipo] = useState("")
    
    //e.preventDefault -> evitar el comportamiento default de e siendo e el evento 
    const  envio = (e) => {
        e.preventDefault()
    }

    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar el nombre" 
                required 
                valor={nombre} 
                actualizarValor ={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar el puesto" 
                required
                valor={puesto} 
                actualizarValor ={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de la foto" 
                required
                valor={foto} 
                actualizarValor ={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo = {actualizarEquipo}
            />
            <Boton>
                Crear
            </Boton> 
        </form>
    </section>
}

export default Formulario