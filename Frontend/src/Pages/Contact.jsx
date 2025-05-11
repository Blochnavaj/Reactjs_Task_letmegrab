 import React from 'react'
 import { assets } from '../assets/data'
 
 function Contact() {
   return (
     <div>   
        <div className='text-center text-2xl pt-10 text-gray-500 mt-20 '>
         <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>
          
          <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm'>
           <img className='w-full md:max-w-[360px]' src={assets.coffee} alt="" />
           <div className='flex flex-col justify-center items-start gap-6'>
             <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
             <p className='text-gray-500'>54709 Willms Station <br />
             Suite 350, London, UK</p>
             <p className='text-gray-500'>Tel: (+91) 7383034778 <br /> Email: navajbloch420@gmail.com</p>
             <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
             <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
             <button className='broder border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
           </div>
          </div>
     </div>
   )
 }
 
 export default Contact