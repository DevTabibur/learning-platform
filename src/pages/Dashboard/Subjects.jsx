import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSubjects from "../hooks/useSubjects";
import useAdmin from "../hooks/useAdmin";
import useTeacher from "../hooks/useTeacher";

const Subjects = () => {
  const [subjects] = useSubjects();
  const [teacher] = useTeacher();
  console.log("teacher", teacher);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    const code = data.code;
    // db send to the server
    const url = `http://localhost:5000/subjects`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Successfully adding subjects");
        e.target.reset();
      });
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-1 text-accent">
        Subjects & Routines
      </h2>
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li className="font-bold text-accent font-sans">
            <Link to="/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <li className="font-bold text-accent font-sans">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Subjects & Routines
            </>
          </li>
        </ul>
      </div>

      <div className="md:flex flex-row gap-4">
        {teacher ? (<>
          <div className="basis-1/3">
            <div className="card w-full bg-base-100 shadow text-center justify-center">
              <div className="card-body">
                <h2 className="card-title mb-3">Add New Subject</h2>

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control  w-full max-w-xs">
                    <label className="label">
                      <span className="label-text font-mono">
                        Subject Name*
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Subject Name"
                      className="input input-bordered w-full max-w-xs"
                      {...register("subjectName", {
                        required: {
                          value: true,
                          message: "Subject Name is Required",
                        },
                        pattern: {
                          value: /^[A-Z]+$/i,
                          message: "Alphabetical Characters Only",
                        },
                      })}
                    />
                    <label className="label my-2 py-0">
                      {errors.subjectName?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.subjectName.message}
                        </span>
                      )}
                      {errors.subjectName?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.subjectName.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="form-control  w-full max-w-xs">
                    <label className="label">
                      <span className="label-text font-mono">
                        Subject Routine*
                      </span>
                    </label>

                    <select
                      defaultValue={"DEFAULT"}
                      className="select select-bordered"
                      {...register("subjectRoutine", {
                        required: {
                          value: true,
                          message: "Class is Required",
                        },
                      })}
                    >
                      <option value="DEFAULT" disabled>
                        Choose Time
                      </option>
                      <option value="8.00 - 9.00 am">8.00 - 9.00 am</option>
                      <option value="9.00 - 10.00 am">9.00 - 10.00 am</option>
                      <option value="10.00 - 11.00 am">10.00 - 11.00 am</option>
                      <option value="11.00 - 12.00 pm">11.00 - 12.00 pm</option>
                      <option value="12.00 - 1.00 pm">12.00 - 1.00 pm</option>
                    </select>
                    <label className="label my-2 py-0">
                      {errors.subjectRoutine?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.subjectRoutine.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="form-control  w-full max-w-xs">
                    <label className="label">
                      <span className="label-text font-mono">
                        Subject Type*
                      </span>
                    </label>
                    <select
                      defaultValue={"DEFAULT"}
                      className="select select-bordered"
                      {...register("subjectType", {
                        required: {
                          value: true,
                          message: "Subject Type is Required",
                        },
                      })}
                    >
                      <option value="DEFAULT" disabled>
                        Choose Subject Type
                      </option>
                      <option value="Bangla">Bangla</option>
                      <option value="English">English</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                    </select>
                    <label className="label my-2 py-0">
                      {errors.subjectType?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.subjectType.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="form-control  w-full max-w-xs">
                    <label className="label">
                      <span className="label-text font-mono">
                        Select Class*
                      </span>
                    </label>
                    <select
                      defaultValue={"DEFAULT"}
                      className="select select-bordered"
                      {...register("selectClass", {
                        required: {
                          value: true,
                          message: "Class is Required",
                        },
                      })}
                    >
                      <option value="DEFAULT" disabled>
                        Choose Class
                      </option>
                      <option value="X">X</option>
                      <option value="XI">XI</option>
                      <option value="XII">XII</option>
                      <option value="XIII">XIII</option>
                      <option value="XIV">XIV</option>
                    </select>
                    <label className="label my-2 py-0">
                      {errors.selectClass?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.selectClass.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="form-control  w-full max-w-xs">
                    <label className="label">
                      <span className="label-text font-mono">Select Code*</span>
                    </label>
                    <select
                      defaultValue={"DEFAULT"}
                      className="select select-bordered"
                      {...register("code", {
                        required: {
                          value: true,
                          message: "Code is Required",
                        },
                      })}
                    >
                      <option value="DEFAULT" disabled>
                        Select Code
                      </option>
                      <option value="120">120</option>
                      <option value="131">131</option>
                      <option value="124">124</option>
                      <option value="125">125</option>
                      <option value="126">126</option>
                    </select>
                    <label className="label my-2 py-0">
                      {errors.code?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.code.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control  w-full max-w-xs">
                    <input
                      type="submit"
                      value="ADD SUBJECTS"
                      className="btn btn-secondary mt-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="basis-2/3">
          <div className="card w-full bg-base-100 shadow">
            <div className="card-body">
              <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                  {/* <!-- head --> */}
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Class</th>
                      <th>Subjects</th>
                      <th>Type</th>
                      <th>Routine</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((sub, idx) => (
                      <ShowSubjectList key={idx} sub={sub} />
                    ))}
                  </tbody>
                  {/* <!-- foot --> */}
                  <tfoot>
                    <tr>
                      <th>Code</th>
                      <th>Class</th>
                      <th>Subjects</th>
                      <th>Type</th>
                      <th>Routine</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        </>
        ) : (
          <>
          <div className="basis-1/4"></div>
          <div className="basis-2/4">
          <div className="card w-full bg-base-100 shadow">
            <div className="card-body">
              <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                  {/* <!-- head --> */}
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Class</th>
                      <th>Subjects</th>
                      <th>Type</th>
                      <th>Routine</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((sub, idx) => (
                      <ShowSubjectList key={idx} sub={sub} />
                    ))}
                  </tbody>
                  {/* <!-- foot --> */}
                  <tfoot>
                    <tr>
                      <th>Code</th>
                      <th>Class</th>
                      <th>Subjects</th>
                      <th>Type</th>
                      <th>Routine</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          </div>
          <div className="basis-1/4"></div>

          </>
        )}

        
      </div>
    </>
  );
};

export default Subjects;

const ShowSubjectList = ({ sub }) => {
  const { code, selectClass, subjectName, subjectType, subjectRoutine } = sub;
  return (
    <>
      <tr>
        <td className="font-bold">{code}</td>
        <td>{selectClass}</td>
        <td>{subjectName}</td>
        <td>{subjectType}</td>
        <td>{subjectRoutine}</td>
      </tr>
    </>
  );
};
