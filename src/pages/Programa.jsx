const days = [
  {
    day: 'Día 1',
    date: 'Martes 28 de octubre',
    theme: 'Apertura y Liderazgo',
    color: 'border-red-600',
    activities: [
      { time: 'Mañana', title: 'Ceremonia de apertura', desc: 'Bienvenida oficial y presentación de los participantes internacionales.' },
      { time: 'Mañana', title: 'Conferencia magistral', desc: 'Liderazgo juvenil y transformación social en América Latina.' },
      { time: 'Tarde', title: 'Panel de expertos', desc: 'Participación ciudadana y su impacto en el desarrollo comunitario.' },
      { time: 'Tarde', title: 'Taller participativo', desc: 'Identificando mi rol como agente de cambio.' },
      { time: 'Noche', title: 'Noche cultural', desc: 'Intercambio de tradiciones y presentaciones culturales de cada país.' },
    ],
  },
  {
    day: 'Día 2',
    date: 'Miércoles 29 de octubre',
    theme: 'Emprendimiento y Redes',
    color: 'border-yellow-400',
    activities: [
      { time: 'Mañana', title: 'Conferencia magistral', desc: 'Emprendimiento social e innovación para el desarrollo sostenible.' },
      { time: 'Mañana', title: 'Taller participativo', desc: 'Mujeres sin Fronteras: liderazgo femenino e igualdad de oportunidades.' },
      { time: 'Tarde', title: 'Feria de iniciativas juveniles', desc: 'Los participantes presentan sus proyectos comunitarios.' },
      { time: 'Tarde', title: 'Mesa de diálogo', desc: 'Cooperación internacional entre organizaciones juveniles.' },
      { time: 'Tarde', title: 'Networking internacional', desc: 'Espacio libre para construir alianzas y conexiones entre participantes.' },
    ],
  },
  {
    day: 'Día 3',
    date: 'Jueves 30 de octubre',
    theme: 'Acción y Cierre',
    color: 'border-violet-600',
    activities: [
      { time: 'Mañana', title: 'Taller participativo', desc: 'Construyendo propuestas colectivas con impacto real.' },
      { time: 'Mañana', title: 'Presentación de proyectos', desc: 'Propuestas colaborativas desarrolladas durante la Cumbre.' },
      { time: 'Tarde', title: 'Reconocimientos', desc: 'Premiación a jóvenes líderes y embajadores destacados.' },
      { time: 'Tarde', title: 'Ceremonia de clausura', desc: 'Cierre oficial con compromisos de acción y anuncio de la siguiente sede.' },
    ],
  },
]

const timeColors = {
  Mañana: 'bg-blue-100 text-blue-700',
  Tarde: 'bg-orange-100 text-orange-700',
  Noche: 'bg-violet-100 text-violet-700',
}

function Programa() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 text-center">
        <img
          src="/images/cumbre-logo.png"
          alt="Cumbre Construyendo País"
          className="w-20 h-20 rounded-full mx-auto mb-6 drop-shadow-lg"
        />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-amber mb-4">
          Jalisco, México
        </p>
        <h1 className="text-4xl md:text-5xl font-black uppercase">Programa 2026</h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto text-base">
          28, 29 y 30 de octubre — Tres días de formación, intercambio y colaboración.
        </p>
      </section>

      {/* Note */}
      <div className="bg-brand-amber/10 border-l-4 border-brand-amber px-6 py-4 max-w-4xl mx-auto mt-10 rounded-sm">
        <p className="text-sm text-gray-700">
          <strong>Nota:</strong> Los horarios exactos serán confirmados próximamente. El programa
          está sujeto a cambios.
        </p>
      </div>

      {/* Days */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-16">
        {days.map(({ day, date, theme, color, activities }) => (
          <div key={day}>
            <div className={`border-l-4 ${color} pl-6 mb-8`}>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">{day}</p>
              <h2 className="text-2xl font-black text-navy">{date}</h2>
              <p className="text-sm text-gray-500 mt-1 font-medium">{theme}</p>
            </div>
            <div className="space-y-4">
              {activities.map(({ time, title, desc }) => (
                <div key={title} className="flex gap-5 bg-gray-50 px-6 py-5 rounded-sm">
                  <span
                    className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full h-fit flex-shrink-0 ${timeColors[time]}`}
                  >
                    {time}
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm">{title}</p>
                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Activities overview */}
      <section className="bg-navy text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-8 text-center">Actividades de la Cumbre</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              'Conferencias magistrales',
              'Paneles de expertos',
              'Talleres participativos',
              'Mesas de diálogo',
              'Networking internacional',
              'Feria de iniciativas',
              'Presentación de proyectos',
              'Actividades culturales',
              'Cooperación internacional',
              'Reconocimientos',
            ].map((act) => (
              <div
                key={act}
                className="border border-white/20 px-3 py-4 text-xs font-medium text-white/80 leading-snug hover:border-brand-amber hover:text-white transition-colors"
              >
                {act}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Programa
