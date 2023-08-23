import login from '../portfolio/appviaje.png'
import movie from '../portfolio/movie.png'
import fetchA from '../portfolio/fetchAxios.png'
import todo from '../portfolio/todolist.png'
import formu from "../portfolio/formulario.png"

const portfolio = [
  {
    id: 1,
    src: login,
    demo: "SPA con Login",
    href: "https://ed-avg-login.vercel.app/login"
  },
  {
    id: 2,
    src: movie,
    demo: "SPA Fetch API",
    href: "https://movie-app-edavg.vercel.app/"
  },
  {
    id: 3,
    src: fetchA,
    demo: "SPA con Axios",
    href: "https://ed-next-project.vercel.app/"
  },
  {
    id: 4,
    src: todo,
    demo: "Simple To-Do",
    href: "https://to-do-list-edavg.vercel.app/"
  },
  {
    id: 5,
    src: formu,
    demo: "Formulario simple",
    href: "https://formulario-one-black.vercel.app/"
  }
]

const Portfolio = () => {
  return (
    <div name="portfolio" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl inline font-bold text-white border-b-4 border-gray-500'>
                    Portfolio
                </p>
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-6 text-center py-12 px-6 sm:px-0'>
                  {portfolio.map(({id, src, href, demo}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <a href={href}><img src={src}  alt="" className='rounded-md duration-200 hover:scale-105'/></a>
                    <div className='flex items-center justify-center'>
                      <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>{demo}</button>
                    </div>
                  </div>
                  ))}                  
            </div>
        </div>
    </div>
  )
}

export default Portfolio