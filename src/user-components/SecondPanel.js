import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { currentObjectHandler } from "../features/user/userSlise";

const SecondPanel = () => {
  const { currentSubCategory } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [isDragging, setIsDragging] = useState(false);

  const handleStartDrag = () => {
    setIsDragging(true);
  };

  const handleStopDrag = () => {
    setIsDragging(false);
  };

  return (
    <Draggable onStart={handleStartDrag} onStop={handleStopDrag}>
      <Wrapper isDragging={isDragging}>
        <div className="close">
          <IoCloseCircleOutline
            onClick={() => dispatch(currentObjectHandler(""))}
          />
        </div>
        <div className="header">{currentSubCategory.name}</div>
      </Wrapper>
    </Draggable>
  );
};
const Wrapper = styled.div`
  position: absolute;
  height: 50vh;
  width: 100%;
  background: white;
  background: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  border-radius: 20px;
  bottom: 0;
  font-weight: 600;
  font-family: "Montserrat Alternates", sans-serif;
  color: var(--blue-0);
  opacity: 1;
  padding: 10px;
  overflow-y: auto;
  z-index: 10;
  cursor: grab;
  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    :hover {
      svg {
        color: var(--blue-05);
      }
    }
    svg {
      transition: 0.6s;
      cursor: pointer;
      margin: 10px;
      font-size: 2rem;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    position: absolute;
    right: 430px;
    height: 60vh;
    width: 300px;
    background: white;
    background: ${(props) => (props.isDragging ? "lightgreen" : "white")};
    opacity: ${(props) => (props.isDragging ? "0.5" : "1")};
    transition: background 0.7s, opacity 0.7s;
    border-radius: 20px;
    bottom: initial;
    /* opacity: 1; */
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default SecondPanel;
