import React from 'react'
import Estudiante from './estudiante'

const Listado = ({estudiantes, setEstudiante, eliminarEstudiante}) => {

  return (
    <div className='bg-[#495057] rounded-md text-white m-[15px] first:p-[20px] md:h-screen overflow-y-scroll md:w-1/2 lg:w-3/5 p-[20px]'>
      
      <h1 className='font-bold text-center text-xl pt-4'>Listado de Estudiantes</h1>
      <h2 className='font-bold text-center'>Administrar</h2>

      { estudiantes.map((estudiante) => 
          <Estudiante key={estudiante.id} estudiante={estudiante} setEstudiante={setEstudiante} estudiantes={estudiantes} eliminarEstudiante={eliminarEstudiante} />
        )}


      </div>
  )
}

export default Listado