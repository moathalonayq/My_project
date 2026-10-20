import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Tools and technologies I work with.</p>
        <div className="skills-wrap">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
