import "./Messenger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RoomLogin from "./RoomLogin";

const Messenger = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-center text-3xl font-semibold font-serif text-accent">
        Join your community
      </h2>
      <RoomLogin/>
    </div>
  );
};

export default Messenger;
