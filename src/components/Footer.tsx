export default function Footer() {
  return (
    <footer
      className="border-t border-[#D4AF37]/20 py-12 px-4"
      style={{ background: '#0E0205' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Ornament */}
        <div className="flex items-center gap-4 justify-center mb-6" aria-hidden="true">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/40 max-w-[100px]" />
          <span className="text-[#D4AF37]/60 text-2xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/40 max-w-[100px]" />
        </div>

        <p className="font-display text-2xl italic text-[#D4AF37] mb-1">Brenda's Brothel</p>
        <p className="font-handwritten text-[#FFF8F0]/40 text-lg mb-6">
          Est. 1957 &nbsp;·&nbsp; Satisfaction Guaranteed™
        </p>

        <p className="font-body text-[#FFF8F0]/25 text-xs leading-relaxed max-w-sm mx-auto mb-4">
          Brenda's Brothel is a family establishment offering companionship, casseroles,
          and card games. No actual brothel activities occur on these premises or anywhere
          near them. Brenda would like that noted for the record.
        </p>

        <p className="font-body text-[#FFF8F0]/20 text-xs">
          Made with love (and mild concern) by her family.
        </p>
      </div>
    </footer>
  )
}
