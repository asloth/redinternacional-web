import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="/images/logos/logo-negativo.png" alt="Red Internacional" className="h-12" />
        <p className="text-sm text-white/60 text-center">
          © 2026 Red Internacional. Todos los derechos reservados.
        </p>
        <nav className="flex gap-6 flex-wrap justify-center">
          <Link to="/sobre-la-cumbre" className="text-sm text-white/60 hover:text-white transition-colors">
            Sobre nosotros
          </Link>
          <Link to="/programa" className="text-sm text-white/60 hover:text-white transition-colors">
            Programa
          </Link>
          <Link to="/inscripcion" className="text-sm text-white/60 hover:text-white transition-colors">
            Inscripción
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
