import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'C/C++', 'JavaScript/TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Flask', 'Scikit-Learn', 'PyTorch', 'NumPy', 'Pandas', 'Librosa', 'Hugging Face'],
  },
  {
    category: 'Selected Concepts',
    skills: ['Parameter-Efficient Fine-Tuning', 'Signal Processing', 'Concurrency', 'Memory Management'],
  },
];

export default function Skills() {
  const { ref, visible } = useFadeIn();
  return (
    <div style={{ background: 'var(--white)', borderTop: '1px solid var(--silver-light)', borderBottom: '1px solid var(--silver-light)' }}>
      <section id="skills" ref={ref} className={`fade-in${visible ? ' visible' : ''}`} style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <h2 style={{ fontSize: '2rem' }}>Skills</h2>
        <div className="section-rule" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
          {skillGroups.map(group => (
            <div key={group.category}>
              <h3 style={{
                color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.9rem',
              }}>
                {group.category}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {group.skills.map(skill => (
                  <li key={skill} style={{
                    padding: '0.4rem 0',
                    borderBottom: '1px solid var(--silver-light)',
                    color: 'var(--text-mid)',
                    fontSize: '1rem',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                  }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.55rem', flexShrink: 0 }}>◆</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
