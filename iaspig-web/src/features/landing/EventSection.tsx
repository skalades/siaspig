'use client';
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const events = [
  {
    id: 1,
    type: 'Webinar',
    typeColor: '#3b82f6',
    title: 'Tren GIS di Era Digital: AI & Machine Learning untuk Pemetaan',
    date: '15 Mei 2025',
    time: '09.00 – 11.00 WIB',
    location: 'Online via Zoom',
    quota: 200,
    registered: 147,
    speaker: 'Dr. Ir. Budi Santoso, M.T.',
  },
  {
    id: 2,
    type: 'Workshop',
    typeColor: '#10b981',
    title: 'Workshop QGIS Lanjutan: Analisis Spasial untuk Perencanaan Wilayah',
    date: '22 Mei 2025',
    time: '08.00 – 16.00 WIB',
    location: 'Kampus UPI Bandung',
    quota: 40,
    registered: 38,
    speaker: 'Tim IASPIG',
  },
  {
    id: 3,
    type: 'Reuni',
    typeColor: '#f59e0b',
    title: 'Reuni Akbar Alumni SPIG UPI 2025 — "Memetakan Masa Depan"',
    date: '7 Juni 2025',
    time: '10.00 – 22.00 WIB',
    location: 'Hotel Horison Bandung',
    quota: 500,
    registered: 312,
    speaker: 'Seluruh Alumni',
  },
];

function EventCard({ event }: { event: typeof events[0] }) {
  const pct = Math.round((event.registered / event.quota) * 100);
  const isAlmostFull = pct >= 90;

  return (
    <div className="glass glass-hover" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ padding: '24px 24px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <span style={{
            padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600,
            background: `${event.typeColor}15`, color: event.typeColor, border: `1px solid ${event.typeColor}30`,
          }}>
            {event.type}
          </span>
          {isAlmostFull && (
            <span style={{ color: '#f87171', fontSize: '0.7rem', fontWeight: 600 }}>
              Hampir Penuh
            </span>
          )}
        </div>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0f6ff', lineHeight: 1.4, fontFamily: 'Plus Jakarta Sans', margin: 0 }}>
          {event.title}
        </h3>
      </div>

      <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
        {[
          { icon: <Calendar size={13} />, text: event.date },
          { icon: <Clock size={13} />, text: event.time },
          { icon: <MapPin size={13} />, text: event.location },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.82rem' }}>
            <span style={{ color: '#3b82f6', flexShrink: 0 }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      {/* Quota bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.78rem', color: '#64748b' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Users size={12} /> {event.registered} / {event.quota} peserta
          </span>
          <span style={{ color: isAlmostFull ? '#f87171' : '#34d399' }}>{pct}%</span>
        </div>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}>
          <div style={{ height: '100%', width: `${pct}%`, borderRadius: '2px', background: isAlmostFull ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : 'linear-gradient(90deg, #3b82f6, #10b981)', transition: 'width 0.3s' }} />
        </div>
      </div>

      <Link href={`/kegiatan/${event.id}`} className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.85rem', padding: '10px', marginTop: 'auto', borderRadius: '8px' }}>
        Lihat Detail <ArrowRight size={14} />
      </Link>
      </div>
    </div>
  );
}

export default function EventSection() {
  return (
    <section id="kegiatan" className="section-padding" style={{ background: 'rgba(59,130,246,0.03)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '16px' }}>📅 Kegiatan Terdekat</span>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              Event & <span className="gradient-text">Kegiatan</span>
            </h2>
            <p className="section-subtitle">Jangan lewatkan kegiatan alumni terbaru.</p>
          </div>
          <Link href="/kegiatan" className="btn-secondary">
            Lihat Semua <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #kegiatan .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
