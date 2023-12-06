import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";

const CategoryTree = () => {
  const { categories } = useSelector((store) => store.admin);
  const rootCategories = categories.filter((c) => c.parentId === null);
  console.log(categories);
  console.log(rootCategories);

  return (
    <Wrapper>
      <div>
        {rootCategories.map((category) => (
          <Category
            key={category._id}
            category={category}
            categories={categories}
            level={0}
          />
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
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
export default CategoryTree;
