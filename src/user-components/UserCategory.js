import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import UserSubCategory from "./UserSubCategory";

import _ from "lodash";

const UserCategory = ({ _id, name }) => {
  const { subCategories } = useSelector((store) => store.user);

  const [isActive, setIsActive] = useState(false);

  const thisSubCategories = _.filter(subCategories, { categoryId: _id });

  return (
    <Wrapper>
      <div
        className={isActive ? "name active" : "name"}
        onClick={() => setIsActive(!isActive)}
      >
        {name}
      </div>
      {isActive && (
        <div>
          {thisSubCategories.map((sub) => (
            <UserSubCategory key={sub._id} {...sub} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid var(--blue-0);
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  text-align: center;
  .name {
    transition: 1s;
    padding: 10px;
    :hover {
      color: white;
      background: var(--blue-0);
    }
  }
  .active {
    color: white;
    background: var(--blue-0);
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
export default UserCategory;
