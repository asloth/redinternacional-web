import { useState, useEffect } from 'react'

const TARGET = new Date('2026-10-28T00:00:00')

function calcTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

function Countdown() {
  const [time, setTime] = useState(calcTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Días', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Minutos', value: time.minutes },
    { label: 'Segundos', value: time.seconds },
  ]

  return (
    <section className="bg-navy py-20 text-white text-center">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-amber mb-10">
        La Cumbre comienza en
      </p>
      <div className="flex justify-center gap-8 md:gap-16">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-5xl md:text-7xl font-black tabular-nums leading-none">
              {pad(value)}
            </span>
            <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/50">
              {label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-12 text-white/50 text-sm">
        28, 29 y 30 de octubre de 2026 — Jalisco, México
      </p>
    </section>
  )
}

export default Countdown
