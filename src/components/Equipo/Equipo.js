import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"

const Equipo = (props) => {
//*Destructuracion
const {colorPrimario,colorSecundario,nombre} = props.datos
const {colaboradores} = props
    //Los estilos en linea dentro de JSX se trabajan como objetos de la siguiente manera
//Las propiedades del CSS se transforman de background-color -> backgroundColor en JSX
    const estilos = {
        backgroundColor: colorSecundario
    }
    return <>
    {colaboradores.length > 0 && <section className="Equipo" style={estilos}>
        <h3 style={{borderColor: colorPrimario}}>{nombre}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} colorSecundario={colorSecundario}/>)
            }
        </div>
    </section>
    }</>
}

export default Equipo