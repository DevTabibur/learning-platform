import React from "react";
import useParents from "../hooks/useParents";

const Parents = () => {
  const [loadParents] = useParents();
  console.log(loadParents);
  return (
    <>
      <div class="overflow-x-auto w-full">
        <table class="table table-compact w-full">
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
            {loadParents.map((parent, index) => (
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
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{name}</div>
              <div class="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td>{gender}</td>
        <td>{occupation}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <th>
          <button class="btn btn-secondary">Details</button>
        </th>
      </tr>
    </>
  );
};
