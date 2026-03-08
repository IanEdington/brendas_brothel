const ladies = [
  {
    name: 'Madam Brenda',
    title: 'Proprietress & Senior Advisor',
    emoji: '👑',
    specialty: 'Running things',
    bio: 'The original. The legend. The reason there is a laminated sign in the bathroom that says "Guests Do Not Touch the Good Towels." Has opinions on everything and will share them freely, at no additional charge.',
    specialties: ['Passive aggression', 'Casseroles', 'Meaningful silences', 'The look'],
  },
  {
    name: 'Dolores',
    title: 'Culinary Specialist & Emotional Auditor',
    emoji: '🍰',
    specialty: 'Baked goods & accountability',
    bio: 'Dolores has never made a bad pie in her life and considers this both a gift and a responsibility. Will absolutely notice if you didn\'t finish your portion and will absolutely bring it up again next visit.',
    specialties: ['Lemon bars', 'Pointed questions', 'Correctly identifying your problem', 'Tupperware taxonomy'],
  },
  {
    name: 'Marvelle',
    title: 'Recreation Director',
    emoji: '🎯',
    specialty: 'Games of all kinds',
    bio: 'Champion gin rummy player (regional, 1998, 2001, 2004, uncontested 2007 due to "circumstances"). Marvelle believes that losing builds character and has been building yours for years without you realizing it.',
    specialties: ['Gin rummy', 'Cribbage', 'Light arm-wrestling', 'Victory laps'],
  },
  {
    name: 'Rhonda',
    title: 'Conversational Attaché',
    emoji: '💬',
    specialty: 'Listening (strategically)',
    bio: 'Rhonda will listen to every word you say. She will then repeat it back to you with subtle edits that reveal your actual problem. She is not a therapist. She is, arguably, better.',
    specialties: ['Active listening', 'Gentle confrontation', 'Knowing your business', 'Strategic nods'],
  },
]

export default function Staff() {
  return (
    <section
      id="staff"
      className="bg-[#FFF8F0] py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-section">
          <p className="font-handwritten text-[#8B1A2A] text-lg tracking-widest uppercase mb-3">
            Meet the Team
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#3D0A14] font-bold mb-4">
            The Ladies
          </h2>
          <p className="font-body text-[#3D0A14]/60 text-base max-w-xl mx-auto">
            A carefully assembled roster of professionals. Each brings decades of
            experience, strong opinions, and a willingness to tell you the truth
            whether you asked for it or not.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {ladies.map((lady) => (
            <div
              key={lady.name}
              className="fade-section flex gap-5 p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300 bg-white/60"
            >
              <div className="flex-shrink-0">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl border-2 border-[#D4AF37]/40"
                  style={{ background: 'radial-gradient(ellipse at 40% 35%, #8B1A2A, #3D0A14)' }}
                  role="img"
                  aria-label={lady.name}
                >
                  {lady.emoji}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl font-bold text-[#3D0A14] mb-0.5">
                  {lady.name}
                </h3>
                <p className="font-handwritten text-[#8B1A2A] text-sm tracking-wide mb-3">
                  {lady.title}
                </p>
                <p className="font-body text-[#3D0A14]/70 text-sm leading-relaxed mb-3">
                  {lady.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lady.specialties.map((s) => (
                    <span
                      key={s}
                      className="font-body text-xs text-[#8B1A2A] bg-[#8B1A2A]/10 border border-[#8B1A2A]/20 px-2 py-0.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
