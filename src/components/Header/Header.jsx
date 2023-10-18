import React from 'react'

export const Header = () => {
  return (
    <div className="header py-8 bg-[#23283e]">
        <div className="container flex justify-between items-center">
            <h1 className="font-bold text-2xl text-[#90a0d9]">YO.</h1>
            <ul className='flex font-semibold text-[#bdbddd]'>
                <li className='cursor-pointer mr-6 hover:text-[#90a0d9] duration-300'>skills</li>
                <li className='cursor-pointer hover:text-[#90a0d9] duration-300'>projects</li>
            </ul>
        </div>
    </div>
  )
}
