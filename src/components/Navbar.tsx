import React from 'react'


const Navbar: React.FC = () => {
  return (
    <div className='w-[800px] text-center mx-auto py-8 bg-gray-950 text-white'>
      <ul className='flex gap-12 justify-center font-bold '>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

export default Navbar