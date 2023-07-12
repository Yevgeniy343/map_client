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
    color: var(--gray-2);
    padding: 0.3rem 0.6rem;
    background-color: transparent;
    transition: 0.5s;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background-color: var(--clr-grey-8);
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
