import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const projects = [
  {
    title: 'KineticK9',
    label: 'Hack@URI 2026 — Best Use of ElevenLabs API',
    description: 'Full-stack app for controlling a simulated quadruped robot dog via typed coordinates, click-to-navigate, and voice commands. Each action renders a real-time MP4 from a physics simulation. Built the frontend UI.',
    tags: ['React', 'Flask', 'ElevenLabsAPI'],
    link: 'https://github.com/Gbeckler8/kinetick9',
  },
  {
    title: 'BruvacAI',
    description: "A LoRA fine-tuned LLM that generates stylistically accurate Magic: The Gathering flavor text from card data from Scryfall API — built on Llama-3.2-1B. Handled the pipeline from data preprocessing to model and checkpoint selection and deployment on Hugging Face Spaces.",
    tags: ['Parameter-Efficient Fine-Tuning', 'Python', 'PyTorch', 'Hugging Face'],
    link: 'https://github.com/Gbeckler8/BruvacAI',
    demo_link: 'https://huggingface.co/spaces/Gbeckler/Llama-BruvacAI_Space',
  },
  {
    title: 'Personal Portfolio (This Website)',
    description: 'Built with React, TypeScript, and CSS — custom hooks for fade-in animations, scroll-based navigation, and a responsive design system.',
    tags: ['React', 'TypeScript', 'CSS'],
    link: 'https://github.com/Gbeckler8/personal-website'
  }
  
];

export default function Projects() {
  const { ref, visible } = useFadeIn();
  return (
    <div style={{ background: 'var(--off-white)' }}>
    <section id="projects" ref={ref} className={`fade-in${visible ? ' visible' : ''}`}>
      <h2>Projects</h2>
      <div className="section-rule" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {projects.map(p => (
          <div key={p.title} style={{
            border: '1px solid var(--light-gray)',
            borderTop: '3px solid var(--gold)',
            padding: '2rem',
            background: 'var(--white)',
            transition: 'box-shadow 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.13)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{p.title}</h3>
            {p.label && (
              <p style={{
                fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em',
                color: 'var(--gold-dark)', marginBottom: '0.7rem',
                textTransform: 'uppercase',
              }}>
                {p.label}
              </p>
            )}
            <p style={{ color: 'var(--text-mid)', marginBottom: '1.2rem', fontSize: '1rem' }}>{p.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.4rem' }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontSize: '0.78rem', letterSpacing: '0.06em',
                  background: 'var(--off-white)', color: 'var(--gold-dark)',
                  border: '1px solid var(--gold-light)', borderRadius: '2px',
                  padding: '0.2em 0.7em', fontWeight: 600,
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href={p.link} style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                View Project →
              </a>
              {p.demo_link && (
                <a href={p.demo_link} style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                  View Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
