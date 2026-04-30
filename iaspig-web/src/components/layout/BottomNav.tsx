import Link from 'next/link';
import { TbHome, TbMap, TbBriefcase, TbCalendarEvent, TbUser } from 'react-icons/tb';

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <Link href="#hero" className="nav-item">
        <TbHome size={20} />
        <span>Beranda</span>
      </Link>
      <Link href="#peta" className="nav-item">
        <TbMap size={20} />
        <span>Peta</span>
      </Link>
      <Link href="#lowongan" className="nav-item">
        <TbBriefcase size={20} />
        <span>Karir</span>
      </Link>
      <Link href="#kegiatan" className="nav-item">
        <TbCalendarEvent size={20} />
        <span>Event</span>
      </Link>
      <Link href="/login" className="nav-item">
        <TbUser size={20} />
        <span>Profil</span>
      </Link>

      <style>{`
        .bottom-nav {
          display: none;
        }
        @media (max-width: 768px) {
          .bottom-nav {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(4, 13, 26, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding: 12px 24px;
            padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
            justify-content: space-between;
            z-index: 100;
          }
          .bottom-nav .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.7rem;
            font-weight: 500;
            transition: color 0.2s ease;
          }
          .bottom-nav .nav-item:hover, .bottom-nav .nav-item:active {
            color: #60a5fa;
          }
        }
      `}</style>
    </div>
  );
}
