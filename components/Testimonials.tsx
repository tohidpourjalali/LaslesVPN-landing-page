"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "./icons";

export default function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    if (!slide) return;
    const step = slide.offsetWidth + 50; // slide width + 5rem gap
    const max = el.scrollWidth - el.clientWidth;
    setActive(Math.round(el.scrollLeft / step));
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = scroller.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const go = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    if (!slide) return;
    el.scrollBy({ left: dir * (slide.offsetWidth + 50), behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = scroller.current;
    const slide = el?.firstElementChild as HTMLElement | null;
    if (!el || !slide) return;
    el.scrollTo({ left: i * (slide.offsetWidth + 50), behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="overflow-hidden">
      <div className="container-page flex flex-col items-center gap-[1.5rem] text-center md:gap-[2rem]">
        <h2 className="max-w-[43.5rem] text-[2.8rem] leading-[1.424] font-medium text-ink md:text-[3.2rem] lg:text-[3.5rem]">
          Trusted by Thousands of Happy Customer
        </h2>
        <p className="max-w-[55.5rem] text-[1.5rem] leading-[1.875] text-muted md:text-[1.6rem]">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      {/* Carousel — bleeds past the container to the right, like the design */}
      <div
        ref={scroller}
        className="no-scrollbar mt-[4rem] flex snap-x snap-mandatory gap-[5rem] overflow-x-auto scroll-smooth carousel-inset pt-[6rem] pb-[2rem] md:mt-0"
      >
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="flex h-auto w-[32rem] shrink-0 snap-start flex-col rounded-card border-2 border-line p-[2rem] transition-colors duration-300 hover:border-primary sm:w-[36rem] md:h-[25.6rem] md:w-[40rem] md:p-[3rem]"
          >
            <div className="mb-[2rem] flex items-center gap-[2rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.avatar}
                alt={t.name}
                width={50}
                height={50}
                className="h-[5rem] w-[5rem] shrink-0 rounded-full object-cover"
              />
              <div className="flex flex-col text-[1.4rem] text-muted">
                <span className="font-medium text-ink">{t.name}</span>
                <span>{t.location}</span>
              </div>
              <span className="ms-auto flex items-center gap-[1rem] text-[1.4rem] text-ink">
                {t.rating}
                <StarIcon className="h-[1.6rem] w-[1.6rem] text-star" />
              </span>
            </div>
            <p className="text-[1.4rem] leading-[2.6rem] text-ink md:text-[1.6rem] md:leading-[3rem]">
              {t.quote}
            </p>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="container-page flex items-center justify-between pt-[4rem] md:pt-[6rem]">
        <div className="flex items-center gap-[1rem]">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={active === i}
              className={`h-[1.5rem] rounded-pill bg-bullet transition-all duration-300 hover:bg-ink ${
                active === i ? "w-[4.5rem] rounded-card bg-primary" : "w-[1.5rem]"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-[2rem]">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={atStart}
            aria-label="Previous testimonial"
            className={`flex items-center justify-center rounded-full border-2 border-primary p-[1.2rem] transition-colors duration-300 hover:bg-primary disabled:pointer-events-none disabled:border-primary-shade md:p-[1.8rem] [&:disabled_svg]:text-primary-shade [&:hover_svg]:text-white`}
          >
            <ArrowLeftIcon className="h-[1.8rem] w-[2rem] text-primary" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={atEnd}
            aria-label="Next testimonial"
            className={`flex items-center justify-center rounded-full border-2 border-primary p-[1.2rem] transition-colors duration-300 hover:bg-primary disabled:pointer-events-none disabled:border-primary-shade md:p-[1.8rem] [&:disabled_svg]:text-primary-shade [&:hover_svg]:text-white`}
          >
            <ArrowRightIcon className="h-[1.8rem] w-[2rem] text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
