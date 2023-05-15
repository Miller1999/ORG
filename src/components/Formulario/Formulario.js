import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")  
    const [equipo,actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    const {registrarColaborador,crearEquipo} = props
    
    //e.preventDefault -> evitar el comportamiento default de e siendo e el evento 
    const  envio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
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
                equipos = {props.equipos}
            />
            <Boton>
                Crear
            </Boton> 
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresar el titulo" 
                required 
                valor={titulo} 
                actualizarValor ={actualizarTitulo}
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color} 
                actualizarValor ={actualizarColor}
            />
            <Boton>
            Registrar equipo
        </Boton> 
        </form>
    </section>
}

export default Formulario