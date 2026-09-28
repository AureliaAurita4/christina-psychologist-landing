import { Reveal } from '../components/Reveal.jsx'
import { content } from '../data/content.js'

export function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="page-shell">
        <Reveal className="section-kicker">02 · Обо мне</Reveal>
        <div className="about__grid">
          <Reveal as="header" className="about__heading">
            <h2 id="about-title">
              Глубина,
              <em> ясность</em> и уважение
              к личности
            </h2>
          </Reveal>

          <div className="about__body">
            {content.about.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 80}>
                <p>{paragraph}</p>
              </Reveal>
            ))}

            <Reveal className="about__facts" delay={160}>
              <div className="metric">
                <strong>{content.personalTherapyHours}+</strong>
                <span>часов личной терапии</span>
              </div>
              <p>{content.interests}</p>
            </Reveal>
          </div>
        </div>

        <Reveal className="values" aria-labelledby="values-title">
          <h3 className="values__label" id="values-title">Ценности</h3>
          <ol className="values__list">
            {content.values.map((value, index) => (
              <li key={value}>
                <span aria-hidden="true">0{index + 1}</span>
                <strong>{value}</strong>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
