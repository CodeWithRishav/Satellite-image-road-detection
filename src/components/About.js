// src/components/About.js
import React from "react";
import img from "./fire.jpg";

const About = () => {
  return (
    <>
      {" "}
      <div className="mx-20">
        {" "}
        <p className="text-orange-300 m-2 p-2 text-2xl">~ WHO WE ARE </p>
        <div className="flex flex-row  justify-between">
          <div>
            <p className="m-2 p-2 text-4xl font-bold">
              We Help To Get Solutions
            </p>
            <p className="w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row justify-center items-center p-4 m-4 space-x-2 w-1/2">
                <img
                  src="/Group.png"
                  layout="responsive"
                  height={50}
                  width={50}
                />
                <div className="space-y-1">
                  <p className="font-semibold text-2xl">Title</p>
                  <p className="text-xs">
                    We Help To Get Solutions We Help To Get Solutions
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center space-x-2 m-4 p-4 w-1/2">
                <img
                  src="/Group (1).png"
                  layout="responsive"
                  height={50}
                  width={50}
                />
                <div className="space-y-1">
                  <p className="font-semibold text-2xl">Title</p>
                  <p className="text-xs">
                    We Help To Get Solutions We Help To Get Solutions We Help To
                    Get Solutions
                  </p>
                </div>
              </div>
            </div>
            <button className="rounded-lg bg-yellow-300 p-2 font-semibold">
              OUR TEAM
            </button>
          </div>
          <div>
            <img src={img} layout="responsive" height={300} width={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
