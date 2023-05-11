import './App.css';
//! IMPORTAR LOS COMPONENTES, de esta manera los componentes hechos se pueden usar en este archivo
import { useState } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
    //* Estas {} son interpretadas como codigo JS por lo tanto se pueden declarar variables, hacer operaciones, etc. Todo lo que se puede hacer en un JS
    //* Los componentes creados es recomendado colocarlo con primera mayuscula para identificar que es un componente REACT
    //? Ternario --> condicion ? opcion verdadera : opcion falsa
function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([])

  const cambiarMostrar = ( ) => {
    actualizarMostrar(!mostrarFormulario)
  }
  //REgistrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    //Spread operator ... Copia el arreglo
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Lista de equipos
  const equipos = [
    {
      nombre:"Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      nombre:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      nombre:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      nombre:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      nombre:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      nombre:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      nombre:"Innovación y gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]
  return (
    <div>
    <Header />
    {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=> equipo.nombre )} registrarColaborador={registrarColaborador}/> : <div></div>}
    <MiOrg cambiarMostrar={cambiarMostrar}/>
    {
      equipos.map((equipo) => {
        return <Equipo datos={equipo} key={equipo.nombre} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.nombre)}/>
      })
    }
    <Footer/>
    </div>
  );
}

export default App;
