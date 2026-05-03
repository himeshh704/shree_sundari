"use client";

export default function WhatsAppFAB() {
  const whatsappNumber = "919660651719";
  const message = encodeURIComponent("Hello! I'm interested in booking an appointment with Shreesundari. 💄");

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .wa-fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          animation: wa-fadein 0.5s 1s ease both;
        }
        @keyframes wa-fadein {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .wa-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.5);
        }
        .wa-fab:active {
          transform: scale(0.95);
        }
        .wa-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25D366;
          animation: wa-pulse 2.5s ease-out infinite;
        }
        .wa-tooltip {
          position: absolute;
          right: 72px;
          background: #2A2826;
          color: #FAFAF7;
          font-family: var(--font-jost, sans-serif);
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translateX(8px);
          transition: all 0.2s ease;
        }
        .wa-fab:hover .wa-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Book appointment via WhatsApp"
      >
        <span className="wa-pulse" />
        {/* Official WhatsApp SVG */}
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.954 4 4 12.954 4 24C4 27.67 5.026 31.1 6.82 34.004L4.096 43.474L13.874 40.8C16.673 42.431 19.927 43.384 23.4 43.466L24 43.47C35.046 43.47 44 34.516 44 23.47C44 12.424 35.046 4 24 4Z" fill="white"/>
          <path d="M24 7C13.507 7 7 13.507 7 24C7 27.226 7.88 30.247 9.4 32.857L7 41L15.362 38.638C17.869 40.044 20.836 40.877 24 40.877C34.493 40.877 41 34.493 41 24C41 13.507 34.493 7 24 7ZM17.5 15C17.82 15 18.15 15.01 18.44 15.02C18.75 15.03 19.1 15.07 19.44 15.82C19.84 16.71 20.72 19 20.83 19.24C20.95 19.48 21.03 19.76 20.86 20.08C20.7 20.4 20.62 20.59 20.38 20.86C20.14 21.13 19.87 21.46 19.66 21.67C19.42 21.91 19.16 22.17 19.44 22.65C19.72 23.13 20.7 24.73 22.14 26.01C24 27.68 25.56 28.2 26.04 28.44C26.52 28.68 26.8 28.64 27.08 28.32C27.36 28 28.3 26.91 28.62 26.43C28.94 25.95 29.26 26.03 29.7 26.19C30.14 26.35 32.4 27.47 32.88 27.71C33.36 27.95 33.68 28.07 33.8 28.27C33.92 28.47 33.92 29.47 33.52 30.63C33.12 31.79 31.12 32.9 30.18 33.02C29.24 33.14 28.26 33.2 24.3 31.6C19.54 29.72 16.56 24.94 16.32 24.62C16.08 24.3 14.5 22.2 14.5 20.02C14.5 17.84 15.58 16.77 15.96 16.35C16.34 15.93 16.78 15.82 17.06 15.82C17.34 15.82 17.5 15 17.5 15Z" fill="#25D366"/>
        </svg>
        <span className="wa-tooltip">Book via WhatsApp</span>
      </a>
    </>
  );
}
