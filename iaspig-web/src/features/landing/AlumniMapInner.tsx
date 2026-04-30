'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Data dummy alumni untuk preview
const dummyAlumni = [
  { lat: -6.9175, lng: 107.6191, name: 'Bandung', count: 320, angkatan: '2018' },
  { lat: -6.2088, lng: 106.8456, name: 'Jakarta', count: 210, angkatan: '2017' },
  { lat: -7.2575, lng: 112.7521, name: 'Surabaya', count: 95, angkatan: '2019' },
  { lat: -8.6705, lng: 115.2126, name: 'Denpasar', count: 42, angkatan: '2020' },
  { lat: -0.5022, lng: 117.1536, name: 'Samarinda', count: 67, angkatan: '2016' },
  { lat: 3.5952, lng: 98.6722, name: 'Medan', count: 55, angkatan: '2018' },
  { lat: -5.1477, lng: 119.4327, name: 'Makassar', count: 48, angkatan: '2019' },
  { lat: -2.9761, lng: 104.7754, name: 'Palembang', count: 37, angkatan: '2017' },
  { lat: -7.7956, lng: 110.3695, name: 'Yogyakarta', count: 89, angkatan: '2020' },
  { lat: -6.5944, lng: 106.7892, name: 'Bogor', count: 73, angkatan: '2018' },
  { lat: 1.4748, lng: 124.8421, name: 'Manado', count: 22, angkatan: '2019' },
  { lat: -3.3194, lng: 114.5908, name: 'Banjarmasin', count: 31, angkatan: '2016' },
  { lat: 0.5387, lng: 101.4474, name: 'Pekanbaru', count: 44, angkatan: '2018' },
  { lat: -8.5574, lng: 122.2297, name: 'Maumere', count: 15, angkatan: '2020' },
  { lat: -2.6667, lng: 140.6667, name: 'Jayapura', count: 18, angkatan: '2017' },
];

function getRadius(count: number) {
  if (count > 200) return 40;
  if (count > 100) return 30;
  if (count > 50) return 22;
  return 16;
}

const createPulseIcon = (color: string, size: number) => {
  return L.divIcon({
    className: 'custom-pulse-icon',
    html: `
      <div class="pulse-icon-wrapper" style="width: ${size}px; height: ${size}px;">
        <div class="pulse-icon-core" style="background-color: ${color};"></div>
        <div class="pulse-icon-ring" style="border-color: ${color};"></div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

function MapEffect() {
  const map = useMap();
  useEffect(() => {
    const container = map.getContainer();
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animasi entrance map (terbang ke lokasi yang difokuskan saat di-scroll)
          setTimeout(() => {
            map.flyTo([-2.5, 118], 5, { duration: 2.5, easeLinearity: 0.25 });
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, [map]);
  return null;
}

export default function AlumniMapInner() {
  return (
    <MapContainer
      center={[-8, 110]} // Initial center point for animation
      zoom={4}           // Initial zoom
      style={{ height: '480px', width: '100%' }}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <MapEffect />
      
      {/* Dark tile layer (CartoDB Dark Matter) */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      {/* Alumni markers */}
      {dummyAlumni.map((alumni, i) => (
        <Marker
          key={i}
          position={[alumni.lat, alumni.lng]}
          icon={createPulseIcon('#3b82f6', getRadius(alumni.count))}
        >
          <Popup>
            <div style={{ padding: '4px' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '4px', color: '#f0f6ff' }}>
                📍 {alumni.name}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>{alumni.count}</span> alumni terdaftar
              </div>
              <div style={{ color: '#64748b', fontSize: '0.78rem', marginTop: '4px' }}>
                Termasuk angkatan {alumni.angkatan}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
