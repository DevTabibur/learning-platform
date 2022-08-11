import React from 'react'
import useStudents from '../hooks/useStudents'

const Students = () => {
  const [loadStudents] = useStudents();
  // console.log(loadStudents)
  return (
    <>
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
            {loadStudents.map((student, index) => (
              <ShowStudentsList key={index} student={student} />
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
  )
}

export default Students


const ShowStudentsList = ({ student }) => {
  const { parentId, photo, name, gender, occupation, address, phone, email } =
    student;
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