import React, { useState, useEffect } from 'react';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.2rem 3rem',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--silver-light)' : '1px solid transparent',
      transition: 'background 0.3s, border-color 0.3s',
      fontFamily: 'var(--font)',
    }}>
      <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em' }}>
        Gordon Beckler
      </span>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              color: 'var(--text-dark)', fontWeight: 600,
              fontSize: '1rem', letterSpacing: '0.05em',
            }}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
