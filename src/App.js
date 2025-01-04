import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Student from './pages/Student';
import Admin from './pages/Admin';
import Mentor from './pages/Mentor';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student-login" element={<Student />} />
      <Route path="/admin-login" element={<Admin />} />
      <Route path="/mentor-login" element={<Mentor />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;