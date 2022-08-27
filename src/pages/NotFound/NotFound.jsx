import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NotFoundPic from "../../assets/images/404.webp";

const NotFound = () => {
    let navigate = useNavigate();
  return (
    <div className="container mx-auto px-4">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow"
            alt="NotFound Pic"
            src={NotFoundPic}
          />
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Sorry! 404 page. Out of service.
            </h1>
            <div class="flex w-full justify-center items-end">
              
              <button onClick={()=>navigate(-1)} class="inline-flex text-white bg-accent border-0 py-2 px-6  rounded text-lg">
                Go Back
              </button>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
