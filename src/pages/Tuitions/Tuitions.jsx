import React, { useState } from "react";
import TuitionPic from "../../assets/images/tuition classes.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns';
import AvailableTuitions from "./AvailableTuitions";

const Tuitions = () => {
  // for only date , we use new Date() =>  date as as a  default value
  const [date, setDate] = useState(new Date())


  return (
    <>
      <div className="hero bg-accent p-0  m-0 rounded shadow relative">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              src={TuitionPic}
              className=" rounded-lg shadow-2xl"
              alt="TuitionPIc"
            />
          </div>
          <div className="text-primary">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
        </div>
      </div>

      <AvailableTuitions date={date}/>
    </>
  );
};

export default Tuitions;
