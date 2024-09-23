import React, { useState } from "react";

const Form = () => {
  const [date, setDate] = useState("text");

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const maxmonth = month + 2;
  var y = "none";

  var x = "none";

  if (month && day <= 9) {
    x = `${year}-0${month}-0${day}`;
    y = `${year}-${maxmonth}-0${day}`;
  } else if (month <= 9) {
    x = `${year}-0${month}-${day}`;
    y = `${year}-${maxmonth}-${day}`;
  } else if (day <= 9) {
    x = `${year}-${month}-0${day}`;
    y = `${year}-${maxmonth}-0${day}`;
  } else {
    x = `${year}-${month}-${day}`;
    y = `${year}-${maxmonth}-${day}`;
  }

  return (
    <div className="flex flex-col h-fit p-1 shadow-sm shadow-foot w-96 bg-indigo-300 align-middle mt-20 rounded-lg m-6">
      <h4 className="flex text-center blur-none justify-center mt-4 mb-4 font-bold text-2xl ">
        GET THE BEST QUOTE
      </h4>
      <form
        className="flex flex-col align-middle items-center text-sm mb-3"
        method="post"
      >
        <input
          type="text"
          name="userName"
          id="name"
          placeholder="Name*  ex.'Rahul'"
          maxLength="20"
          required
          className="w-10/12 p-1 rounded-lg m-1 active:border-none"
        />
        <input
          type="tel"
          name="userPhone"
          id="mobile"
          maxLength="10"
          pattern="[0-9]{10}"
          title="Must be a valid Mobile Number."
          placeholder="Mobile No.*  ex.'9574562XXX'"
          required
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          type="email"
          name="userEmail"
          id="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          title="Must be a valid E-Mail Address."
          placeholder="Email Address*  ex.'RahulsinXXX32@gmail.com'"
          required
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          type="text"
          name="location_from"
          id="location-from"
          placeholder="Location From*  ex.'Rohini, Delhi'"
          required
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          type="text"
          name="location_to"
          id="location-to"
          placeholder="Location To*  ex.'Siliguri, West bengal'"
          required
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          type={date}
          name="date"
          id="date"
          onFocus={() => setDate("date")}
          onBlur={() => setDate("text")}
          min={x}
          max={y}
          placeholder="Date Of Shifting*"
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          name="send"
          type="submit"
          id="submit-mobile"
          value="Submit"
          className="w-10/12 p-1 rounded-lg m-1 mb-6 bg-slate-400 text-white"
        />
      </form>
    </div>
  );
};

export default Form;
