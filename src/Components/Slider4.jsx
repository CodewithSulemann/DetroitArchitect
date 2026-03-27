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
      <div className="relative z-20 max-w-3xl px-4 sm:px-12 text-white text-center overflow-auto max-h-[90vh]">
        <h1
          className={`text-3xl sm:text-5xl font-extrabold uppercase tracking-widest mb-4 sm:mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Wayne County Community College
        </h1>

        <p
          className={`text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Detroit Architect’s long-standing collaboration with Wayne County Community College includes transforming the Northwest Campus’s former dormitory into an Academic Administration Building and designing the new James E. White Detroit Police Training Academy, a 40,000-square-foot facility with state-of-the-art training resources, set to open in late 2024. At the Downtown Campus’s Health and Wellness Education Center, they added locker room steam rooms, relocated laundry services, and are building additional locker rooms to support sports tournaments, scheduled for early 2025. Detroit Architect also guided the approval and completion of the HWEC Concession Stand. Most notable was the creation of new Men’s and Women’s Steam Rooms and the relocation of the existing Laundry Room.  The current Laundry Room location was repurposed to create steam rooms that open to the Men’s and Women’s Locker Rooms, a unique amenity that is sure to appeal to the HWEC members.  New commercial washing and drying equipment was installed in one of the gymnasium storage areas to support an expanding towel service.  New vestibules were added to further limit visibility into the locker rooms from the HWEC lobby and towel desk. 
        </p>
      </div>
    </section>
  );
}