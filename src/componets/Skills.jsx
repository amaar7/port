import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/python.png';

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
                        place-items-center md:flex md:justify-between md:items-center'>

      <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
        My <br/> Tech <br/> Stack
      </h2>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={html} alt=""/> 
        <p className='mt-2 text-xs md:text-sm'>Html</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={css} alt="" width={100} height={100}/> 
        <p className='mt-2 text-xs md:text-sm'>Css</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={javascript} alt="" width={100} height={100}/> 
        <p className='mt-2 text-xs md:text-sm'>JavaScript</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={react} alt="" width={100} height={100}/> 
        <p className='mt-2 text-xs md:text-sm'>React</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={tailwind} alt="" width={100} height={100}/> 
        <p className='mt-2 text-xs md:text-sm'>Tailwind</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={python} alt="" width={100} height={100}/> 
        <p className='mt-2 text-xs md:text-sm'>Python</p>
      </div>
      
    </div>
  );
};

export default Skills;
