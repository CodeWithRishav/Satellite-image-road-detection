import React from "react";
import { useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom
import Image1 from './images/camera.jpg'
import Image2 from './images/car.jpg'
import Image3 from './images/fire.jpg'
import Image4 from './images/soldier.jpg'

import "./services.css"
import "./style.css"


export const Services = () => {
  const buttonref = useRef(null);

  return (
    <>
      <div>
        <p className="text-orange-300 mb-4 text-2xl text-center m-8">OUR SERVICES</p>
      </div>

      <section id='start-test' className='container-page2'>

      <div className='wrap'>
          <img src={Image4} className='image' />
          <div className='text-container' style={{ padding: '0 20px' }}>
            <h2 className='text'>
            For Soldiers in the Battlefield</h2>
            <p className='para text-white '>
            In the chaotic and high-stress environment of the battlefield, visibility is often compromised due to various factors like dust, smoke, and fog. Dehazer proves invaluable to soldiers by enhancing their situational awareness and safety
            </p>
          </div>
        </div>

       

        <div className='wrap'>
          <div className='text-container'>
            <h2 className='text'>
            For Fire Alarm Systems
            </h2>
            <p className='para text-white'>
            Fire alarm systems play a pivotal role in safeguarding lives and property. Dehazer complements these systems by improving their efficiency and reliability            </p>
          </div>

          <img src={Image3} className='image' />
        </div>

        <div className='wrap'>
          <img src={Image2} className='image' />
          <div className='text-container' style={{ padding: '0 20px' }}>
            <h2 className='text'>
            In Preventing Car Accidents
           </h2>
            <p className='para text-white'>
            Road accidents are a significant global concern, and Dehazer contributes to accident prevention and road safety         
            </p> </div>
        </div>
       

      </section>
    </>
  );
};
