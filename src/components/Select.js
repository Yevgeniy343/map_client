import React, { useState } from "react";
import styled from "styled-components";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

const Select = ({ city }) => {
  const [arrow, setArrow] = useState(false);

  const arrowHandler = () => {
    setArrow(!arrow);
  };
  return (
    <Wrapper>
      <div className={arrow ? "select select_active" : "select"}>
        <p className="city">{city}</p>
        <div className="icon" onClick={arrowHandler}>
          {arrow === false && <VscChevronDown className="svg_false" />}
          {arrow === true && <VscChevronUp className="svg_true" />}
        </div>
      </div>
      {arrow === true && (
        <div className="menu">
          <p className="item">Омск</p>
          <p className="item">Москва</p>
          <p className="item">Краснодар</p>
          <p className="item">Краснодар</p>
          <p className="item">Казань</p>
          <p className="item">Астрахань</p>
          <p className="item">Челябинск</p>
          <p className="item">Уфа</p>
          <p className="item">Тверь</p>
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    border: 2px solid var(--purple-1);
    width: 240px;
    height: 44px;
    border-radius: 5px;
    cursor: pointer;
    transition: 1s;

    :hover {
      background-color: var(--purple-2);
    }
  }
  .select_active {
    background-color: var(--purple-1);
  }
  .city {
    margin: 0;
    letter-spacing: 0.1rem;
  }

  .icon {
  }
  svg {
    font-size: 1.7rem;
    margin-top: 0.4rem;
  }
  .svg_false {
    color: var(--purple-1);
  }
  .svg_true {
    color: white;
  }
  .menu {
    /* margin-right: 0.5rem; */
    /* padding-right: 0.5rem; */
    position: absolute;
    border-radius: 5px;
    border-left: 2px solid var(--purple-1);
    border-right: 2px solid var(--purple-1);
    border-bottom: 2px solid var(--purple-1);
    width: 240px;
    max-height: 200px;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 5px var(--purple-1); */

      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--purple-1);
      border-radius: 10px;
    }
    p {
      margin: 0;
    }
    .item {
      cursor: pointer;
      margin-top: 0.4rem;
      margin-bottom: 0.4rem;
      padding-left: 1rem;
      transition: 1s;
      margin-left: 0.3rem;
      :hover {
        background-color: var(--purple-2);
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
export default Select;
