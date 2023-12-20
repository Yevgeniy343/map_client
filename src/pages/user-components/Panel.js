import React from "react";
import styled from "styled-components";

const Panel = () => {
  return (
    <Wrapper>
      <div className="header">
        <p>Мой район</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  height: 50vh;
  width: 100%;
  background: white;
  border-radius: 20px;
  bottom: 0;
  font-weight: 600;
  font-family: "Montserrat Alternates", sans-serif;
  color: var(--blue-0);
  opacity: 0.8;
  .header {
    display: flex;
    margin: 20px;
    justify-content: center;
    p {
      font-size: 25px;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    position: absolute;
    right: 20px;
    height: 80vh;
    width: 400px;
    background: white;
    right: 20px;
    border-radius: 20px;
    bottom: initial;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Panel;
