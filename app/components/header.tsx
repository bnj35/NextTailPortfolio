import React from 'react'


function Header() {
  return (
    <div className='flex justify-between py-5 px-10 sm\:py-5 sm\:px-5'>
      <a href='../'><h1 className='text-xl'>Benjamin AUGER</h1></a>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header