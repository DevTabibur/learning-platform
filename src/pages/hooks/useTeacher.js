import React, { useState } from "react";

const useTeacher = () => {
  const [teacher, setTeacher] = useState(true);

  return [teacher];
};

export default useTeacher;
