import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'The Establishment' },
  { href: '#services', label: 'Services' },
  { href: '#staff', label: 'The Ladies' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#rates', label: 'Rates' },
  { href: '#reserve', label: 'Reserve' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0E0205]/92 backdrop-blur-md shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="font-display text-lg font-bold text-[#D4AF37] tracking-wide hover:opacity-80 transition-opacity italic"
          onClick={close}
        >
          Brenda's Brothel
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link text-[#FFF8F0]/80 hover:text-[#D4AF37] text-sm font-semibold tracking-wide transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-0.5 bg-[#FFF8F0] transition-transform duration-200 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#FFF8F0] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#FFF8F0] transition-transform duration-200 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0E0205]/95 backdrop-blur-md border-t border-[#D4AF37]/20">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-[#FFF8F0]/90 hover:text-[#D4AF37] font-semibold text-base py-1 transition-colors"
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
