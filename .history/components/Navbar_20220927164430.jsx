import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import NavLogo from "../public/assets/navLogo.png"
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'> 
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
    <Link href='/'>
      <a>
        <Image
          src={NavLogo}
          alt='/'
          width='125'
          height='50'
          className='cursor-pointer'
        />

      </a>
    </Link>
    <div>
    <ul className='md:hidden flex'>
   <li className='ml-10 text-sm uppercase hover-border-b'>
   <Link href="/">Home</Link>
   </li>
   <li className='ml-10 text-sm uppercase hover:border-b'>
   <Link href='/#about'>About</Link>
 </li>
 <li className='ml-10 text-sm uppercase hover:border-b'>
   <Link href='/#skills'>Skills</Link>
 </li>
 <li className='ml-10 text-sm uppercase hover:border-b'>
   <Link href='/#projects'>Projects</Link>
 </li>
 <li className='ml-10 text-sm uppercase hover:border-b'>
   <Link href='/resume'>Resume</Link>
 </li>
 <li className='ml-10 text-sm uppercase hover:border-b'>
   <Link href='/#contact'>Contact</Link>
 </li>
    </ul>
    </div>
<div className='md:hidden'>
<AiOutlineMenu size={25} />
</div>
<div className="fixed left-0 top-0 w-full h-screen bg-black/70'">
<div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
 <div>
 <div>
 <Image src="/../public/assets/navLogo.png" width="87px" height="35px" alt="/"/>
 
<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
<AiOutlineClose/>
</div>
 </div>
 <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>

 </div>
</div>
</div>
    </div>
    </div>

   
  )
}

export default Navbar
