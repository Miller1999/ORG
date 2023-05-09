import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"

const Equipo = (props) => {
//*Destructuracion
const {colorPrimario,colorSecundario,nombre} = props.datos

    //Los estilos en linea dentro de JSX se trabajan como objetos de la siguiente manera
//Las propiedades del CSS se transforman de background-color -> backgroundColor en JSX
    const estilos = {
        backgroundColor: colorSecundario
    }
    return <section className="Equipo" style={estilos}>
        <h3 style={{borderColor: colorPrimario}}>{nombre}</h3>
        <div className="colaboradores">
        </div>
    </section>
}

export default Equipo