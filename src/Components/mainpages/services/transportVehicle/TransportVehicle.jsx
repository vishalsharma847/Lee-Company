import React from 'react'
import OurMission from '/src/Components/mainpages/about/aboutemplates/OurMission';
import Form from '/src/Components/mainpages/home/form/Form';
import Transport from '/src/Components/mainpages/services/transportVehicle/Transport';
import TransportComp2 from '/src/Components/mainpages/services/transportVehicle/TransportComp2';

const TransportVehicle = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <Transport/>
      <div className="flex text-center">
        <div className="flex flex-col items-center w-full">
          <TransportComp2/>
          <OurMission />
          <Form />
        </div>
      </div>
    </div>
  </div>
  )
}

export default TransportVehicle