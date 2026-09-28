import { Reveal } from '../components/Reveal.jsx'
import { content } from '../data/content.js'

export function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="page-shell">
        <Reveal className="section-kicker">05 · Отзывы</Reveal>

        <div className="testimonials__intro">
          <Reveal as="header">
            <h2 id="testimonials-title">Слова людей после совместной работы</h2>
          </Reveal>
          <Reveal delay={60}>
            <p>Личный опыт, которым участницы решили поделиться.</p>
          </Reveal>
        </div>

        <div className="testimonials__list">
          {content.testimonials.map((testimonial, index) => (
            <Reveal as="article" className="testimonial" delay={index * 60} key={testimonial.name}>
              <span className="testimonial__number">0{index + 1}</span>
              <blockquote>
                <p>{testimonial.text}</p>
              </blockquote>
              <p className="testimonial__author">— {testimonial.name}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="testimonials__note">
          Отзывы опубликованы фрагментами. Личные подробности сокращены, имена указаны без фамилий.
        </Reveal>
      </div>
    </section>
  )
}
