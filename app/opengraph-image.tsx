import { ImageResponse } from 'next/og'
import { doctor } from '@/lib/doctor'

export const dynamic = 'force-static'
export const alt = `${doctor.name} — ${doctor.nameEn}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  const tags = ['FACS (USA)', 'FIPM (India)', 'MS – Ortho', 'Arthroscopy & Arthroplasty', doctor.hospitalEn]
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '64px', position: 'relative',
          background: 'linear-gradient(135deg, #061a2b 0%, #0c3550 60%, #051420 100%)',
          color: '#f8fafc', fontFamily: 'sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div style={{ display: 'flex', position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #0284c7, #0d9488)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', width: '6px', height: '48px', background: '#0284c7', borderRadius: '3px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: '18px', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.1em' }}>
              {doctor.positionEn}
            </div>
            <div style={{ display: 'flex', fontSize: '15px', color: '#7dd3fc', marginTop: '2px' }}>{doctor.departmentEn}</div>
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: '62px', fontWeight: 900, lineHeight: 1.1, marginBottom: '8px' }}>
          {doctor.name}
        </div>
        <div style={{ display: 'flex', fontSize: '32px', color: '#38bdf8', fontWeight: 700, marginBottom: '16px' }}>
          {doctor.nameEn}
        </div>
        <div style={{ display: 'flex', fontSize: '20px', color: '#94a3b8', marginBottom: '32px', maxWidth: '900px', lineHeight: 1.4 }}>
          {doctor.degreesEn}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <div key={tag} style={{
              display: 'flex', padding: '8px 18px', borderRadius: '999px', fontSize: '16px',
              background: 'rgba(2,132,199,.15)', border: '1px solid rgba(56,189,248,.3)', color: '#e2e8f0',
            }}>
              {tag}
            </div>
          ))}
        </div>

        {/* Chamber info bottom right */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '48px', right: '64px', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', fontSize: '16px', color: '#38bdf8', fontWeight: 700 }}>{doctor.chamber.nameEn}</div>
          <div style={{ display: 'flex', fontSize: '14px', color: '#64748b', marginTop: '4px' }}>{doctor.phones[0].number} · {doctor.phones[1].number}</div>
        </div>
      </div>
    ),
    size,
  )
}
