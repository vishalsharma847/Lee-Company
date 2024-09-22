import React from "react";
import OurMission from "/src/Components/mainpages/about/aboutemplates/OurMission";
import Form from "/src/Components/mainpages/home/form/Form";
import Transport from "/src/Components/mainpages/services/transportVehicle/Transport";
import TransportComp2 from "/src/Components/mainpages/services/transportVehicle/TransportComp2";
import { Helmet } from "react-helmet";

const TransportVehicle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is Transport Vehicle</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full h-fit">
        <Transport />
        <div className="flex text-center">
          <div className="flex flex-col items-center w-full">
            <TransportComp2 />
            <OurMission />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportVehicle;
