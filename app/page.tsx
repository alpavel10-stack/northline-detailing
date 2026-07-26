import Image from "next/image";
import type { CSSProperties } from "react";
import { EstimateForm } from "@/components/EstimateForm";
import { Header } from "@/components/Header";
import { RevealController } from "@/components/RevealController";
import { ServiceCarousel } from "@/components/ServiceCarousel";
import {
  faqs,
  proofItems,
  projects,
  reviews,
  services,
} from "@/data/site-data";

export default function Home() {
  return (
    <>
      <RevealController />
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/images/northline-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="site-shell hero-inner">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Концепт детейлинг-студии · Москва</p>
              <h1 id="hero-title">
                <span>NORTH</span>
                <span>LINE</span>
              </h1>
              <p className="hero-lead">
                Защищаем кузов, возвращаем глубину цвету и приводим салон в
                порядок — с понятным планом работ до старта.
              </p>
              <div className="hero-actions">
                <a className="button" href="#estimate">
                  Рассчитать стоимость
                  <span aria-hidden="true">↘</span>
                </a>
                <a className="text-link" href="#works">
                  Посмотреть работы
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-note" data-reveal>
              <span className="hero-note-line" aria-hidden="true" />
              <p>
                Детейлинг без лишнего блеска.
                <br />
                Только нужный автомобилю результат.
              </p>
            </div>
          </div>
          <p className="demo-stamp">Учебная концепция · визуалы созданы ИИ</p>
        </section>

        <section className="intro-strip" aria-label="Принципы работы">
          <div className="site-shell intro-grid">
            <p className="intro-title" data-reveal>
              Сначала состояние.
              <br />
              Потом решение.
            </p>
            <div className="intro-points">
              <div data-reveal style={{ "--delay": "60ms" } as CSSProperties}>
                <span>01</span>
                <p>Осмотр при контрольном свете и фиксация спорных зон.</p>
              </div>
              <div data-reveal style={{ "--delay": "120ms" } as CSSProperties}>
                <span>02</span>
                <p>Смета по этапам без скрытого расширения работ.</p>
              </div>
              <div data-reveal style={{ "--delay": "180ms" } as CSSProperties}>
                <span>03</span>
                <p>Приёмка с рекомендациями по уходу после выдачи.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="site-shell section-heading" data-reveal>
            <div>
              <p className="eyebrow">Основные услуги</p>
              <h2>Задача определяет состав работ</h2>
            </div>
            <p>
              Показываем ориентиры до осмотра. Точная стоимость зависит от
              габаритов автомобиля, состояния поверхностей и выбранных
              материалов.
            </p>
          </div>
          <ServiceCarousel services={services} />
        </section>

        <section className="section works-section" id="works">
          <div className="site-shell">
            <div className="section-heading section-heading-wide" data-reveal>
              <div>
                <p className="eyebrow">Портфолио · демонстрация</p>
                <h2>Не галерея. Разбор задачи и результата</h2>
              </div>
              <p>
                Проекты, модели и результаты ниже созданы для учебного макета и
                не являются реальными заказами NORTHLINE.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <article
                  className="project-card"
                  data-reveal
                  style={{ "--delay": `${index * 70}ms` } as CSSProperties}
                  key={project.model}
                >
                  <div className="project-visual">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 58vw"
                      style={{ objectPosition: project.image.position }}
                    />
                    <p>Демонстрационный проект</p>
                    {project.comparison && (
                      <div className="comparison-labels">
                        <span>{project.comparison.before}</span>
                        <span>{project.comparison.after}</span>
                      </div>
                    )}
                  </div>
                  <div className="project-content">
                    <div className="project-index">0{index + 1}</div>
                    <h3>{project.model}</h3>
                    <dl>
                      <div>
                        <dt>Задача</dt>
                        <dd>{project.task}</dd>
                      </div>
                      <div>
                        <dt>Работы</dt>
                        <dd>
                          <ul>
                            {project.work.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div>
                        <dt>Срок</dt>
                        <dd>{project.duration}</dd>
                      </div>
                      <div>
                        <dt>Результат</dt>
                        <dd>{project.result}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section estimate-section" id="estimate">
          <div className="site-shell">
            <div className="estimate-panel" data-reveal>
              <div className="estimate-copy">
                <p className="eyebrow">Предварительный расчёт</p>
                <h2>Опишите автомобиль — форма проверит заявку</h2>
                <p className="estimate-lead">
                  Мы пока не подключали сервер: после заполнения вы увидите
                  подтверждение проверки, но данные никуда не уйдут.
                </p>
                <EstimateForm />
              </div>
              <div className="estimate-visual" aria-hidden="true">
                <div className="estimate-shape" />
                <Image
                  src="/images/northline-hero.png"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 44vw"
                  style={{ objectPosition: "70% center" }}
                />
                <p>N / 01</p>
              </div>
            </div>

            <div className="contact-row" id="contacts">
              <div>
                <p className="contact-label">Телефон</p>
                <a href="tel:+74950000000">+7 (495) 000-00-00</a>
                <span>демонстрационный номер</span>
              </div>
              <div>
                <p className="contact-label">Telegram</p>
                <p className="contact-value">@northline_demo</p>
                <span>демонстрационный контакт, ссылка не подключена</span>
              </div>
              <div>
                <p className="contact-label">Локация</p>
                <p className="contact-value">Москва</p>
                <span>адрес появится после запуска реальной студии</span>
              </div>
              <div>
                <p className="contact-label">Режим</p>
                <p className="contact-value">По записи</p>
                <span>пример информационного блока</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section proof-section" id="approach">
          <div className="site-shell">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Доказательства качества</p>
                <h2>Что можно проверить до выдачи автомобиля</h2>
              </div>
              <p>
                Вместо неподтверждённых наград — прозрачные точки контроля.
                Сертификаты и реальные документы появятся здесь только после их
                получения.
              </p>
            </div>

            <div className="proof-grid">
              {proofItems.map((item, index) => (
                <article
                  data-reveal
                  style={{ "--delay": `${index * 70}ms` } as CSSProperties}
                  key={item.label}
                >
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="credentials-grid">
              <article className="credential-card" data-reveal>
                <p className="eyebrow">Сертификаты</p>
                <h3>Раздел подготовлен, документы не заявлены</h3>
                <p>
                  В реальном проекте здесь будут только проверяемые сертификаты
                  производителей материалов с номерами и сроками действия.
                </p>
              </article>
              <article className="credential-card credential-card-accent" data-reveal>
                <p className="eyebrow">Награды</p>
                <h3>Без вымышленных регалий</h3>
                <p>
                  Концепт не использует фиктивные премии и рейтинги как
                  аргумент доверия.
                </p>
              </article>
            </div>

            <div className="reviews-heading" data-reveal>
              <p className="eyebrow">Отзывы · демонстрационные тексты</p>
              <h2>Как может звучать обратная связь</h2>
            </div>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <figure
                  data-reveal
                  style={{ "--delay": `${index * 70}ms` } as CSSProperties}
                  key={review.name}
                >
                  <blockquote>«{review.text}»</blockquote>
                  <figcaption>
                    <strong>{review.name}</strong>
                    <span>{review.car}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="site-shell faq-layout">
            <div className="faq-heading" data-reveal>
              <p className="eyebrow">Частые вопросы</p>
              <h2>До визита в студию</h2>
              <p>
                Не нашли нужного ответа? Используйте форму выше как
                демонстрацию будущего сценария расчёта.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details
                  data-reveal
                  style={
                    {
                      "--delay": `${Math.min(index * 45, 180)}ms`,
                    } as CSSProperties
                  }
                  key={item.question}
                >
                  <summary>
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell">
          <div className="footer-top">
            <div>
              <a className="footer-brand" href="#top">
                NORTHLINE
              </a>
              <p>
                Концептуальная студия автомобильного детейлинга в Москве.
                Учебный проект, не действующая организация.
              </p>
            </div>
            <div>
              <h2>Навигация</h2>
              <a href="#services">Услуги</a>
              <a href="#works">Работы</a>
              <a href="#estimate">Расчёт</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h2>Услуги</h2>
              {services.slice(0, 4).map((service) => (
                <a href="#services" key={service.id}>
                  {service.title}
                </a>
              ))}
            </div>
            <div>
              <h2>Контакты-заглушки</h2>
              <a href="tel:+74950000000">+7 (495) 000-00-00</a>
              <a href="mailto:hello@northline-demo.ru">
                hello@northline-demo.ru
              </a>
              <p>Москва · точный адрес не указан</p>
            </div>
          </div>

          <div className="legal-notes">
            <p id="privacy-note">
              <strong>Политика обработки данных:</strong> в этой локальной
              версии данные формы не отправляются и не сохраняются.
            </p>
            <p id="legal-note">
              <strong>Правовая информация:</strong> NORTHLINE — учебная
              концепция. Цены, проекты, отзывы, контакты и описания приведены
              для демонстрации.
            </p>
          </div>

          <div className="footer-bottom">
            <p>© 2026 NORTHLINE · Concept website</p>
            <div>
              <a href="#privacy-note">Обработка данных</a>
              <a href="#legal-note">Правовая информация</a>
            </div>
            <a href="#top">Наверх ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
