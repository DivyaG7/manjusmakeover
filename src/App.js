
import './App.css';
import './responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Service } from './pages/service';
import { Gallery } from './pages/gallery';
import { Contact } from './pages/contact';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

    // Initialize AOS on page load
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (ms)
        easing: 'ease-out', // Animation easing
        every: true, // Triggers animation only once
      });
    }, []);

    
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
