import React from 'react'

function gallery() {
  return (
  <div>

    <div className='px-10 py-10 flex flex-row gap-16 flex-wrap justify-center'>

      <div className='w-[45%]'>
        <a href="./web">
            <img className='aspect-square w-[100%] rounded-[2rem] object-cover'src='https://images.unsplash.com/photo-1725610588109-71d0def86e19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
              <p className='p-3 text-xl'>Web Development</p>
          </a>
      </div>

      <div className='w-[45%]'>
        <a href="./Graphism">
            <img className='aspect-square w-[100%] rounded-[2rem] object-cover'src='https://images.unsplash.com/photo-1725610588109-71d0def86e19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
              <p className='p-3 text-xl'>Graphic design</p>
          </a>
      </div>

      <div className='w-[45%]'>
        <a href="./video">
            <img className='aspect-square w-[100%] rounded-[2rem] object-cover'src='https://images.unsplash.com/photo-1725610588109-71d0def86e19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
              <p className='p-3 text-xl'>Video</p>
          </a>
      </div>

      <div className='w-[45%]'>
        <a href="./3D">
            <img className='aspect-square w-[100%] rounded-[2rem] object-cover'src='https://images.unsplash.com/photo-1725610588109-71d0def86e19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
              <p className='p-3 text-xl'>3D</p>
          </a>
      </div>

      <div className='flex flex-col justify-center px-10'>
        <img className="w-screen h-[35vw] rounded-[2rem] object-cover" src="/about.jpg" alt='about'/>
        <p className='p-3 text-xl' >About me</p>
    </div>

    </div>

  </div>
  )
}

export default gallery