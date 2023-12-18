import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input2 from "../../components-special/Input2";
import Button from "../../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createSubCategory } from "../../features/admin/adminSlice";
import _ from "lodash";
import SubCategory from "./SubCategory";
import { BiLayerPlus } from "react-icons/bi";

const initialState = {
  name: "",
};

const SubCategories = ({ categoryId }) => {
  const { subCategories } = useSelector((store) => store.admin);

  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const [extra, setExtra] = useState(false);

  const thisSubCategories = _.filter(subCategories, { categoryId: categoryId });
  console.log(subCategories);
  console.log(categoryId);
  console.log(thisSubCategories);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createSubCategoryHandler = () => {
    const { name } = values;
    if (!name) {
      toast.error("Введите все значения");
      return;
    }

    dispatch(
      createSubCategory({
        name: name,
        categoryId: categoryId,
      })
    );
    setValues(initialState);
    return;
  };

  return (
    <Wrapper>
      <p className="header">Подкатегори:</p>
      {thisSubCategories.map((subCategory) => (
        <SubCategory key={subCategory._id} {...subCategory} />
      ))}
      <BiLayerPlus onClick={() => setExtra(!extra)} />
      {extra && (
        <div className="new-subcategory">
          <Input2
            placeholder="Новая подкатегория"
            type="text"
            name="name"
            value={values.name}
            onChange={changeHandler}
            autoComplete="off"
          />
          <Button text="Создать" onClick={createSubCategoryHandler} />
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 5px 10px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .new-subcategory {
    display: flex;
    height: 100px;

    div {
      margin: 10px;
    }
  }
  svg {
    font-size: 2rem;
    margin: 10px;
    color: var(--blue-0);
    transition: 0.7s;
    cursor: pointer;
    :hover {
      color: var(--blue-05);
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    /* justify-content: flex-start; */
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default SubCategories;
