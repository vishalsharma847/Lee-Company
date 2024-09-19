import React from "react";
import OurMission from "/src/Components/mainpages/about/aboutemplates/OurMission";
import Form from "/src/Components/mainpages/home/form/Form";
import Materials from "/src/Components/mainpages/about/aboutemplates/Materials";
import PackingComp2 from "/src/Components/mainpages/services/packingServices/PackingComp2";
import Packing from "/src/Components/mainpages/services/packingServices/Packing";

const PackingServices = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-fit">
        <Packing/>
        <Materials />
        <div className="flex text-center">
          <div className="flex flex-col items-center w-full">
            <PackingComp2/>
            <OurMission />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackingServices;
