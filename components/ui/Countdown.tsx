'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Date du prochain événement — à mettre à jour
const EVENT_DATE = new Date('2025-05-02T14:30:00')

export const Countdown = () => {
  const t = useTranslations('Home')
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  })

  useEffect(() => {
    const calculate = () => {
      const now = new Date()
      const diff = EVENT_DATE.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: timeLeft.days, label: t('countdownDays') },
    { value: timeLeft.hours, label: t('countdownHours') },
    { value: timeLeft.minutes, label: t('countdownMinutes') },
    { value: timeLeft.seconds, label: t('countdownSeconds') },
  ]

  return (
    <section className="bg-deep py-12 px-4 relative overflow-hidden african-pattern">
      <div className="container-wide text-center">
        <p className="font-display text-accent text-3xl md:text-4xl tracking-widest mb-8">
          {t('countdownTitle')}
        </p>
        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="bg-white/10 rounded-card px-4 md:px-8 py-4 md:py-6 min-w-[70px] md:min-w-[100px]">
                <span className="font-display text-accent text-4xl md:text-6xl leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="font-body text-white/70 text-xs md:text-sm mt-2 uppercase tracking-widest">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
