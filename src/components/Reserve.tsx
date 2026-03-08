export default function Reserve() {
  return (
    <section
      id="reserve"
      className="py-24 px-6"
      style={{
        background: 'linear-gradient(160deg, #3D0A14 0%, #0E0205 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center fade-section">
        <p className="font-handwritten text-[#D4AF37] text-lg tracking-widest uppercase mb-3">
          Secure Your Visit
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">
          Make a Reservation
        </h2>

        <div className="flex items-center gap-4 justify-center mb-8" aria-hidden="true">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50 max-w-[160px]" />
          <span className="text-[#D4AF37]/70 text-xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50 max-w-[160px]" />
        </div>

        <p className="font-body text-[#FFF8F0]/65 text-base leading-relaxed mb-10">
          Brenda does not have a booking system. She has a telephone and a calendar
          she's had since 2009. To reserve your experience, kindly call during
          reasonable hours. Do not call during Jeopardy.
        </p>

        {/* Contact card */}
        <div
          className="border border-[#D4AF37]/30 p-8 mb-8 text-left space-y-5"
          style={{ background: 'rgba(61,10,20,0.6)', backdropFilter: 'blur(8px)' }}
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-0.5" aria-hidden="true">📞</span>
            <div>
              <p className="font-display text-[#D4AF37] font-bold text-sm mb-1">Telephone</p>
              <p className="font-body text-[#FFF8F0]/70 text-sm">
                Call Brenda. She will answer if she wants to. Leave a message if she doesn't.
                She will call back when she has something to say.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl mt-0.5" aria-hidden="true">🕐</span>
            <div>
              <p className="font-display text-[#D4AF37] font-bold text-sm mb-1">Hours of Operation</p>
              <p className="font-body text-[#FFF8F0]/70 text-sm">
                Tuesday through Sunday, whenever. Monday she does her shows.
                After 10pm: absolutely not. Before 9am: see "absolutely not."
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl mt-0.5" aria-hidden="true">📍</span>
            <div>
              <p className="font-display text-[#D4AF37] font-bold text-sm mb-1">Location</p>
              <p className="font-body text-[#FFF8F0]/70 text-sm">
                You know where she lives. If you don't, you shouldn't be coming over.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl mt-0.5" aria-hidden="true">⚠️</span>
            <div>
              <p className="font-display text-[#D4AF37] font-bold text-sm mb-1">Important Notes</p>
              <ul className="font-body text-[#FFF8F0]/70 text-sm space-y-1 list-disc list-inside">
                <li>Ring the bell. Do not just walk in.</li>
                <li>Wipe your feet. She will notice.</li>
                <li>Compliment the décor. It's the right thing to do.</li>
                <li>Do not mention the divorce. She knows.</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="font-display italic text-[#C47D8E] text-lg">
          "I've got room on the calendar. Whether you're on it is another matter."
        </p>
        <p className="font-body text-[#FFF8F0]/35 text-xs mt-2">— Brenda</p>
      </div>
    </section>
  )
}
