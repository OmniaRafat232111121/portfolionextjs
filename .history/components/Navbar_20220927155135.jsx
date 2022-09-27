import Link from 'next/link'
import React from 'react'
import 
const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'> 
      <div className='flex justify-between items-center w-full h-ful px-2 2xl:px-16'>
      <Link>
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
      </div>
    </div>
  )
}

export default Navbar
