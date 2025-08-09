'use client';

export default function GridPattern() {
  return (
    <div className="grid-container">
      <svg className="grid-svg" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(0, 255, 255, 0.1)"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
        <mask id="gridMask">
          <rect width="100%" height="100%" fill="url(#gridFade)" />
        </mask>
      </svg>
      
      <style jsx>{`
        .grid-container {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: perspective(1000px) rotateX(60deg);
          transform-origin: center center;
        }
        
        .grid-svg {
          width: 200%;
          height: 200%;
          position: absolute;
          left: -50%;
          top: -50%;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </div>
  );
}
