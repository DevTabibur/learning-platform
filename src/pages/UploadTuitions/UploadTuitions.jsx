import { useForm } from "react-hook-form";
import useTuitions from "../hooks/useTuitions";

const UploadTuitions = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    console.log(data);
  };

  //   const [tuitions] = useTuitions();
  //   console.log("tuitions", tuitions);
  return (
    <>
      <h2 className="text-2xl font-sans font-bold text-center text-accent">
        Handle Tuition Services
      </h2>
      <p className="text-center font-serif my-4">
        Currently you have tuition services
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* service name */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Tuition Subjects"
                  className="input input-bordered font-mono"
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
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.tuitionSubject.message}
                    </span>
                  )}
                  {errors.tuitionSubject?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.tuitionSubject.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input type="submit" value="DONE" className="btn btn-glass hover:btn-accent flex"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadTuitions;
