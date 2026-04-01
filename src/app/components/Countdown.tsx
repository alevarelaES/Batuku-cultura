import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Countdown = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: July 20, 2026
    const targetDate = new Date('2026-07-20T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: t('Home', 'countdownDays'), value: timeLeft.days },
    { label: t('Home', 'countdownHours'), value: timeLeft.hours },
    { label: t('Home', 'countdownMinutes'), value: timeLeft.minutes },
    { label: t('Home', 'countdownSeconds'), value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeBlocks.map((block, idx) => (
        <div key={idx} className="flex flex-col items-center min-w-[80px]">
          <div className="text-4xl md:text-6xl font-display text-orange tracking-widest">
            {block.value.toString().padStart(2, '0')}
          </div>
          <div className="text-brand-text/60 font-body font-semibold uppercase tracking-wider text-sm mt-2">
            {block.label}
          </div>
        </div>
      ))}
    </div>
  );
};
