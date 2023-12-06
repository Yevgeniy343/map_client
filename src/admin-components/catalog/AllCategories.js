import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CategoryTree from "./CategoryTree";
import { getCategories } from "../../features/admin/adminSlice";

const AllCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <Wrapper>
      <CategoryTree />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 1px solid gray;s */
  width: 300px;

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
