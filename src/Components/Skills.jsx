import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { skills } from '../Assets/assets';

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id="Skills"
        >
            <div className="container mx-0 px-6">
                {/* Heading */}
                <h2 className="text-4xl font-bold mb-6 text-center text-white">
                    My <span className="text-[#ffff00]">Skills</span>
                </h2>
                {/* Content */}
                <p className="text-gray-300 text-center max-w-2xl mx-auto">
                    Technologies I work with to bring ideas to life
                </p>
                {/* skill card */}
                <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#2a2a2a] p-6 rounded-2xl text-[#ffff00] cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="flex items-center mb-4">
                                {React.createElement(skill.icon, {
                                    className: 'w-12 h-12 text-[#ffff00] mr-6',
                                })}
                                <h3 className="text-xl text-white font-bold">{skill.title}</h3>
                            </div>
                            <p className="text-gray-300 mb-4">{skill.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {
                                    skill.tags.map((tech) => (
                                        <span className='px-3 py-1 bg-[#3d3d3d] text-white rounded-full text-sm '> {tech} </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
