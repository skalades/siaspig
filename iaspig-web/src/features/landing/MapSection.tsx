'use client';
import dynamic from 'next/dynamic';
import { TbMapPin, TbFilter, TbUsers } from 'react-icons/tb';

// Leaflet harus dynamic import (no SSR) karena butuh window object
const AlumniMapInner = dynamic(() => import('./AlumniMapInner'), { ssr: false, loading: () => (
  <div style={{ height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
    <div style={{ textAlign: 'center', color: '#475569' }}>
      <TbMapPin size={32} style={{ margin: '0 auto 12px', display: 'block' }} />
      <p>Memuat peta...</p>
    </div>
  </div>
)});

const filters = ['Semua', 'Angkatan 2020', 'Angkatan 2019', 'Angkatan 2018', 'Jawa Barat', 'DKI Jakarta', 'Sumatera'];

export default function MapSection() {
  return (
    <section id="peta" className="section-padding" style={{ position: 'relative' }}>
      {/* Background accent */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(20,184,166,0.04) 50%, transparent)' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '56px', alignItems: 'start' }}>
          {/* Left — info */}
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '20px' }}>🗺️ Fitur Khas SPIG</span>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Peta Sebaran{' '}
              <span className="gradient-text">Alumni</span>
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '32px' }}>
              Sebagai alumni Survey Pemetaan Informasi Geografis, kami punya cara unik untuk visualisasi komunitas kami — dengan peta interaktif berbasis GIS.
            </p>

            {/* Filter chips */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.82rem', marginBottom: '12px' }}>
                <TbFilter size={14} /> Filter Lokasi
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {filters.map((f, i) => (
                  <button key={f} style={{
                    padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500,
                    background: i === 0 ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.04)',
                    border: i === 0 ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(255,255,255,0.08)',
                    color: i === 0 ? '#60a5fa' : '#64748b',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
              {[
                { label: 'Tersebar di Indonesia', value: '34 Provinsi', color: '#3b82f6' },
                { label: 'Kota dengan alumni terbanyak', value: 'Bandung', color: '#14b8a6' },
                { label: 'Bekerja di luar negeri', value: '47 Alumni', color: '#f59e0b' },
              ].map((item, i) => (
                <div key={i} className="glass" style={{ borderRadius: '12px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{item.label}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map */}
          <div>
            <div className="glass" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(59,130,246,0.2)' }}>
              {/* Map header */}
              <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.85rem' }}>
                  <TbUsers size={15} />
                  <span>Menampilkan <strong style={{ color: '#f0f6ff' }}>1.200+</strong> alumni</span>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
                    <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                  ))}
                </div>
              </div>
              {/* Leaflet Map */}
              <AlumniMapInner />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #peta .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
