import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';

// Content alohida qilganimning sababi, ba'zi bir 
// kamchiliklarni oldini olish va animatsiyalar qo'shish orqali 
// interaktiv sayt yaratish mumkin



function App() {
  return (
    <Router>
      <Navbar />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
