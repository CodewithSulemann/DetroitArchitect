import React from 'react'
import image from '../assets/hero.webp'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import { aboutInfo } from '../Assets/assets'

const About = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity :1, y:0}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{once:false, amount:0.2}}
        id='About'
        className='py-20 bg-[#181817] text-white'
    >
        <div className='container mx-0 px-6 '>
            {/* Heading */}
            <h2 className='text-4xl font-bold mb-6 text-center'>About <span className='text-[#ffff00] '>Me</span></h2>
            {/* Content */}
            <p className='text-lg mb-6 text-gray-300 text-center'>
                Go to know more about my background and passion.
            </p>
                {/* image + my journy */}
             <div className='flex flex-col md:flex-row items-center gap-12'>    
                {/* image */}
                <div className='w-full md:w-1/2 rounded-2xl overflow-hidden'>
                    <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity :1, y:0}}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{once:false, amount:0.2}}
                    className='w-full h-full object-cover'
                     src={image} alt="About Me" />
                </div>
                {/* right content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity :1, y:0}}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{once:false, amount:0.2}}
                    className='md:w-1/2'
                >
                    <div className='rounded-2xl p-8'>
                      <h3 className='text-2xl font-semibold mb-6 '>My Journey</h3>
                      <p className='text-gray-300 mb-6'>
                          I'm a passionate full-stack developer with over 5 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.
                      </p>
                      <p className='text-gray-300 mb-12'>
                          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.
                      </p>

                          {/* cards */}
                            <div className='cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-6'>
                               {
                                aboutInfo.map((data, index) => (
                                  <div key={index} className='bg-[#2a2a2a] p-6 rounded-2xl  transition-transform duration-300 hover:-translate-y-2'>
                                    <div className='text-[#ffff00] text-4xl'><data.icon /></div>
                                    <h3 className='text-xl font-bold mb-4'>{data.title}</h3>
                                    <p className='text-gray-300'>{data.description}</p>
                                  </div>
                                ))

                               }
                            </div>

                    </div>
                </motion.div>
             </div>
        </div>
      
    </motion.div>
  )
}

export default About
