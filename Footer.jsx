// Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import FooterBtn from './FooterBtn';



const Footer = () => {
    return (
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-10 text-white bg-black/0  h-[650px] md:h-[300px] w-full flex sm:justify-evenly"
      >
      <div className="flex  sm:flex-col mb-14 w-full  px-4 sm:px-0 justify-center items-center   ">

       
        <div className="flex  justify-between w-full md:flex-row flex-col items-center gap-y-4  ">
           
  
           {/* Links */}
           <div className="flex flex-col gap-3 text-left w-[60%] sm:w-auto justify-center items-center">
             <h3 className=" text-[18px] sm:text-2xl font-bold w-full ">Quick links</h3>
             <div className="flex flex-col gap-3">
               <FooterBtn item="Register Now" />
               <FooterBtn item="Location" />
             </div>
          </div>

          <div className= '  flex flex-col justify-center items-center '>
          {/* social icons */}
            <div className='flex  sm:flex-col justify-center items-center  gap-x-2 '>
              <h3 className='sm:text-2xl font-bold text-[18px]' >Follow us :</h3>
            <div className="flex items-center justify-evenly gap-4 mb-14">
               <motion.span
                 whileHover={{ scale: 1.4  }}
                 whileTap={{ scale: 0.8 }}
               >
                 <FaFacebook className="text-[24px]  cursor-pointer  text-[#0165E1] " />
               </motion.span>
               <motion.span
                 whileHover={{ scale: 1.4 }}
                 whileTap={{ scale: 0.8 }}
               >
                 <FaInstagram className="text-[30px]  cursor-pointer  text-[#e4405f] " />
               </motion.span>
               <motion.span
                 whileHover={{ scale: 1.4 }}
                 whileTap={{ scale: 0.8 }}
               >
                 <FaYoutube className="text-[30px]  cursor-pointer  text-red-600" />
               </motion.span>
               <motion.span
                 whileHover={{ scale: 1.4 }}
                 whileTap={{ scale: 0.8 }}
               >
                 <BiLogoGmail className="text-[30px]  cursor-pointer    text-white" />
               </motion.span>
             </div>
            </div>
            
           




          {/* Heading */}
         <div className="flex flex-col  sm:gap-3 items-center h-fit  justify-center -mt-6">
              <div className="flex items-center">
                <span className=" text-[24px] sm:text-2xl font-bold text-gray-100">
                  INNOVACION
                </span>
              </div>
              <span className=" text-[16px] sm:text-sm">
                &copy; {new Date().getFullYear()} Innovacion. All rights reserved.
              </span>
            </div>
          </div>
         

          {/* Contact */}
         <div className="flex flex-col gap-2  text-sm sm:text-[16px] justify-center items-center text-center md:mb-0 mb-4 ">
           <h3 className=" text-xl sm:text-2xl font-bold">Contact us</h3>
           <div className="flex flex-col gap-2  text-center">
             <span>
               Management House, D-1, Sector-V, Saltlake Electronics Complex
             </span>
             <span>Kolkata – 700 091, West Bengal, India.</span>
             <div className="flex items-center justify-center gap-2">
               <span className="font-semibold">Email: </span>
               <span> iemxinnovacion@gmail.com</span>
             </div>
             


           </div>
         </div>

         </div>

            

      </div>
      </motion.footer>


     
    );
  };
  
  export default Footer;
