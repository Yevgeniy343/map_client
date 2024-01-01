import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { currentSubCategoryHandler } from "../features/user/userSlise";

const UserSubCategory = ({ name, _id, imageName }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p
        onClick={() =>
          dispatch(currentSubCategoryHandler({ _id, name, imageName }))
        }
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
