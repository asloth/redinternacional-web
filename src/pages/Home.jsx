import { Link } from 'react-router-dom'
import Countdown from '../components/Countdown'

const GOOGLE_FORM_URL = 'https://forms.gle/TThigmdBt4xdBABEA'

const ejes = [
  {
    bg: 'bg-red-600',
    bgWord: 'ACCIÓN',
    title: 'AGENTES DE CAMBIO',
    desc: 'Fortalecemos el liderazgo juvenil, la participación ciudadana y el compromiso social para transformar comunidades.',
    wordSide: 'right',
    textSide: 'left',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    bg: 'bg-yellow-400',
    bgWord: 'IDEAS',
    title: 'EMPRENDIMIENTO CON PROPÓSITO',
    desc: 'Promovemos innovaciones sociales que generen impacto económico y comunitario desde una perspectiva ética y sostenible.',
    wordSide: 'left',
    textSide: 'right',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    bg: 'bg-violet-600',
    bgWord: 'PODER',
    title: 'MUJERES SIN FRONTERAS',
    desc: 'Impulsamos el liderazgo femenino, la igualdad de oportunidades y el empoderamiento de niñas, adolescentes y mujeres.',
    wordSide: 'right',
    textSide: 'left',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
]

const valores = [
  { img: '/images/valores/solidaridad.png', name: 'Solidaridad', desc: 'Apoyo mutuo y compromiso con las necesidades de las comunidades.' },
  { img: '/images/valores/inclusion.png', name: 'Inclusión', desc: 'La diversidad como fortaleza — participación sin importar origen ni identidad.' },
  { img: '/images/valores/colaboracion.png', name: 'Colaboración', desc: 'Trabajo conjunto para construir soluciones colectivas.' },
  { img: '/images/valores/compromiso.png', name: 'Compromiso', desc: 'Responsabilidad y ética frente a los desafíos sociales.' },
  { img: '/images/valores/empoderamiento.png', name: 'Empoderamiento', desc: 'Herramientas para desarrollar el potencial y ejercer liderazgo positivo.' },
]

const programaDays = [
  {
    day: 'Día 1',
    date: '28 oct',
    theme: 'Apertura y Liderazgo',
    accent: 'bg-red-600',
    activities: ['Ceremonia de apertura', 'Conferencia magistral', 'Taller de liderazgo', 'Noche cultural'],
  },
  {
    day: 'Día 2',
    date: '29 oct',
    theme: 'Emprendimiento y Redes',
    accent: 'bg-yellow-400',
    activities: ['Feria de iniciativas juveniles', 'Taller: Mujeres sin Fronteras', 'Networking internacional', 'Mesa de diálogo'],
  },
  {
    day: 'Día 3',
    date: '30 oct',
    theme: 'Acción y Cierre',
    accent: 'bg-violet-600',
    activities: ['Taller de propuestas colectivas', 'Presentación de proyectos', 'Reconocimientos', 'Ceremonia de clausura'],
  },
]

const stats = [
  { value: '12', label: 'Países' },
  { value: '+50', label: 'Jóvenes líderes' },
  { value: '3', label: 'Días' },
  { value: '20', label: 'Embajadores' },
]

function Home() {
  return (
    <main>
      {/* ── HERO — full viewport, centered, gradient overlay ── */}
      <section className="relative min-h-screen flex flex-col justify-end pt-16 overflow-hidden">
        {/* Background photo */}
        <img
          src="/images/cumbre-hero.png"
          alt="Cumbre Internacional de Agentes de Cambio 2026"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Gradient overlay — dark bottom, lighter top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f42] via-[#0c1f42]/65 to-[#0c1f42]/20" />

        {/* Top badge row */}
        <div className="absolute top-20 left-0 right-0 flex justify-center z-10 px-4">
          <div className="flex items-center gap-2 sm:gap-3 border border-white/25 rounded-full px-4 sm:px-5 py-2 backdrop-blur-sm bg-white/5">
            <img src="/images/logos/logo-negativo.png" alt="Red Internacional" className="h-4 sm:h-5 hidden xs:block" />
            <span className="text-white/60 text-xs hidden sm:block">|</span>
            <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              Red Internacional · 2ª Edición Internacional
            </span>
          </div>
        </div>

        {/* Hero content — bottom aligned */}
        <div className="relative z-10 text-center text-white px-6 pb-16 md:pb-24 max-w-5xl mx-auto w-full">
          {/* Cumbre logo */}
          <img
            src="/images/cumbre-logo.png"
            alt="Logo Cumbre Construyendo País"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 drop-shadow-2xl rounded-full"
          />

          {/* Main title */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight">
            Cumbre Internacional
            <br />
            <span className="text-brand-amber">de Agentes de Cambio</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-xl md:text-2xl font-bold uppercase tracking-wide md:tracking-[0.15em] text-white/80">
            Construyendo País 2026
          </p>

          {/* Location + date pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
              📍 Jalisco, México
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
              🗓 28–30 Oct · 2026
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-amber text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-3"
            >
              Aplica ahora
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <Link
              to="/sobre-la-cumbre"
              className="w-full sm:w-auto border-2 border-white/40 text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white/10 hover:border-white/70 transition-all text-center"
            >
              Conocer más
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-12 flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-widest uppercase">Descubre más</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* 4-color stripe at bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 flex z-20">
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-yellow-400" />
          <div className="flex-1 bg-violet-600" />
          <div className="flex-1 bg-blue-500" />
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-[#0c1f42] border-b border-white/10 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl md:text-5xl font-black text-brand-amber">{value}</div>
              <div className="text-xs font-semibold text-white/50 mt-1.5 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About section ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-amber mb-4">
              Red Internacional de Jóvenes Empoderados
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-navy uppercase leading-tight">
              Un espacio donde los jóvenes construyen el futuro
            </h2>
            <div className="w-12 h-1 bg-brand-amber mt-5 mb-6" />
            <p className="text-gray-600 leading-relaxed">
              La Cumbre Internacional es una plataforma de liderazgo que reúne a más de 50 jóvenes
              de toda América Latina para intercambiar experiencias, construir alianzas y desarrollar
              proyectos con impacto real en sus comunidades.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Más que un evento, es un movimiento que impulsa a nuevas generaciones de líderes
              comprometidos con la transformación social.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-amber text-white font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Aplica ahora
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <Link
                to="/sobre-la-cumbre"
                className="border-2 border-navy text-navy font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-navy hover:text-white transition-all"
              >
                Saber más
              </Link>
            </div>
          </div>

          {/* Right: logo + countries */}
          <div className="flex flex-col items-center gap-6">
            <img
              src="/images/cumbre-logo.png"
              alt="Cumbre Construyendo País"
              className="w-52 h-52 md:w-[17rem] md:h-[17rem] drop-shadow-lg rounded-full"
            />
            <div className="text-center">
              <p className="text-sm font-bold text-navy uppercase tracking-widest mb-3">
                Países participantes 2025
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs font-medium text-gray-500">
                {['Perú', 'México', 'Argentina', 'Brasil', 'Chile', 'Bolivia', 'Colombia', 'Ecuador', 'El Salvador', 'Honduras', 'Nicaragua', 'Rep. Dominicana'].map(
                  (c) => (
                    <span key={c} className="bg-gray-100 px-3 py-1 rounded-full">{c}</span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Countdown ── */}
      <Countdown />

      {/* ── Ejes Temáticos ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-amber mb-2">Lo que nos define</p>
            <h2 className="text-2xl md:text-3xl font-black text-navy uppercase">Ejes Temáticos 2026</h2>
          </div>
        </div>
        <div className="w-12 h-1 bg-brand-amber mb-0" />
      </section>
      <div className="overflow-x-hidden">
        {ejes.map((eje, i) => (
          <div
            key={i}
            className={`relative ${eje.bg} text-white overflow-hidden`}
            style={{
              clipPath:
                i === 0
                  ? 'polygon(0 0, 100% 0, 100% 88%, 0 100%)'
                  : i === 1
                  ? 'polygon(0 10%, 100% 0, 100% 88%, 0 100%)'
                  : 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)',
              marginTop: i > 0 ? '-3.5rem' : 0,
              paddingTop: i > 0 ? '6rem' : '4rem',
              paddingBottom: i < 2 ? '7rem' : '4rem',
            }}
          >
            <span
              className={`absolute ${eje.wordSide === 'right' ? 'right-6 md:right-16' : 'left-6 md:left-16'} top-1/2 -translate-y-1/2 text-[5rem] md:text-[9rem] font-black uppercase text-white/15 leading-none select-none pointer-events-none`}
            >
              {eje.bgWord}
            </span>
            <div
              className={`relative z-10 max-w-7xl mx-auto px-8 md:px-16 ${
                eje.textSide === 'right' ? 'flex flex-col items-end text-right' : 'flex flex-col items-start'
              }`}
            >
              <div className="mb-4 opacity-90">{eje.icon}</div>
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight max-w-sm">
                {eje.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-white/85 max-w-xs leading-relaxed">
                {eje.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Valores de la Red ── */}
      <section className="bg-[#0c1f42] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-amber mb-3">
              Lo que nos mueve
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase">Nuestros Valores</h2>
            <div className="w-12 h-1 bg-brand-amber mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {valores.map(({ img, name, desc }) => (
              <div
                key={name}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-5 transition-transform duration-300 group-hover:-translate-y-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_8px_24px_rgba(255,255,255,0.2)]"
                  />
                </div>
                <h4 className="font-black text-white text-sm uppercase tracking-widest mb-2">{name}</h4>
                <p className="text-white text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programa Preview ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-amber mb-3">
              Jalisco, México · 28–30 Oct 2026
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-navy uppercase">
              ¿Qué vivirás en la Cumbre?
            </h2>
            <div className="w-12 h-1 bg-brand-amber mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programaDays.map(({ day, date, theme, accent, activities }) => (
              <div key={day} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className={`${accent} py-5 px-6 text-white`}>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">{day} · {date}</p>
                  <p className="font-black text-lg uppercase leading-tight mt-1">{theme}</p>
                </div>
                <ul className="px-6 py-5 space-y-3">
                  {activities.map((act) => (
                    <li key={act} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-amber flex-shrink-0" />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/programa"
              className="inline-flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-widest border-b-2 border-brand-amber pb-1 hover:text-brand-amber transition-colors"
            >
              Ver programa completo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="relative overflow-hidden bg-navy py-24 px-6 text-center">
        {/* subtle background pattern with the Cumbre logo */}
        <img
          src="/images/cumbre-logo.png"
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-80 h-80 opacity-5 select-none pointer-events-none"
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <img src="/images/cumbre-logo.png" alt="" className="w-20 h-20 mx-auto mb-6 opacity-90 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase">
            ¿Listo para ser agente de cambio?
          </h2>
          <p className="mt-4 text-white/60 text-base leading-relaxed">
            Únete a la segunda edición internacional y forma parte de la red que está construyendo
            el futuro de América Latina.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-brand-amber text-white font-black text-sm uppercase tracking-widest px-12 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Aplica ahora
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
