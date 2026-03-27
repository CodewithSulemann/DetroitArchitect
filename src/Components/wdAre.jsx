import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const cards = [
  {
    num: "02",
    title: "Vision",
    body: "Our values are deeply rooted in our commitment to excellence and client satisfaction. We prioritize being detail-oriented and maintaining an extensive knowledge of construction, collaborating closely with clients and constructors to ensure their needs are met.",
  },
  {
    num: "03",
    title: "Mission",
    body: "Our mission is to provide creative solutions that address our clients' unique requirements while bringing professionalism and expertise to every project.",
  },
];

function Card({ card, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] border border-stone-900 p-10 group cursor-default"
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.18,
      }}
      whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
      style={{ boxShadow: "none" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.10)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Ghost number */}
      <span
        className="absolute top-6 right-7 text-[72px] font-black leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#E60076",
        }}
      >
        {card.num}
      </span>

      {/* Gold accent line — widens on hover */}
      <motion.div
        className="h-1 rounded-full mb-6 origin-left"
        style={{ backgroundColor: "#E60076", width: "44px" }}
        whileHover={{ width: "72px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* H1 title */}
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
        className="text-[0.93rem] leading-[1.85] text-stone-200 max-w-95"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {card.body}
      </p>

      {/* Bottom gold bar — slides in on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.75 rounded-r origin-left"
        style={{ backgroundColor: "#2d2d2d" }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export default function WdAre() {
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
        className="flex items-center gap-4 mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={eyeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="h-px w-14 bg-stone-200" />
        <span
          className="text-[11px] uppercase tracking-[4px] text-stone-200"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Who We Are
        </span>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <Card key={card.title} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}