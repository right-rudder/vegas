import { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../data/testimonials";

/* TODO : Remove? Currently not used */
/* TODO : Allow height change on mobile */

export default function TestimonialsCarousel({ items, autoPlayMs = 0, className = "" }) {
  const data = useMemo(
    () =>
      (items?.length ? items : testimonials.slice(0, 3)).map((t, i) => ({
        id: t.id ?? i,
        ...t,
      })),
    [items]
  );

  const [index, setIndex] = useState(0);
  const refs = useRef([]);
  const timerRef = useRef(null);
  const hoveringRef = useRef(false);

  const goTo = (i) => {
    const fixedIndex = (i + data.length) % data.length;
    const container = document.getElementById("testimonials-carousel");
    const card = document.getElementById(`testimonial-card-${fixedIndex}`);
    const offsetX = card.getBoundingClientRect().left - container.getBoundingClientRect().left;

    container.scrollBy(offsetX, 0);

    setIndex(fixedIndex);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (autoPlayMs <= 0) return;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (!hoveringRef.current) next();
    }, autoPlayMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, autoPlayMs, data.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <section
      className={className}
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="eyebrow-dark inline-flex items-center gap-2 tracking-widest">What Our Students Say</p>
          <h2 className="mt-2 text-5xl font-semibold">Inspiring Stories from Our Students</h2>
        </div>

        <div className="flex w-full flex-col items-center justify-start rounded-lg transition-all duration-300">
          <BiSolidQuoteLeft className="text-primary-600 size-10" />

          <div
            id="testimonials-carousel"
            className="relative flex w-full items-stretch justify-stretch overflow-hidden"
          >
            {data.map((t, i) => (
              <div
                key={t.id}
                ref={(el) => (refs.current[i] = el)}
                className={`flex grow shrink-0 basis-full w-full flex-col items-center justify-center px-4 text-center transition duration-500 ease-in-out md:px-6 ${
                  index === i ? "opacity-100" : "opacity-0"
                }`}
                id={`testimonial-card-${i}`}
              >
                <blockquote className="mt-4 text-xl leading-relaxed text-balance whitespace-pre-line md:text-2xl">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 shrink-0">
                  <div className="text-center">
                    <p className="text-primary-600 text-3xl font-semibold">{t.author}</p>
                    {t.role && <p className="text-muted-500 text-lg">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            className="ring-primary-600/30 inline-flex items-center justify-center rounded-full p-3 ring-1 ring-inset text-primary-600 text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
            onClick={prev}
          >
            <FaArrowLeft />
          </button>
          <nav className="flex items-center gap-2" aria-label="Select testimonial">
            {data.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={index === i}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                  index === i ? "bg-primary-600 w-6" : "bg-primary-600/20 hover:bg-accent-900/30"
                }`}
              />
            ))}
          </nav>
          <button
            type="button"
            className="ring-primary-600/30 inline-flex items-center justify-center rounded-full p-3 ring-1 ring-inset text-primary-600 text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
            onClick={next}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
