'use client';

export default function FloatingOrbs() {
  return (
    <div className="orbs-container">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`orb orb-${i + 1}`}>
          <div className="orb-inner"></div>
        </div>
      ))}
      
      <style jsx>{`
        .orbs-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          mix-blend-mode: screen;
          opacity: 0.6;
        }
        
        .orb-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: morph 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 5%;
          animation: float1 25s ease-in-out infinite;
        }
        
        .orb-1 .orb-inner {
          background: radial-gradient(circle, #00ffff, #0080ff, transparent);
        }
        
        .orb-2 {
          width: 250px;
          height: 250px;
          top: 60%;
          right: 10%;
          animation: float2 30s ease-in-out infinite;
        }
        
        .orb-2 .orb-inner {
          background: radial-gradient(circle, #ff00ff, #8000ff, transparent);
        }
        
        .orb-3 {
          width: 200px;
          height: 200px;
          bottom: 20%;
          left: 30%;
          animation: float3 35s ease-in-out infinite;
        }
        
        .orb-3 .orb-inner {
          background: radial-gradient(circle, #ffff00, #ff8000, transparent);
        }
        
        .orb-4 {
          width: 180px;
          height: 180px;
          top: 40%;
          left: 60%;
          animation: float4 28s ease-in-out infinite;
        }
        
        .orb-4 .orb-inner {
          background: radial-gradient(circle, #00ff00, #00ff80, transparent);
        }
        
        .orb-5 {
          width: 220px;
          height: 220px;
          top: 20%;
          right: 30%;
          animation: float5 32s ease-in-out infinite;
        }
        
        .orb-5 .orb-inner {
          background: radial-gradient(circle, #ff0080, #ff0040, transparent);
        }
        
        .orb-6 {
          width: 260px;
          height: 260px;
          bottom: 10%;
          right: 40%;
          animation: float6 27s ease-in-out infinite;
        }
        
        .orb-6 .orb-inner {
          background: radial-gradient(circle, #8000ff, #4000ff, transparent);
        }
        
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-50px, 100px) scale(0.9);
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-80px, 60px) scale(1.2);
          }
          66% {
            transform: translate(60px, -80px) scale(0.8);
          }
        }
        
        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(70px, 70px) scale(0.9);
          }
          66% {
            transform: translate(-100px, -50px) scale(1.1);
          }
        }
        
        @keyframes float4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-60px, -60px) scale(1.15);
          }
          66% {
            transform: translate(80px, 40px) scale(0.85);
          }
        }
        
        @keyframes float5 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(90px, -30px) scale(0.95);
          }
          66% {
            transform: translate(-70px, 50px) scale(1.05);
          }
        }
        
        @keyframes float6 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-50px, 80px) scale(1.1);
          }
          66% {
            transform: translate(100px, -60px) scale(0.9);
          }
        }
        
        @keyframes morph {
          0%, 100% {
            border-radius: 50%;
          }
          25% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
          }
          50% {
            border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%;
          }
          75% {
            border-radius: 40% 60% 60% 40% / 40% 60% 60% 40%;
          }
        }
      `}</style>
    </div>
  );
}
