import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { cards } from "../Assets/Data/teamData";

const Card = ({ data, isCenter, direction }) => {
  return (
    <motion.div
      key={data.id}
      initial={{ opacity: 0, x: direction * 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -100 }}
      transition={{ duration: 0.4 }}
      className={`bg-white p-4 sm:p-6 text-center shadow-md rounded-xl
        ${isCenter ? "scale-105" : "scale-90 opacity-70"}
        flex-shrink-0 w-64 sm:w-72 md:w-64 lg:w-72`}
    >
      <img
        src={data.img}
        alt={data.name}
        className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h2 className="text-lg font-semibold text-[#E60076]">{data.name}</h2>
      <p className="text-gray-500 italic mb-4 text-[#E60076]">{data.role}</p>
      <div className="flex justify-center gap-3 text-[#E60076]">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
    </motion.div>
  );
};

export default function Team() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // default desktop
  const containerRef = useRef(null);

  // Update visible cards based on screen width
  useEffect(() => {
    const updateCount = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1); // mobile
      else if (w < 1024) setVisibleCount(2); // tablet
      else setVisibleCount(3); // desktop
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const getCardsToShow = () => {
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(cards[(index + i) % cards.length]);
    }
    return arr;
  };

  const cardsToShow = getCardsToShow();

  // Touch swipe for mobile/tablet
  useEffect(() => {
    if (!containerRef.current || visibleCount === 3) return; // desktop no swipe
    const container = containerRef.current;
    let startX = 0;
    let endX = 0;

    const touchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const touchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) next();
      else if (endX - startX > 50) prev();
    };

    container.addEventListener("touchstart", touchStart);
    container.addEventListener("touchend", touchEnd);

    return () => {
      container.removeEventListener("touchstart", touchStart);
      container.removeEventListener("touchend", touchEnd);
    };
  }, [visibleCount, index]);

  return (
    <div className="bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-20 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold my-8 text-[#E60076] text-center">
        Our Amazing Team
      </h1>

      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-6xl px-2">
        {/* Left Arrow - only desktop */}
        {visibleCount === 3 && (
          <button
            onClick={prev}
            className="bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition self-center"
          >
            ◀
          </button>
        )}

        {/* Cards container */}
        <div
          ref={containerRef}
          className="flex gap-2 sm:gap-4 overflow-hidden w-full justify-center"
        >
          <AnimatePresence mode="wait">
            {cardsToShow.map((card, idx) => (
              <Card
                key={card.id}
                data={card}
                isCenter={idx === 0}
                direction={direction}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow - only desktop */}
        {visibleCount === 3 && (
          <button
            onClick={next}
            className="bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition self-center"
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
}