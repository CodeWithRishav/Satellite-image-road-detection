// src/components/Home.js
import React from "react";
import { useState } from "react";
import "./style.css";
import { useRef } from "react";

const Dehaze = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const videoRef = useRef(null);
  const [isCameraStarted, setIsCameraStarted] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraStarted(true);
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl mb-4">Upload Video or Image</h2>
            <input
              type="file"
              accept="image/*, video/*"
              onChange={handleFileChange}
              className="mb-4 cursor-pointer"
            />
            {selectedFile && (
              <div>
                <p className="mb-4">Selected File: {selectedFile.name}</p>
                {selectedFile.type.startsWith("image/") ? (
                  <div className="">
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected File Preview"
                      className="max-w-full max-h-96 mb-4 "
                    />
                    <button
                      className="dehaze-btn mt-4"
                      //  onChange={handleClick}
                    >
                      Dehaze Image
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <video
                      src={URL.createObjectURL(selectedFile)}
                      controls
                      className="max-w-full max-h-96 mt-4"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-screen text-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-[400px] h-[150px]">
            <h2 className="text-2xl mb-2 !important">Start Live Recording</h2>
            <div>
            {isCameraStarted ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-auto"
              style={{ display: 'block' }}
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-auto"
              style={{ display: 'none' }}
            />
          )}       

          <button
                onClick={startCamera}
                className="login mt-2 cursor-pointer w-48"
              >
                Start Camera
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dehaze;
