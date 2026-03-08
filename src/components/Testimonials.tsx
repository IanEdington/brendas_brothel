const testimonials = [
  {
    quote: "I came for the back-scratch. I left with a renewed sense of purpose, a recipe for lamb chops, and the distinct impression that Brenda had identified all of my character flaws within the first twelve minutes.",
    name: 'Gerald T.',
    detail: 'Loyal patron since 2019',
    stars: 5,
  },
  {
    quote: "Brenda told me everything that was wrong with my marriage. She was right about all of it. My therapist confirmed this. Brenda is not a licensed therapist. I am not sure this matters.",
    name: 'Anonymous',
    detail: '(obviously Dave)',
    stars: 5,
  },
  {
    quote: "Best gin rummy game of my life, which is notable because I lost every single hand. Marvelle looked directly into my soul. I don't know what she saw there but I intend to do better.",
    name: 'Peggy S., age 71',
    detail: 'Three-time Executive package client',
    stars: 5,
  },
  {
    quote: "I ordered the Midnight Special at 8pm. She put me to bed at 8:45. I slept eleven hours. I have not slept eleven hours since 2003. I have already rebooked.",
    name: 'A Satisfied Customer',
    detail: 'Wishes to remain anonymous (it\'s Steve)',
    stars: 5,
  },
  {
    quote: "Dolores said my casserole technique was 'coming along.' I have been making casseroles for thirty years. I have never felt so simultaneously humbled and motivated.",
    name: 'Linda K.',
    detail: 'Full Package, bi-monthly',
    stars: 5,
  },
  {
    quote: "I came in thinking I was fine. Rhonda listened to me for ten minutes and then asked one question that I am still thinking about. It's been four months. I've changed careers. Five stars.",
    name: 'Thomas B.',
    detail: 'First and only Conversational Attaché session',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6"
      style={{
        background: 'linear-gradient(160deg, #0E0205 0%, #3D0A14 50%, #0E0205 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-section">
          <p className="font-handwritten text-[#D4AF37] text-lg tracking-widest uppercase mb-3">
            Word of Mouth
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="font-body text-[#FFF8F0]/50 text-base max-w-xl mx-auto">
            All reviews are genuine. Some names have been changed. Brenda has read all of them
            and has notes on most of them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="fade-section flex flex-col p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300"
              style={{ background: 'rgba(61,10,20,0.5)', backdropFilter: 'blur(6px)' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label="5 stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-[#D4AF37] text-sm animate-gold-shimmer" aria-hidden="true">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-[#FFF8F0]/80 text-sm leading-relaxed italic flex-1 mb-5">
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-[#D4AF37]/20 pt-4">
                <p className="font-display text-[#D4AF37] text-sm font-bold">{t.name}</p>
                <p className="font-body text-[#FFF8F0]/40 text-xs mt-0.5">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center mt-10 font-body text-[#FFF8F0]/25 text-xs italic fade-section">
          All experiences are unique. Results may vary based on Brenda's current mood,
          available Tupperware, and whether it is a puzzle day.
        </p>
      </div>
    </section>
  )
}
