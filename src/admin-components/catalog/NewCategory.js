import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input2 from "../../components-special/Input2";
import Button from "../../components-special/Button";
import Checkbox from "../../components-special/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createCategory } from "../../features/admin/adminSlice";

const initialState = {
  name: "",
};
const NewCategory = () => {
  const { currentCategory } = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createCategoryHandler = () => {
    const { name } = values;
    if (!name) {
      toast.error("Введите все значения");
      return;
    }

    dispatch(
      createCategory({
        name: name,
        parentId: null,
      })
    );
    setValues(initialState);
    return;
  };

  return (
    <Wrapper>
      <p className="component-header">Создать категорию</p>
      <div className="in">
        <Input2
          placeholder="название категории"
          type="text"
          name="name"
          value={values.name}
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>

      <div className="actions">
        <Button text="Создать" onClick={createCategoryHandler} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 1px solid gray; */
  .in {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .in2 {
    display: flex;
    flex-direction: row;
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
export default NewCategory;
