import { useState, type FormEvent } from 'react'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { ContactContent, FormStatus } from '../types/content'

type ContactSectionProps = {
  content: ContactContent
}

type ContactFormData = {
  name: string
  email: string
  message: string
  botcheck: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  message: '',
  botcheck: '',
}

export function ContactSection({ content }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [feedback, setFeedback] = useState('')

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  function validateForm() {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return 'Please fill out name, email, and message.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address.'
    }

    return null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationError = validateForm()

    if (validationError) {
      setFormStatus('error')
      setFeedback(validationError)
      return
    }

    if (!accessKey) {
      setFormStatus('error')
      setFeedback(
        'Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to enable submissions.',
      )
      return
    }

    setFormStatus('submitting')
    setFeedback('')

    const payload = {
      access_key: accessKey,
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      subject: 'Portfolio Contact Submission',
      from_name: 'Ankit Portfolio Website',
      botcheck: formData.botcheck,
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Submission failed')
      }

      setFormStatus('success')
      setFeedback('Thanks for reaching out. I will get back to you soon.')
      setFormData(initialFormData)
    } catch {
      setFormStatus('error')
      setFeedback('Submission failed. Please try again in a moment.')
    }
  }

  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Connect" title={content.title} intro={content.intro} />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4" delay={0.05}>
          <a
            href={`mailto:${content.email}`}
            className="card-surface flex items-center gap-4 p-5 transition hover:bg-brand-elevated/70"
          >
            <span className="rounded-xl bg-brand-elevated p-3 text-brand-accent">
              <Mail size={20} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-brand-muted">Email</span>
              <span className="text-brand-text">{content.email}</span>
            </span>
          </a>

          <div className="card-surface flex items-center gap-4 p-5">
            <span className="rounded-xl bg-brand-elevated p-3 text-brand-accent">
              <MapPin size={20} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-brand-muted">Location</span>
              <span className="text-brand-text">{content.location}</span>
            </span>
          </div>

          <div className="card-surface p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">Social</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={content.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-sm text-brand-text transition hover:bg-brand-elevated"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={content.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-sm text-brand-text transition hover:bg-brand-elevated"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="card-surface p-6 sm:p-8" delay={0.12}>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-muted">Name</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full rounded-xl border border-brand-line bg-brand-elevated/60 px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-accent focus:outline-none"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-muted">Email</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  className="w-full rounded-xl border border-brand-line bg-brand-elevated/60 px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-accent focus:outline-none"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="hidden">
              <span>Do not fill this out</span>
              <input
                type="text"
                value={formData.botcheck}
                onChange={(event) => setFormData((prev) => ({ ...prev, botcheck: event.target.value }))}
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            <label className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-muted">Message</span>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full resize-none rounded-xl border border-brand-line bg-brand-elevated/60 px-4 py-3 text-brand-text placeholder:text-brand-muted focus:border-brand-accent focus:outline-none"
                placeholder="Tell me about your project, role, or collaboration idea."
              />
            </label>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-950 transition disabled:opacity-60"
            >
              <Send size={15} />
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {feedback ? (
              <p
                className={`text-sm ${
                  formStatus === 'success' ? 'text-emerald-300' : 'text-amber-300'
                }`}
              >
                {feedback}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
