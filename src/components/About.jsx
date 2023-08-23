import React from 'react'

const About = () => {
  return (
    <div name="sobre mi" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-7'>
                      <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre mí</p>
                </div>
                <p className='text-xl mt-20 '>
                Apasionado de la tecnología y entusiasta del mundo de la informática.
                Una de mis mayores misiones es el desarrollo de aplicaciones web, funcionales y con enfoque al UX UI. <br/>
                El poder de la tecnología está para transformar la vida cotidiana y estoy emocionado de contribuir a este cambio a través de mis proyectos.
                Actualmente, he completado una serie de certificaciones de META, los creadores de REACT, de desarrollo Front-End.
                </p>
                <br />
                <p className='text-xl'>
                Tengo conocimientos de JavaScript, HOOKS, API Fetch y Axios, React-Router-Dom, Rutas y Navegación.
                Actualmente estoy empezando a profundizar TypeScript y otros Frameworks como Vue.js y Vite.js.
                </p>
          </div>
    </div>
  )
}

export default About