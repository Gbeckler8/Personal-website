import React from 'react';

export default function Hero() {
  return (
    <div id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'flex-start',
      padding: '0 10vw',
      background: 'var(--white)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Right decorative panel — solid, present */}
      <div style={{
        position: 'absolute', right: 0, top: '10%',
        width: '38vw', height: '76vh',
        background: 'linear-gradient(160deg, var(--silver-pale) 0%, var(--off-white) 55%, var(--gold-pale) 100%)',
        borderLeft: '4px solid var(--gold)',
        zIndex: 0,
      }} />

      {/* Very subtle inner shadow on the panel to give it depth */}
      <div style={{
        position: 'absolute', right: 0, top: '10%',
        width: '38vw', height: '76vh',
        boxShadow: 'inset 12px 0 40px rgba(201,168,76,0.08)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          color: 'var(--silver-dark)',
          fontWeight: 600, letterSpacing: '0.22em', fontSize: '0.85rem', marginBottom: '1rem',
          textTransform: 'uppercase',
        }}>
          Hello, I'm
        </p>

        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 700, lineHeight: 1.08, marginBottom: '1.2rem',
          color: 'var(--text-dark)',
        }}>
          Gordon<br />
          <span style={{ color: 'var(--gold)' }}>Beckler</span>
        </h1>

        <p style={{
          fontSize: '1.3rem', maxWidth: '460px', marginBottom: '2.8rem',
          fontWeight: 400, color: 'var(--text-mid)',
          borderLeft: '3px solid var(--silver-light)',
          paddingLeft: '1.2rem',
        }}>
          Multimodal developer and researcher - building applications, machine learning models, and interactive experiences.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            fontFamily: 'var(--font)', fontSize: '1rem', letterSpacing: '0.08em',
            padding: '0.75em 2.2em',
            background: 'var(--gold)',
            color: 'var(--white)', cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
          }}>View Work</a>
          <a href="#contact" style={{
            fontFamily: 'var(--font)', fontSize: '1rem', letterSpacing: '0.08em',
            padding: '0.75em 2.2em',
            border: '1.5px solid var(--silver)',
            color: 'var(--text-dark)', cursor: 'pointer',
          }}>Get In Touch</a>
        </div>
      </div>
    </div>
  );
}
