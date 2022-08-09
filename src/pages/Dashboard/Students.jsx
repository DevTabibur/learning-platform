import React from 'react'
import useStudents from '../hooks/useStudents'

const Students = () => {
  const [loadStudents] = useStudents();
  console.log(loadStudents)
  return (
    <div>
      {loadStudents.map((student, index) =>( <li>{student.name}</li>))}
    </div>
  )
}

export default Students