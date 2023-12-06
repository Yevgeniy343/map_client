import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CategoryTree from "./CategoryTree";

const AllCategories = () => {
  return (
    <Wrapper>
      <CategoryTree />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid gray;

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
export default AllCategories;
