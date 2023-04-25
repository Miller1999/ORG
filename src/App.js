import './App.css';
//! IMPORTAR LOS COMPONENTES, de esta manera los componentes hechos se pueden usar en este archivo
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario'
    //* Estas {} son interpretadas como codigo JS por lo tanto se pueden declarar variables, hacer operaciones, etc. Todo lo que se puede hacer en un JS
    //* Los componentes creados es recomendado colocarlo con primera mayuscula para identificar que es un componente REACT
function App() {
  return (
    <div>
    <Header />
    <Formulario />
    </div>
  );
}

export default App;
