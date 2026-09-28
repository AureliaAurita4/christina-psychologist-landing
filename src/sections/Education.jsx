import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../components/Reveal.jsx'
import { content } from '../data/content.js'

const diplomas = [
  {
    src: '/assets/diploma-1.jpg',
    alt: 'Диплом бакалавра Кристины Оразмурадовой',
    label: 'Диплом бакалавра',
  },
  {
    src: '/assets/diploma-2.jpg',
    alt: 'Диплом специалиста Кристины Оразмурадовой',
    label: 'Диплом специалиста',
  },
]

export function Education() {
  const dialogRef = useRef(null)
  const [selectedDiploma, setSelectedDiploma] = useState(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!selectedDiploma || !dialog || dialog.open) return

    dialog.showModal()
  }, [selectedDiploma])

  const closeDiploma = () => dialogRef.current?.close()

  return (
    <>
      <section className="education section" id="education" aria-labelledby="education-title">
        <div className="page-shell">
          <Reveal className="section-kicker">04 · Образование и опыт</Reveal>
          <div className="education__grid">
            <div className="education__copy">
              <Reveal as="header">
                <h2 id="education-title">Знания, практика и собственный путь в терапии</h2>
              </Reveal>

              <Reveal className="education-entry" delay={80}>
                <span>Высшее образование</span>
                <h3>{content.education.university}</h3>
                <p>{content.education.qualification}</p>
              </Reveal>

              <Reveal className="education-entry" delay={140}>
                <span>Дополнительная подготовка</span>
                <p>{content.education.additional}</p>
              </Reveal>
            </div>

            <Reveal className="credentials" delay={100}>
              <div className="credentials__meta">
                <span>Документы об образовании</span>
                <span>01—02</span>
              </div>
              <div className="credentials__images">
                {diplomas.map((diploma, index) => (
                  <button
                    className="diploma-card"
                    type="button"
                    key={diploma.src}
                    onClick={() => setSelectedDiploma(diploma)}
                    aria-haspopup="dialog"
                  >
                    <img
                      src={diploma.src}
                      alt={diploma.alt}
                      width="768"
                      height="1024"
                      loading="lazy"
                    />
                    <span>
                      <small>0{index + 1}</small>
                      {diploma.label}
                      <i aria-hidden="true">↗</i>
                    </span>
                  </button>
                ))}
              </div>
              <p>Нажмите на документ, чтобы рассмотреть его полностью.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <dialog
        className="diploma-dialog"
        ref={dialogRef}
        aria-labelledby="diploma-dialog-title"
        onClose={() => setSelectedDiploma(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDiploma()
        }}
      >
        {selectedDiploma && (
          <div className="diploma-dialog__content">
            <div className="diploma-dialog__header">
              <h2 id="diploma-dialog-title">{selectedDiploma.label}</h2>
              <button type="button" onClick={closeDiploma} autoFocus>
                Закрыть <span aria-hidden="true">×</span>
              </button>
            </div>
            <img src={selectedDiploma.src} alt={selectedDiploma.alt} />
          </div>
        )}
      </dialog>
    </>
  )
}
