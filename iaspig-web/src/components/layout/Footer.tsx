'use client';
import Link from 'next/link';
import { MapPin as MapPinIcon, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';



const footerLinks = {
  'Platform': [
    { label: 'Direktori Alumni', href: '/alumni' },
    { label: 'Peta Sebaran', href: '/peta' },
    { label: 'Bursa Kerja', href: '/lowongan' },
    { label: 'Kegiatan', href: '/kegiatan' },
  ],
  'Komunitas': [
    { label: 'Forum Diskusi', href: '/forum' },
    { label: 'Program Mentoring', href: '/mentoring' },
    { label: 'Repositori Karya', href: '/repositori' },
    { label: 'Daftar Menjadi Mentor', href: '/mentor/daftar' },
  ],
  'Tentang': [
    { label: 'Tentang IASPIG', href: '/tentang' },
    { label: 'Pengurus', href: '/pengurus' },
    { label: 'Kontak', href: '/kontak' },
    { label: 'Kebijakan Privasi', href: '/privasi' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#030a14', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '72px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <img src="/logo.png" alt="IASPIG Logo" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.2rem' }}>IASPIG UPI</div>
                <div style={{ fontSize: '0.7rem', color: '#60a5fa', letterSpacing: '0.05em' }}>Ikatan Alumni SPIG</div>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px', maxWidth: '280px' }}>
              Menghubungkan alumni Program Studi Survey Pemetaan Informasi Geografis Universitas Pendidikan Indonesia di seluruh nusantara.
            </p>
            {/* Kontak */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: <Mail size={14} />, text: 'iaspig@upi.ac.id' },
                { icon: <Phone size={14} />, text: '+62 xxx xxxx xxxx' },
                { icon: <MapPin size={14} />, text: 'Bandung, Jawa Barat' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.85rem' }}>
                  <span style={{ color: '#3b82f6' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
            {/* Sosmed */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
              {[
                { icon: '📸', href: '#', label: 'Instagram' },
                { icon: '💼', href: '#', label: 'LinkedIn' },
                { icon: '▶️', href: '#', label: 'YouTube' },
              ].map((s, i) => (
                <a key={i} href={s.href} title={s.label} style={{
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.15)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f0f6ff', marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{
                      color: '#64748b', textDecoration: 'none', fontSize: '0.9rem',
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = '#94a3b8'; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = '#64748b'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '24px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ color: '#334155', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} IASPIG UPI. Semua hak dilindungi.
          </p>
          <p style={{ color: '#334155', fontSize: '0.85rem' }}>
            Dibuat dengan ❤️ oleh Alumni SPIG UPI
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer {
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </footer>
  );
}
