import React from "react";
import Form from "../home/form/Form";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center w-full h-fit bg-gradient-to-b from-bodyprim to-bodysec">
      <div>
        <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
          <h1 className="mt-8 text-2xl font-bold w-4/5">Office Address</h1>
          <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
          <p className="w-4/5 mt-3 font-bold">
            Shop No.110, Ist Floor, Agarwal Chamber, Plot No.1, Commercial
            Complex, Sector-5, Rohini, New Delhi-110085
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
          <h1 className="mt-8 text-2xl font-bold w-4/5">Email</h1>
          <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
          <p className="w-4/5 mt-3 font-bold">leehomepackers@gmail.com</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
          <h1 className="mt-8 text-2xl font-bold w-4/5">Contact Number</h1>
          <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
          <h2 className="mb-4 mt-8 font-bold">
            <Link className="bg-white p-2 rounded-2xl" to ="tel: +91 9310553121">+91 9310553121</Link>
          </h2>
          <h2 className=" mt-2 font-bold">
            <Link className="bg-white p-2 rounded-2xl" to="tel: +91 9818553121">+91 9818553121</Link>
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
          <h1 className="mt-8 text-2xl font-bold w-4/5">Location</h1>
          <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
          <div className="mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2489044517283!2d77.10033397625172!3d28.71210657562132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01a7661d6ec7%3A0x70873ed94bc01352!2sLee%20Home%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1726056676263!5m2!1sen!2sin"
              className="w-full h-72"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col h-fit p-1 shadow-sm shadow-foot w-10/12 bg-indigo-300 align-middle mt-10 rounded-lg m-6">
            <h4 className="flex text-center blur-none justify-center mt-4 mb-4 font-bold text-2xl ">
              GET THE BEST QUOTE
            </h4>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
