import { Reveal } from '../components/Reveal.jsx'
import { content } from '../data/content.js'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="hero__inner page-shell">
        <div className="hero__copy">
          <Reveal className="hero__eyebrow">
            <span className="eyebrow-line" />
            {content.profession}
          </Reveal>

          <Reveal delay={80}>
            <h1 id="hero-title">
              Кристина
              <span>Оразмурадова</span>
            </h1>
          </Reveal>

          <Reveal className="hero__statement" delay={160}>
            <p>{content.tagline}</p>
          </Reveal>

          <Reveal className="hero__actions" delay={240}>
            <a className="button button--primary" href="#contacts">
              Записаться на консультацию
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#about">Познакомиться ближе</a>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={120}>
          <div className="portrait-frame">
            <div className="portrait-frame__halo" aria-hidden="true" />
            <img
              src="/assets/christina.jpg"
              alt="Психолог Кристина Оразмурадова с цветами"
              width="1178"
              height="1180"
              fetchPriority="high"
            />
            <div className="portrait-frame__caption" aria-hidden="true">
              <span>Психология</span>
              <span>Тело</span>
              <span>Контакт</span>
            </div>
            <div className="experience-seal">
              <strong>{content.experienceYears}</strong>
              <span>лет<br />практики</span>
            </div>
          </div>
        </Reveal>

        <div className="hero__index" aria-hidden="true">01</div>
      </div>
    </section>
  )
}
