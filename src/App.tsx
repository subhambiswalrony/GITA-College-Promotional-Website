import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academic from './components/Academic';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Support from './components/Support';
import BrandScroll from './components/BrandScroll';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academic />
        <Testimonials />
        <Timeline />
        <Gallery />
        <News />
        <BrandScroll />
        <Support />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;