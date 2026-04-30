'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Map, Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Peta Alumni', href: '#peta' },
  { label: 'Lowongan', href: '#lowongan' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Forum', href: '#forum' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="IASPIG Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
          <div>
            <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.1rem', color: '#f0f6ff', lineHeight: 1 }}>
              IASPIG
            </div>
            <div style={{ fontSize: '0.65rem', color: '#60a5fa', fontWeight: 500, letterSpacing: '0.05em' }}>
              ALUMNI SPIG UPI
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#94a3b8', textDecoration: 'none', padding: '8px 14px',
                borderRadius: '8px', fontSize: '0.9rem', fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#f0f6ff'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#94a3b8'; (e.target as HTMLElement).style.background = 'transparent'; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/login" style={{
            color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
            padding: '8px 16px', borderRadius: '8px', transition: 'all 0.2s',
          }}>
            Masuk
          </Link>
          <Link href="/daftar" className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
            Daftar <ChevronRight size={15} />
          </Link>
          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: '#f0f6ff', cursor: 'pointer', display: 'none' }}
            className="mobile-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(4,13,26,0.97)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', color: '#94a3b8', textDecoration: 'none',
                padding: '12px 0', fontSize: '1rem', fontWeight: 500,
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
            <Link href="/login" className="btn-secondary" style={{ flex: 1, justifyContent: 'center', padding: '12px' }}>Masuk</Link>
            <Link href="/daftar" className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '12px' }}>Daftar</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
