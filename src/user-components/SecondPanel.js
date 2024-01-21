import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import { currentObjectHandler, sendMessage } from "../features/user/userSlise";
import _ from "lodash";
import Button from "../components-special/Button";
import { FaStar } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import Input2 from "../components-special/Input2";
import toast from "react-hot-toast";

const { REACT_APP_URL_API } = process.env;

const initialState = {
  name: "",
  message: "",
};

const SecondPanel = () => {
  const { currentSubCategory, objects, currentObject, messages } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const thisObject = _.find(objects, (object) => object._id === currentObject);
  // console.log(thisObject);

  let servicesArray;
  if ("services" in thisObject) {
    servicesArray = _.split(thisObject.services, ";");
  } else {
    servicesArray = [];
  }
  const programsArray = _.split(thisObject.programs, ";");
  const breedsArray = _.split(thisObject.breeds, ";");
  const shopsArray = _.split(thisObject.shops, ";");
  const coffeeArray = _.split(thisObject.coffee, ";");
  const organisationsArray = _.split(thisObject.organisations, ";");
  const whereArray = _.split(thisObject.where, ";");
  const whatArray = _.split(thisObject.what, ";");
  // console.log(servicesArray);

  const thisMessages = _.filter(messages, { objectId: thisObject?._id });
  const handleStartDrag = () => {
    setIsDragging(true);
  };

  const handleStopDrag = () => {
    setIsDragging(false);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : thisObject?.image.length - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < thisObject?.image.length - 1 ? prevIndex + 1 : 0
    );
  };

  const renderStars = (rating) => {
    const stars = new Array(5).fill(null);

    return stars.map((_, index) => {
      return (
        <FaStar
          key={Math.random()}
          className={index < rating ? "gold" : "gray"}
        />
      );
    });
  };

  const sendMessageHandler = () => {
    const { name, message } = values;

    if (!name || !message) {
      toast.error("Введите все значения");
      return;
    }
    dispatch(
      sendMessage({ name: name, message: message, objectId: thisObject._id })
    );
    setValues(initialState);
  };

  return (
    <Draggable onStart={handleStartDrag} onStop={handleStopDrag}>
      <Wrapper isDragging={isDragging}>
        <div className="close">
          <IoCloseCircleOutline
            onClick={() => dispatch(currentObjectHandler(""))}
          />
        </div>
        <div className="content">
          <div className="picture">
            <img
              src={`${REACT_APP_URL_API}/${thisObject?.image[currentIndex]}`}
              alt="Object Display"
            />
            <div className="left">
              <Button text="<" onClick={handleLeftClick} />
            </div>
            <div className="right">
              <Button text=">" onClick={handleRightClick} />
            </div>
          </div>
          <div className="name">{thisObject?.name}</div>
          <div className="address">{thisObject?.address}</div>
          <div className="reviews">
            <p>Состояние площадки</p>
            {thisObject.reviews.r1 && (
              <div className="r">
                <p>Безопасность</p>
                {renderStars(thisObject?.reviews.r1)}
              </div>
            )}
            {thisObject.reviews.r2 && (
              <div className="r">
                <p>Современность</p>
                {renderStars(thisObject?.reviews.r2)}
              </div>
            )}
            {thisObject.reviews.r3 && (
              <div className="r">
                <p>Состояние</p>
                {renderStars(thisObject?.reviews.r3)}
              </div>
            )}
            {thisObject.reviews.r4 && (
              <div className="r">
                <p>Чистота</p>
                {renderStars(thisObject?.reviews.r4)}
              </div>
            )}
            {thisObject.reviews.r5 && (
              <div className="r">
                <p>Озелененность</p>
                {renderStars(thisObject?.reviews.r5)}
              </div>
            )}
            {thisObject.reviews.r6 && (
              <div className="r">
                <p>Расположение</p>
                {renderStars(thisObject?.reviews.r6)}
              </div>
            )}
          </div>
          <div className="info">
            <p>Особенности</p>
            {thisObject?.info1.map((info) => (
              <div className="inf" key={Math.random()}>
                <FcOk />
                <p>{info}</p>
              </div>
            ))}
            {thisObject?.info2.map((info) => (
              <div className="inf" key={Math.random()}>
                <FcCancel />
                <p>{info}</p>
              </div>
            ))}
          </div>
          {thisObject.services && (
            <div className="info">
              <p>Услуги</p>
              {servicesArray?.map((item) => (
                <div className="inf" key={Math.random()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {thisObject.breeds && (
            <div className="info">
              <p>Породы</p>
              {breedsArray?.map((item) => (
                <div className="inf" key={Math.random()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {thisObject.programs && (
            <div className="info">
              <p>Программы</p>
              {programsArray?.map((item) => (
                <div className="inf" key={Math.random()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {thisObject.shops && (
            <div className="info">
              <p>Магазины</p>
              {shopsArray?.map((item) => (
                <div className="inf" key={Math.random()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {thisObject.coffee && (
            <div className="info">
              <p>Кафе</p>
              {coffeeArray?.map((item) => (
                <div className="inf" key={Math.random()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {thisObject.organisations && (
            <div className="info">
              <p>Организации</p>
              {organisationsArray?.map((item) => (
                <div className="inf" key={Math.random()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {thisObject.where && (
            <div className="info">
              <p>Куда пойдут вещи</p>
              {whereArray?.map((item) => (
                <div className="inf" key={Math.random()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {thisObject.what && (
            <div className="info">
              <p>Что можно сдавать</p>
              {whatArray?.map((item) => (
                <div className="inf" key={Math.random()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          <div className="messages">
            {thisMessages.map((m) => (
              <div className="message" key={Math.random()}>
                <p>{m.name}:</p>
                <p>{m.message}</p>
              </div>
            ))}
          </div>
          <div className="in">
            <Input2
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={values.name}
              onChange={changeHandler}
            />
          </div>
          <div className="in">
            <Input2
              type="text"
              name="message"
              placeholder="Отзыв"
              value={values.message}
              onChange={changeHandler}
            />
          </div>
          <div className="action2">
            <Button text="Отправить" onClick={sendMessageHandler} />
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
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--blue-0);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--blue-1);
    border-radius: 10px;
  }
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
      font-size: 14px;
      display: flex;
      align-items: center;
      svg {
        font-size: 13px;
      }
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
  .in {
    margin: 10px 0;
  }
  .action2 {
    display: flex;
    justify-content: center;
  }
  .messages {
    .message {
      display: flex;
      p:first-child {
        font-weight: 600;
      }
      p {
        margin: 2px 5px;
        font-weight: 400;
        font-size: 15px;
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
