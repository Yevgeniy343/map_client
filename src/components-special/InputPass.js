import React from "react";
import styled from "styled-components";

const InputPass = ({ type, placeholder, value, name, onChange }) => {
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
  margin: auto;
  input {
    border: none;
    background: #f4f4f4;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    font-size: 100%;
    ::placeholder {
      color: var(--gray-1);
    }
    :focus-visible {
      outline: none;
    }
    :focus {
      color: var(--gray-2);
    }
    :active {
      color: var(--gray-2);
    }
    :hover {
      ::placeholder {
        transition: 0.5s;
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
export default InputPass;
