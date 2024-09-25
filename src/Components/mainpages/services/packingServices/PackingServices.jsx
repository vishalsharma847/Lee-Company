import React from "react";
import OurMission from "/src/Components/mainpages/about/aboutemplates/OurMission";
import Form from "/src/Components/mainpages/home/form/Form";
import Materials from "/src/Components/mainpages/about/aboutemplates/Materials";
import PackingComp2 from "/src/Components/mainpages/services/packingServices/PackingComp2";
import Packing from "/src/Components/mainpages/services/packingServices/Packing";
import { Helmet } from "react-helmet";

const PackingServices = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is Faq</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full h-fit">
        <Packing />
        <Materials />
        <div className="flex text-center">
          <div className="flex flex-col items-center w-full">
            <PackingComp2 />
            <div className="flex flex-col justify-center items-center h-fit w-3/4">
            <OurMission />
            </div>
            <div className="flex justify-center items-center w-dvw lg:mb-16">
            <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackingServices;
