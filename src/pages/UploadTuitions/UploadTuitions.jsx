import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useTuitions from "../hooks/useTuitions";

const UploadTuitions = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    console.log(data);
    const url = `http://localhost:5000/api/v1/tuition`;
    await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data posted", data);
        if (data.code === 400 || data.code === 401 || data.code === 403) {
          Swal.fire({
            title: data?.status,
            text: data?.error,
            icon: "error",
          });
        } else {
          toast.success(data.message);
          reset();
        }
      });
  };

  

  return (
    <>
      <h2 className="text-2xl  font-bold text-center text-accent">
        Handle Tuition Services
      </h2>
      <p className="text-center  my-4">Currently you have tuition services</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* service name */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Tuition Subjects"
                  className="input input-bordered "
                  {...register("tuitionSubject", {
                    required: {
                      value: true,
                      message: "Tuition Subject is Required",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Provide a valid Subject Name",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.tuitionSubject?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.tuitionSubject.message}
                    </span>
                  )}
                  {errors.tuitionSubject?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.tuitionSubject.message}
                    </span>
                  )}
                </label>
              </div>

              {/* time slots */}
              <div className="form-control my-4">
                <select {...register("slots")} className="select">
                  <option disabled selected>
                    Select subjects time slots
                  </option>
                  <option value="09:30 - 10:00 AM">09:30 - 10:00 AM</option>
                  <option value="10:00 - 11:30 AM">10:00 - 11:30 AM</option>
                  <option value="11:30 - 12:00 AM">11:30 - 12:00 AM</option>
                  <option value="12:00 - 12:30 AM">12:00 - 12:30 AM</option>
                  <option value="12:30 - 01:00 AM">12:30 - 01:00 AM</option>
                </select>
              </div>

              <div className="form-control">
                <input
                  type="submit"
                  value="DONE"
                  className="btn btn-glass hover:btn-accent flex"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadTuitions;
