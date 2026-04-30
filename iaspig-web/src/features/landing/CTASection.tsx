'use client';
import Link from 'next/link';
import { ArrowRight, UserPlus, Mail } from 'lucide-react';

const partners = [
  { name: 'BIG', logo: '🏛️', full: 'Badan Informasi Geospasial' },
  { name: 'BRIN', logo: '🔬', full: 'Badan Riset & Inovasi Nasional' },
  { name: 'LAPAN', logo: '🛰️', full: 'Lapan / BRIN' },
  { name: 'ESRI', logo: '🌍', full: 'ESRI Indonesia' },
  { name: 'PT. SI', logo: '🔭', full: 'PT. Surveyor Indonesia' },
  { name: 'ATR/BPN', logo: '🗂️', full: 'Kementerian ATR/BPN' },
];

export default function CTASection() {
  return (
    <>
      {/* Partners */}
      <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '16px' }}>🤝 Mitra & Instansi</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#f0f6ff', fontFamily: 'Plus Jakarta Sans' }}>
              Alumni Kami Berkarir di
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {partners.map((p) => (
              <div key={p.name} className="glass glass-hover" style={{
                borderRadius: '14px', padding: '16px 28px',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <span style={{ fontSize: '1.5rem' }}>{p.logo}</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#f0f6ff', fontSize: '0.95rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#475569' }}>{p.full}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '80px 0', background: 'rgba(59,130,246,0.05)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '20px' }}>📬 Newsletter</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Tetap <span className="gradient-text">Terupdate</span>
          </h2>
          <p style={{ color: '#64748b', marginBottom: '32px' }}>
            Dapatkan rangkuman lowongan, kegiatan, dan berita alumni langsung ke emailmu. Setiap Senin pagi.
          </p>
          <div style={{ display: 'flex', gap: '12px', maxWidth: '440px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="emailkamu@gmail.com"
              style={{
                flex: 1, padding: '14px 18px', borderRadius: '12px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#f0f6ff', fontSize: '0.9rem', outline: 'none',
              }}
            />
            <button className="btn-primary" style={{ whiteSpace: 'nowrap', padding: '14px 22px' }}>
              <Mail size={16} /> Subscribe
            </button>
          </div>
          <p style={{ fontSize: '0.76rem', color: '#334155', marginTop: '12px' }}>
            Tidak ada spam. Bisa unsubscribe kapan saja.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="orb orb-blue" style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', fontFamily: 'Plus Jakarta Sans' }}>
            Siap Bergabung dengan<br />
            <span className="gradient-text">Komunitas IASPIG?</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
            Daftar sekarang dan terhubung dengan 1.200+ alumni SPIG UPI yang tersebar di seluruh Indonesia.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/daftar" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
              <UserPlus size={20} /> Daftar Sebagai Alumni <ArrowRight size={18} />
            </Link>
            <Link href="/tentang" className="btn-secondary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
