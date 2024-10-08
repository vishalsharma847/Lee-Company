import React from "react";
import { Link } from "react-router-dom";
import Whylee from "/src/Components/mainpages/about/aboutemplates/Whylee";
import Materials from "/src/Components/mainpages/about/aboutemplates/Materials";
import Connectwithus from "/src/Components/mainpages/about/aboutemplates/Connectwithus";
import WhatMakesUsUnique from "/src/Components/mainpages/about/aboutemplates/WhatMakesUsUnique";
import OurMission from "/src/Components/mainpages/about/aboutemplates/OurMission";
import { Helmet } from "react-helmet";

const About = ({ place }) => {
  return (
    <section className="flex flex-col justify-center w-full h-fit">
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is About</title>
      </Helmet>
      <div>
        <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
          <h2 className="mt-8 text-2xl font-bold w-4/5">
            Lee Home Packers & Movers {place}
          </h2>
          <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="flex flex-col justify-around items-center text-center mt-8 mb-4 lg:flex-row lg:w-4/5">
            <div className="mb-4">
              <Link to="/">
                <img
                  className="w-56"
                  src="/src/assets/LeeHomeNameLogo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="w-4/5 text-md lg:w-3/5">
              <p>
                Welcome to our Lee Home Packers And Movers {place}! We are your
                reliable and professional moving partners, committed to making
                your relocation a seamless and stress-free experience.
              </p>
              <p className="mt-3">
                At Lee Home Packers And Movers {place}, we understand that
                moving to a new location can be overwhelming, and that's where
                we step in to assist you. With years of expertise in the
                industry, we have established ourselves as one of the leading
                packers and movers in {place}. Our team of highly trained
                professionals is dedicated to ensuring the safe and timely
                transportation of your belongings to your new destination.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
          <div className="flex justify-center lg:mt-10">
          <Whylee />
          </div>
          <div className="lg:mt-20 lg:mb-20">
          <Connectwithus />
          </div>
          <div className="lg:mt-10">
          <WhatMakesUsUnique />
          </div>
          <div className="flex justify-center lg:mt-20">
          <Materials />
          </div>
          <div className="flex justify-center lg:mb-20 lg:mt-10">
          <OurMission />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
