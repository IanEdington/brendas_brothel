export default function About() {
  return (
    <section id="about" className="bg-[#FFF8F0] py-24 px-6">
      <div className="max-w-3xl mx-auto fade-section">
        <div className="text-center mb-12">
          <p className="font-handwritten text-[#8B1A2A] text-lg tracking-widest uppercase mb-3">
            The Establishment
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#3D0A14] font-bold mb-6">
            Meet Madam Brenda
          </h2>
          <div className="ornament-divider text-[#8B1A2A]">
            <span className="text-xl">✦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait placeholder */}
          <div className="flex justify-center">
            <div
              className="w-64 h-64 rounded-full flex items-center justify-center border-4 border-[#D4AF37]/60 shadow-2xl"
              style={{
                background: 'radial-gradient(ellipse at 40% 35%, #8B1A2A, #3D0A14)',
                boxShadow: '0 0 40px rgba(212,175,55,0.2), 0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              <span className="text-8xl" role="img" aria-label="Madam Brenda">👑</span>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-[#3D0A14]/85 font-body text-base leading-relaxed">
            <p>
              Brenda has been in the business since 1957, when she first opened her doors to
              a grateful and grateful-smelling public. She runs a tight ship — or, as she prefers
              to call it, a{' '}
              <em className="font-display text-[#8B1A2A]">"well-appointed establishment of companionable leisure."</em>
            </p>
            <p>
              A woman of refined taste and unrefined opinions, Brenda holds a degree in
              Home Economics from a school she refers to only as "the best one." She is
              fluent in passive aggression, casserole, and the meaningful pause.
            </p>
            <p>
              Under her watchful eye, Brenda's Brothel has earned a reputation for excellence,
              discretion, and an inexplicably well-stocked candy dish. She does not give
              out the WiFi password. Not to anyone.
            </p>
            <p className="font-display italic text-[#8B1A2A] text-lg border-l-2 border-[#D4AF37] pl-4">
              "I've seen it all, darling. And most of it needed a good talking-to."
              <span className="block mt-1 text-sm font-body not-italic text-[#3D0A14]/60">
                — Brenda, proprietress
              </span>
            </p>
          </div>
        </div>

        {/* Accolades */}
        <div className="mt-16 grid grid-cols-3 gap-6 text-center border-t border-[#D4AF37]/30 pt-10">
          {[
            { stat: '68+', label: 'Years in Business' },
            { stat: '∞', label: 'Opinions Dispensed' },
            { stat: '1', label: 'WiFi Password (Undisclosed)' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-display text-3xl font-bold text-[#8B1A2A]">{stat}</p>
              <p className="font-body text-sm text-[#3D0A14]/60 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
