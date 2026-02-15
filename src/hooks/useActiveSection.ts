import { useEffect, useMemo, useState } from 'react'

export function useActiveSection(sectionIds: string[], defaultSection: string) {
  const stableIds = useMemo(() => sectionIds.filter(Boolean), [sectionIds])
  const [activeSection, setActiveSection] = useState(defaultSection)

  useEffect(() => {
    if (!stableIds.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visibleEntries.length) {
          return
        }

        const currentId = visibleEntries[0].target.id
        if (currentId) {
          setActiveSection(currentId)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
      },
    )

    const sections = stableIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [stableIds])

  return activeSection
}
