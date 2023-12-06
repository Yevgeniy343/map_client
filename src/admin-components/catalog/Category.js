import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { currentCategoryHandler } from "../../features/admin/adminSlice";

const Category = ({ category, categories, level }) => {
  const { currentCategory } = useSelector((store) => store.admin);

  const [expanded, setExpanded] = useState(false);
  const children = categories.filter((c) => c.parentId === category._id);
  console.log(level);

  const dispatch = useDispatch();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <Wrapper level={level}>
      <div className="line">
        <p className="toggle" onClick={toggleExpand}>
          {expanded ? "-" : "+"}
        </p>
        <p
          className={
            category?._id === currentCategory?.id ? "name active" : "name"
          }
          onClick={() =>
            dispatch(
              currentCategoryHandler({
                id: category._id,
                name: category.name,
              })
            )
          }
        >
          {category.name}
        </p>
      </div>
      {expanded && children.length > 0 && (
        <div style={{ paddingLeft: "20px" }}>
          {children.map((child) => (
            <Category
              key={child._id}
              category={child}
              categories={categories}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-left: ${(props) => props.level * 10}px;
  .line {
    display: flex;
    align-items: center;
    .toggle {
      font-size: 1.3rem;
      padding: 0 1rem;
      cursor: pointer;
    }
    .name {
      cursor: pointer;
    }
    .active {
      color: var(--blue-0);
    }
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
export default Category;
