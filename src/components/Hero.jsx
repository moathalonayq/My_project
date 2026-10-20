import { site } from '../data/portfolio'

export default function Hero() {
  const firstName = site.name.split(' ')[0]

  return (
    <section id="home" className="hero">
      <div className="container">
        <span className="hero-badge">Available for work</span>
        <h1>
          Hi, I&apos;m {firstName} — <span>{site.role}</span>
        </h1>
        <p>{site.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
