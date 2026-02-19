import React, { useState, useEffect } from "react";

const AnnouncementPopup = () => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  const handleCTA = () => {
    handleClose();
    setTimeout(() => {
      window.open("/problem-statements.pdf", "_blank");
    }, 420);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap');

        .hc-toast {
          position: fixed;
          bottom: 1.5rem;
          left: 1.5rem;
          z-index: 9999;
          width: 300px;
          background: linear-gradient(135deg, #0a0015 0%, #0d0025 60%, #050010 100%);
          border: 1px solid rgba(183, 122, 240, 0.4);
          border-radius: 14px;
          padding: 1.1rem 1.2rem 1rem;
          overflow: hidden;
          box-shadow:
            0 0 40px rgba(183, 122, 240, 0.18),
            0 8px 32px rgba(0, 0, 0, 0.55),
            inset 0 1px 0 rgba(255,255,255,0.07);
          animation: toastIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hc-toast.closing {
          animation: toastOut 0.38s cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        @keyframes toastIn {
          from { opacity: 0; transform: translateX(-30px) translateY(10px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }

        @keyframes toastOut {
          from { opacity: 1; transform: translateX(0) translateY(0); }
          to   { opacity: 0; transform: translateX(-24px) translateY(6px); }
        }

        .hc-toast-glow {
          position: absolute;
          width: 140px; height: 140px;
          background: rgba(183, 122, 240, 0.14);
          border-radius: 50%;
          filter: blur(50px);
          top: -40px; left: -40px;
          pointer-events: none;
          animation: tpulse 3s ease-in-out infinite alternate;
        }

        @keyframes tpulse {
          from { opacity: 0.5; transform: scale(1); }
          to   { opacity: 1;   transform: scale(1.2); }
        }

        .hc-toast-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent, transparent 2px,
            rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px
          );
          pointer-events: none;
          border-radius: 14px;
        }

        .hc-toast-close {
          position: absolute;
          top: 10px; right: 10px;
          width: 24px; height: 24px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.45);
          font-size: 0.7rem;
          transition: all 0.2s ease;
        }

        .hc-toast-close:hover {
          background: rgba(183,122,240,0.2);
          border-color: #b77af0;
          color: white;
          transform: rotate(90deg);
        }

        .hc-toast-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: linear-gradient(90deg, rgba(183,122,240,0.18), rgba(0,255,255,0.12));
          border: 1px solid rgba(183, 122, 240, 0.45);
          border-radius: 100px;
          padding: 3px 10px;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 2.5px;
          color: #b77af0;
          margin-bottom: 0.75rem;
        }

        .hc-toast-badge .dot {
          width: 5px; height: 5px;
          background: #00ffff;
          border-radius: 50%;
          animation: blink 1.2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }

        .hc-toast-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.55rem;
        }

        .hc-toast-icon {
          font-size: 1.6rem;
          flex-shrink: 0;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }

        .hc-toast-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.75rem;
          font-weight: 900;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #b77af0 55%, #00ffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 2px;
        }

        .hc-toast-subtitle {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 3px;
          color: #00ffff;
          margin: 0;
        }

        .hc-toast-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(183,122,240,0.4), rgba(0,255,255,0.3), transparent);
          margin: 0.7rem 0;
        }

        .hc-toast-body {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.55;
          margin-bottom: 0.9rem;
        }

        .hc-toast-body strong {
          color: #b77af0;
        }

        .hc-toast-btn {
          display: block;
          width: 100%;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 2px;
          font-weight: 700;
          color: #000;
          background: linear-gradient(90deg, #b77af0, #00ffff);
          border: none;
          border-radius: 7px;
          padding: 0.6rem 1rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .hc-toast-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(183, 122, 240, 0.45), 0 0 14px rgba(0,255,255,0.25);
        }

        .hc-toast-btn:active {
          transform: scale(0.98);
        }

        .hc-toast-dismiss {
          display: block;
          width: 100%;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: color 0.2s ease;
          background: none;
          border: none;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-align: center;
        }

        .hc-toast-dismiss:hover {
          color: rgba(255,255,255,0.65);
        }

        @media (max-width: 400px) {
          .hc-toast { left: 1rem; right: 1rem; width: auto; }
        }
      `}</style>

      <div className={`hc-toast${closing ? " closing" : ""}`}>
        <div className="hc-toast-glow" />
        <div className="hc-toast-scanlines" />

        <button className="hc-toast-close" onClick={handleClose} aria-label="Close">✕</button>

        <div className="hc-toast-badge">
          <span className="dot" />
          HACKCRAFT 3.0
        </div>

        <div className="hc-toast-header">
          <span className="hc-toast-icon">🚀</span>
          <div>
            <h2 className="hc-toast-title">Problem Statements</h2>
            <p className="hc-toast-subtitle">ARE NOW LIVE</p>
          </div>
        </div>

        <div className="hc-toast-divider" />

        <p className="hc-toast-body">
          The official <strong>HackCraft 3.0</strong> problem statements are out!
          Pick your domain and start building.
        </p>

        <button className="hc-toast-btn" onClick={handleCTA}>
          VIEW PROBLEM STATEMENTS
        </button>

        <button className="hc-toast-dismiss" onClick={handleClose}>
          Maybe later
        </button>
      </div>
    </>
  );
};

export default AnnouncementPopup;
