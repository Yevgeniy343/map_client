import { useDispatch } from "react-redux";
import { logOutUser } from "../features/user/userSlise";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import Hero from "../components/Hero";
// import FeaturedProducts from "../components/FeaturedProfucts";

const PersonamArea = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default PersonamArea;
