import React from 'react'
import camera from "./camera.jpg"

const Home = () => {
  return (
    <div className='flex justify-between items-center'>
        <img src={camera} className='w-1/2'/>

        <div className='p-8'>
        <p className='text-center'>Unveil the Beauty Within the Haze</p>
        <p className='pt-4'>ClearVue Dehazing Solutions is not just about enhancing photos and videos; it's a powerful tool for clarity in challenging environments.</p>
        </div>
      
    </div>

  )
}

export default Home