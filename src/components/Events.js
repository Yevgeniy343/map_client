import React from "react";
import styled from "styled-components";
import Event from "./Event";

const Events = () => {
  return (
    <Wrapper>
      <h3>События в ближайшие дни в ...</h3>
      <Event />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    margin: 1rem;
    margin-top: 2rem;
  }

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

export default Events;
