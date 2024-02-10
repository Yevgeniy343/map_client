import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Input2 from "../../components-special/Input2";
import Select from "../../components-special/Select";
import Button from "../../components-special/Button";
import { createObject } from "../../features/admin/adminSlice";

const initialState = {
  name: "",
  lat: "",
  long: "",
  address: "",
  contacts: "",
  r1: "",
  r2: "",
  r3: "",
  r4: "",
  r5: "",
  r6: "",
  services: "",
  programs: "",
  breeds: "",
  coffee: "",
  shops: "",
  organisations: "",
  where: "",
  what: "",
};

const NewObject = () => {
  const { subCategories, isLoading } = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  const [values, setValues] = useState(initialState);
  const [currentObject, setCurrentObject] = useState(subCategories[1]?.name);
  // console.log(currentObject);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const objectHandler = (object) => {
    setCurrentObject(object);
  };

  const createObjectHandler = () => {
    const {
      name,
      lat,
      long,
      address,
      contacts,
      r1,
      r2,
      r3,
      r4,
      r5,
      r6,
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
    } = values;
    dispatch(
      createObject({
        subcategory: currentObject,
        name,
        lat,
        long,
        address,
        contacts,
        site,
        phone,
        email,
        // ...(r1 && { r1 }),
        // ...(r2 && { r2 }),
        // ...(r3 && { r1 }),
        // ...(r1 && { r1 }),
        r1,
        r2,
        r3,
        r4,
        r5,
        r6,
        ...(services && { services }),
        ...(programs && { programs }),
        ...(breeds && { breeds }),
        ...(coffee && { coffee }),
        ...(organisations && { organisations }),
        ...(shops && { shops }),
        ...(where && { where }),
        ...(what && { what }),
      })
    );
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
      {/* _________________________________________ */}
      <div className="in">
        <Input2
          placeholder="сайт"
          type="text"
          name="site"
          value={values.site}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="телефон"
          type="phone"
          name="phone"
          value={values.phone}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="email"
          type="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      {/* _________________________________________ */}

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
      <div className="in">
        <Input2
          placeholder="озелененность (1-5)"
          type="number"
          name="r5"
          value={values.r5}
          onChange={changeHandler}
          autoComplete="off"
          min="1"
          max="5"
        />
      </div>
      <div className="in">
        <Input2
          placeholder="расположение (1-5)"
          type="number"
          name="r6"
          value={values.r6}
          onChange={changeHandler}
          autoComplete="off"
          min="1"
          max="5"
        />
      </div>
      <div className="extra">
        <p>перечисления через ";" </p>
        <div className="in">
          <Input2
            placeholder="услуги"
            type="text"
            name="services"
            value={values.services}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
        <div className="in">
          <Input2
            placeholder="программы"
            type="text"
            name="programs"
            value={values.programs}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
        <div className="in">
          <Input2
            placeholder="породы"
            type="text"
            name="breeds"
            value={values.breeds}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
        <div className="in">
          <Input2
            placeholder="магазины"
            type="text"
            name="shops"
            value={values.shops}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
        <div className="in">
          <Input2
            placeholder="кафе"
            type="text"
            name="coffee"
            value={values.coffee}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
        <div className="in">
          <Input2
            placeholder="организации"
            type="text"
            name="organisations"
            value={values.organisations}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
        <div className="in">
          <Input2
            placeholder="куда пойдут вещи"
            type="text"
            name="where"
            value={values.where}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
        <div className="in">
          <Input2
            placeholder="что можно сдавать"
            type="text"
            name="what"
            value={values.what}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="actions">
        <Button text="Создать" onClick={createObjectHandler} />
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
  .extra {
    border: 1px outset var(--clr-green-dark);
    width: 335px;
    margin: 10px 0;
  }
  .actions {
    width: 100%;
    display: flex;
    justify-content: center;
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
