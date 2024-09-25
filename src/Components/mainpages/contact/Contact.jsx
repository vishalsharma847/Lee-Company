import React from "react";
import Form from "/src/Components/mainpages/home/form/Form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center w-full h-fit">
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is Contact</title>
      </Helmet>
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-around">
          <div className="lg:w-1/2">
            <div className="flex flex-col justify-center items-center text-center md:text-left lg:w-1/2 mt-16 mb-4">
              <h1 className="mt-8 text-2xl font-bold w-4/5 md:1/2">Office Address</h1>
              <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
              <p className="w-4/5 lg:w-full mt-3 font-bold">
                Shop No.110, Ist Floor, Agarwal Chamber, Plot No.1, Commercial
                Complex, Sector-5, Rohini, New Delhi-110085
              </p>
            </div>
            <div className="flex flex-col justify-center items-center lg:w-1/2 text-center mt-8 mb-4">
              <h1 className="mt-8 text-2xl font-bold w-4/5">Email</h1>
              <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
              <p className="w-4/5 md:w-full mt-3 font-bold">leehomepackers@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
            <h1 className="mt-8 text-2xl font-bold w-4/5">Contact Number</h1>
            <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
            <h2 className="mb-4 mt-8 font-bold">
              <Link
                className="bg-white p-2 rounded-2xl"
                to="tel: +91 9310553121"
              >
                +91 9310553121
              </Link>
            </h2>
            <h2 className=" mt-2 font-bold">
              <Link
                className="bg-white p-2 rounded-2xl"
                to="tel: +91 9818553121"
              >
                +91 9818553121
              </Link>
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
          <h1 className="mt-8 text-2xl font-bold w-4/5">Location</h1>
          <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
          <div className="mt-3 flex w-dvw p-5 lg:items-center lg:justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2489044517283!2d77.10033397625172!3d28.71210657562132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01a7661d6ec7%3A0x70873ed94bc01352!2sLee%20Home%20Packers%20and%20Movers!5e0!3m2!1sen!2sin!4v1726056676263!5m2!1sen!2sin"
              className="w-full h-72 lg:w-[800px] lg:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="flex justify-center mb-16 -mt-16">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
