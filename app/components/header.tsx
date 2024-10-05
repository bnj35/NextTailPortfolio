import React from 'react'


function Header() {
  return (
    <div className='flex justify-between py-5 mx-4 text-sm md:mx-10 lg:mx-16 text-md'>
      <a href='/'><h1 className='lg:text-xl md:text-lg text-md'>Benjamin AUGER</h1></a>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a href='https://linktr.ee/bnj.jpeg'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header