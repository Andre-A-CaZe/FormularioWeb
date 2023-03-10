import React, { useState } from 'react'
import { useEffect } from 'react';

const Formulario = ({estudiantes, setEstudiantes, estudiante, setEstudiante}) => {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [promedio, setPromedio] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {

    if( Object.keys(estudiante).length > 0){
      const {nombre, carrera, semestre, promedio} = estudiante;
      setNombre(nombre);
      setCarrera(carrera);
      setSemestre(semestre);
      setPromedio(promedio);
    }

  }, [estudiante])
  
  const generadorID = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return random + fecha;
  }



  const manejadorSubmit = (e) => {
    e.preventDefault();
    if( [nombre.trim(),carrera.trim(),semestre.trim(),promedio.trim()].includes('') ){
      setError(true);
      return;
    }

    setError(false);

    const objetoEstudiante = {
      nombre,
      carrera,
      semestre,
      promedio 
    }

    if( estudiante.id ){
      objetoEstudiante.id = estudiante.id;
      const estudiantesActualizados = estudiantes.map( estudianteState => estudianteState.id === estudiante.id ? objetoEstudiante : estudianteState );
      setEstudiantes(estudiantesActualizados);
      setEstudiante({});
    } else {
      objetoEstudiante.id = generadorID();
      setEstudiantes([...estudiantes,objetoEstudiante]);
    }


    limpiar();
    

  }

  const limpiar = () => {
    setNombre('');
    setCarrera('');
    setSemestre('');
    setPromedio('');
  }


  return (
    <div className='m-[15px] p-[20px] md:w-1/2 lg:w-2/5 bg-[#e5989b] rounded-md text-black'>
      <h1 className='font-bold text-center text-xl'>Registrar Estudiantes</h1>
      <h2 className='font-bold text-center'>Agregar y Administrar</h2>
        <form 
          onSubmit={manejadorSubmit}
        >
          { error && (<div className='bg-red-500 font-bold text-center rounded-md mt-3'><p>Llenar todos los campos</p></div>)}
          <div>
            <label className='block mb-2 mt-2'>Nombre Estudiante: </label>
            <input className='border-2 p-1 w-full rounded-md mb-4'
            type="text" placeholder=' Nombre Completo' value={nombre} onChange = { (e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2'>Carrera: </label>
            <input className='border-2 p-1 w-full rounded-md mb-4'
            type="text" placeholder=' Carrera' value={carrera} onChange = { (e) => setCarrera(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2'>Semestre: </label>
            <input className='border-2 p-1 w-full rounded-md mb-4'
            type="text" placeholder=' Semestre' value={semestre} onChange = { (e) => setSemestre(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2'>Promedio: </label>
            <input className='border-2 p-1 w-full rounded-md mb-4'
            type="text" placeholder=' Promedio' value={promedio} onChange = { (e) => setPromedio(e.target.value)}
            />
          </div>


          <div>
            <input type="submit" 
            className='bg-[#7998ce] w-full p-2 rounded-md 
            uppercase hover:bg-[#f2cd8a] cursor-pointer'
            value={estudiante.id ? 'Actualizar Estudiante' : 'Agregar Estudiante'}
            />
          </div>


        </form>
    </div>
  )
}

export default Formulario