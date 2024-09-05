import React from 'react'
import img from "./camera.jpg"
import neha from "./images/neha.jpg"
import neetu from "./images/neetu.jpg"
import rohit from "./images/Rishav.jpg"
import raushan from "./images/raushan.jpeg"
import abhishek from "./images/abhishek.jpeg"
import aman from "./images/neha.jpg"




const Team = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title text-center mt-2 text-[#FDBA74] text-2xl my-10">Our Team</h2>
      <div>
      <div className="service-list flex justify-around items-center">
        <div className="service-item">
          <img src={rohit} className='img' />
          <h3 className="text-center mt-2 text-[#cbd1ff]">Rohit Nema - TL</h3>
        </div>
        <div className="service-item">
          <img src={aman} className='img' />
          <h3 className="text-center mt-2 text-[#cbd1ff]">Aman Mishra</h3>
        </div>
        <div className="service-item">
          <img src={raushan} className='img' />
          <h3 className="text-center mt-2 text-[#cbd1ff]">Raushan kumar</h3>
        </div>
        </div>

        <div className='service-list flex justify-around items-center  my-10'>
        <div className="service-item ">
          <img src={neha} className='img' />
          <h3 className="text-center mt-2 text-[#cbd1ff]">Neha Kumari</h3>
        </div>
        <div className="service-item">
          <img src={neetu} className='img' />
          <h3 className="text-center mt-2 text-[#cbd1ff]">Neetu Vishwakarma</h3>
        </div>
        <div className="service-item">
          <img src={abhishek} className='img' />
          <h3 className="text-center mt-2 text-[#cbd1ff]">Abhishek Kumar</h3>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Team