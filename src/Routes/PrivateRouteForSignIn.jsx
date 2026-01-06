import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Spinner from "../Components/Spinner";
import { Navigate, useLocation } from "react-router";

const PrivateRouteForSignIn = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) return <Spinner></Spinner>;

  if (user) {
    return <Navigate to="/home" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRouteForSignIn;
