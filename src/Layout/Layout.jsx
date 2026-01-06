import React, { useContext } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import Spinner from "../Components/Spinner";

const Layout = () => {
  const navigation = useNavigation();
  const { loading } = useContext(AuthContext);
  console.log(navigation);

  if (navigation.state === "loading" || loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
