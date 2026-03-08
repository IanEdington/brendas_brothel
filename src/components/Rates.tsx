const rates = [
  {
    service: 'The Companion',
    price: 'Free',
    note: 'Bring wine',
    popular: false,
  },
  {
    service: 'The Full Package',
    price: 'Market Rate',
    note: 'Baked goods accepted in lieu of payment',
    popular: true,
  },
  {
    service: 'The Midnight Special',
    price: 'Complimentary',
    note: 'Automatically included after any visit post-7pm',
    popular: false,
  },
  {
    service: 'The Executive',
    price: 'Free*',
    note: '*You will still owe her something. She will collect when the time is right.',
    popular: false,
  },
  {
    service: 'The Deep Dive',
    price: 'Under Review',
    note: 'Currently in dialogue with the homeowners association',
    popular: false,
  },
  {
    service: 'The Overnight',
    price: 'N/A',
    note: 'Not available. Brenda kicks you out at 10. This is firm.',
    popular: false,
  },
]

export default function Rates() {
  return (
    <section
      id="rates"
      className="bg-[#FFF8F0] py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 fade-section">
          <p className="font-handwritten text-[#8B1A2A] text-lg tracking-widest uppercase mb-3">
            Financial Matters
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#3D0A14] font-bold mb-4">
            Rates & Fees
          </h2>
          <p className="font-body text-[#3D0A14]/60 text-base max-w-xl mx-auto">
            Brenda has never turned anyone away for inability to pay. She has, however,
            catalogued all outstanding debts in a spiral notebook she keeps in the kitchen drawer.
          </p>
        </div>

        {/* Rate card */}
        <div className="fade-section border border-[#D4AF37]/40 divide-y divide-[#D4AF37]/20 shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#3D0A14] px-6 py-3">
            <span className="font-body text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Service</span>
            <span className="font-body text-xs font-bold text-[#D4AF37] uppercase tracking-widest text-center">Rate</span>
            <span className="font-body text-xs font-bold text-[#D4AF37] uppercase tracking-widest text-right">Notes</span>
          </div>

          {rates.map((row) => (
            <div
              key={row.service}
              className={`grid grid-cols-3 px-6 py-4 items-center gap-4 transition-colors hover:bg-[#8B1A2A]/5 ${
                row.popular ? 'bg-[#D4AF37]/8 relative' : 'bg-white/80'
              }`}
            >
              {row.popular && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]" aria-hidden="true" />
              )}
              <span className="font-display text-sm font-bold text-[#3D0A14]">
                {row.service}
                {row.popular && (
                  <span className="ml-2 font-body text-[10px] font-bold text-[#8B1A2A] bg-[#8B1A2A]/10 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
              </span>
              <span className="font-display text-sm font-bold text-[#8B1A2A] text-center">
                {row.price}
              </span>
              <span className="font-body text-xs text-[#3D0A14]/55 text-right italic">
                {row.note}
              </span>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <div className="mt-8 text-center space-y-2 fade-section">
          <p className="font-body text-[#3D0A14]/45 text-xs italic">
            Prices subject to change based on market conditions, personal grievances, and whether
            you were late the last time.
          </p>
          <p className="font-body text-[#3D0A14]/45 text-xs italic">
            Group rates available for families of four or more. Groups of four or more will be
            seated in the good living room. That's the one with the plastic on the furniture.
          </p>
        </div>
      </div>
    </section>
  )
}
