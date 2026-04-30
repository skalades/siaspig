'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arief Rachman',
    angkatan: 'Alumni 2016',
    role: 'GIS Analyst — Badan Informasi Geospasial',
    avatar: '👨‍💻',
    rating: 5,
    quote: 'Berkat jaringan IASPIG, saya berhasil mendapatkan pekerjaan impian di BIG hanya 2 bulan setelah lulus. Platform ini benar-benar jembatan antara kampus dan industri.',
  },
  {
    name: 'Siti Nurhaliza',
    angkatan: 'Alumni 2018',
    role: 'Remote Sensing Specialist — LAPAN',
    avatar: '👩‍🔬',
    rating: 5,
    quote: 'Program mentoring IASPIG sangat membantu. Mentor saya alumni senior yang sekarang bekerja di BRIN, dan beliau berbagi banyak insight yang tidak saya dapat di kampus.',
  },
  {
    name: 'Dian Permana',
    angkatan: 'Alumni 2019',
    role: 'Surveyor — PT. Surveyor Indonesia',
    avatar: '🧭',
    rating: 5,
    quote: 'Fitur peta alumni di IASPIG adalah yang terbaik. Saya bisa melihat di mana saja alumni SPIG bekerja, dan ini membuka banyak peluang networking yang tidak terduga.',
  },
  {
    name: 'Rizky Pratama',
    angkatan: 'Alumni 2020',
    role: 'GIS Developer — Startup Proptech',
    avatar: '🚀',
    rating: 5,
    quote: 'Forum diskusi IASPIG penuh dengan orang-orang kompeten. Diskusi teknis di sini levelnya sangat tinggi dan membantu saya terus update dengan tren GIS terkini.',
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding" style={{ background: 'rgba(59,130,246,0.03)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge badge-teal" style={{ marginBottom: '16px' }}>💬 Kata Mereka</span>
          <h2 className="section-title">
            Alumni <span className="gradient-text">Berbicara</span>
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Main card */}
          <div className="glass" style={{ borderRadius: '24px', padding: '56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Quote icon */}
            <div style={{ position: 'absolute', top: '28px', left: '32px', opacity: 0.1 }}>
              <Quote size={64} color="#3b82f6" />
            </div>

            {/* Avatar */}
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 20px',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(20,184,166,0.3))',
              border: '2px solid rgba(59,130,246,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem',
            }}>
              {t.avatar}
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Quote */}
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '32px' }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Name */}
            <div style={{ fontWeight: 700, color: '#f0f6ff', fontSize: '1rem', fontFamily: 'Plus Jakarta Sans' }}>{t.name}</div>
            <div style={{ fontSize: '0.82rem', color: '#3b82f6', marginTop: '4px' }}>{t.angkatan}</div>
            <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>{t.role}</div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '32px' }}>
            <button onClick={prev} className="glass" style={{
              width: '44px', height: '44px', borderRadius: '50%', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px', borderRadius: '4px', border: 'none',
                    background: i === current ? '#3b82f6' : 'rgba(255,255,255,0.15)',
                    cursor: 'pointer', transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>

            <button onClick={next} className="glass" style={{
              width: '44px', height: '44px', borderRadius: '50%', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
