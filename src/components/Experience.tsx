import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const positions = [
  {
    title: 'Socially Responsible Computing Undergraduate Teaching Assistant',
    org: 'Brown University Department of Computer Science',
    period: 'Aug 2026 – Dec 2026',
    bullets: [
      'TA for CSCI0300: Fundamentals of Computer Systems, covering topics including operating systems and concurrency.',
      'Developing socially responsible computing (SRC) course content with a special focus on ethics in systems.',
      'Holding weekly office hours to support students with course content and debugging.',
    ],
  },
  {
    title: 'Research Collaborator',
    org: 'NYU Department of Computer Science',
    period: 'April 2026 – Present',
    bullets: [
      'Contributing to Attune, a real-time music practice feedback tool, as part of DSP research.',
      'Contributions include mistake-detection UI, audio trimming logic, and ongoing experiment design and execution.',
      'Second author on forthcoming publication.',
    ],
  },
  {
    title: 'Music Director',
    org: 'The Higher Keys, Brown University',
    period: 'Jan 2026 – Dec 2026',
    bullets: [
      "Music Director of the Higher Keys, Brown University's oldest all-gender a cappella group.",
      'Orchestrated jazz vocal arrangements performed at campus concerts, local gigs, and on tour.',
      'Co-directed the recording of a Christmas album to be released on Spotify.',
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useFadeIn();
  return (
    <div style={{ background: 'var(--white)' }}>
      <section id="experience" ref={ref} className={`fade-in${visible ? ' visible' : ''}`}>
        <h2>Experience</h2>
        <div className="section-rule" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.8rem' }}>
          {positions.map(p => (
            <div key={p.title} style={{
              display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2.5rem',
              borderLeft: '3px solid var(--gold)', paddingLeft: '2rem',
            }}>
              <div>
                <p style={{ color: 'var(--silver-dark)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                  {p.period}
                </p>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
                  {p.org}
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.8rem' }}>{p.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {p.bullets.map((b, i) => (
                    <li key={i} style={{ color: 'var(--text-mid)', fontSize: '1rem', display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '0.55rem', marginTop: '0.55rem', flexShrink: 0 }}>◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
