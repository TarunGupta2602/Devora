// components/BackgroundShapes.jsx
export default function BackgroundShapes() {
  // Pure background shapes used by Hero for parity with your original UI.
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[30%] right-[30%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[25%] left-[25%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1.5s' }} />

      <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      <div className="absolute top-[25%] right-[25%] w-12 sm:w-16 h-12 sm:h-16 border-2 border-blue-300/30 rounded-lg animate-spin-slow" />
      <div className="absolute bottom-[30%] left-[25%] w-10 sm:w-12 h-10 sm:h-12 border-2 border-purple-300/30 rounded-full animate-spin-slow-reverse" />

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none grid-overlay" />
      </div>

      <svg className="absolute bottom-0 left-0 w-full h-32 sm:h-40 opacity-20 wave-svg" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 0 }}>
        <path fill="url(#gradient)" fillOpacity="0.3" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,128C672,117,768,107,864,112C960,117,1056,139,1152,160C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
