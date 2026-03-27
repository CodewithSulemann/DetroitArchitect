// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { projects } from '../Assets/Data/projectsData';
import ProjectsCards from './ProjectsCards';
import image from '../Assets/whome1.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  return (
    <>
      {/* Banner Image */}
      <img
        className="pt-20 w-full object-cover"
        src={image}
        alt="Sorry image can't load"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        id="Projects"
        className="py-20"
      >
        <div className="container mx-auto px-6 mt-18">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-6 text-center text-white">
            Our <span className="text-[#ffff00]">Projects</span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            A selection of Our recent work
          </p>

          {/* Projects Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <ProjectsCards {...data} />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="inline-flex border border-[#ffff00] text-white hover:bg-[#ffff00] hover:text-gray-700 active:bg-[#dada30] transition duration-300 py-3 px-6 rounded-xl font-bold"
            >
              <span>View more Projects</span>
              <FaArrowRight className="ml-4 mt-1.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;