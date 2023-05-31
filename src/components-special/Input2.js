import React from "react";
import styled from "styled-components";

const Input2 = ({ type, placeholder, value, name, onChange }) => {
  return (
    <Wrapper>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  :hover {
    svg {
      transition: 0.5s;
      color: var(--purple-4);
    }
  }
  input {
    /* width: 113px; */
    width: 250px;
    height: 24px;
    border: none;
    border-bottom: 1px solid var(--purple-3);
    font-size: 20px;
    caret-color: var(--purple-1);
    ::placeholder {
      color: var(--gray-1);
    }
    :focus-visible {
      outline: none;
    }
    :focus {
      color: var(--purple-3);
      color: var(--gray-2);
    }
    :active {
      color: var(--gray-2);
    }
    :hover {
      ::placeholder {
        transition: 0.5s;
        color: var(--purple-3);
      }
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
export default Input2;
