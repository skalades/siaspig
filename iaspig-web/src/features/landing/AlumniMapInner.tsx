'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
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
  if (count > 200) return 20;
  if (count > 100) return 15;
  if (count > 50) return 11;
  return 8;
}

export default function AlumniMapInner() {
  return (
    <MapContainer
      center={[-2.5, 118]}
      zoom={5}
      style={{ height: '480px', width: '100%' }}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      {/* Dark tile layer (CartoDB Dark Matter) */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      {/* Alumni markers */}
      {dummyAlumni.map((alumni, i) => (
        <CircleMarker
          key={i}
          center={[alumni.lat, alumni.lng]}
          radius={getRadius(alumni.count)}
          pathOptions={{
            fillColor: '#3b82f6',
            fillOpacity: 0.75,
            color: '#60a5fa',
            weight: 1.5,
          }}
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
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
