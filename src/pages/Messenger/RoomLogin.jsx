import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const RoomModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const onSubmit = async (data, e) => {
    setName(data.name);
    setRoom(data.room);
  };

  useEffect(() => {
    if (name && room) {
      navigate(`/dashboard/chat?name=${name}&room=${room}`);
    }
  }, [name, room]);

  return (
    <>
      <div className="card lg:w-96 bg-base-100 shadow-xl mt-8 mx-auto ">
        <div className="card-body ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-1 gap-4 py-4">
              {/* name */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered font-mono"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9 ]*$/,
                      message: "Name should be unique",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              {/* room */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter Room Name"
                  className="input input-bordered font-mono"
                  {...register("room", {
                    required: {
                      value: true,
                      message: "Room is Required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9 ]*$/,
                      message: "Room is not valid",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.room?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.room.message}
                    </span>
                  )}
                  {errors.room?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.room.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input
                  type="submit"
                  className="btn btn-accent"
                  value="JOIN"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RoomModal;
