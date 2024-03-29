import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Input2 from "../../components-special/Input2";
import {
  addInfo1,
  addInfo2,
  uploadImage,
} from "../../features/admin/adminSlice";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { deleteObject } from "../../features/admin/adminSlice";
const initialState = {
  name1: "",
  name2: "",
};

const Object = ({
  name,
  location,
  address,
  contacts,
  image,
  reviews,
  _id,
  info1,
  info2,
  services,
  programs,
  breeds,
  coffee,
  organisations,
  shops,
  where,
  what,
  site,
  phone,
  email,
}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const [picture, setPicture] = useState();
  // console.log(picture);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addInfo1Handler = () => {
    dispatch(addInfo1({ info1: values.name1, objectId: _id }));
  };

  const addInfo2Handler = () => {
    dispatch(addInfo2({ info2: values.name2, objectId: _id }));
  };

  const filePickerRef = useRef();

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setPicture(pickedFile);
      return;
    }
  };

  const formData = new FormData();
  formData.append("image", picture);
  formData.append("objectId", _id);

  const saveImageHandler = () => {
    dispatch(uploadImage(formData));
  };

  const deleteHandler = () => {
    dispatch(deleteObject({ objectId: _id }));
  };

  return (
    <Wrapper>
      <div className="line">
        <p className="key">Имя объекта:</p>
        <p className="value">{name}</p>
      </div>
      <div className="line">
        <p className="key">Адрес:</p>
        <p className="value">{address}</p>
      </div>
      <div className="line">
        <p className="key">Контакты:</p>
        <p className="value">{contacts}</p>
      </div>
      {/* __________________________________________________ */}
      <div className="line">
        <p className="key">Сайт:</p>
        <p className="value">{site}</p>
      </div>
      <div className="line">
        <p className="key">Телефон:</p>
        <p className="value">{phone}</p>
      </div>
      <div className="line">
        <p className="key">Email:</p>
        <p className="value">{email}</p>
      </div>
      {/* __________________________________________________ */}

      <div className="line">
        <p className="key">Локация:</p>
        <p className="value">{location.lat}</p>
        <p className="value">{location.long}</p>
      </div>
      <div className="line">
        <p className="key">Состояние:</p>
        <p className="value">Безопасность {reviews.r1}</p>
        <p className="value">Современность {reviews.r2}</p>
        <p className="value">Состояние {reviews.r3}</p>
        <p className="value">Чистота {reviews.r4}</p>
        <p className="value">Озелененность {reviews.r5}</p>
        <p className="value">Расположение {reviews.r6}</p>
      </div>
      <div className="line">
        <p className="key">Услуги</p>
        <p className="value">{services}</p>
      </div>
      <div className="line">
        <p className="key">Программы</p>
        <p className="value">{programs}</p>
      </div>
      <div className="line">
        <p className="key">Породы</p>
        <p className="value">{breeds}</p>
      </div>
      <div className="line">
        <p className="key">Магазины</p>
        <p className="value">{shops}</p>
      </div>
      <div className="line">
        <p className="key">Кафе</p>
        <p className="value">{coffee}</p>
      </div>
      <div className="line">
        <p className="key">Организации</p>
        <p className="value">{organisations}</p>
      </div>
      <div className="line">
        <p className="key">Куда пойдут вещи</p>
        <p className="value">{where}</p>
      </div>
      <div className="line">
        <p className="key">Что можно сдавать</p>
        <p className="value">{what}</p>
      </div>
      <div className="line">
        <p className="key">Положительные особенности:</p>
        {info1.map((o) => {
          return (
            <p className="value" key={Math.random()}>
              {o}
            </p>
          );
        })}
      </div>
      <div className="line">
        <p className="key">Отрицательные особенности:</p>
        {info2.map((o) => {
          return (
            <p className="value" key={Math.random()}>
              {o}
            </p>
          );
        })}
      </div>
      <div className="line">
        <p className="key">Загруженные изображения:</p>
        {image.map((o) => {
          return (
            <p className="value" key={Math.random()}>
              {o}
            </p>
          );
        })}
      </div>
      <div className="info">
        <div className="in">
          <Input2
            placeholder="Положительная особенность"
            type="text"
            name="name1"
            value={values.name1}
            onChange={changeHandler}
            autoComplete="off"
          />
          <Button text="Добавить" onClick={addInfo1Handler} />
        </div>
        <div className="in">
          <Input2
            placeholder="Отрицательная особенность"
            type="text"
            name="name2"
            value={values.name2}
            onChange={changeHandler}
            autoComplete="off"
          />
          <Button text="Добавить" onClick={addInfo2Handler} />
        </div>
        <div className="in">
          <input
            type="file"
            style={{ display: "none" }}
            accept=".img,.png,.jpeg,.jpg"
            ref={filePickerRef}
            onChange={pickedHandler}
          />
        </div>
      </div>
      <Button onClick={pickImageHandler} text="Загрузить изображение" />
      <p className="value">{picture?.name}</p>
      {picture && (
        <Button onClick={saveImageHandler} text="Сохранить изображение" />
      )}
      <div className="delete" onClick={deleteHandler}>
        <RiDeleteBin7Fill />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid var(--blue-05);
  padding: 10px;
  .line {
    display: flex;
    flex-wrap: wrap;
  }
  .key {
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--lilac-2);
    margin: 5px;
  }
  .value {
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--blue-0);
    margin: 5px;
  }
  .in {
    width: 300px;
    margin: 10px 0;
  }
  .info {
    display: flex;
    justify-content: space-between;
  }
  .delete {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    svg {
      font-size: 30px;
      transition: 1s;
      color: var(--clr-red-light);
      &:hover {
        color: var(--purple-2);
        scale: 1.1;
      }
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Object;
