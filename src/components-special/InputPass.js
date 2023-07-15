import React, { useState } from "react";
import styled from "styled-components";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const InputPass = ({ type, placeholder, value, name, onChange }) => {
  const [showPass, setShowPass] = useState(true);

  const showPassHandler = () => {
    setShowPass(!showPass);
  };

  return (
    <Wrapper>
      <input
        type={showPass ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />

      <div className="icon" onClick={showPassHandler}>
        {showPass ? <BsEye /> : <BsEyeSlash />}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* margin: auto; */
  display: flex;
  align-items: center;
  width: 100%;
  input {
    padding: 1rem;
    border: none;
    background: #f4f4f4;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    font-size: 100%;
    margin: 0;
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
  .icon {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f4f4;
    /* padding: 1rem; */

    svg {
      font-size: 1.5rem;
      cursor: pointer;
      transition: var(--transition2);
      :hover {
        color: var(--clr-grey-3);
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
