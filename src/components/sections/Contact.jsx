import Button from '../ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <h2 className="text-2xl font-bold text-[var(--text-h)] md:text-3xl">
          Have a project in mind? Let&apos;s get to work. 👋
        </h2>
        <div className="mt-8">
          <Button href="mailto:hello@janicequinn.com" variant="primary">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
