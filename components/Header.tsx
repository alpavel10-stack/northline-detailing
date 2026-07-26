"use client";

import { useEffect, useState } from "react";

const navigation = [
  { href: "#services", label: "Услуги" },
  { href: "#works", label: "Работы" },
  { href: "#approach", label: "Подход" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="brand-mark" href="#top" aria-label="NORTHLINE — наверх">
          <span>NORTH</span>
          <span>LINE</span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href="tel:+74950000000">
            +7 (495) 000-00-00
            <span>демо-номер</span>
          </a>
          <a className="button button-small" href="#estimate">
            Рассчитать
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Мобильная навигация"
        data-open={isOpen}
        inert={!isOpen}
      >
        <div className="site-shell">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <span aria-hidden="true">↘</span>
            </a>
          ))}
          <a className="mobile-phone" href="tel:+74950000000">
            +7 (495) 000-00-00 <span>демо-номер</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
