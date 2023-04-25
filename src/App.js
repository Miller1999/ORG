import './App.css';
//! IMPORTAR LOS COMPONENTES, de esta manera los componentes hechos se pueden usar en este archivo
import { useState } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg';
    //* Estas {} son interpretadas como codigo JS por lo tanto se pueden declarar variables, hacer operaciones, etc. Todo lo que se puede hacer en un JS
    //* Los componentes creados es recomendado colocarlo con primera mayuscula para identificar que es un componente REACT
    //? Ternario --> condicion ? opcion verdadera : opcion falsa
function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  const cambiarMostrar = ( ) => {
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div>
    <Header />
    {mostrarFormulario === true ? <Formulario /> : <div></div>}
    <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
