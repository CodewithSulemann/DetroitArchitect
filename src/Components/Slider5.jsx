import { useEffect, useRef, useState } from "react";

export default function Background(props) {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);

  const images = [props.img2, props.img3, props.img4];

  // Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Slider */}
      <div
        className="absolute inset-0 flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full shrink-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-12 text-white text-center overflow-auto max-h-[90vh]">
        <h1
          className={`text-3xl sm:text-5xl font-extrabold uppercase tracking-widest mb-4 sm:mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Harper Woods School District
        </h1>

        <p
          className={`text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Detroit Architect is currently working on a project for another educational institution: The Harper Woods School District. The district is building a “fieldhouse” that will serve as a sports training facility and a career training institute simultaneously. Drawings have been completed and permitted with the bidding process underway. This unique project is entirely constructed from shipping containers, and will have boys’ and girls’ locker rooms, culinary instruction space, general career instruction classrooms, a workout area, playing field observation areas, and limited administrative offices. It is a 3-story building of approximately 8,000 square feet.
        </p>
      </div>
    </section>
  );
}