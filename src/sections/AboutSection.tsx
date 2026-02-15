import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { AboutContent } from '../types/content'

type AboutSectionProps = {
  content: AboutContent
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="About" title={content.title} intro={content.intro} />
      </Reveal>

      <div className="grid gap-7 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="card-surface overflow-hidden" delay={0.1}>
          <img
            src={content.image}
            alt="Ankit Chahar profile"
            className="h-full min-h-[420px] w-full object-cover object-top"
          />
        </Reveal>

        <div className="space-y-6">
          <Reveal className="card-surface p-6 sm:p-8" delay={0.15}>
            <div className="space-y-4 text-brand-muted">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              {content.facts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-brand-line/80 bg-brand-elevated/50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-alt">{fact.label}</dt>
                  <dd className="mt-2 text-sm font-medium text-brand-text">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="card-surface p-6 sm:p-8" delay={0.2}>
            <h3 className="font-display text-xl font-semibold text-brand-text">Core Focus Areas</h3>
            <ul className="mt-5 space-y-3">
              {content.focusAreas.map((item) => (
                <li key={item} className="flex gap-3 text-brand-muted">
                  <CheckCircle2 className="mt-[2px] text-brand-accent" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
