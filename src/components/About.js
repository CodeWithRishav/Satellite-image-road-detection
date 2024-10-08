// src/components/About.js
import React from "react";
import img from "./fire.jpg";
import camera from "./camera.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="mx-20 mt-12 ">
        <p className="text-orange-300 mb-4 text-2xl">WHO WE ARE</p>
        <div className="flex">
          <div>
            <p className="w-2/3 text-white">
            Welcome to our project page! Our innovative solution leverages satellite imagery and AI to automatically detect new road construction, monitor changes, and provide real-time alerts. Designed to support urban planners, emergency services, and transportation authorities, our system offers a smarter, faster way to keep up with rapid infrastructure development.{" "}
            </p>
            

            <p className="text-orange-300 mt-12 text-2xl">OUR MISSION</p>

            <div className="flex">
              <div className="flex items-center p-2 ">
                <img
                  src="/Group.png"
                  layout="responsive"
                  height={50}
                  width={50}
                  className="m-4"

                />
                <div className="">
                  <p className="font-semibold text-2xl text-white">Enhancing Visuals</p>
                  <p className="text-xs text-white w-48">
                    We Help To Get Solutions We Help To Get Solutions
                  </p>
                </div>
              </div>
              <div className="flex items-center p-2">
                <img
                  src="/Group (1).png"
                  layout="responsive"
                  height={20}
                  width={60}
                  className="m-4"
                />
                <div className="">
                  <p className="font-semibold text-2xl text-white">Improving Lives</p>
                  <p className="text-xs text-white w-48">
                    We Help To Get Solutions We Help To Get Solutions We Help To
                    Get Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={camera}
              layout="responsive"
              height={1000}
              width={1000}
             className=""
            />
          </div>
        </div>
        <Link
              to="/team"
              className="mt-2 rounded-lg bg-[#3CFFEA] border border-white-5 p-2 font-semibold"
            >
              OUR TEAM
            </Link>
      </div>

      {/* <div className="what m-24">
        <p className="text-white">hi</p>
      </div> */}
    </>
  );
};

export default About;
