import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faPersonChalkboard,
  faPeopleGroup,
  faSackDollar
} from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  return (
    <div className="md:grid grid-cols-4 gap-4">
      <div className="first-col">
        <div class="card card-side bg-base-100 border rounded-none p-5 clear-both">
          <div className=" parent-icon mr-11">
            <FontAwesomeIcon
              className="text-info text-5xl"
              icon={faBookOpenReader}
            />
          </div>
          <div class="card-body  text-center p-0">
            <h2 class="text-xl font-semibold">Students</h2>
            <p>20000</p>
          </div>
        </div>
      </div>

      <div className="second-col">
        <div class="card card-side bg-base-100 border rounded-none p-5 clear-both">
          <div className=" parent-icon2 mr-11">
            <FontAwesomeIcon
              className="text-accent text-5xl"
              icon={faPersonChalkboard}
            />
          </div>
          <div class="card-body  text-center p-0">
            <h2 class="text-xl font-semibold">Teachers</h2>
            <p>1500</p>
          </div>
        </div>
      </div>

      <div className="third-col">
      <div class="card card-side bg-base-100 border rounded-none p-5 clear-both">
          <div className=" parent-icon3 mr-11">
            <FontAwesomeIcon
              className="text-success text-5xl"
              icon={faPeopleGroup}
            />
          </div>
          <div class="card-body  text-center p-0">
            <h2 class=" font-semibold text-base">Parents</h2>
            <p>15000</p>
          </div>
        </div>
      </div>

      <div className="fourth-col">
      <div class="card card-side bg-base-100 border rounded-none p-5 clear-both">
          <div className=" parent-icon4 mr-11">
            <FontAwesomeIcon
              className="text-warning text-5xl"
              icon={faSackDollar}
            />
          </div>
          <div class="card-body  text-center p-0">
            <h2 class="text-xl font-semibold">$Earnings</h2>
            <p>$234445.04</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Admin;
