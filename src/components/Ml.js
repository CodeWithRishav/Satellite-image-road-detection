// src/ModelIntegration.js
import React, { useEffect, useState } from 'react';
import { PythonShell } from 'python-shell';

function ModelIntegration() {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    // Run the Python script when the component mounts
    const runPythonScript = async () => {
      const options = {
        mode: 'text',
        pythonPath: 'https://pyodide-cdn2.iodide.io/v0.16.0/full/pyodide.js', // Pyodide URL
        pythonOptions: ['-u'], // unbuffered mode
        scriptPath: './', // Current directory
        args: ['arg1', 'arg2'], // Arguments to pass to the script
      };

      PythonShell.run('main.py', options, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          // Process the result from the Python script
          const parsedResult = JSON.parse(result);
          setPrediction(parsedResult.prediction);
        }
      });
    };
    runPythonScript();
  }, []);

  return (
    <div>
      <h1>Machine Learning Model Integration</h1>
      {prediction && (
        <div>
          <h2>Prediction:</h2>
          <pre>{prediction}</pre>
        </div>
      )}
    </div>
  );
}

export default ModelIntegration;
