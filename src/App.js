import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Hobbies from './pages/Hobbies';
import Hometown from './pages/Hometown';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hometown" element={<Hometown />} />
      </Routes>
    </Router>
  );
}

export default App;