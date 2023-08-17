import React from 'react'
import hero from '../assets/heroimg2.jpg'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'

const Home = () => {
return (
<div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div>
            <h2 className='text-center text-4xl sm:text-7xl font-bold text-white'>Eduardo Villamayor <br /> Desarrollador Front-End</h2>
            <p className=' text-gray-500 py-4 max-w-md'>
                Hola! Mi nombre es Eduardo
            </p>
            <div >
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-green-900 cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-500'>
                    <BsFillArrowRightSquareFill size={15} className='ml-1'/>
                </span>
            </button>
        </div>
        </div>
        <div>
            <img 
            src={hero} 
            alt="Mi foto" 
            className='rounded-3xl mx-auto w-2/3 md:w-full hover:scale-95 duration-500'/>
        </div>
    </div>
</div>
)}

export default Home