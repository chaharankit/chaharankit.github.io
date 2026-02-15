import { motion, useReducedMotion } from 'framer-motion'
import type { HeroContent } from '../types/content'

type HeroSectionProps = {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="section-shell pt-36 md:pt-40">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-4 inline-flex rounded-full border border-brand-line/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-alt">
            Available for impactful roles
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-brand-text">{content.name}</span>
            <br />
            <span className="text-gradient">{content.role}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-brand-muted">{content.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted/90">{content.summary}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            {content.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition ${
                  cta.variant === 'primary'
                    ? 'bg-brand-accent text-slate-950 shadow-glow hover:translate-y-[-2px]'
                    : 'border border-brand-line bg-brand-elevated/30 text-brand-text hover:bg-brand-elevated'
                }`}
                target={cta.href.startsWith('/pdf') ? '_blank' : undefined}
                rel={cta.href.startsWith('/pdf') ? 'noreferrer' : undefined}
              >
                {cta.label}
              </a>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-brand-line/80 bg-brand-surface/80 px-4 py-2 text-sm text-brand-muted"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-accent/35 via-transparent to-brand-alt/35 blur-2xl" />
          <div className="card-surface relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={content.image}
              alt="Portrait of Ankit Chahar"
              className="h-[460px] w-full rounded-[1.4rem] object-cover object-top"
            />
          </div>
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 h-20 w-20 rounded-3xl border border-brand-line bg-brand-elevated/80 backdrop-blur-sm"
            animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -right-5 top-8 h-16 w-16 rounded-full border border-brand-line bg-brand-accent/25 backdrop-blur-sm"
            animate={reduceMotion ? undefined : { y: [0, 8, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
