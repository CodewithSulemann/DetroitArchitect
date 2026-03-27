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
      {/* Slider Background */}
      <div
        className="absolute inset-0 flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-4 sm:px-8 text-white text-center overflow-auto max-h-[90vh]">
        <h1
          className={`text-3xl sm:text-5xl font-extrabold uppercase tracking-widest mb-4 sm:mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Oak Grove Church
        </h1>

        <p
          className={`text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          The architecture of Oak Grove African Methodist Episcopal Church's construction is a testament to the enduring faith and dedication of its members. In 1921, the congregation, composed of a small group of committed Christians, came together to build their first church home with their own hands and a labor of love. This initial structure, designed by master carpenter and church member Mr. Nelson Smoot, was a small wooden building located at the corner of Kentucky and Chippewa Streets.

          It distinguished by its distinctive bell tower, which not only served as a visual landmark but also as a functional element. Tragically, in approximately 1926, this wooden church was lost to a devastating fire, resulting in the bell's last toll. This was when the new construction of the building was made. This time, they opted for a more durable and fire-resistant material, using bricks in the construction.

          The architectural transition from a wooden structure with a bell tower to a brick-built church symbolized not only resilience but also a commitment to providing a permanent and secure place of worship for the community. Nathan had been a member of this church since the late 70s. The additions were built by William and Richardson Inc. The north addition has a new basement with classrooms, an expanded fellowship hall, and an upper level with classrooms and a chapel. The south Addition has a new choir and new church finance offices.
        </p>
      </div>
    </section>
  );
}