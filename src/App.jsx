//import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'

function App() {
  //Captura de Estudiantes
  const [estudiantes, setEstudiantes] = useState([]);

  //Para editar
  const [estudiante, setEstudiante] = useState({});

  
  return (
    <div className='container mx-auto'>
    <Header/>

      <div className='mt-12 md:flex gap-3'>
        <Formulario
        estudiantes={estudiantes}
        setEstudiantes = {setEstudiantes}
        estudiante={estudiante}
        setEstudiante={setEstudiante}
        />
        <Listado
        estudiantes={estudiantes}
        setEstudiante={setEstudiante}
        />
      </div>
    </div>
  )
}


export default App
