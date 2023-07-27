import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return (
    <Wrapper>
      <button onClick={onClick}>{text}</button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  button {
    font-family: "Philosopher", sans-serif;
    color: var(--gray-2);
    padding: 0.4rem 0.7rem;
    background-color: var(--blue-2);
    transition: 0.8s;
    border-radius: 300px;
    color: white;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    :hover {
      background-color: var(--blue-0);
      color: white;
    }
    :active {
      background-color: var(--clr-grey-9);
    }
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
export default Button;
