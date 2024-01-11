import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { currentObjectHandler } from "../features/user/userSlise";
import _ from "lodash";
import Button from "../components-special/Button";
import { FaStar } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

const { REACT_APP_URL_API } = process.env;

const SecondPanel = () => {
  const { currentSubCategory, objects, currentObject } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const thisObject = _.find(objects, (object) => object._id === currentObject);
  console.log(thisObject);

  const [isDragging, setIsDragging] = useState(false);

  const handleStartDrag = () => {
    setIsDragging(true);
  };

  const handleStopDrag = () => {
    setIsDragging(false);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : thisObject.image.length - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < thisObject.image.length - 1 ? prevIndex + 1 : 0
    );
  };

  const renderStars = (rating) => {
    const stars = new Array(5).fill(null);

    return stars.map((_, index) => {
      return (
        <FaStar key={index} className={index < rating ? "gold" : "gray"} />
      );
    });
  };

  return (
    <Draggable
      onStart={handleStartDrag}
      onStop={handleStopDrag}
      // handle=".close"
    >
      <Wrapper isDragging={isDragging}>
        <div className="close">
          <IoCloseCircleOutline
            onClick={() => dispatch(currentObjectHandler(""))}
          />
        </div>
        <div className="header">{currentSubCategory.name}</div>
        <div className="content">
          <div className="picture">
            <img
              // src={`${REACT_APP_URL_API}/${thisObject?.image[currentIndex]}`}
              src={`${REACT_APP_URL_API}/${thisObject?.image[currentIndex]}`}
              alt="Object Display"
              // onError={(e) => {
              //   e.target.src = "fallback-image-url";
              // }}
            />
            <div className="left">
              <Button text="<" onClick={handleLeftClick} />
            </div>
            <div className="right">
              <Button text=">" onClick={handleRightClick} />
            </div>
          </div>
          <div className="name">{thisObject.name}</div>
          <div className="address">{thisObject.address}</div>
          <div className="reviews">
            <p>Состояние площадки</p>
            <div className="r">
              <p>Безопасность</p>
              {renderStars(thisObject?.reviews.r1)}
            </div>
            <div className="r">
              <p>Современность</p>
              {renderStars(thisObject?.reviews.r2)}
            </div>
            <div className="r">
              <p>Состояние</p>
              {renderStars(thisObject?.reviews.r3)}
            </div>
            <div className="r">
              <p>Чистота</p>
              {renderStars(thisObject?.reviews.r4)}
            </div>
          </div>
          <div className="info">
            <p>Особенности</p>
            {thisObject?.info1.map((info) => (
              <div className="inf">
                <FcOk />
                <p>{info}</p>
              </div>
            ))}
            {thisObject?.info2.map((info) => (
              <div className="inf">
                <FcCancel />
                <p>{info}</p>
              </div>
            ))}
          </div>
        </div>
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
  .content {
    .picture {
      width: 100%;
      height: 200px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .left {
    position: absolute;
    bottom: 5px;
    left: 5px;
  }
  .right {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .name {
    display: flex;
    justify-content: center;
    padding: 10px;
    font-size: 25px;
  }
  .address {
    text-align: center;
    font-weight: 400;
    color: gray;
    opacity: 0.8;
  }
  .reviews {
    margin: 10px;
    font-size: 17px;

    .gold {
      color: orange;
      font-size: 15px;
      margin: 0 3px;
    }
    .gray {
      color: gray;
      font-size: 17px;
      margin: 0 3px;
    }
    .r {
      margin: 10px;
      font-size: 15px;
      display: flex;
      align-items: center;
      p {
        margin-right: 5px;
      }
    }
  }
  .info {
    margin: 10px;
    font-size: 15px;
    margin-top: 20px;

    .inf {
      margin: 10px;
      font-size: 15px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
        font-size: 20px;
      }
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    position: absolute;
    right: 430px;
    height: 80vh;
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
