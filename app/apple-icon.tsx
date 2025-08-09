import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 900,
          fontFamily: 'Arial',
          letterSpacing: '-2px',
          borderRadius: '20px',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 20,
          height: 20,
          background: '#ff0000',
          borderRadius: '50%'
        }} />
        VSD
      </div>
    ),
    {
      ...size,
    }
  )
}
