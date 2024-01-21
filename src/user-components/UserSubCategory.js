import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  currentSubCategoryHandler,
  secontPanelHandler,
} from "../features/user/userSlise";

const UserSubCategory = ({ name, _id, imageName }) => {
  const { currentSubCategory } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log(currentSubCategory);
  console.log(_id);

  const subcategoryHandler = () => {
    dispatch(currentSubCategoryHandler({ _id, name, imageName }));
    dispatch(secontPanelHandler(false));
  };
  return (
    <Wrapper>
      <p
        className={_id === currentSubCategory._id ? "current-subcategory" : ""}
        onClick={subcategoryHandler}
      >
        {name}
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 10px;
  padding: 5px;

  &:hover {
    text-decoration: underline;
  }
  .current-subcategory {
    color: var(--clr-green-dark);
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
export default UserSubCategory;
