"use client";

export default function WhatsAppFloat() {
  const phoneNumber = "447990965247"; // +44 7990 965 247 without spaces/symbols
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="whats-float">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <div className="whats-icon">
          <svg viewBox="0 0 32 32" fill="currentColor" width="32" height="32">
            <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.173 1.387 1.387-5.173-0.292-0.507c-1.223-2.162-1.87-4.588-1.87-7.070 0-7.435 6.048-13.483 13.483-13.483s13.483 6.048 13.483 13.483c0 7.435-6.006 13.525-13.44 13.525zM21.305 18.629c-0.292-0.146-1.723-0.85-1.985-0.948s-0.458-0.146-0.652 0.146c-0.195 0.292-0.754 0.948-0.925 1.143s-0.341 0.219-0.633 0.073c-0.292-0.146-1.232-0.452-2.346-1.443-0.867-0.771-1.45-1.723-1.621-2.015s-0.017-0.448 0.127-0.594c0.131-0.131 0.292-0.341 0.438-0.511s0.195-0.292 0.292-0.487c0.098-0.195 0.049-0.365-0.024-0.511s-0.652-1.569-0.894-2.151c-0.236-0.567-0.476-0.49-0.652-0.499-0.168-0.008-0.361-0.010-0.554-0.010s-0.511 0.073-0.779 0.365c-0.268 0.292-1.024 1.001-1.024 2.441s1.048 2.833 1.194 3.028c0.146 0.195 2.059 3.138 4.983 4.401 0.696 0.301 1.239 0.481 1.663 0.615 0.699 0.219 1.335 0.188 1.837 0.114 0.561-0.083 1.723-0.704 1.965-1.383s0.243-1.261 0.17-1.383c-0.073-0.122-0.268-0.195-0.56-0.341z" />
          </svg>
        </div>
        <span className="whats-text">
          WhatsApp
          <br />
          <small>+44 7990 965 247</small>
        </span>
      </a>

      <style jsx>{`
        .whats-float {
          position: fixed;
          transform: translate(118px, 0px);
          top: 25%;
          right: 0;
          width: 170px;
          height: 60px;
          overflow: hidden;
          background-color: #25d366;
          color: #fff;
          border-radius: 10px 0 0 10px;
          z-index: 50;
          transition: all 0.5s ease-in-out;
          box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.2);
        }

        .whats-float a {
          display: flex;
          align-items: center;
          text-decoration: none;
          position: relative;
          height: 100%;
          width: 100%;
          padding: 12px 14px;
          gap: 10px;
        }

        .whats-float .whats-text {
          color: white;
          font-size: 14px;
          line-height: 15px;
          font-weight: 600;
          flex: 1;
          display: block;
        }

        .whats-float .whats-text small {
          font-size: 11px;
          font-weight: 400;
          display: block;
          margin-top: 2px;
        }

        .whats-float .whats-icon {
          color: white;
          flex-shrink: 0;
          transform: rotate(0deg);
          transition: all 0.5s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-right: 6px;
        }

        .whats-float .whats-icon svg {
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));
        }

        .whats-float:hover {
          transform: translate(0px, 0px);
        }

        .whats-float:hover .whats-icon {
          transform: rotate(360deg);
        }
      `}</style>
    </div>
  );
}
