import "./Header.css"

//Funcion creada para el header la cual devuelve lo que queremos representar en html
//*Cambia el class de CSS a className para no tener incompatibilidad con la palabra reservada class de JS
function Header(){
    return <header className="header">
        <img src="/img/Header.png" alt="Org"/>
    </header>
}
//default: indica que la funcion ..... es la que se va a exportar siempre por defecto
//! SIEMPRE EXPORTAR, si no se exporta no se puede importar por otros archivos
export default Header