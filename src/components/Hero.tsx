export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base layer — deep burgundy velvet radials */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, #8B1A2A 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, #5C1020 0%, transparent 50%),
            radial-gradient(ellipse at 40% 75%, #3D0A14 0%, transparent 55%),
            radial-gradient(ellipse at 85% 80%, #8B1A2A 0%, transparent 45%),
            radial-gradient(ellipse at 10% 90%, #5C1020 0%, transparent 50%),
            radial-gradient(ellipse at 60% 45%, #D4AF37 0%, transparent 30%),
            #0E0205
          `,
        }}
        aria-hidden="true"
      />

      {/* Animated overlay — slow crimson drift */}
      <div
        className="absolute opacity-60 animate-curtain-slow"
        style={{
          top: '-15%',
          bottom: '-15%',
          left: '-30%',
          right: '-30%',
          background: `
            radial-gradient(circle at 35% 45%, #8B1A2A 0%, transparent 50%),
            radial-gradient(circle at 65% 30%, #5C1020 0%, transparent 50%),
            radial-gradient(circle at 50% 75%, #3D0A14 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Animated overlay — gold shimmer */}
      <div
        className="absolute animate-curtain-fast"
        style={{
          top: '-15%',
          bottom: '-15%',
          left: '-30%',
          right: '-30%',
          background: `
            radial-gradient(circle at 20% 65%, #D4AF37 0%, transparent 35%),
            radial-gradient(circle at 80% 55%, #C47D8E 0%, transparent 35%),
            radial-gradient(circle at 50% 25%, #8B1A2A 0%, transparent 30%)
          `,
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      {/* Damask texture overlay */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='d' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cellipse cx='40' cy='40' rx='18' ry='28' fill='none' stroke='%23D4AF37' stroke-width='0.6' opacity='0.6'/%3E%3Cellipse cx='40' cy='40' rx='10' ry='16' fill='none' stroke='%23D4AF37' stroke-width='0.4' opacity='0.4'/%3E%3Ccircle cx='40' cy='12' r='3' fill='none' stroke='%23D4AF37' stroke-width='0.4' opacity='0.5'/%3E%3Ccircle cx='40' cy='68' r='3' fill='none' stroke='%23D4AF37' stroke-width='0.4' opacity='0.5'/%3E%3Ccircle cx='12' cy='40' r='3' fill='none' stroke='%23D4AF37' stroke-width='0.4' opacity='0.5'/%3E%3Ccircle cx='68' cy='40' r='3' fill='none' stroke='%23D4AF37' stroke-width='0.4' opacity='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='80' height='80' fill='url(%23d)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 animate-fade-in">
        {/* Ornamental top rule */}
        <div className="flex items-center gap-4 mb-8 w-full max-w-sm" aria-hidden="true">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#D4AF37] text-2xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Establishment badge */}
        <p className="font-handwritten text-[#D4AF37]/80 text-xl tracking-[0.3em] uppercase mb-4">
          Est. 1957
        </p>

        {/* Main title */}
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-2 leading-tight"
          style={{ textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.7)' }}
        >
          Brenda's
        </h1>
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold italic text-[#D4AF37] mb-6 leading-tight"
          style={{ textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 0 30px rgba(212,175,55,0.4)' }}
        >
          Brothel
        </h1>

        {/* Tagline */}
        <p
          className="font-display text-xl sm:text-2xl italic text-white/75 mb-3 max-w-lg"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          Discreet. Tasteful. Reasonably Priced.
        </p>
        <p
          className="font-body text-base sm:text-lg text-[#C47D8E] mb-10 tracking-wide"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
        >
          Where Every Guest Leaves Satisfied™
        </p>

        {/* Ornamental bottom rule */}
        <div className="flex items-center gap-4 mb-10 w-full max-w-xs" aria-hidden="true">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <span className="text-[#D4AF37]/60 text-lg">❧</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        {/* CTA */}
        <a
          href="#about"
          className="inline-block border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-body font-semibold tracking-widest text-sm uppercase px-8 py-3 transition-all duration-300 mb-14"
          style={{ letterSpacing: '0.2em' }}
        >
          Enter the Establishment
        </a>

        {/* Scroll cue */}
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-body tracking-widest uppercase">Discover More</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
