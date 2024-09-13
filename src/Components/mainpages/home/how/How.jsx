import React, { useState } from "react";

const How = () => {
  const [call,setCall] = useState(true)
  const [visit,setVisit] = useState(true)
  const [book,setBook] = useState(true)
  const [done,setDone] = useState(true)
  return (
    <div className="flex flex-col items-center m-8 text-center">
      <h1 className="text-3xl font-bold">How Lee Home Packers And Movers work?</h1>
      <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      <div class="flexgroup">
        <div className=" flex flex-col items-center">
          {call?<img src="./src/assets/call-us.png" onClick={()=>setCall(false)} alt="call-now" className="size-60" />:<img src="./src/assets/call-us.gif" onClick={()=>setCall(true)} alt="call-now" className="size-60" />}
          <h2 className="text-2xl font-bold">Give A Call !</h2>
          <p>Our executive will ask for some details and will give an approximate price for your required
          services.</p>
        </div>
        <div className=" flex flex-col items-center">
          {visit?<img src="./src/assets/visit-boy.png" onClick={()=>setVisit(false)} alt="visit" className="size-60"/>:<img src="./src/assets/visits.gif" onClick={()=>setVisit(true)} alt="visit" className="size-60"/>}
          <h2 className="text-2xl font-bold">Survey</h2>
          <p>If you find that approximate price comfortable then we will visit your house to confirm the
          details and will provide proper quotation and best rate possible for your services.</p>
        </div>
        <div className=" flex flex-col items-center">
        {book?<img src="./src/assets/Booking.png" onClick={()=>setBook(false)} alt="book" className="size-60"/>:<img src="./src/assets/book.gif" onClick={()=>setBook(true)} alt="book" className="size-60"/>}
          <h2 className="text-2xl font-bold">Booking</h2>
          <p>Afterthat, Whenever you wish to book our services we will take a minimal payment in advance to
          book your slot and remaining payment needs to be paid after the completion of your work.</p>
        </div>
        <div className=" flex flex-col items-center">
        {done?<img src="./src/assets/done.png" onClick={()=>setDone(false)} alt="visit" className="size-60"/>:<img src="./src/assets/done.gif" onClick={()=>setDone(true)} alt="Affordable" className="size-60"/>}
          <h2 className="text-2xl font-bold">Relax & Enjoy</h2>
          <p>Once you book our service just relax and enjoy hassle free best in class service.</p>
        </div>
      </div>
    </div>
  );
};

export default How;
