import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import getInfo from './data';

export const ProjectDetails = () => {
  const [projectSelected, setProjectSelected] = useState(null);
  let { project } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await getInfo();
        const selectedProject = info.find(buscar => project.toLowerCase() === buscar.titulo.toLowerCase());
        setProjectSelected(selectedProject);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();

    // Si necesitas realizar alguna limpieza, puedes hacerlo en la función de retorno del useEffect
    return () => {
      // Código de limpieza si es necesario
    };
  }, [project]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [project]);

  return (
    <div className="flex flex-col items-center justify-center m-0">
      <div className="flex flex-col items-center justify-center w-full m-0">
        {projectSelected && (
          <>
            <div className='sections flex flex-wrap w-full m-0 p-0 h-screen'>
              {/*<div className='absolute flex items-center justify-start w-full m-0 p-0 h-screen z-10 bg-gray-700 bg-opacity-30'>
                <div className='flex items-center justify-center m-0 p-5 flex-col text-center lg:w-2/5 w-full'>
                  <h1 className="text-white font-medium lg:text-7xl text-4xl">{projectSelected.titulo}</h1>
                  <hr className="h-1 my-8 bg-white border-2 w-full" />
                  <p className="text-white m-0 w-full p-5 lg:text-lg text-ss border border-gray-300">{projectSelected.elementos[0].contenido}</p>
                </div>
              </div>
              <img src={projectSelected.imagensec} alt={projectSelected.titulo} className='lg:h-auto h-full lg:w-full w-auto object-cover'/>*/}
              {/*<img src={projectSelected.imagen} alt={projectSelected.titulo} className='max-h-full max-w-full lg:w-1/2 object-cover'/>*/}
              <div className='lg:w-2/5 w-ful m-0 flex items-center justify-center'>
                <div className='flex items-center justify-center m-0 p-5 flex-col text-center w-full'>
                  <h1 className="text-white font-bold lg:text-4xl text-xl">{projectSelected.titulo}</h1>
                  <hr className="h-1 my-8 bg-white border-2 w-full" />
                  <p className="text-white m-0 w-full p-5 text-ss">{projectSelected.elementos[0].contenido}</p>
                </div>
              </div>
              <div className='lg:w-3/5 w-full m-0'>
                <img src={projectSelected.imagensec} alt={projectSelected.titulo} className='lg:h-screen h-auto lg:w-full w-auto object-cover max-h-full'/>
              </div>
            </div>
            <div className='sections m-0 p-0 w-full'>
              <div className='w-full flex mt-5 text-center'>
                  <h1 className='text-white font-light lg:text-4xl text-2xl p-2 w-full'>GALERÍA</h1>
              </div>
              
              <div className='w-full grid-custom m-0 flex flex-col p-5'>
                {projectSelected.elementos.map((elemento, elementoIndex) => (
                  <div className={`w-full s-${elemento.size} flex justify-center items-center`} key={elementoIndex}>
                    {elemento.tipo === 'parrafo'&& elementoIndex!=0 && 
                      <div className="lg:w-2/3 w-full p-5 flex justify-center items-center flex-col">
                        <p className="text-white m-0 w-full p-5 border border-gray-300">{elemento.contenido}</p>
                      </div>}
                    {elemento.tipo === 'imagen' && (
                      <LazyLoadImage src={elemento.contenido} alt={`Imagen ${elementoIndex}`} className="m-0 w-full h-auto" threshold={100} placeholder={<span className='bg-neutral-600 m-0 p-0 text-white block w-full lg:h-96 h-36'></span>}/>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {projectSelected.extras.length > 0 && <div className='sections m-0 p-0 w-full'>
              <div className='w-full flex mt-5 text-center'>
                  <h1 className='text-white font-light lg:text-4xl text-2xl p-2 w-full'>360°</h1>
              </div>
              <div className='w-full m-0 p-0 flex flex-col'>
                {projectSelected.extras.map((url, urlindex) => (
                  <div className="w-full flex justify-center items-center h-screen p-5" key={urlindex}>
                    <iframe src={url.url} frameBorder={0} className='w-full h-full'></iframe>
                  </div>
                ))}
              </div>
            </div>}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails