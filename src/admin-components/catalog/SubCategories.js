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
import img1 from "../../images/Бассейны.svg";
import img2 from "../../images/Ветеринарные клиники.svg";
import img3 from "../../images/Гостиницы для животных.svg";
import img4 from "../../images/Детские комнаты.svg";
import img5 from "../../images/Детские площадки.svg";
import img6 from "../../images/Детские центры.svg";
import img7 from "../../images/Парки и скверы.svg";
import img8 from "../../images/Питомники.svg";
import img9 from "../../images/Площадки для выгула собак.svg";
import img10 from "../../images/Пункты приема вторсырья.svg";
import img11 from "../../images/Спортивные площадки.svg";
import img12 from "../../images/Торговые центры.svg";
import img13 from "../../images/Центры изучения иностранных языков.svg";
import img14 from "../../images/Школы танцев.svg";

const initialState = {
  name: "",
};

const SubCategories = ({ categoryId }) => {
  const { subCategories } = useSelector((store) => store.admin);

  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const [imageName, setImageName] = useState();
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
        imageName: imageName,
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
        <div>
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
          <div className="image-name">{imageName}</div>
          <div className="icons">
            <img
              src={img1}
              alt="img1"
              onClick={() => setImageName("Бассейны")}
            />
            <img
              src={img2}
              alt="img2"
              onClick={() => setImageName("Ветеринарные клиники")}
            />
            <img
              src={img3}
              alt="img2"
              onClick={() => setImageName("Гостиницы для животных")}
            />
            <img
              src={img4}
              alt="img2"
              onClick={() => setImageName("Детские комнаты")}
            />
            <img
              src={img5}
              alt="img2"
              onClick={() => setImageName("Детские площадки")}
            />
            <img
              src={img6}
              alt="img2"
              onClick={() => setImageName("Детские центры")}
            />
            <img
              src={img7}
              alt="img2"
              onClick={() => setImageName("Парки и скверы")}
            />
            <img
              src={img8}
              alt="img2"
              onClick={() => setImageName("Питомники")}
            />
            <img
              src={img9}
              alt="img2"
              onClick={() => setImageName("Площадки для выгула собак")}
            />
            <img
              src={img10}
              alt="img2"
              onClick={() => setImageName("Пункты приема вторсырья")}
            />
            <img
              src={img11}
              alt="img2"
              onClick={() => setImageName("Спортивные площадки")}
            />
            <img
              src={img12}
              alt="img2"
              onClick={() => setImageName("Торговые центры")}
            />
            <img
              src={img13}
              alt="img2"
              onClick={() => setImageName("Центры изучения иностранных языков")}
            />
            <img
              src={img14}
              alt="img2"
              onClick={() => setImageName("Школы танцев")}
            />
          </div>
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
  .icons {
    img {
      width: 35px;
      margin: 10px;
      cursor: pointer;
      transition: 0.6s;
      :hover {
        scale: 1.2;
      }
    }
  }
  .image-name {
    color: var(--blue-05);
    font-size: 1.2rem;
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
