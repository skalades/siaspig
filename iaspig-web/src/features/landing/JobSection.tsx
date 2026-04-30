'use client';
import { Briefcase, MapPin, Clock, ArrowRight, Building2, Bookmark } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    id: 1,
    company: 'Badan Informasi Geospasial',
    logo: '🏛️',
    role: 'Analis Geospasial',
    location: 'Cibinong, Jawa Barat',
    type: 'Full-time',
    typeColor: '#10b981',
    posted: '2 hari lalu',
    tags: ['ArcGIS', 'Remote Sensing', 'Python'],
    salary: 'Rp 8–12 Jt',
  },
  {
    id: 2,
    company: 'PT. Surveyor Indonesia',
    logo: '🔭',
    role: 'Surveyor Kadastral',
    location: 'Jakarta Selatan',
    type: 'Full-time',
    typeColor: '#10b981',
    posted: '3 hari lalu',
    tags: ['Total Station', 'AutoCAD', 'CAD'],
    salary: 'Rp 7–10 Jt',
  },
  {
    id: 3,
    company: 'ESRI Indonesia',
    logo: '🌍',
    role: 'GIS Developer',
    location: 'Remote',
    type: 'Remote',
    typeColor: '#8b5cf6',
    posted: '1 hari lalu',
    tags: ['ArcGIS Pro', 'JavaScript', 'REST API'],
    salary: 'Rp 12–18 Jt',
  },
  {
    id: 4,
    company: 'PT. Waskita Karya',
    logo: '🏗️',
    role: 'Surveyor Infrastruktur',
    location: 'Tangerang, Banten',
    type: 'Kontrak',
    typeColor: '#f59e0b',
    posted: '5 hari lalu',
    tags: ['GPS RTK', 'Drone', 'Civil 3D'],
    salary: 'Rp 9–14 Jt',
  },
];

function JobCard({ job }: { job: typeof jobs[0] }) {
  return (
    <div className="glass glass-hover" style={{ borderRadius: '18px', padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '12px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
          }}>
            {job.logo}
          </div>
          <div>
            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{job.company}</div>
            <div style={{ fontWeight: 700, color: '#f0f6ff', fontSize: '1rem', fontFamily: 'Plus Jakarta Sans' }}>{job.role}</div>
          </div>
        </div>
        <button style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', padding: '4px', transition: 'color 0.2s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#3b82f6'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}
        >
          <Bookmark size={18} />
        </button>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '14px', flexWrap: 'wrap' }}>
        {[
          { icon: <MapPin size={12} />, text: job.location },
          { icon: <Clock size={12} />, text: job.posted },
        ].map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: '#64748b' }}>
            <span style={{ color: '#3b82f6' }}>{item.icon}</span> {item.text}
          </span>
        ))}
        <span style={{
          padding: '2px 10px', borderRadius: '6px', fontSize: '0.74rem', fontWeight: 600,
          background: `${job.typeColor}15`, color: job.typeColor, border: `1px solid ${job.typeColor}25`,
        }}>
          {job.type}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {job.tags.map((tag) => (
          <span key={tag} style={{
            padding: '3px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 500,
            background: 'rgba(255,255,255,0.04)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.07)',
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#34d399' }}>{job.salary}</span>
        <Link href={`/lowongan/${job.id}`} style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          fontSize: '0.82rem', color: '#60a5fa', textDecoration: 'none', fontWeight: 600,
          transition: 'gap 0.2s',
        }}>
          Lihat Detail <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function JobSection() {
  return (
    <section id="lowongan" className="section-padding">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '16px' }}>💼 Bursa Kerja</span>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              Lowongan <span className="gradient-text">Terbaru</span>
            </h2>
            <p className="section-subtitle">Peluang karir di bidang GIS, survei, dan pemetaan untuk alumni SPIG.</p>
          </div>
          <Link href="/lowongan" className="btn-secondary">
            <Briefcase size={16} /> Semua Lowongan <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* CTA post job */}
        <div className="glass" style={{ borderRadius: '20px', padding: '32px', marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderColor: 'rgba(16,185,129,0.2)' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ fontSize: '2rem' }}>🏢</div>
            <div>
              <div style={{ fontWeight: 700, color: '#f0f6ff', fontFamily: 'Plus Jakarta Sans' }}>Punya lowongan untuk alumni SPIG?</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Posting gratis untuk instansi dan perusahaan yang bermitra dengan IASPIG</div>
            </div>
          </div>
          <Link href="/lowongan/buat" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
            <Building2 size={16} /> Posting Lowongan
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #lowongan .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
