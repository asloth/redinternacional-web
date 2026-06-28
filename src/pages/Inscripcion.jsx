const GOOGLE_FORM_URL = 'https://forms.gle/TThigmdBt4xdBABEA'

const requisitos = [
  'Ser joven entre 16 y 35 años (o estudiante universitario sin límite de edad).',
  'Tener interés en el liderazgo juvenil, el emprendimiento social o la participación ciudadana.',
  'Disponibilidad para asistir presencialmente del 28 al 30 de octubre de 2026 en Jalisco, México.',
  'Completar el formulario de inscripción antes de la fecha límite.',
  'No se requiere experiencia previa — solo compromiso y disposición para aprender.',
]

const beneficios = [
  { icon: '🎓', title: 'Formación de alto impacto', desc: 'Conferencias, talleres y paneles con líderes latinoamericanos.' },
  { icon: '🌎', title: 'Red internacional', desc: 'Conecta con jóvenes de más de 12 países con tu misma visión.' },
  { icon: '🤝', title: 'Alianzas estratégicas', desc: 'Crea conexiones reales con organizaciones e instituciones.' },
  { icon: '🏆', title: 'Certificación', desc: 'Obtén tu certificado de participante en la Cumbre 2026.' },
]

function Inscripcion() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-amber mb-4">
          Jalisco, México · Oct 28–30, 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-black uppercase">Inscríbete</h1>
        <p className="mt-4 text-white/60 max-w-lg mx-auto text-base leading-relaxed">
          Únete a la segunda edición internacional de la Cumbre de Agentes de Cambio: Construyendo
          País 2026.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 bg-brand-amber text-white font-bold text-sm uppercase tracking-widest px-12 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Aplica ahora
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">¿Qué obtienes al participar?</h2>
          <div className="w-10 h-1 bg-brand-amber mb-10" />
          <div className="grid sm:grid-cols-2 gap-6">
            {beneficios.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5 bg-gray-50 p-7 rounded-sm">
                <div className="text-3xl flex-shrink-0">{icon}</div>
                <div>
                  <h4 className="font-bold text-navy mb-1">{title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Requisitos de participación</h2>
          <div className="w-10 h-1 bg-brand-amber mb-10" />
          <ul className="space-y-4">
            {requisitos.map((r, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-gray-700 leading-relaxed">
                <span className="flex-shrink-0 w-7 h-7 bg-navy text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black text-navy uppercase">
            ¿Listo para ser agente de cambio?
          </h2>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            Completa el formulario de inscripción y da el primer paso para ser parte de la red
            internacional de jóvenes empoderados.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-brand-amber text-white font-bold text-sm uppercase tracking-widest px-12 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Ir al formulario
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Inscripcion
