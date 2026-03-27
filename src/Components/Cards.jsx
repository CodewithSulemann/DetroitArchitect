import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";
import img6 from "../Assets/img6.png";

const cards = [
  {
    num: "01",
    title: "Renovation",
    body: "We specialize in renovating buildings, making them better while preserving their character. Our team focuses on details, creative solutions, and a blend of old and new to give your space a fresh look and enhanced functionality.",
    img: img1,
  },
  {
    num: "02",
    title: "Space Planning",
    body: "We specialize in designing buildings, creating spaces that look great and work well. Our architects and designers turn your ideas into detailed plans for various types of projects, from homes to commercial buildings, ensuring both aesthetics and functionality.",
    img: img2,
  },
  {
    num: "03",
    title: "3D Rendering",
    body: "We create detailed blueprints and technical drawings for your architectural projects. Our drafters turn your ideas into precise plans, whether it's a new building, renovation, or interior design, ensuring accurate and efficient execution.",
    img: img3,
  },
  {
    num: "04",
    title: "Drafting",
    body: "We create lifelike 3D visualizations of your architectural projects. Our 3D renderings make it easy to understand and present your designs, whether you're an architect, designer, or developer, helping you make informed decisions and impress clients.",
    img: img4,
  },
  {
    num: "05",
    title: "Building Design",
    body: "We specialize in arranging and organizing interior spaces efficiently and beautifully. Whether it's a home, office, or commercial area, we ensure that every square foot serves its purpose while looking great. Our space planning enhances how you live and work.",
    img: img5,
  },
  {
    num: "06",
    title: "Consulting",
    body: "We provide expert architectural consulting services tailored to your needs, whether it's a new project, enhancing existing spaces, or creative design ideas. Our experienced architects are here to help.",
    img: img6,
  },
];

function Card({ card, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] border border-stone-900 p-10 cursor-default"
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12,
      }}
      whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
      style={{ boxShadow: "none" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.10)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Top Right Small Image */}
      <div className="absolute top-5 right-5 w-14 h-14 rounded-full overflow-hidden border border-stone-700">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ghost number */}
      <span
        className="absolute bottom-4 right-7 text-[72px] font-black leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#E60076",
        }}
      >
        {card.num}
      </span>

      {/* Gold accent line */}
      <motion.div
        className="h-1 rounded-full mb-6 origin-left"
        style={{ backgroundColor: "#E60076", width: "44px" }}
        whileHover={{ width: "72px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Title */}
      <h1
        className="uppercase font-black leading-none tracking-tight text-stone-200 mb-5"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.4rem, 4vw, 3rem)",
        }}
      >
        {card.title}
      </h1>

      {/* Paragraph */}
      <p
        className="text-[0.93rem] leading-[1.85] text-stone-200"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {card.body}
      </p>

      {/* Bottom bar on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.75 w-full rounded-r origin-left"
        style={{ backgroundColor: "#E60076" }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export default function Cards() {
  const eyeRef = useRef(null);
  const eyeInView = useInView(eyeRef, { once: true, margin: "-10%" });

  return (
    <section className="relative w-full max-w-full text-stone-50 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-20 px-10 overflow-x-hidden max-sm:px-5">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;900&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

      {/* Decorative radial glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-95 h-95 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Eyebrow */}
      <motion.div
        ref={eyeRef}
        className="flex items-center gap-4 mb-14  pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={eyeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="h-px w-14 bg-stone-200" />
        <span
          className="text-[11px] uppercase tracking-[4px] text-stone-200"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          What we are best at
        </span>
      </motion.div>

      <div className='justify-center text-3xl p-20 pt-5 px-[40vw] text-pink-600 '>
        Our Services
      </div>

      {/* Cards grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <Card key={card.num} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
