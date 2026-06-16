import { images, siteConfig } from '../../data/portfolio'
import profileImg from "../../assets/profile.png";
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20 py-12 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="text-left">
          <h1 className="text-3xl font-bold leading-tight text-[var(--text-h)] sm:text-4xl lg:text-5xl">
            👋 Hey there, It&apos;s {siteConfig.name}.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--text)] sm:text-lg">
            {siteConfig.tagline}
          </p>
          <div className="mt-8">
            <Button href="#contact" variant="primary">
              Say Hello
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <img
           src={profileImg} 
            alt={`${siteConfig.name} portrait`}
            className="w-full object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
          />
        </div>
      </div>
    </section>
  )
}
