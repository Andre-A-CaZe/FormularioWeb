import React from 'react'
import Estudiante from './estudiante'

const Listado = () => {
  return (
    <div className='bg-[#ffba08] rounded-md text-white m-[15px] first:p-[20px] md:h-screen overflow-y-scroll md:w-1/2 lg:w-3/5 '>
      <h1 className='font-bold text-center text-xl pt-4'>Listado de Estudiantes</h1>
      <h2 className='font-bold text-center'>Administrar</h2>

      <Estudiante />

      </div>
  )
}

export default Listado