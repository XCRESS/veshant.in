import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Veshant Singh Dahiya - Full-Stack Developer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          backgroundImage: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
          backgroundSize: '20px 20px',
          position: 'relative'
        }}
      >
        {/* Background geometric shapes */}
        <div style={{
          position: 'absolute',
          top: 50,
          right: 100,
          width: 100,
          height: 100,
          background: '#ff0000',
          opacity: 0.1,
          transform: 'rotate(45deg)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: 80,
          left: 80,
          width: 0,
          height: 0,
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: '87px solid #000',
          opacity: 0.1
        }} />
        
        {/* Main content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: 900,
          padding: '0 50px'
        }}>
          <h1 style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#000',
            marginBottom: 20,
            fontFamily: 'Arial',
            letterSpacing: '-2px'
          }}>
            VESHANT SINGH DAHIYA
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 30,
            fontSize: 32,
            color: '#666',
            fontFamily: 'Arial'
          }}>
            <span>Full-Stack Developer</span>
            <div style={{
              width: 8,
              height: 8,
              background: '#ff0000',
              borderRadius: '50%'
            }} />
            <span>Cosmos Financial Group</span>
          </div>
          
          <div style={{
            display: 'flex',
            gap: 40,
            fontSize: 24,
            color: '#000',
            fontFamily: 'Arial',
            fontWeight: 600
          }}>
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>TypeScript</span>
          </div>
        </div>
        
        {/* Bottom branding */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          right: 50,
          fontSize: 20,
          color: '#999',
          fontFamily: 'Arial'
        }}>
          veshant.in
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
