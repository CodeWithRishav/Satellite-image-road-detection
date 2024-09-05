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
            Automatic Road Detection</h2>
            <p className='para text-white '>
            Our AI-powered model automatically identifies and maps new roads from satellite imagery, providing up-to-date information with high accuracy
            </p>
          </div>
        </div>

       

        <div className='wrap'>
          <div className='text-container'>
            <h2 className='text'>
            Real-Time Alerts
            </h2>
            <p className='para text-white'>
            Receive instant alerts about newly detected roads or changes in existing road networks, helping you stay informed and make timely decisions           </p>
          </div>

          <img src={Image3} className='image' />
        </div>

        <div className='wrap'>
          <img src={Image2} className='image' />
          <div className='text-container' style={{ padding: '0 20px' }}>
            <h2 className='text'>
            High-Resolution Satellite Imagery
           </h2>
            <p className='para text-white'>
            Utilize high-resolution satellite images to ensure precise detection and monitoring of road networks, even in remote or hard-to-reach areas  
            </p> </div>
        </div>
       

      </section>
    </>
  );
};
