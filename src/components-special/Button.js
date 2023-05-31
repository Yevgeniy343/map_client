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
    letter-spacing: 0.1rem;
    /* width: 77px; */
    width: max-content;
    height: 27px;
    border-color: var(--lilac-1);
    color: var(--gray-2);
    padding: 0.3rem 0.6rem;
    background-color: transparent;
    transition: 0.5s;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background-color: var(--lilac-1);
    }
    :active {
      background-color: var(--lilac-2);
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
