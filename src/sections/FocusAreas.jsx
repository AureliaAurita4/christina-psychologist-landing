import { Reveal } from '../components/Reveal.jsx'
import { content } from '../data/content.js'

export function FocusAreas() {
  return (
    <section className="focus section section--dark" id="focus" aria-labelledby="focus-title">
      <div className="focus__orb" aria-hidden="true" />
      <div className="page-shell">
        <Reveal className="section-kicker section-kicker--light">03 · С чем я работаю</Reveal>
        <div className="focus__intro">
          <Reveal as="header">
            <h2 id="focus-title">Когда привычные способы уже не помогают</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>{content.heroIntro}</p>
          </Reveal>
        </div>

        <div className="focus-list">
          {content.focusAreas.map((area, index) => (
            <Reveal className="focus-item" key={area.title} delay={index * 55}>
              <span className="focus-item__number">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="approach" aria-labelledby="approach-title">
          <Reveal className="approach__title">
            <span>В терапии для меня важно</span>
            <h2 id="approach-title">Не только найти причину, но и лучше понимать себя</h2>
          </Reveal>
          <div className="approach__points">
            {content.approach.map((item, index) => (
              <Reveal className="approach-point" key={item.title} delay={index * 80}>
                <span aria-hidden="true">{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
