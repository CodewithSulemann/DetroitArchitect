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
      className="relative w-full h-screen overflow-hidden flex items-center"
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
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-12 text-white">
        <h1
          className={`text-4xl sm:text-5xl font-extrabold uppercase tracking-widest mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Longuski House
        </h1>

        <p
          className={`text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Keith and Linda, referred to by the Kinsellas, eventually built two identical houses. The design features Tripartite with three gables on the front facade, showcasing a blend of tradition and practicality. The second house mirrors the first, creating a harmonious and visually striking duo. With a commitment to standard materials, the homes stand as timeless examples of traditional home design, offering a
charming presence in the Canton community.
        </p>
      </div>
    </section>
  );
}