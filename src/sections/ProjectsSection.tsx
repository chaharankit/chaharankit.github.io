import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { ProjectsContent } from '../types/content'

type ProjectsSectionProps = {
  content: ProjectsContent
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Work" title={content.title} intro={content.intro} />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((project, index) => (
          <motion.article
            key={project.name}
            className="card-surface group overflow-hidden"
            initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            whileHover={reduceMotion ? undefined : { y: -10, rotateX: 2, rotateY: -2 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
            </div>
            <div className="space-y-4 p-5">
              <h3 className="font-display text-xl font-semibold text-brand-text">{project.name}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">{project.summary}</p>
              <p className="text-sm font-medium text-brand-alt">{project.impact}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={`${project.name}-${tech}`}
                    className="rounded-full border border-brand-line bg-brand-elevated/70 px-3 py-1 text-xs font-medium text-brand-text"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-sm font-semibold text-brand-text transition hover:bg-brand-elevated"
              >
                <Github size={15} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
