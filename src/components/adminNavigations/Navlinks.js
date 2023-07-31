import React from "react";
import styled from "styled-components";
import { sublinks } from "../../assets/data";
import { logOutAdmin } from "../../features/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { pageIdHandler } from "../../features/user/userSlise";

const Navlinks = () => {
  const {} = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOutAdmin());
  };

  return (
    <Wrapper>
      <div className="nav-links">
        {sublinks.map((item) => {
          const { pageId, page } = item;
          return (
            <button
              key={pageId}
              className="nav-link"
              onMouseEnter={() => dispatch(pageIdHandler(pageId))}
            >
              {page}
            </button>
          );
        })}
        <button className="nav-link" onClick={logOutHandler}>
          Выйти
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .nav-links {
    display: none;
    align-items: center;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .nav-links {
      display: flex;
      justify-content: center;
      border: 2px solid red;
    }
    .nav-link {
      border: transparent;
      border: 2px solid blue;
      padding: 0 1rem;
      background: transparent;
      cursor: pointer;
      color: white;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Navlinks;
