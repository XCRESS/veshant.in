'use client';

export default function AuroraBackground() {
  return (
    <div className="aurora-container">
      <div className="aurora aurora-1"></div>
      <div className="aurora aurora-2"></div>
      <div className="aurora aurora-3"></div>
      <div className="aurora aurora-4"></div>
      
      <style jsx>{`
        .aurora-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .aurora {
          position: absolute;
          width: 150%;
          height: 150%;
          filter: blur(60px);
          opacity: 0.4;
          mix-blend-mode: screen;
        }
        
        .aurora-1 {
          background: radial-gradient(
            ellipse at 20% 30%,
            #ff006e,
            transparent 50%
          );
          animation: aurora1 20s ease-in-out infinite;
        }
        
        .aurora-2 {
          background: radial-gradient(
            ellipse at 80% 50%,
            #00ffff,
            transparent 50%
          );
          animation: aurora2 25s ease-in-out infinite;
        }
        
        .aurora-3 {
          background: radial-gradient(
            ellipse at 50% 80%,
            #ff00ff,
            transparent 50%
          );
          animation: aurora3 30s ease-in-out infinite;
        }
        
        .aurora-4 {
          background: radial-gradient(
            ellipse at 30% 70%,
            #ffff00,
            transparent 50%
          );
          animation: aurora4 35s ease-in-out infinite;
        }
        
        @keyframes aurora1 {
          0%, 100% {
            transform: translate(-30%, -30%) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(30%, -20%) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translate(-20%, 30%) rotate(240deg) scale(0.9);
          }
        }
        
        @keyframes aurora2 {
          0%, 100% {
            transform: translate(30%, -30%) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(-30%, 20%) rotate(-120deg) scale(1.2);
          }
          66% {
            transform: translate(20%, 30%) rotate(-240deg) scale(0.8);
          }
        }
        
        @keyframes aurora3 {
          0%, 100% {
            transform: translate(-20%, 30%) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(20%, -30%) rotate(180deg) scale(1.1);
          }
          66% {
            transform: translate(-30%, -20%) rotate(360deg) scale(0.9);
          }
        }
        
        @keyframes aurora4 {
          0%, 100% {
            transform: translate(20%, 20%) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(-20%, -20%) rotate(-180deg) scale(1.3);
          }
          66% {
            transform: translate(30%, -30%) rotate(-360deg) scale(0.7);
          }
        }
      `}</style>
    </div>
  );
}
