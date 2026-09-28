import { Reveal } from '../components/Reveal.jsx'
import { content } from '../data/content.js'

const contactLabels = {
  email: 'Email',
  phone: 'Телефон',
  telegram: 'Telegram',
  instagram: 'Instagram',
}

export function Contacts() {
  const availableContacts = Object.entries(content.contacts).filter(([, value]) => value)

  return (
    <footer className="contacts" aria-labelledby="contacts-title">
      <div className="page-shell" id="contacts">
        <Reveal className="section-kicker section-kicker--light">07 · Контакты</Reveal>
        <div className="contacts__grid">
          <Reveal>
            <h2 id="contacts-title">Давайте начнём с разговора</h2>
          </Reveal>

          <Reveal className="contacts__details" delay={80}>
            {availableContacts.length > 0 ? (
              availableContacts.map(([type, contact]) => (
                <div className="contact-row" key={type}>
                  <span>{contactLabels[type]}</span>
                  <a
                    href={contact.href}
                    target={contact.isExternal ? '_blank' : undefined}
                    rel={contact.isExternal ? 'noreferrer' : undefined}
                  >
                    {contact.label}
                  </a>
                </div>
              ))
            ) : (
              <div className="contacts-placeholder">
                <p>Контактные данные уточняются.</p>
                <span>Здесь появятся актуальные способы связи и записи на консультацию.</span>
              </div>
            )}
          </Reveal>
        </div>

        <div className="footer-line">
          <span>© {new Date().getFullYear()} {content.name}</span>
          <a href="#top">Наверх <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  )
}
