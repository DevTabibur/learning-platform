import React, { useState } from "react";

const useTeacher = () => {
  const [teacher, setTeacher] = useState(false);

  return [teacher];
};

export default useTeacher;
