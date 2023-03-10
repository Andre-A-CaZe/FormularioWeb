import React from 'react'

const Estudiante = ({estudiante, setEstudiante}) => {

  const {nombre, carrera, semestre, promedio} = estudiante;

  return (
    <div className='px-4 mt-5 py-4 rounded-md shadow-lg'>
    <p className='font-bold mb-2 uppercase'>
        Nombre: <span className='font-normal ml-3 normal-case'>{nombre}</span>
        </p>
    <p className='font-bold mb-2 uppercase'>
        Carrera: <span className='font-normal ml-3 normal-case'>{carrera}</span>
    </p>
    <p className='font-bold mb-2 uppercase'>
        Semestre: <span className='font-normal ml-3 normal-case'>{semestre}</span>
    </p>
    <p className='font-bold mb-2 uppercase'>
        Promedio: <span className='font-normal ml-3 normal-case'>{promedio}</span>
    </p>
    <div>
      <button type='button'
      className='py-3 px-9 mx-2 text-white bg-red-600 hover:bg-rose-400 rounded-md' onClick={()=>{}} >Eliminar</button>
      <button type='button'
      className='py-3 px-9 mx-2 text-white bg-green-600 hover:bg-blue-400 rounded-md' onClick={()=>setEstudiante(estudiante)}>Modificar</button>
    </div>
    </div>
  )
}

export default Estudiante