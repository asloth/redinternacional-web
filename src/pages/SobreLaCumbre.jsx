const valores = [
  { img: '/images/valores/solidaridad.png', name: 'Solidaridad', desc: 'Apoyo mutuo y compromiso con las necesidades de las comunidades.' },
  { img: '/images/valores/inclusion.png', name: 'Inclusión', desc: 'La diversidad como fortaleza — participación sin importar origen ni identidad.' },
  { img: '/images/valores/colaboracion.png', name: 'Colaboración', desc: 'Trabajo conjunto para construir soluciones colectivas.' },
  { img: '/images/valores/compromiso.png', name: 'Compromiso', desc: 'Responsabilidad y ética frente a los desafíos sociales.' },
  { img: '/images/valores/empoderamiento.png', name: 'Empoderamiento', desc: 'Herramientas para desarrollar el potencial y ejercer liderazgo positivo.' },
]

const timeline = [
  {
    year: '2025',
    place: 'Huancayo, Perú',
    desc: 'Nace la iniciativa Construyendo País como un encuentro nacional de liderazgo juvenil.',
  },
  {
    year: 'Oct 2025',
    place: 'Lima, Perú',
    desc: 'Primera edición internacional: jóvenes de 12 países latinoamericanos se reúnen por primera vez.',
  },
  {
    year: 'Oct 2026',
    place: 'Jalisco, México',
    desc: 'Segunda edición internacional — primera vez fuera de Perú. Tres días de formación, intercambio y colaboración.',
  },
]

const perfil = [
  'Estudiantes',
  'Líderes juveniles',
  'Voluntarios y voluntarias',
  'Activistas',
  'Emprendedores sociales',
  'Integrantes de organizaciones civiles',
  'Representantes estudiantiles',
  'Jóvenes que desarrollen proyectos comunitarios',
  'Personas que deseen iniciar un camino de liderazgo',
]

function SobreLaCumbre() {
  return (
    <main className="pt-16">
      {/* Hero banner */}
      <section className="bg-navy text-white py-24 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-amber mb-4">
          Agentes de cambio
        </p>
        <h1 className="text-4xl md:text-5xl font-black uppercase">
          Sobre la Cumbre
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto text-base leading-relaxed">
          Cumbre Internacional de Agentes de Cambio: Construyendo País 2026
        </p>
      </section>

      {/* Qué es */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-navy mb-6">¿Qué es la Cumbre?</h2>
        <div className="w-10 h-1 bg-brand-amber mb-8" />
        <p className="text-gray-600 leading-relaxed text-base">
          La <strong>Cumbre Internacional de Agentes de Cambio: Construyendo País</strong> es un
          encuentro internacional de liderazgo juvenil que reúne a jóvenes líderes, activistas,
          emprendedores, estudiantes, voluntarios y representantes de organizaciones de distintos
          países con el propósito de fortalecer sus capacidades, intercambiar experiencias, crear
          alianzas estratégicas e impulsar proyectos con impacto social.
        </p>
        <p className="mt-5 text-gray-600 leading-relaxed text-base">
          Más que un evento académico, la Cumbre es una plataforma de articulación regional que
          busca conectar a jóvenes con una misma visión: convertirse en agentes de cambio
          comprometidos con la transformación social, la participación ciudadana y el desarrollo
          sostenible.
        </p>
      </section>

      {/* Historia */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Historia</h2>
          <div className="w-10 h-1 bg-brand-amber mb-12" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="flex flex-col gap-10">
              {timeline.map(({ year, place, desc }) => (
                <div key={year} className="md:pl-24 relative">
                  <div className="hidden md:flex absolute left-0 top-1 w-16 h-16 bg-navy rounded-full items-center justify-center flex-col text-white text-center">
                    <span className="text-xs font-bold leading-tight">{year}</span>
                  </div>
                  <div className="md:hidden text-xs font-bold text-brand-amber uppercase tracking-widest mb-1">
                    {year}
                  </div>
                  <p className="font-bold text-navy">{place}</p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-navy text-white p-10 rounded-sm">
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-amber mb-4">
              Misión
            </h3>
            <p className="text-white/85 leading-relaxed text-sm">
              Formar e impulsar jóvenes agentes de cambio mediante procesos de formación,
              intercambio de conocimientos, liderazgo, participación ciudadana y cooperación
              internacional, fortaleciendo sus capacidades para generar impacto positivo en sus
              comunidades.
            </p>
          </div>
          <div className="border-2 border-navy text-navy p-10 rounded-sm">
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-amber mb-4">
              Visión
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Consolidarse como la cumbre referente de liderazgo juvenil en América Latina,
              articulando agentes de cambio, organizaciones e instituciones que trabajen de manera
              colaborativa para construir soluciones innovadoras frente a los principales desafíos
              sociales de la región.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-[#0c1f42] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-amber mb-3">Lo que nos mueve</p>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase">Nuestros Valores</h2>
            <div className="w-12 h-1 bg-brand-amber mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {valores.map(({ img, name, desc }) => (
              <div key={name} className="group flex flex-col items-center text-center">
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

      {/* Perfil */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Perfil de los participantes</h2>
            <div className="w-10 h-1 bg-brand-amber mb-8" />
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              No se requiere experiencia previa — lo más importante es el compromiso, la disposición
              para aprender y el interés por contribuir al desarrollo de la sociedad.
            </p>
            <ul className="space-y-2">
              {perfil.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1 w-2 h-2 rounded-full bg-brand-amber flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">¿Quién es un agente de cambio?</h2>
            <div className="w-10 h-1 bg-brand-amber mb-8" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Un agente de cambio es una persona que identifica problemáticas dentro de su entorno y
              decide actuar para transformarlas mediante acciones concretas. No es necesario tener un
              cargo público ni una amplia trayectoria — basta con tener la voluntad de servir,
              liderar, innovar y trabajar por el bienestar colectivo.
            </p>
            <ul className="mt-6 space-y-2">
              {['Liderazgo', 'Empatía', 'Vocación de servicio', 'Responsabilidad social', 'Trabajo en equipo', 'Innovación y creatividad', 'Compromiso con su comunidad'].map(
                (c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-1 w-2 h-2 rounded-full bg-navy flex-shrink-0" />
                    {c}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SobreLaCumbre
