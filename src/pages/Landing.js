import styled from "styled-components";

import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";

const Landing = () => {
  return (
    <Wrapper>
      <NavBar />
      <SideBar />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default Landing;
