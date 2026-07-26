"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import type { Service } from "@/types/site";

type ServiceCarouselProps = {
  services: Service[];
};

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-service-card]");
    const distance = (card?.offsetWidth ?? track.clientWidth * 0.8) + 20;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <div className="service-carousel">
      <div className="carousel-controls" aria-label="Управление каталогом">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Предыдущая услуга"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Следующая услуга"
        >
          →
        </button>
      </div>
      <div
        className="service-track"
        ref={trackRef}
        tabIndex={0}
        aria-label="Каталог услуг. Используйте стрелки влево и вправо для прокрутки."
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scroll(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scroll(1);
          }
        }}
      >
        {services.map((service, index) => (
          <article
            className="service-card"
            data-service-card
            data-reveal
            style={
              {
                "--delay": `${Math.min(index * 70, 280)}ms`,
              } as CSSProperties
            }
            key={service.id}
          >
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(max-width: 600px) 84vw, (max-width: 1100px) 48vw, 32vw"
              style={{ objectPosition: service.image.position }}
            />
            <div className="service-card-overlay" />
            <div className="service-meta">
              <p>{service.duration}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>{service.price}</strong>
            </div>
            <a
              className="round-link"
              href={`#estimate`}
              aria-label={`Получить расчёт: ${service.title}`}
            >
              ↘
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
