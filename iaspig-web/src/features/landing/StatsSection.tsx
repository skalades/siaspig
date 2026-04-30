'use client';
import { useEffect, useRef, useState } from 'react';
import { Users, MapPin, Briefcase, Award, Globe, GraduationCap } from 'lucide-react';

const stats = [
  { icon: <Users size={24} />, value: 1200, suffix: '+', label: 'Alumni Terdaftar', color: '#3b82f6', desc: 'Dari seluruh angkatan' },
  { icon: <MapPin size={24} />, value: 34, suffix: '', label: 'Provinsi', color: '#14b8a6', desc: 'Sebaran di Indonesia' },
  { icon: <Briefcase size={24} />, value: 98, suffix: '%', label: 'Terserap Industri', color: '#10b981', desc: 'Dalam 1 tahun lulus' },
  { icon: <GraduationCap size={24} />, value: 15, suffix: '+', label: 'Angkatan', color: '#f59e0b', desc: 'Sejak berdiri' },
  { icon: <Globe size={24} />, value: 5, suffix: '+', label: 'Negara', color: '#8b5cf6', desc: 'Alumni bekerja di luar negeri' },
  { icon: <Award size={24} />, value: 200, suffix: '+', label: 'Instansi Mitra', color: '#ec4899', desc: 'Pemerintah & swasta' },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatCard({ stat, index, started }: { stat: typeof stats[0]; index: number; started: boolean }) {
  const count = useCountUp(stat.value, 2000, started);
  return (
    <div
      className="glass glass-hover stat-card"
      style={{ borderRadius: '20px', animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div style={{
        width: '52px', height: '52px', borderRadius: '14px', margin: '0 auto 16px',
        background: `${stat.color}18`,
        border: `1px solid ${stat.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: stat.color,
      }}>
        {stat.icon}
      </div>
      <div style={{ fontSize: '2.4rem', fontWeight: 900, fontFamily: 'Plus Jakarta Sans', color: '#f0f6ff', lineHeight: 1 }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0', margin: '8px 0 6px' }}>
        {stat.label}
      </div>
      <div style={{ fontSize: '0.8rem', color: '#475569' }}>{stat.desc}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="section-padding" ref={ref} style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(59,130,246,0.03) 50%, transparent)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge badge-teal" style={{ marginBottom: '16px' }}>📊 Angka Bicara</span>
          <h2 className="section-title">
            Alumni SPIG UPI di{' '}
            <span className="gradient-text">Seluruh Indonesia</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ribuan alumni kami tersebar di berbagai bidang — dari BIG, BRIN, perusahaan tambang, hingga startup teknologi.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} started={started} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #stats .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #stats .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
