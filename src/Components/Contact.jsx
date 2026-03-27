import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

const Contact = () => {
    
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Messege, setMessege] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('Name:', Name)
        // console.log('Email:', Email)
        // console.log('Messege:', Messege)
        setName('')
        setEmail('')
        setMessege('')
        // Here you can add your logic to send the data to a server or perform other actions
    }


  return (
    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                    id="Contact"
                    className='py-20'
                >
                    <div className="container mx-auto px-6">
                        {/* Heading */}
                        <h2 className="text-4xl font-bold mb-6 text-center text-white">
                            Get In <span className="text-[#ffff00]">Touch</span>
                        </h2>
                        <p className="text-gray-300 text-center mb-25 max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? Let's talk!
                        </p>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mx-w-5xl mx-auto '>
                            {/* contact form */}
                            <form onSubmit={submitHandler} className="space-y-6 w-[80%] ml-auto ">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                                    <input value={Name} onChange={(e)=>{setName(e.target.value)}} type="text" id="name" name="name" placeholder='Enter your Name...' className="outline-none mt-1 block w-full px-3 py-4 bg-[#2d2d2d] border border-gray-600 rounded-md text-white focus:outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                    <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" placeholder='Enter your Email...' className="outline-none mt-1 block w-full px-3 py-4 bg-[#2d2d2d] border border-gray-600 rounded-md text-white focus:outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                    <textarea value={Messege} onChange={(e)=>{setMessege(e.target.value)}} id="message" name="message" rows={4} placeholder='Type your Message...' className="outline-none mt-1 block w-full px-3 py-4 bg-[#2d2d2d] border border-gray-600 rounded-md text-white focus:outline-none" required></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="cursor-pointer bg-[#777729] text-white w-full hover:bg-[#ffff00] hover:text-black font-bold py-4 px-4 rounded-md transition duration-300">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                            {/* contact information */}
                            <div className="space-y-10">
                                <div className="flex items-start">
                                    <div className="text-[#ffff00] mr-4 text-2xl">
                                        <FaMapMarkedAlt />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl text-gray-300'>Location</h3>
                                        <p className="text-gray-400">123 Main Street, City, Country</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-[#ffff00] mr-4 text-2xl">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl text-gray-300'>Email</h3>
                                        <p className="text-gray-400">hello@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-[#ffff00] mr-4 text-2xl">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h3 className='text-2xl text-gray-300'>Phone</h3>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='font-bold text-white text-2xl '>Follow Me</h3>
                                    <div className='flex mt-4'> 
                                        <a href="#"  className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-2xl text-[#ffff00] hover:bg-[#ffff00] hover:text-[#2d2d2d] transition duration-300 mr-4'>
                                            <FaGithub />
                                        </a>
                                        <a href="#"  className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-2xl text-[#ffff00] hover:bg-[#ffff00] hover:text-[#2d2d2d] transition duration-300 mr-4'>
                                            <FaLinkedin />
                                        </a>
                                        <a href="#"  className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-2xl text-[#ffff00] hover:bg-[#ffff00] hover:text-[#2d2d2d] transition duration-300 mr-4'>
                                            <FaTwitter />
                                        </a>
                                        <a href="#"  className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-2xl text-[#ffff00] hover:bg-[#ffff00] hover:text-[#2d2d2d] transition duration-300 mr-4'>
                                            <FaDribbble />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
  )
}

export default Contact
