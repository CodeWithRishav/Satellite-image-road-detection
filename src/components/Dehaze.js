// src/components/Home.js
import React from 'react';
import { useState } from 'react';
import './style.css'

const Dehaze = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>

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
         <p>Selected File: {selectedFile.name}</p>
         {selectedFile.type.startsWith('image/') ? (
          <div className='flex items-center justify-center'>
           <img
             src={URL.createObjectURL(selectedFile)}
             alt="Selected File Preview"
             className="max-w-full max-h-96 mt-4"
           />
           </div>
         ) : (
          <div className='flex items-center justify-center'>
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
    </>
  );
};

export default Dehaze;
