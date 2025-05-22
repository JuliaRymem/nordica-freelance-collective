import React, { useContext } from "react";
import { authContext } from "../../context/authContext";

const useAuth = () => {
  // en hook för smidigt användning av authContext
  return useContext(authContext);
};

export default useAuth;
