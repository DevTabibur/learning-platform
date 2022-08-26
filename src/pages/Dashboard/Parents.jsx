import React, { useEffect, useState } from "react";
import useParents from "../hooks/useParents";
import { Link } from "react-router-dom";
import './Dashboard.css';


const Parents = () => {
  const [loadParents] = useParents();
  // console.log(loadParents);
  const [size, setSize] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  // which page user is staying
  const [parents, setParents] = useState([]); 
  useEffect(()=>{
    const url = `http://localhost:5000/parents?page=${page}$size=${size}`;
    fetch(url)
    .then(res=> res.json())
      .then(data => {
        setParents(data)
      })
  }, [page, size])


  // for every page how mane list we want to show
  useEffect(() => {
    fetch(`http://localhost:5000/parentsCount`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  return (
    <>
      {/* <div className="page-detail mt-0 pt-0">
        <h2 className="text-xl font-bold mb-1">Parents</h2>
        <div className="text-sm breadcrumbs mb-5">
          <ul>
            <li>
              <Link to="/">
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
            <li>
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
                All Parents
              </>
            </li>
          </ul>
        </div>
      </div> */}

      <h2 className="text-xl font-bold mb-1 text-accent">
      Parents
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
              All Parents
            </>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table table-compact w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Occupation</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>SEE MORE</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((parent, index) => (
              <ShowParentList key={index} parent={parent} />
            ))}
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Occupation</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>SEE MORE</th>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="page-navigation">
        {[...Array(5).keys()].map((number, index) => (
          <button key={index} className={page === number ? 'selected': ''} onClick={()=> setPage(number)}>{number + 1}</button>
        ))}
        {/* {size} */}
        <select onChange={e => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </>
  );
};

export default Parents;

const ShowParentList = ({ parent }) => {
  const { parentId, photo, name, gender, occupation, address, phone, email } =
    parent;
  return (
    <>
      <tr>
        <td className="font-bold">#{parentId}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td>{gender}</td>
        <td>{occupation}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <th>
          <button className="btn btn-secondary">Details</button>
        </th>
      </tr>
    </>
  );
};
