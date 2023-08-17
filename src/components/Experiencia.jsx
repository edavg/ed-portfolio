
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/js.png'
import tailwind from '../assets/tailwind.png'
import next from '../assets/nextjs.png'

const Experiencia = () => {
    const exp = [
        {
            id:1 ,
            src: html,
            tittle: "HTML",
            style: "shadow-orange-500"
        },
        {
            id:2 ,
            src: css,
            tittle: "CSS",
            style: "shadow-blue-500"
        },
        {
            id:3 ,
            src: javascript,
            tittle: "JAVASCRIPT",
            style: "shadow-yellow-500"
        },
        {
            id:4 ,
            src: react,
            tittle: "REACT",
            style: "shadow-blue-600"
        },
        {
            id:5 ,
            src: tailwind,
            tittle: "TAILWIND",
            style: "shadow-sky-400"
        },
        {
            id:6 ,
            src: next,
            tittle: "NEXT",
            style: "shadow-white"
        },
    ]
  return (
    <div 
    name="experiencia" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline font-bold text-white border-b-4 border-gray-500'>Experiencia</p>
                <p className='py-4'>Tecnologías con las que trabajo</p>
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-6 text-center py-12 px-6 sm:px-0'>
                {exp.map(({id, src, tittle, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style}`} >
                <img src={src} alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>{tittle}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experiencia