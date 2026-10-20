import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Selected work</h2>
        <p className="section-sub">A few things I&apos;ve built recently.</p>
        <div className="grid-projects">
          {projects.map((p) => (
            <article key={p.id} className="card">
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="btn btn-ghost card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
