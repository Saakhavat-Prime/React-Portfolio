import { projects} from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  const smallProjects = projects.filter((p) => p.size === 'small')
  const largeProjects = projects.filter((p) => p.size === 'large')

  return (
    <section id="portfolio" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading title="Latest projects 🌈" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {smallProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {largeProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
