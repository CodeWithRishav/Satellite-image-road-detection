// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Dehaze from './components/Dehaze';
import About from './components/About';
import Login from './components/Login';
import Layout from './components/Layout';
import Register from './components/Register';
import Team from './components/Team';
import { Services } from './components/Services';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dehaze" element={<Dehaze />} />
        <Route path="/register" element={<Register />} />
        <Route path="/team" element={<Team/>}/>
        <Route path="/services" element={<Services />} />


        </Route>
      </Routes>
  );
}

export default App;
