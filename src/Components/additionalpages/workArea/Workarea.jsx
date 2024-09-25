import React from "react";
import { Link } from "react-router-dom";
import Whylee from "/src/Components/mainpages/about/aboutemplates/Whylee";
import Connectwithus from "/src/Components/mainpages/about/aboutemplates/Connectwithus";
import WhatMakesUsUnique from "/src/Components/mainpages/about/aboutemplates/WhatMakesUsUnique";
import Materials from "/src/Components/mainpages/about/aboutemplates/Materials";
import OurMission from "/src/Components/mainpages/about/aboutemplates/OurMission";
import Relocate from "/src/Components/mainpages/services/completeRelocation/Relocate";
import RelocateComp2 from "/src/Components/mainpages/services/completeRelocation/RelocateComp2";
import Packing from "/src/Components/mainpages/services/packingServices/Packing";
import PackingComp2 from "/src/Components/mainpages/services/packingServices/PackingComp2";
import PersonalV from "/src/Components/mainpages/services/personalVehicleTransport/PersonalV";
import PersonalV2 from "/src/Components/mainpages/services/personalVehicleTransport/PersonalV2";
import Transport from "/src/Components/mainpages/services/transportVehicle/Transport";
import TransportComp2 from "/src/Components/mainpages/services/transportVehicle/TransportComp2";
import WareComp2 from "/src/Components/mainpages/services/warehousing/WareComp2";
import Ware from "/src/Components/mainpages/services/warehousing/Ware";
import Form from "/src/Components/mainpages/home/form/Form";
import { Helmet } from "react-helmet";
import ServicCont from "/src/Components/mainpages/services/ServicCont";

const Workarea = ({ place }) => {
  return (
    <section className="flex flex-col justify-center w-full h-fit">
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is {place}</title>
      </Helmet>
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
                  src="/src/assets/LeeHomeNameLogo.png"
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
          <Whylee place={place} />
          <div className="w-full">
          <ServicCont />
          </div>
          <div>
            <Relocate />
            <RelocateComp2 />
          </div>
          <div className="flex flex-col items-center">
            <Packing />
            <Materials />
            <PackingComp2 />
          </div>
          <div>
            <Transport />
            <TransportComp2 />
          </div>
          <div>
            <Ware />
            <WareComp2 />
          </div>
          <div>
            <PersonalV />
            <PersonalV2 />
          </div>
          <Connectwithus />
          <WhatMakesUsUnique place={place} />
          <OurMission />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Workarea;
