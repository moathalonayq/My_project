import { aboutText } from '../data/portfolio'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-sub about-copy">{aboutText}</p>
      </div>
    </section>
  )
}
