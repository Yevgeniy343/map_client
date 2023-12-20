import React from "react";
import styled from "styled-components";
import MapComponent from "./user-components/MapComponent";

const LandingPage = () => {
  return (
    <Wrapper>
      <MapComponent />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default LandingPage;
