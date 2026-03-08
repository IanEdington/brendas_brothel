const services = [
  {
    icon: '📺',
    name: 'The Companion',
    tagline: 'Premium Couch Time',
    description:
      'Brenda will sit with you and watch whatever you want — provided what you want is Wheel of Fortune, the local news, or a documentary about birds. Includes running commentary you did not ask for.',
    fine: 'Remote control not included.',
  },
  {
    icon: '🍲',
    name: 'The Full Package',
    tagline: 'Nourishment & Judgment',
    description:
      'A complete home-cooked meal, a warm hug, and leftovers packed in a Tupperware you will absolutely never return. Brenda will ask if you want more. You will say no. She will give you more.',
    fine: 'Dietary restrictions acknowledged, then ignored.',
  },
  {
    icon: '☕',
    name: 'The Midnight Special',
    tagline: 'Unsolicited Wisdom',
    description:
      'Hot cocoa and a 45-minute monologue about Brenda\'s neighbor Karen, three stories about "the way things used to be," and a gentle but firm suggestion that you call your mother more often.',
    fine: 'Session ends promptly at 9:45pm regardless of where the story is.',
  },
  {
    icon: '🃏',
    name: 'The Executive',
    tagline: 'High-Stakes Leisure',
    description:
      'Three hands of gin rummy with a woman who has never lost and never will. She will notice if you count cards. She will also notice if you don\'t. Includes a debrief on what you did wrong.',
    fine: 'Brenda wins. This is not negotiable.',
  },
  {
    icon: '💆',
    name: 'The Deep Dive',
    tagline: 'Therapeutic Touch',
    description:
      'An enthusiastic back-scratch (upper back only, per an agreement with her chiropractor) followed by fifteen minutes of life coaching based on vibes and a 1987 issue of Reader\'s Digest.',
    fine: 'Not a licensed therapist. Not going to pretend to be one.',
  },
  {
    icon: '🌙',
    name: 'The Overnight',
    tagline: 'Extended Accommodations',
    description:
      'Falls asleep watching the 10 o\'clock news. May or may not remember you\'re still there. Provides a blanket from a closet that smells like cedar and 1994. Breakfast is oatmeal, non-negotiable.',
    fine: 'Snoring is complimentary. Earplugs are not provided.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{
        background: 'linear-gradient(160deg, #3D0A14 0%, #0E0205 50%, #3D0A14 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-section">
          <p className="font-handwritten text-[#D4AF37] text-lg tracking-widest uppercase mb-3">
            Our Offerings
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">
            The Menu of Services
          </h2>
          <p className="font-body text-[#FFF8F0]/60 text-base max-w-xl mx-auto">
            Each experience is curated by Madam Brenda herself. All bookings are subject
            to her availability, her mood, and whether she's already started a puzzle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="fade-section group relative flex flex-col p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300"
              style={{
                background: 'rgba(61,10,20,0.6)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Corner ornaments */}
              <span className="absolute top-2 left-2 text-[#D4AF37]/30 text-xs group-hover:text-[#D4AF37]/60 transition-colors" aria-hidden="true">✦</span>
              <span className="absolute bottom-2 right-2 text-[#D4AF37]/30 text-xs group-hover:text-[#D4AF37]/60 transition-colors" aria-hidden="true">✦</span>

              <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>

              <p className="font-handwritten text-[#C47D8E] text-sm tracking-wider uppercase mb-1">
                {service.tagline}
              </p>
              <h3 className="font-display text-xl font-bold text-[#D4AF37] mb-3">
                {service.name}
              </h3>
              <p className="font-body text-[#FFF8F0]/75 text-sm leading-relaxed flex-1 mb-4">
                {service.description}
              </p>
              <p className="font-body text-[#FFF8F0]/35 text-xs italic border-t border-[#D4AF37]/15 pt-3">
                {service.fine}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
