import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { NavItem } from '../types/content'

type NavbarProps = {
  items: NavItem[]
  activeSection: string
}

export function Navbar({ items, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-brand-line/70 bg-brand-surface/75 px-4 py-3 backdrop-blur-lg sm:px-6">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-[0.25em] text-brand-text"
          aria-label="Go to home section"
        >
          ANKIT
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-xl border border-brand-line/80 p-2 text-brand-text transition hover:bg-brand-elevated md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={reduceMotion ? undefined : { opacity: 0, y: -20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mt-3 rounded-2xl border border-brand-line/80 bg-brand-surface/95 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${
                      activeSection === item.id
                        ? 'bg-brand-elevated text-brand-text'
                        : 'text-brand-muted hover:bg-brand-elevated hover:text-brand-text'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
