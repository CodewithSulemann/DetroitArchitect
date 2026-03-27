// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import video from '../Assets/home-1.mp4'
import logo from '../Assets/home-logo.png'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] '
    >
      <div>
        <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover opacity-80'>
          <source src={video} type="video/mp4" />Your browser does not support the video tag.</video>

        {/* Overlay Image */}
        <img
          src={logo}
          alt="overlay"
          className="absolute inset-0 m-auto w-[40vw] h-auto"
        />
      </div>

    </motion.div>
  )
}

export default Hero
