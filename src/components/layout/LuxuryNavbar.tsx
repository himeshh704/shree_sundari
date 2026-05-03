"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LuxuryNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '1rem 0' : '2rem 0',
        backgroundColor: scrolled ? 'rgba(250, 250, 247, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(42, 40, 38, 0.05)' : '1px solid transparent',
        color: scrolled ? '#2A2826' : '#2A2826' // Always dark text for elegance on pearl background
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1.5rem' }}>
        
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 className="heading-md" style={{ fontSize: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Shreesundari</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="md-flex" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: 0.8,
                    transition: 'opacity 0.3s'
                  }}
                  onMouseOver={e => e.currentTarget.style.opacity = '1'}
                  onMouseOut={e => e.currentTarget.style.opacity = '0.8'}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book Button */}
        <a 
          href="#contact"
          className="btn-primary md-block"
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            backgroundColor: scrolled ? '#2A2826' : '#2A2826',
            color: '#FAFAF7',
            display: 'none'
          }}
        >
          Book Now
        </a>

        {/* Mobile Menu Toggle (Simplified for aesthetic) */}
        <button style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: '0.5rem' }} className="md-hidden">
          <div style={{ width: '24px', height: '1px', backgroundColor: 'currentColor', marginBottom: '6px' }}></div>
          <div style={{ width: '24px', height: '1px', backgroundColor: 'currentColor' }}></div>
        </button>

      </div>
    </header>
  );
}
