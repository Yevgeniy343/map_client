import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Checkbox = ({ label, name, isActive, onCheckboxChange }) => {
  console.log(isActive);
  const checkboxHandler = () => {
    onCheckboxChange(isActive ? null : name);
  };

  return (
    <Wrapper onClick={checkboxHandler}>
      <div className={isActive ? "checkbox active1" : "checkbox"}>
        {isActive && <AiOutlineCheck />}
      </div>
      <p>{label}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .checkbox {
    margin: 0.5rem 0;
    width: 20px;
    height: 20px;
    border: 2px solid var(--blue-0);
    cursor: pointer;
    transition: 0.7s;
    /* background-color: var(--brown-1); */
    svg {
      display: none;
    }
    :hover {
      background: var(--main-3);
    }
  }
  .active1 {
    /* background-color: var(--brown-1); */
    svg {
      display: block;
      color: green;
      font-size: 2rem;
      position: relative;
      bottom: 11px;
      right: 4px;
    }
  }
  p {
    letter-spacing: 0.08rem;
    margin: 0;
    margin-left: 0.5rem;
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
export default Checkbox;
