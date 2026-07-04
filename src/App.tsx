import React from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Zigzag tile: V-shape path with a node dot at the joint
const zigSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='24' viewBox='0 0 16 24'>
  <polyline points='8,0 2,12 8,24' fill='none' stroke='%23C9A84C' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/>
  <circle cx='2' cy='12' r='2' fill='%23C9A84C'/>
  <circle cx='8' cy='0' r='1.5' fill='%23E8CC7A'/>
</svg>`;
const zigUrl = `url("data:image/svg+xml,${zigSvg.replace(/\n\s*/g, ' ')}")`;

const sideChain: React.CSSProperties = {
  position: 'fixed',
  top: 0, bottom: 0,
  width: '16px',
  backgroundImage: zigUrl,
  backgroundRepeat: 'repeat-y',
  backgroundPosition: 'center top',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
  maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
  opacity: 0.6,
  zIndex: 50,
  pointerEvents: 'none',
};

function App() {
  return (
    <>
      <div className="side-chain" style={{ ...sideChain, left: '22px' }} />
      <div className="side-chain" style={{ ...sideChain, right: '22px', transform: 'scaleX(-1)' }} />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
