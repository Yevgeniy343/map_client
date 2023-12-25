import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Input2 from "../../components-special/Input2";
import Select from "../../components-special/Select";

const initialState = {
  name: "",
  lat: "",
  long: "",
  address: "",
  contacts: "",
  conditions: { r1: "", r2: "", r3: "", r4: "" },
  peculiarities: [
    { name: "name", value: "" },
    { name: "name", value: "" },
    { name: "name", value: "" },
    { name: "name", value: "" },
    { name: "name", value: "" },
    { name: "name", value: "" },
    { name: "name", value: "" },
    { name: "name", value: "" },
  ],
};

const NewObject = () => {
  const { subCategories, isLoading } = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  const [values, setValues] = useState(initialState);
  const [currentObject, setCurrentObject] = useState(subCategories[1].name);
  console.log(currentObject);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const objectHandler = (object) => {
    setCurrentObject(object);
  };

  return (
    <Wrapper>
      <p className="component-header">Создать категорию</p>
      <div className="in">
        <Select objects={subCategories} passState={objectHandler} />
      </div>
      <div className="in">
        <Input2
          placeholder="название объекта"
          type="text"
          name="name"
          value={values.name}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="адрес"
          type="text"
          name="address"
          value={values.address}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="контакты"
          type="text"
          name="contacts"
          value={values.contacts}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="lat"
          type="number"
          name="lat"
          value={values.lat}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="long"
          type="number"
          name="long"
          value={values.long}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="безопасность (1-5)"
          type="number"
          name="r1"
          value={values.r1}
          onChange={changeHandler}
          autoComplete="off"
          min="1"
          max="5"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="современность (1-5)"
          type="number"
          name="r2"
          value={values.r2}
          onChange={changeHandler}
          autoComplete="off"
          min="1"
          max="5"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="состояние (1-5)"
          type="number"
          name="r3"
          value={values.r3}
          onChange={changeHandler}
          autoComplete="off"
          min="1"
          max="5"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="чистота (1-5)"
          type="number"
          name="r4"
          value={values.r4}
          onChange={changeHandler}
          autoComplete="off"
          min="1"
          max="5"
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .in {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    width: 300px;
    .in {
      input {
        width: 300px;
      }
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default NewObject;
