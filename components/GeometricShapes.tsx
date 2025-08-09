'use client';

export default function GeometricShapes() {
  return (
    <div className="geometric-container">
      {/* Hexagon grid */}
      <svg className="hexagon-svg" viewBox="0 0 1200 800">
        <defs>
          <pattern id="hexPattern" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon
              points="30,1 45,10 45,30 30,40 15,30 15,10"
              fill="none"
              stroke="rgba(255, 0, 255, 0.1)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>

      {/* Floating triangles */}
      <div className="triangle triangle-1"></div>
      <div className="triangle triangle-2"></div>
      <div className="triangle triangle-3"></div>
      
      {/* Rotating squares */}
      <div className="square square-1"></div>
      <div className="square square-2"></div>

      <style jsx>{`
        .geometric-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hexagon-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.3;
          animation: drift 40s linear infinite;
        }

        @keyframes drift {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(60px);
          }
        }

        .triangle {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0.1;
        }

        .triangle-1 {
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 52px solid #00ffff;
          top: 20%;
          left: 10%;
          animation: floatTriangle1 15s ease-in-out infinite;
        }

        .triangle-2 {
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 69px solid #ff00ff;
          top: 60%;
          right: 15%;
          animation: floatTriangle2 20s ease-in-out infinite;
        }

        .triangle-3 {
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 43px solid #ffff00;
          bottom: 30%;
          left: 50%;
          animation: floatTriangle3 25s ease-in-out infinite;
        }

        @keyframes floatTriangle1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(50px, -30px) rotate(180deg);
          }
        }

        @keyframes floatTriangle2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-60px, 40px) rotate(-180deg);
          }
        }

        @keyframes floatTriangle3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -20px) rotate(120deg);
          }
          66% {
            transform: translate(-30px, 20px) rotate(240deg);
          }
        }

        .square {
          position: absolute;
          border: 2px solid rgba(0, 255, 255, 0.2);
          opacity: 0.3;
        }

        .square-1 {
          width: 50px;
          height: 50px;
          top: 40%;
          left: 20%;
          animation: rotateSquare1 10s linear infinite;
        }

        .square-2 {
          width: 70px;
          height: 70px;
          bottom: 20%;
          right: 30%;
          animation: rotateSquare2 15s linear infinite reverse;
        }

        @keyframes rotateSquare1 {
          from {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.2);
          }
          to {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes rotateSquare2 {
          from {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(0.8);
          }
          to {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
