import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
//*Destructuracion
const {colorPrimario,colorSecundario,titulo,id} = props.datos
const {colaboradores, eliminarColaborador, actualizarColor} = props
    //Los estilos en linea dentro de JSX se trabajan como objetos de la siguiente manera
//Las propiedades del CSS se transforman de background-color -> backgroundColor en JSX
    const estilos = {
        backgroundColor: hexToRgba(colorPrimario,.5)
    }
    return <>
    {colaboradores.length > 0 && <section className="Equipo" style={estilos}>
    <input
        type="color"
        className="input-color"
        value={colorPrimario}
        onChange={(e) => {
            actualizarColor(e.target.value, id)
        }}
    />
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario}  eliminarColaborador={eliminarColaborador}/>)
            }
        </div>
    </section>
    }</>
}

export default Equipo