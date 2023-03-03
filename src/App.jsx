//import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'

function App() {

  const [estudiantes, setEstudiantes] = useState([]);

  
  return (
    <div className='container mx-auto'>
    <Header/>

      <div className='mt-12 md:flex gap-3'>
        <Formulario
        estudiantes={estudiantes}
        setEstudiantes = {setEstudiantes}
        />
        <Listado/>
      </div>
    </div>
  )
}




export default App
