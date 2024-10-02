import React from 'react'


function Header() {
  return (
    <div className='flex justify-between py-5 mx-16'>
      <a href='../'><h1 className='text-xl'>Benjamin AUGER</h1></a>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header