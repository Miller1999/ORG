import "./ListaOpciones.css"

const ListaOpciones = () =>{
    /*Metodo Map -> arreglo.map( (equipo, index) => {
        return <option></option>
    })
    */
    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y gestión"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map( (equipo,index) => {
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones