'use client';
import { Map, Briefcase, Calendar, BookOpen, Users, Sparkles } from 'lucide-react';

const programs = [
  {
    icon: <Map size={28} />,
    color: '#3b82f6',
    title: 'Peta Sebaran Alumni',
    desc: 'Visualisasi interaktif lokasi alumni di seluruh Indonesia menggunakan teknologi GIS — identitas khas kami sebagai alumni SPIG.',
    tag: 'GIS Feature',
    tagClass: 'badge-blue',
  },
  {
    icon: <Briefcase size={28} />,
    color: '#10b981',
    title: 'Bursa Kerja Alumni',
    desc: 'Lowongan pekerjaan dari instansi terpercaya yang dikhususkan untuk alumni SPIG UPI di bidang GIS, survei, dan pemetaan.',
    tag: 'Career',
    tagClass: 'badge-emerald',
  },
  {
    icon: <Calendar size={28} />,
    color: '#f59e0b',
    title: 'Kegiatan & Event',
    desc: 'Webinar, reuni, workshop GIS, dan talkshow industri. Tetap terhubung dan terus berkembang bersama komunitas alumni.',
    tag: 'Community',
    tagClass: 'badge-teal',
  },
  {
    icon: <Users size={28} />,
    color: '#8b5cf6',
    title: 'Program Mentoring',
    desc: 'Terhubung dengan alumni senior sebagai mentor karir, teknis GIS, atau pengembangan profesional. Gratis untuk anggota.',
    tag: 'Mentoring',
    tagClass: 'badge-blue',
  },
  {
    icon: <BookOpen size={28} />,
    color: '#ec4899',
    title: 'Repositori Karya Ilmiah',
    desc: 'Akses koleksi skripsi, penelitian, dan tugas akhir alumni. Referensi bagi mahasiswa aktif dan alumni yang ingin riset lanjutan.',
    tag: 'Academic',
    tagClass: 'badge-teal',
  },
  {
    icon: <Sparkles size={28} />,
    color: '#14b8a6',
    title: 'Forum Diskusi',
    desc: 'Ruang diskusi aktif per angkatan, bidang karir, dan topik teknis GIS. Berbagi pengetahuan dan membangun jaringan.',
    tag: 'Forum',
    tagClass: 'badge-emerald',
  },
];

export default function ProgramSection() {
  return (
    <section id="tentang" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '16px' }}>✨ Program Unggulan</span>
          <h2 className="section-title">
            Semua yang Kamu Butuhkan,{' '}
            <span className="gradient-text">Dalam Satu Platform</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Dari peta interaktif alumni hingga mentoring karir — IASPIG hadir sebagai ekosistem lengkap untuk alumni SPIG UPI.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {programs.map((program, i) => (
            <div
              key={i}
              className="glass glass-hover"
              style={{
                borderRadius: '20px', padding: '32px 28px',
                cursor: 'pointer', position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '100px', height: '100px',
                background: `radial-gradient(circle, ${program.color}15, transparent 70%)`,
                borderRadius: '50%', transform: 'translate(20px, -20px)',
              }} />

              {/* Icon */}
              <div style={{
                width: '58px', height: '58px', borderRadius: '16px',
                background: `${program.color}15`,
                border: `1px solid ${program.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: program.color, marginBottom: '20px',
              }}>
                {program.icon}
              </div>

              <span className={`badge ${program.tagClass}`} style={{ marginBottom: '14px', fontSize: '0.72rem' }}>
                {program.tag}
              </span>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f6ff', marginBottom: '12px', fontFamily: 'Plus Jakarta Sans' }}>
                {program.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.7 }}>
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #tentang .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #tentang .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
