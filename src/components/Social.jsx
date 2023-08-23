import { FaLinkedin, FaFacebook } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"

const Social = () => {
  const links = [
    {
      id: 1,
      child: (<>LinkedIn <FaLinkedin size={20}/></>),
      href: 'https://www.linkedin.com/in/eduardo-villamayor-3088291a2/',
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (<>Facebook <FaFacebook size={20}/></>),
      href: 'https://www.facebook.com/eduardo.villamayor.9/',
    },
    {
      id: 3,
      child: (<>Correo <HiOutlineMail size={20}/></>),
      href: 'mailto:eduardo.avg95@gmail.com',
    },
    {
      id: 4,
      child: (<>Curriculum <BsFillPersonLinesFill size={20}/></>),
      href: '/Eduardo Villamayor Curriculum.pdf',
      style: "rounded-br-md",
      download: true,
    }
  ]
  return (
    <div name="social" className="hidden lg:flex flex-col left-0 fixed top-[35%]">
        <ul>
             {links.map(({id, child, href, style, download}) => (
             <li key= {id} className={`flex justify-between items-center w-40 h-9 px-4  ml-[-110px] hover:ml-[-8px] hover:rounded-md duration-500 bg-gray-600 ${style}`}> 
            <a
            href={href}
            className="flex justify-between items-center w-full text-white"
            download={download}
            target='_blank'
            rel="noreferrer"
            >{child}
            </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Social