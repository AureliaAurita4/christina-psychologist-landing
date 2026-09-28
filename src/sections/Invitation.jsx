import { Reveal } from '../components/Reveal.jsx'

export function Invitation() {
  return (
    <section className="invitation section" aria-labelledby="invitation-title">
      <div className="invitation__line" aria-hidden="true" />
      <div className="page-shell invitation__inner">
        <Reveal className="invitation__number">06</Reveal>
        <Reveal className="invitation__copy" delay={60}>
          <span>Приглашение в терапию</span>
          <h2 id="invitation-title">
            Иногда первый шаг — это просто разрешить себе
            <em> не справляться в одиночку</em>
          </h2>
        </Reveal>
        <Reveal className="invitation__action" delay={120}>
          <a className="circle-link" href="#contacts">
            <span>Связаться<br />с Кристиной</span>
            <i aria-hidden="true">↗</i>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
