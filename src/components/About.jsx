import React from 'react'

const About = () => {
  return (
    <div name="sobre mi" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-7'>
                      <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre mí</p>
                </div>
                <p className='text-xl mt-20'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit autem sed doloremque quibusdam nemo enim qui libero nihil culpa iusto asperiores quod soluta architecto reiciendis dignissimos totam, a tenetur. Provident.
                </p>
                <br />
                <p className='text-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis assumenda quis blanditiis recusandae voluptate error dicta sit numquam, corporis, ratione deserunt quam nemo rem doloribus, aut incidunt libero laudantium!
                </p>
          </div>
    </div>
  )
}

export default About