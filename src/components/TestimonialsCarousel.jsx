import { useEffect, useMemo, useRef, useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const PLACEHOLDER_TESTIMONIALS = [
  {
    quote:
      "At the age of 43 I walked into Vegas Aviation and asked the nice lady at the front desk if I could go for an airplane ride.\nThanks to GEO the greatest flight instructor a few months later I am a licensed private pilot!\nMy personal circumstances are definitely abnormal but Geo and the staff at Vegas Aviation were absolutely fantastic at accommodating my busy schedule and helping make a lifelong dream come true!\nThank you Vegas Aviation and CFI Geo!!!!!",
    author: "Anchor Brand Ranch",
    role: "Student Pilot",
  },
  {
    quote:
      "My son took his first discovery flight today. His instructor was Dorian, who was absolutely amazing. We were originally scheduled for a discovery flight two weeks ago and were second in line for takeoff when an incoming plane declared an emergency, And landed on its belly. That shut down the airport for 12 hours, but wow, what a first experience that we got to see firsthand as we were second in line for takeoff when it happened. Dorian went through all of the emergency procedures and exactly what was happening with the tower With the airplane. That experience alone probably weighed more than his first flight today. Today's flight was about 45 minutes and it was absolutely beautiful. My son had the controls for half the time, including for takeoff and landing. Dorian was cool as a cucumber and made my son feel very safe and gave absolutely incredible instruction! If you're looking for a flight school, I would not look anywhere else!",
    author: "Daniel Burgess",
    role: "Student Pilot Father",
  },
  {
    quote:
      "I recently had the pleasure of completing a discovery flight with Vegas Aviation, and I can confidently say it was an unforgettable experience! From the moment I arrived, the warmth and friendliness of the owners and staff put me at ease. Their knowledge and passion for flying truly shine through.\n\nMy instructor, Geo, took me up for the flight, and he was fantastic! His expertise and encouragement helped me feel comfortable right from the start. The scenery was breathtaking, and the thrill of being in the cockpit was exhilarating. Every moment was filled with excitement, and I couldn't have asked for a better introduction to flying.\n\nI left the experience feeling inspired and eager to begin my training to get my pilot's license. If you're considering a discovery flight or looking to start your aviation journey, I highly recommend Vegas Aviation. You won’t be disappointed.",
    author: "Pierce Larkin",
    role: "Student Pilot",
  },
];

export default function TestimonialsCarousel({
  items,
  autoPlayMs = 0, /* 6000 */
  className = "",
}) {
  const data = useMemo(
    () =>
      (items?.length ? items : PLACEHOLDER_TESTIMONIALS).map((t, i) => ({
        id: t.id ?? i,
        ...t,
      })),
    [items],
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoveringRef = useRef(false);

  const goTo = (i) => setIndex((i + data.length) % data.length);
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
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const current = data[index];

  return (
    <section
      className={className}
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
    >
      <div className="mb-10 text-center">
        <p className="eyebrow mb-3 inline-flex items-center gap-2 px-3 py-1 text-[11px] tracking-widest uppercase">
          <span className="size-1.5 rounded-full bg-primary-400/90"></span>
          What Our Students Say
          <span className="size-1.5 rounded-full bg-primary-400/90"></span>
        </p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Inspiring Stories from Our Students
        </h2>
      </div>


      <div className="mx-auto w-full max-w-5xl">
        <div className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-2xl">
          <BiSolidQuoteLeft className="text-primary-400 size-10" />

          <figure className="flex w-full flex-col items-center px-4 text-center md:px-6">
            <blockquote className="mt-4 text-xl leading-relaxed text-ellipsis text-balance whitespace-pre-line md:text-2xl">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-6 shrink-0">
              <div className="text-center">
                <div className="text-primary-400 text-lg font-semibold">
                  {current.author}
                </div>
                <div className="text-muted-500! text-sm">
                  {current.role ? <span>{current.role}</span> : null}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          className="ring-primary-400/30 inline-flex items-center justify-center rounded-full p-3 ring-1 ring-inset text-primary-400 text-lg hover:bg-primary-400 hover:text-white transition-all duration-300 cursor-pointer"
          aria-label="Previous testimonial"
          onClick={prev}
        >
          <span aria-hidden className="">
            <FaArrowLeft />
          </span>
        </button>
        <nav
          className="flex items-center gap-2"
          aria-label="Select testimonial"
        >
          {data.map((t, i) => (
            <button
              key={t.id}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={index === i}
              onClick={() => goTo(i)}
              className={
                "h-2.5 w-2.5 rounded-full transition-all " +
                (index === i
                  ? "bg-primary-400 w-6"
                  : "bg-primary-400/20 hover:bg-black/30")
              }
            />
          ))}
        </nav>
        <button
          type="button"
          className="ring-primary-400/30 inline-flex items-center justify-center rounded-full p-3 ring-1 ring-inset text-primary-400 text-lg hover:bg-primary-400 hover:text-white transition-all duration-300 cursor-pointer"
          aria-label="Next testimonial"
          onClick={next}
        >
          <span aria-hidden className="">
           <FaArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
}
