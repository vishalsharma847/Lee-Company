import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-foot p-1'>
        <div className='grid gap-y-4 gap-x-8  m-6  grid-cols-2 text-white text-md'>
            <div className='flex flex-col text-center justify-center  items-center'>
                <Link to='/' className='w-44'><img src="./src/assets/LeeHomeNameLogo.png" alt=""/></Link>
                <h4 className='text-xl font-caveat'>Moving made simpler</h4>
            </div>
            <div className='flex flex-col items-start'>
                <h4 className='text-tfoot'>Company</h4>
                <div className='w-6 h-1 bg-red-600 rounded-lg '></div>
                <ul className='text-sm mt-2'>
                    <li><Link to='/about' >About Us</Link></li>
                    <li><Link to='/services' >Our Services</Link></li>
                    <li><Link to='/leehome/privacy-policy' >Privacy Policy</Link></li>
                    <li><Link to='/leehome/terms-and-condition' >Terms & Conditions</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-start'>
                <h4 className='text-tfoot'>Support</h4>
                <div className='w-6 h-1 bg-red-600 rounded-lg'></div>
                <ul className='text-sm mt-2'>
                    <li><Link to='/faq' >FAQs</Link></li>
                    <li><Link to='/contact' >Contact Us</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-start'>
                <h4 className='text-tfoot'>Services</h4>
                <div className='w-6 h-1 bg-red-600 rounded-lg'></div>
                <ul className='text-sm mt-2'>
                    <li><Link to='/services/complete-relocation' >Packers And Movers</Link></li>
                    <li><Link to='/services/transport-vehicle' >Transport Vehicle</Link></li>
                    <li><Link to='/services/packing-services' >Packing Services</Link></li>
                    <li><Link to='/services/personal-vehicle-relocation' >Car Transportation</Link></li>
                    <li><Link to='/services/warehousing' >Warehousing Services</Link></li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col w-full items-center mb-4 text-white'>
            <div className='w-11/12 pl-2 text-md'>
                <h4 className='text-tfoot'>Follow Us</h4>
                <div className='w-6 h-1 bg-red-600 rounded-lg'></div>
                <ul className='flex mt-2 justify-evenly'>
                    <li><Link to="https://www.facebook.com/leehomepackersandmovers/"><FaFacebook className='size-6'/></Link></li>
                    <li><Link to="https://twitter.com/leehomepackers?lang=en"><FaXTwitter className='size-6'/></Link></li>
                    <li><Link to="https://www.instagram.com/leehomepackers/"><FaInstagram className='size-6'/></Link></li>
                    <li><Link to=""><FaYoutube className='size-6'/></Link></li>
                    <li><Link to=""><FaLinkedin className='size-6'/></Link></li>
                </ul>
            </div>
            </div>
          <div className='flex flex-col w-full items-center'>
              <div className='w-11/12 pl-2 text-md'>
                <h4 className='text-tfoot row-span-2'>Places where we serve</h4>
                <div className='w-6 h-1 bg-red-600 rounded-lg '></div>
          </div>
          </div>
        <div className='grid gap-y-4 gap-x-8 m-6 mt-2 mb-20 grid-cols-2 text-white text-sm'>
            <div className='flex flex-col items-start'>
                <ul>
                    <li><Link to='' >Delhi NCR</Link></li>
                    <li><Link to='' >Kolkata</Link></li>
                    <li><Link to='' >Siliguri</Link></li>
                    <li><Link to='' >Lucknow</Link></li>
                    <li><Link to='' >Hyderabad</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-start'>
                <ul>
                    <li><Link to='' >Patna</Link></li>
                    <li><Link to='' >Meerut</Link></li>
                    <li><Link to='' >Bangalore</Link></li>
                    <li><Link to='' >Bhopal</Link></li>
                    <li><Link to='' >Ahmedabad</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-start'>
                <ul>
                    <li><Link to='' >Chandigarh</Link></li>
                    <li><Link to='' >Mumbai</Link></li>
                    <li><Link to='' >Pune</Link></li>
                    <li><Link to='' >Rohtak</Link></li>
                    <li><Link to='' >Ranchi</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-start'>
                <ul>
                    <li><Link to='' >Jaipur</Link></li>
                    <li><Link to='' >Dehradun</Link></li>
                    <li><Link to='' >Agra</Link></li>
                    <li><Link to='' >Indore</Link></li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center w-fll text-white text-xs'>
            <h4>Copyright&copy; Lee Home Packers And Movers | All rights reserved.</h4>
        </div>
    </footer>
  )
}

export default Footer