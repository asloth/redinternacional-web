import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const GOOGLE_FORM_URL = 'https://forms.gle/TThigmdBt4xdBABEA'

const navLinks = [
  { to: '/sobre-la-cumbre', label: 'Sobre nosotros' },
  { to: '/programa', label: 'Cumbre Red Internacional' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src="/images/logos/logo-azul.png" alt="Red Internacional" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                pathname === to ? 'text-navy' : 'text-gray-600 hover:text-navy'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-amber text-white text-sm font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Aplica ahora
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy p-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-amber text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity"
          >
            Aplica ahora
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
