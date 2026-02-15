import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { SkillsContent } from '../types/content'

type SkillsSectionProps = {
  content: SkillsContent
}

export function SkillsSection({ content }: SkillsSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Toolkit" title={content.title} intro={content.intro} />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {content.groups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={0.08 * (groupIndex + 1)}>
            <article className="card-surface h-full p-6">
              <h3 className="font-display text-xl font-semibold text-brand-text">{group.title}</h3>
              <ul className="mt-6 space-y-5">
                {group.skills.map((skill) => (
                  <li key={`${group.title}-${skill.name}`}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-brand-text">{skill.name}</span>
                      <span className="font-medium text-brand-alt">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-brand-elevated">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-brand-accent via-[#ffc46f] to-brand-alt"
                        initial={reduceMotion ? undefined : { width: 0 }}
                        whileInView={reduceMotion ? undefined : { width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={reduceMotion ? { width: `${skill.level}%` } : undefined}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
