import React, { useState } from "react";
import styled from "styled-components";

const Category = ({ category, categories, level }) => {
  const [expanded, setExpanded] = useState(false);
  const children = categories.filter((c) => c.parentId === category._id);
  console.log(level);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <Wrapper level={level}>
      <div className="line">
        <h3 onClick={toggleExpand}>
          {category.name} {expanded ? "[-]" : "[+]"}
        </h3>
        <p>{level}</p>
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
