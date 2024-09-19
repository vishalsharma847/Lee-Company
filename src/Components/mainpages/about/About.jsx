import React from "react";
import { Link } from "react-router-dom";
import Whylee from "/src/Components/mainpages/about/aboutemplates/Whylee";
import Materials from "/src/Components/mainpages/about/aboutemplates/Materials";
import Connectwithus from "/src/Components/mainpages/about/aboutemplates/Connectwithus";
import WhatMakesUsUnique from "/src/Components/mainpages/about/aboutemplates/WhatMakesUsUnique";
import OurMission from "/src/Components/mainpages/about/aboutemplates/OurMission";

const About = ({ place }) => {
  return (
    <section className="flex flex-col justify-center w-full h-fit">
      <div>
        <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
          <h2 className="mt-8 text-2xl font-bold w-4/5">
            Lee Home Packers & Movers {place}
          </h2>
          <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
            <div className="mb-4">
              <Link to="/">
                <img
                  className="w-56"
                  src="./src/assets/LeeHomeNameLogo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="w-4/5 text-md">
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
          <Whylee />
          <Connectwithus />
          <WhatMakesUsUnique />
          <Materials />
          <OurMission />
        </div>
      </div>
    </section>
  );
};

export default About;
