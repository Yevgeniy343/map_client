import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logOutUser } from "../features/user/userSlise";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Events from "../components/Events";

const PersonamArea = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <Events />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default PersonamArea;
