import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from "@mui/material";
import HomePage from './pages/HomePage';
import NavBar from './partials/NavBar';
import About from './pages/About';
import FooterSec from './partials/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';
import OurProjects from './pages/OurProjects';
import Request from './pages/Request';
import Team from './pages/Team';
import IndividualProjectPage from './pages/IndividualProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#111111'}}>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/ourProjects" exact element={<OurProjects />} />
            <Route path="/project/:projectId" exact element={<IndividualProjectPage />} />
            <Route path="/request" exact element={<Request />} />
            <Route path="/team" exact element={<Team />} />
            <Route path="/contactUs" exact element={<Contact />} />
        </Routes>
        <FooterSec />
      </Box>
    </BrowserRouter>
  );
}

export default App;
