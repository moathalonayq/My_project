import { site } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-box">
          <p>
            Email me at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="contact-links">
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span aria-hidden="true"> · </span>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
