import React from "react";

const Connectwithus = () => {
  return (
    <div class="flex flex-col w-full">
      <div className="flex w-full justify-center">
        <h3 className="p-2 border-black border-2 m-4 w-2/4 ">
          Connect with Us!
        </h3>
      </div>
      <div class="icons">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="flip-card-back">
              <h5>Call</h5>
              <p>9818553121</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="flip-card-back">
              <h5>E-Mail</h5>
              <p>leehomepackers@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div class="flip-card-back">
              <h5>Whatsapp</h5>
              <p>9310553121</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-solid fa-shop"></i>
            </div>
            <div class="flip-card-back">
              <h5>Head Office</h5>
              <p>
                Shop No.110, Agarwal Chamber, Commercial Complex, Sector-5,
                Rohini, Delhi-85
              </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-solid fa-clipboard"></i>
            </div>
            <div class="flip-card-back">
              <h5>Get Quote</h5>
              <p>Get the best price for your service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connectwithus;
