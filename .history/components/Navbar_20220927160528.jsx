import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import NavLogo from "../public/assets/navLogo.png"
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
    <ul>
   <li className='ml-10 text-sm uppercase hover-n'>
   <Link href="/">Home</Link>
   </li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default Navbar
