import React from "react";
import OurMission from "/src/Components/mainpages/about/aboutemplates/OurMission";
import Form from "/src/Components/mainpages/home/form/Form";
import PersonalV from "/src/Components/mainpages/services/personalVehicleTransport/PersonalV";
import PersonalV2 from "/src/Components/mainpages/services/personalVehicleTransport/PersonalV2";
import { Helmet } from "react-helmet";

const PersonalVehicle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is Personal Vehicle</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full h-fit ">
        <PersonalV />
        <div className="flex text-center">
          <div className="flex flex-col items-center w-full">
            <PersonalV2 />
            <OurMission />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalVehicle;
