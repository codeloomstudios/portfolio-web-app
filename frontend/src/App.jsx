import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from "@mui/material";
import HomePage from './pages/HomePage';
import NavBar from './partials/NavBar';
import About from './pages/About';
import FooterSec from './partials/Footer';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#111111'}}>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" exact element={<About />} />
        </Routes>
        <FooterSec />
      </Box>
    </BrowserRouter>
  );
}

export default App;
