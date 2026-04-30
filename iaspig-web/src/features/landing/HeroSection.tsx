import Link from 'next/link';
import { ArrowRight, MapPin, Users, Award, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
      background: 'var(--bg-primary)',
    }}>
      {/* Modern Background Image with Gradient Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero-modern-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.6,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(4, 13, 26, 0.3) 0%, rgba(4, 13, 26, 0.98) 100%)',
      }} />
      
      {/* Background Texture */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '60px 24px' }}>

        {/* Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <span className="badge badge-blue">
            <MapPin size={12} /> Program Studi SPIG · Universitas Pendidikan Indonesia
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.05 }}>
          <span className="gradient-text">Terhubung.</span>{' '}
          <span style={{ color: '#f0f6ff' }}>Berkembang.</span>
          <br />
          <span style={{ color: '#f0f6ff' }}>Berdampak </span>
          <span className="gradient-text">Bersama.</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8',
          maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7,
        }}>
          Platform digital ikatan alumni <strong style={{ color: '#f0f6ff' }}>Survey Pemetaan Informasi Geografis</strong> UPI.
          Satu wadah untuk terhubung, berkolaborasi, dan membuka peluang karir.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '64px' }}>
          <Link href="/daftar" className="btn-primary" style={{ fontSize: '1rem', padding: '15px 32px' }}>
            Bergabung Sekarang <ArrowRight size={18} />
          </Link>
          <Link href="#peta" className="btn-secondary" style={{ fontSize: '1rem', padding: '15px 32px' }}>
            <MapPin size={18} /> Lihat Peta Alumni
          </Link>
        </div>

        {/* Mini stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
          {[
            { icon: <Users size={18} />, value: '1.200+', label: 'Alumni Terdaftar' },
            { icon: <MapPin size={18} />, value: '34', label: 'Provinsi' },
            { icon: <Award size={18} />, value: '15+', label: 'Angkatan' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#60a5fa', marginBottom: '4px' }}>
                {stat.icon}
                <span style={{ fontSize: '1.7rem', fontWeight: 800, color: '#f0f6ff', fontFamily: 'Plus Jakarta Sans' }}>{stat.value}</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#stats" style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        color: '#475569', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        textDecoration: 'none', fontSize: '0.75rem', animation: 'bounce 2s ease-in-out infinite',
      }}>
        <span style={{ letterSpacing: '0.1em' }}>SCROLL</span>
        <ChevronDown size={16} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
