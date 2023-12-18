import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { getCategories } from "../../features/admin/adminSlice";
import SubCategories from "./SubCategories";

const AllCategory = ({ name, _id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p className="category-name">{name}</p>
      <SubCategories categoryId={_id} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .category-name {
    font-size: 1.2rem;
    color: blue;
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
export default AllCategory;
