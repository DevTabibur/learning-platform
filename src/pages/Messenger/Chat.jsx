import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";

let socket;

const Chat = () => {
  const { search } = useLocation();
  const { name, room } = queryString.parse(search);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000`;
    socket = io.connect(url);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        console.log(error);
      }
    });

    socket.on("message", (message) => {
      setMessages((existingMsgs) => [...existingMsgs, message]);
    });
  }, []);

  const sendMessage = (e) => {
    if (e.key === "Enter" && e.target.value) {
      socket.emit("message", e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="chat">
      <div className="card lg:w-full bg-base-100 shadow-xl mt-8 mx-auto ">
        <div className="chat-head">
          <div className="room">{room}</div>
          <Link to="/">X</Link>
        </div>
        <div className="card-body text-center">
          {messages.map((message, idx) => (
            <div key={idx} className="message">
              {message.user} : {message.text}
            </div>
          ))}
        </div>
        <div className="form-control p-4">
          <input
            className="input input-bordered"
            placeholder="Aa..."
            onKeyDown={sendMessage}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Chat;
