"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2A2826', color: '#FAFAF7', padding: '5rem 2rem', marginTop: '8rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
        
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 className="heading-md">Shreesundari</h2>
          <p className="text-body" style={{ color: 'rgba(250, 250, 247, 0.7)', maxWidth: '300px' }}>
            Elevating your natural beauty with luxury bridal and party makeup artistry in Pali, Rajasthan.
          </p>
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem' }}>
            <a href="https://www.instagram.com/shreesundari_?igsh=OXpxNGQ0aHk3NmRj" target="_blank" rel="noreferrer" style={{ opacity: 0.7, transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#CFA999'}} onMouseOut={e => {e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = 'inherit'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CFA999' }}>Menu</h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-jost)', fontSize: '0.875rem', letterSpacing: '0.1em', opacity: 0.8 }}>
            <Link href="#about" style={{ width: 'fit-content', transition: 'color 0.3s' }}>About Neha</Link>
            <Link href="#services" style={{ width: 'fit-content', transition: 'color 0.3s' }}>Signature Services</Link>
            <Link href="#gallery" style={{ width: 'fit-content', transition: 'color 0.3s' }}>Real Brides</Link>
            <Link href="#contact" style={{ width: 'fit-content', transition: 'color 0.3s' }}>Book Consultation</Link>
          </nav>
        </div>

        {/* Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CFA999' }}>Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-jost)', fontSize: '0.875rem', letterSpacing: '0.1em', opacity: 0.8 }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MapPin size={16} color="#CFA999" /> Pali, Rajasthan</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={16} color="#CFA999" /> +91 96606 51719</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={16} color="#CFA999" /> book@shreesundari.com</p>
          </div>
        </div>

      </div>

      <div className="container" style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(250, 250, 247, 0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', fontFamily: 'var(--font-jost)', letterSpacing: '0.1em', opacity: 0.5 }}>
        <p>&copy; {new Date().getFullYear()} Shreesundari. All rights reserved.</p>
        <p style={{ marginTop: '1rem' }}>Crafted with elegance.</p>
      </div>
    </footer>
  );
}
