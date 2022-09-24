import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAdmin from "../hooks/useAdmin";
import useTeacher from "../hooks/useTeacher";
import useLoadLibrary from "../hooks/useLoadLibrary";
import Swal from "sweetalert2";
import ModalOfBookdetails from "./ModalOfBookdetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loader from "../../shared/Loader/Loader";

const Library = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  const [libraryBooks] = useLoadLibrary();

  const [bookDetailsModal, setBookDetailsModal] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    // db send to the server
    const url = `http://localhost:5000/library`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "DONE!",
          text: "Book Added in Library",
          icon: "success",
          confirmButtonText: "DONE",
        });
        e.target.reset();
      });
  };

  // for date
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = dd + "/" + mm + "/" + yyyy;

  if (loading || adminLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-1 text-accent">Library Book List</h2>
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
              Library
            </>
          </li>
        </ul>
      </div>

      {admin ? (
        <div className="md:flex flex-row gap-4">
          <>
            <div className="basis-1/4">
              <div className="card w-full bg-base-100 shadow text-center justify-center">
                <div className="card-body">
                  <h2 className="text-xl font-serif text-accent">
                    Welcome to E-Learning Library
                  </h2>

                    <>
                      <h2 className="text-xl font-serif text-accent">
                        Add new books in library
                      </h2>
                      <form className="" onSubmit={handleSubmit(onSubmit)}>
                        {/* ID */}
                        <div className="form-control  ">
                          <label className="label">
                            <span className="label-text font-mono">ID</span>
                          </label>
                          <input
                            type="number"
                            placeholder="ID No"
                            className="input input-bordered  my-1"
                            {...register("idNo", {
                              required: {
                                value: true,
                                message: "Id is required",
                              },
                            })}
                          />
                          <label className="label my-2 py-0">
                            {errors.idNo?.type === "required" && (
                              <span className="label-text-alt text-red-500">
                                {errors.idNo.message}
                              </span>
                            )}
                          </label>
                        </div>

                        {/* book name */}
                        <div className="form-control  w-full max-w-xs">
                          <label className="label">
                            <span className="label-text font-mono">
                              Book Name*
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Book Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("bookName", {
                              required: {
                                value: true,
                                message: "Book Name is Required",
                              },
                              pattern: {
                                value: /^[a-zA-Z0-9 ]*$/,
                                message: "Alphabetical Characters Only",
                              },
                            })}
                          />
                          <label className="label my-2 py-0">
                            {errors.bookName?.type === "required" && (
                              <span className="label-text-alt text-red-500">
                                {errors.bookName.message}
                              </span>
                            )}
                            {errors.bookName?.type === "pattern" && (
                              <span className="label-text-alt text-red-500">
                                {errors.bookName.message}
                              </span>
                            )}
                          </label>
                        </div>

                        {/* writer name */}
                        <div className="form-control  w-full max-w-xs">
                          <label className="label">
                            <span className="label-text font-mono">
                              Writer Name*
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            {...register("writerName", {
                              required: {
                                value: true,
                                message: "Writer Name is Required",
                              },
                              pattern: {
                                value: /^[a-zA-Z0-9 ]*$/,
                                message: "Alphabetical Characters Only",
                              },
                            })}
                          />
                          <label className="label my-2 py-0">
                            {errors.writerName?.type === "required" && (
                              <span className="label-text-alt text-red-500">
                                {errors.writerName.message}
                              </span>
                            )}
                            {errors.writerName?.type === "pattern" && (
                              <span className="label-text-alt text-red-500">
                                {errors.writerName.message}
                              </span>
                            )}
                          </label>
                        </div>

                        {/* upload date */}
                        <div className="form-control  ">
                          <label className="label">
                            <span className="label-text font-mono">Upload</span>
                          </label>
                          <input
                            type="text"
                            value={formattedToday}
                            readOnly
                            placeholder="Type here"
                            className="input input-bordered  my-1"
                            {...register("uploadDate")}
                          />
                        </div>

                        <div className="form-control  w-full max-w-xs">
                          <input
                            type="submit"
                            value="ADD BOOKS"
                            className="btn btn-secondary mt-3"
                          />
                        </div>
                      </form>
                    </>
                </div>
              </div>
            </div>
            <div className="basis-3/4">
              <div className="card w-full bg-base-100 shadow">
                <div className="card-body">
                  <div className="overflow-x-auto w-full">
                    <table className="table table-compact w-full">
                      {/* <!-- head --> */}
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Book Name</th>
                          <th>Writer</th>
                          <th>Published</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {libraryBooks.map((book, idx) => (
                          <ShowLibraryList
                            key={idx}
                            book={book}
                            setBookDetailsModal={setBookDetailsModal}
                          />
                        ))}
                      </tbody>

                      {/* <!-- foot --> */}
                      <tfoot>
                        <tr>
                          <th>ID</th>
                          <th>Book Name</th>
                          <th>Writer</th>
                          <th>Published</th>
                          <th>Details</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      ) : (
        <div className="grid md:grid-cols-1  gap-4">
              <div className="card w-full bg-base-100 shadow">
                <div className="card-body">
                  <div className="overflow-x-auto w-full">
                    <table className="table table-compact w-full">
                      {/* <!-- head --> */}
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Book Name</th>
                          <th>Writer</th>
                          <th>Published</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {libraryBooks.map((book, idx) => (
                          <ShowLibraryList
                            key={idx}
                            book={book}
                            setBookDetailsModal={setBookDetailsModal}
                          />
                        ))}
                      </tbody>

                      {/* <!-- foot --> */}
                      <tfoot>
                        <tr>
                          <th>ID</th>
                          <th>Book Name</th>
                          <th>Writer</th>
                          <th>Published</th>
                          <th>Details</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
        </div>
      )}
      {bookDetailsModal && (
        <ModalOfBookdetails
          key={1}
          bookDetailsModal={bookDetailsModal}
          setBookDetailsModal={setBookDetailsModal}
        />
      )}
    </>
  );
};

export default Library;

const ShowLibraryList = ({ book, setBookDetailsModal, bookDetailsModal }) => {
  const { _id, idNo, bookName, writerName, uploadDate } = book;
  return (
    <>
      <tr>
        <td className="font-bold">#{idNo}</td>
        <td>{bookName}</td>
        <td>{writerName}</td>
        <td>{uploadDate}</td>
        <td>
          <button
            onClick={() => setBookDetailsModal(book)}
            className="btn btn-sm btn-accent"
          >
            <label htmlFor="books-details">Details</label>
          </button>
        </td>
      </tr>
    </>
  );
};
