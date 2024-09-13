import React from "react";
import { Link } from "react-router-dom";
import material from './material.json'

const About = () => {
  return (
    <section className="flex flex-col justify-center w-full h-fit bg-gradient-to-b from-bodyprim to-bodysec">
      <div>
        <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
          <h2 className="mt-8 text-2xl font-bold w-4/5">
            Lee Home Packers & Movers Delhi
          </h2>
          <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
            <div className="mb-4">
              <Link to="/">
                <img
                  className="w-56"
                  src="./src/assets/LeeHomeNameLogo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="w-4/5 text-md">
              <p>
                Welcome to our Lee Home Packers And Movers Delhi! We are your
                reliable and professional moving partners, committed to making
                your relocation a seamless and stress-free experience.
              </p>
              <p className="mt-3">
                At Lee Home Packers And Movers Delhi, we understand that moving
                to a new location can be overwhelming, and that's where we step
                in to assist you. With years of expertise in the industry, we
                have established ourselves as one of the leading packers and
                movers in Delhi. Our team of highly trained professionals is
                dedicated to ensuring the safe and timely transportation of your
                belongings to your new destination.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-8 mb-4">
          <div className="w-4/5">
            <div>
              <Link className="flex justify-center mb-4" to="/">
                <img
                  className="flex w-4/5"
                  src="./src/assets/real_images/About1.jpg"
                  alt=""
                />
              </Link>
            </div>
            <h3 className="p-2 border-black border-2 m-4">
              Why choose Lee Home Packers And Movers for your relocation needs?
            </h3>
            <div className="flex w-full justify-end">
              <ol className="list-decimal text-left w-11/12">
                <li className="mt-1">
                  <strong>Experienced Team:</strong> Our skilled and experienced
                  team of packers and movers in Delhi knows the ins and outs of
                  the relocation process. From packing your valuables with
                  utmost care to handling the logistics efficiently, we've got
                  it all covered.
                </li>
                <li className="mt-4">
                  <strong>Comprehensive Services:</strong> Whether you are
                  moving locally within Delhi or planning an interstate
                  relocation, we offer a wide range of services to cater to your
                  specific needs. Our services include packing, loading,
                  transportation, unloading, and even unpacking, providing an
                  end-to-end solution.
                </li>
                <li className="mt-4">
                  <strong>Safety First:</strong> We prioritize the safety of
                  your belongings above everything else. Our packing materials
                  are of the highest quality, and we use specialized techniques
                  to secure fragile items. Rest assured, your possessions are in
                  safe hands.
                </li>
                <li className="mt-4">
                  <strong>Timely Delivery:</strong> We understand the importance
                  of time in the moving process. Our team works diligently to
                  ensure that your belongings reach the destination as per the
                  agreed-upon schedule, without any delays.
                </li>
                <li className="mt-4">
                  <strong>Transparent Pricing:</strong> We believe in
                  transparency, and our pricing is straightforward and
                  competitive. There are no hidden costs, and we provide a
                  detailed quote upfront, so you know exactly what to expect.
                </li>
                <li className="mt-4">
                  <strong>Customer Satisfaction:</strong> Our ultimate goal is
                  your satisfaction. We take pride in our excellent customer
                  service, and our track record speaks for itself. We have
                  earned the trust and loyalty of numerous clients through our
                  dedicated and reliable moving services.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Local Expertise:</strong> As a Delhi-based company, we
                  possess in-depth knowledge of the city's geography and traffic
                  patterns. This advantage allows us to plan the most efficient
                  routes for a smoother relocation process.
                </li>
              </ol>
            </div>
            <div className="flex flex-col justify-center items-center w-full text-center">
              <p className="w-11/12">
                Whether you are moving your home or office, locally or
                long-distance, Lee Home Packers And Movers is here to make your
                move hassle-free and efficient. Sit back, relax, and let our
                packers and movers in Delhi handle the hard work for you.
              </p>
              <p className="w-11/12 mt-4">
                Contact us today for a free quote and take the first step
                towards a stress-free relocation!
              </p>
            </div>
          </div>
          <div class="flex flex-col w-full">
                    <div className="flex w-full justify-center">
                        <h3 className="p-2 border-black border-2 m-4 w-2/4 ">Connect with Us!</h3>
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
                                    <i class="fa-solid fa-envelope" ></i>
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
                                    <p>Shop No.110, Agarwal Chamber, Commercial Complex, Sector-5, Rohini, Delhi-85</p>
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
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col w-4/5 items-center justify-center">
                            <h3 className="p-2 border-black border-2 m-4"> What makes Lee Home Packers And Movers Delhi unique?</h3>
                            <ol className="list-decimal text-left w-11/12">
                                <li className=""><strong>Trained and Professional Staff:</strong> Our team is the backbone of our success. We have a skilled and dedicated workforce that is trained to handle all aspects of the relocation process. Their friendly demeanor and professional approach make your moving journey a pleasant and hassle-free one.</li>
                                <li className="mt-4"><strong>Personalized Approach:</strong> No two moves are the same, and we understand that. Our team takes the time to understand your specific requirements and tailor our services accordingly. We believe in building relationships and providing personalized attention to every client to ensure complete satisfaction.</li>
                                <li className="mt-4"><strong>Top-notch Packing Materials:</strong> Your belongings are precious, and we treat them as such. We use premium quality packing materials to safeguard your items during transit. Our packing experts employ industry-best techniques to ensure that your belongings reach their destination in pristine condition.</li>
                                <li className="mt-4 mb-4"><strong>Customer-Centric Approach:</strong> At Lee Home Packers and Movers Delhi-NCR, customer satisfaction is at the core of everything we do. We understand that every move is unique, and our team works closely with you to tailor our services to your specific needs. Our customer support is always available to address your queries and concerns promptly, making your relocation experience hassle-free and enjoyable.</li>
                            </ol>
                        </div>
                        <div className="flex justify-center">
                            <Link className="flex justify-center mb-4 w-4/5" to="/"><img className="flex w-4/5" src="./src/assets/real_images/About2.jpg" alt=""/></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-4/5 items-center justify-center">
                    <div class="connect">
                        <h3 className="p-2 border-black border-2 m-4">Packing Materials that we use!</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      {material.map((e)=>{
                        return ( <div className="w-4/5 mb-4">
                            <div className="rounded-2xl">
                                <img className="rounded-3xl" src={e.img} alt={e.name} />
                                <div className="relative right-1/2 top-1/2">
                                    <h1>{e.name}</h1>
                                </div>
                            </div>
                          </div> )
                      })}
                    </div>
                    <div class="content3 content6 content11">
                        <div class="connect">
                            <h3>Our Mission!</h3>
                        </div>
                        <div class="why mission">
                            <p>"Whether you are moving your home or office, locally or long-distance,</p>
                            <p>Lee Home Packers And Movers is here to make your move hassle-free and efficient.</p>
                            <p> Sit back, relax, and let our packers and movers handle the hard work for you."</p>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default About;
