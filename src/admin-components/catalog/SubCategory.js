import React from "react";
import styled from "styled-components";

const SubCategory = ({ name, SubCategoryId }) => {
  return (
    <Wrapper>
      <p>{name}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20px;
  p {
    color: var(--lilac-2);
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
export default SubCategory;
