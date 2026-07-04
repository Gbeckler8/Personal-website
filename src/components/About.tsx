import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

export default function About() {
  const { ref, visible } = useFadeIn();
  return (
    <div style={{ background: 'var(--off-white)' }}>
      <section id="about" ref={ref} className={`fade-in${visible ? ' visible' : ''}`}>
        <h2>About Me</h2>
        <div className="section-rule" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-mid)', marginBottom: '1.2rem' }}>
              I'm a Computer Science and Music double major at Brown University, with a focus on natural language processing, research, and multimodal applications. I enjoy applying my technical skills to creative domains including music and language. My work spans full-stack development, machine learning, and interactive experiences.
            </p>
          </div>
          <div style={{
            background: 'var(--white)', border: '1px solid var(--light-gray)',
            borderLeft: '4px solid var(--gold)', padding: '2rem 2.5rem',
          }}>
            {[
              ['Degree', 'B.S. Computer Science, A.B. Music, Brown University'],
              ['Focus', 'Multimodal Technology, NLP'],
              ['Location', 'Providence, RI & Briarcliff Manor, NY'],
              ['Email', 'gbciaobella@gmail.com'],
            ].map(([label, value]) => (
              <div key={label} style={{ marginBottom: '1.1rem' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
                <p style={{ color: 'var(--text-dark)', marginTop: '0.15rem' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
