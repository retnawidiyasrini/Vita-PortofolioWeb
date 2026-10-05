import { useState } from 'react'
import { personal } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import FloatingDecor from '../ui/FloatingDecor'

interface FormValues {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

function Contact() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>()
  const [bodyRef, bodyVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  })

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear a field's error as the user corrects it.
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    // No backend wired yet — simulate a successful send.
    window.setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    }, 900)
  }

  const fieldClass = (field: keyof FormValues) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-[var(--color-accent)] ${
      errors[field] ? 'border-red-500/60' : 'border-white/10'
    }`

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 lg:py-32">
      <FloatingDecor variant="left" />
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            headerVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something{' '}
            <span className="text-gradient">together</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Have a project in mind or just want to say hi? Send a message.
          </p>
        </div>

        <div
          ref={bodyRef}
          className={`mt-14 grid gap-6 transition-all duration-700 lg:grid-cols-2 ${
            bodyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* ---- Form ---- */}
          <form onSubmit={handleSubmit} noValidate className="glass rounded-3xl p-7">
            <div className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={fieldClass('name')}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={fieldClass('email')}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  className={`${fieldClass('message')} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Submission states */}
              <div aria-live="polite">
                {status === 'success' && (
                  <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                    Thanks! Your message has been sent. I&apos;ll get back to you
                    soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    Please fix the highlighted fields and try again.
                  </p>
                )}
              </div>
            </div>
          </form>

          {/* ---- Info + map placeholder ---- */}
          <div className="flex flex-col gap-6">
            <div className="glass rounded-3xl p-7">
              <h3 className="text-lg font-semibold text-white">
                Contact details
              </h3>
              <ul className="mt-5 flex flex-col gap-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-[var(--color-accent-2)]">
                    @
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {personal.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-[var(--color-accent-2)]">
                    ☎
                  </span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {personal.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-[var(--color-accent-2)]">
                    ⚲
                  </span>
                  <span className="text-slate-300">{personal.location}</span>
                </li>
              </ul>
            </div>

            {/* Embedded map placeholder */}
            <div className="glass relative flex-1 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-2)]/10" />
              <div className="relative grid min-h-48 place-items-center p-8 text-center">
                <div>
                  <span className="animate-pulse-glow mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] text-xl text-white">
                    ⚲
                  </span>
                  <p className="mt-3 text-sm font-medium text-white">
                    {personal.location}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Map embed placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
