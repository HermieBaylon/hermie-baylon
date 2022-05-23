import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
    return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/projects' element={<Projects/>} />
            <Route exact path='/contact' element={<Contact/>} />
        </Routes>
    </Router>
    )
}