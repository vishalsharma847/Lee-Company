import React, { useState } from "react";
import calli from "/src/assets/call-us.png";
import callgif from "/src/assets/call-us.gif";
import visite from "/src/assets/visit-boy.png";
import visitgif from "/src/assets/visits.gif";
import quote from "/src/assets/Booking.png";
import quotegif from "/src/assets/book.gif";
import move from "/src/assets/done.png";
import movegif from "/src/assets/done.gif";

const How = () => {
  const [call,setCall] = useState(true)
  const [visit,setVisit] = useState(true)
  const [book,setBook] = useState(true)
  const [done,setDone] = useState(true)
  return (
    <div className="flex flex-col items-center m-8 text-center">
      <h1 className="text-3xl font-bold">How Lee Home Packers And Movers work?</h1>
      <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      <div className="flex flex-col w-full justify-evenly lg:flex-row lg:justify-around">
        <div className=" flex flex-col items-center">
          {call?<img src={calli} onClick={()=>setCall(false)} alt="call-now" className="size-60 md:size-48 " />:<img src={callgif} onClick={()=>setCall(true)} alt="call-now" className="size-60 md:size-48" />}
          <h2 className="text-xl font-bold">Give A Call !</h2>
          <p className="w-60 text-sm">Our executive will ask for some details and will give an approximate price for your required
          services.</p>
        </div>
        <div className=" flex flex-col items-center">
          {visit?<img src={visite} onClick={()=>setVisit(false)} alt="visit" className="size-60 md:size-48"/>:<img src={visitgif} onClick={()=>setVisit(true)} alt="visit" className="size-60 md:size-48"/>}
          <h2 className="text-xl font-bold">Survey</h2>
          <p className="w-60 text-sm">If you find that approximate price comfortable then we will visit your house to confirm the
          details and will provide proper quotation and best rate possible for your services.</p>
        </div>
        <div className=" flex flex-col items-center">
        {book?<img src={quote} onClick={()=>setBook(false)} alt="book" className="size-60 md:size-48"/>:<img src={quotegif} onClick={()=>setBook(true)} alt="book" className="size-60 md:size-48"/>}
          <h2 className="text-xl font-bold">Booking</h2>
          <p className="w-60 text-sm">Afterthat, Whenever you wish to book our services we will take a minimal payment in advance to
          book your slot and remaining payment needs to be paid after the completion of your work.</p>
        </div>
        <div className=" flex flex-col items-center">
        {done?<img src={move} onClick={()=>setDone(false)} alt="visit" className="size-60 md:size-48"/>:<img src={movegif} onClick={()=>setDone(true)} alt="Affordable" className="size-60 md:size-48"/>}
          <h2 className="text-xl font-bold">Relax & Enjoy</h2>
          <p className="w-60 text-sm">Once you book our service just relax and enjoy hassle free best in class service.</p>
        </div>
      </div>
    </div>
  );
};

export default How;
