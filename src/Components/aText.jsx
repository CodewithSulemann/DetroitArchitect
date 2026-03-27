 import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

export default function Text() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative w-full max-w-full bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-20 px-10 overflow-x-hidden max-sm:px-5">
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
      <div className='justify-center text-4xl font-bold pb-10 px-[40vw] text-[#E60076] '>
      <h1>About Us</h1>
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        className="relative overflow-hidden bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] border border-stone-900 p-10 cursor-default"
        initial={{ opacity: 0, y: 44 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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
          01
        </span>

        {/* Gold accent line */}
        <motion.div
          className="h-1 rounded-full mb-6 origin-left"
          style={{ backgroundColor: "#E60076", width: "44px" }}
          whileHover={{ width: "72px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Paragraph */}
        <p
          className="text-xl sm:text-2xl leading-[1.85] text-stone-200"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          We emphasize careful attention to detail and a client-centered approach. Collaboration is at the core of our work as we strive to create architecturally impressive and satisfying spaces. Our mission centers on precision, creative problem-solving, and utilizing all required resources. Our inspiration comes from a love for design, and our aptitude for architecture. Our first significant project was renovating a beloved community church. We specialize in renovating various building types to create functional, aesthetically pleasing spaces tailored to each project's unique needs.
        </p>

        {/* Bottom bar on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.75 rounded-r origin-left"
          style={{ backgroundColor: "#2d2d2d" }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </section>
  );
}