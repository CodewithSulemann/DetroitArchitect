import { useEffect, useRef, useState } from "react";
import bgIage from "../Assets/home-3.jpg";

export default function wwDo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sectionRef = useRef(null);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-130 flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgIage})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl px-6 py-16 sm:px-12 sm:py-20 lg:px-16">

        {/* H1 */}
        <h1
          className={`
            font-extrabold text-white uppercase tracking-widest
            text-5xl sm:text-6xl lg:text-7xl
            leading-none mb-3
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
          style={{ transitionDelay: "100ms" }}
        >
          What we do
        </h1>

        {/* Pink Divider */}
        <div
          className={`
            h-1 bg-pink-500 rounded-full mb-6
            transition-all duration-700 ease-out
            ${visible ? "w-28" : "w-0"}
          `}
          style={{ transitionDelay: "450ms" }}
        />

        {/* Paragraph 1 */}
        <p
          className={`
            text-white/80 text-sm sm:text-base leading-relaxed mb-4
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "650ms" }}
        >
          We specialize in renovating various building types, such as commercial, industrial, institutional, and residential properties. Our focus is on reviving and improving these spaces to meet our clients' evolving needs and standards. Whether it's for businesses, industrial facilities, historic landmarks, or homes, we're committed to providing top-notch renovation services.
        </p>

        {/* Button */}
        <div
          className={`
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionDelay: "1050ms" }}
        >
          <HeroButton />
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function HeroButton() {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      className={`
        relative overflow-hidden
        px-8 py-3
        bg-pink-500 text-white
        font-semibold text-sm uppercase tracking-widest
        border-none cursor-pointer
        transition-all duration-300 ease-out
        ${hovered && !active ? "bg-pink-600 -translate-y-1 shadow-[0_10px_30px_rgba(236,72,153,0.5)]" : ""}
        ${active ? "bg-pink-700 scale-95 translate-y-0 shadow-md" : ""}
      `}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
      }}
    >
      {/* Shimmer sweep on hover */}
      <span
        className={`
          absolute inset-0 bg-white/15
          transition-transform duration-400 ease-out
          ${hovered ? "translate-x-0" : "-translate-x-full"}
        `}
      />
      <span className="relative z-10">
        <a
          href="#"
          className="text-white no-underline"
        >
          Learn More
        </a>
      </span>
    </button>
  );
}