type SectionHeadingProps = {
  eyebrow: string
  title: string
  intro: string
}

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-3xl">
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-alt">
        {eyebrow}
      </p>
      <h2 className="mb-5 font-display text-4xl font-bold leading-tight text-brand-text sm:text-5xl">
        {title}
      </h2>
      <p className="text-pretty text-lg text-brand-muted">{intro}</p>
    </header>
  )
}
