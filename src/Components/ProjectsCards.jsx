import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsCards = ({ name, img, tech, btn }) => {
  return (
    <div className='bg-[#2d2d2d] rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer'>
      <img src={img} alt={name} className='w-full object-cover h-60' />
      <div className="p-6">
        <h2 className="text-xl text-center font-bold mb-2 text-gray-300">{name}</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {Array.isArray(tech) && tech.map((item, index) => (
            <span key={index} className="bg-[#3d3d3d] text-white px-5 py-1 rounded-2xl text-xs">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4 items-end justify-between ">
          <Link to={btn} className='rounded-xl px-4  py-3 bg-[#cfcf23] text-gary-700 hover:bg-[#ffff00] active:bg-[#dada30] transition duration-300'>ViewWork</Link>
          <Link to='/contact' className='rounded-xl border border-[#ffff00] px-9 ml-6 py-3 bg-transperent text-white hover:bg-[#afaf2e] hover:text-gray-800 active:bg-[#dada30] transition duration-300'>contact</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
