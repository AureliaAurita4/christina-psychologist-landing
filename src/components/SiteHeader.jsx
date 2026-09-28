import { useEffect, useState } from 'react'
import { content } from '../data/content.js'

const navigation = [
  { href: '#top', label: 'Главная' },
  { href: '#about', label: 'Обо мне' },
  { href: '#focus', label: 'С чем работаю' },
  { href: '#education', label: 'Образование' },
  { href: '#testimonials', label: 'Отзывы' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 24)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24)

    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner page-shell">
        <a className="brand" href="#top" aria-label={`${content.name}, наверх`}>
          <span className="brand__mark" aria-hidden="true">К</span>
          <span className="brand__name">{content.shortName}</span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-contact" href="#contacts">Связаться</a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${isOpen ? 'is-open' : ''}`}
        aria-label="Мобильная навигация"
        aria-hidden={!isOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>
        ))}
        <a href="#contacts" onClick={() => setIsOpen(false)}>Связаться</a>
      </nav>
    </header>
  )
}
