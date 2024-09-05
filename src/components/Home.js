import React from "react";
import camera from "./camera.jpg";
import hazy from "./images/hazy.jpg";


const Home = () => {
  return (
    <div className="flex justify-between items-center mt-20">
      <img src={hazy} className="image " />

      <div className="p-8 w-2/3">
        <p className="home-text home-heading text-bold text-[#4DFFEA]">
          GekTrack Innovators
        </p>
        <p className="text-space pt-4 text-[#C0FFA1] mb-8">
        Revolutionizing Road Detection with AI and Satellite Imagery.
        
        </p>
        <p className="text-space pt-4 text-[#C0FFA1] mb-8">
        
        Detect new roads and generate real-time alerts using cutting-edge satellite imagery and machine learning technology
        </p>
        <button className="explore w-48">Explore &rarr;</button>
      </div>
    </div>
  );
};

export default Home;
