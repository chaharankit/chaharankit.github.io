import { Download } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { ExperienceContent } from '../types/content'

type ExperienceSectionProps = {
  content: ExperienceContent
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Resume" title={content.title} intro={content.intro} />
      </Reveal>

      <div className="space-y-6">
        {content.items.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delay={0.08 * (index + 1)}>
            <article className="card-surface p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-brand-text">{item.title}</h3>
                  <p className="mt-1 text-brand-alt">{item.company}</p>
                </div>
                <div className="text-right text-sm text-brand-muted">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="space-y-3 text-brand-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent animate-pulseline"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10" delay={0.3}>
        <a
          href={content.resumePath}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:translate-y-[-2px]"
        >
          <Download size={16} />
          Download Resume
        </a>
      </Reveal>
    </section>
  )
}
