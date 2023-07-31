import React from "react";
import styled from "styled-components";
import { sidebarOpenHandler } from "../../features/user/userSlise";
import { useDispatch, useSelector } from "react-redux";
import { logOutAdmin } from "../../features/adminSlice";
import { AiOutlineMenu } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, isModal } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOutAdmin());
  };
  return (
    <div>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <div className="logo">logo</div>
            <button
              type="button"
              className="nav-toggle"
              onClick={() => dispatch(sidebarOpenHandler())}
            >
              {" "}
              <AiOutlineMenu />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <p>Сотрудники</p>
            </li>
            <li onClick={logOutHandler}>
              <p>Выход</p>
            </li>
          </ul>
        </div>
      </NavContainer>
    </div>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-3);
  border-radius: 300px;
  margin: 1rem 0.2rem;

  .nav-center {
    width: 90vw;
    margin: 0;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    /* margin-top: 1.5rem; */
    background: transparent;
    border: transparent;
    transition: var(--transition2);
    color: var(--blue-0);
    :hover {
      color: var(--main-0);
    }
    cursor: pointer;
  }
  .nav-links {
    display: none;
    align-items: center;
  }

  li {
    cursor: pointer;
    padding: 0.5rem;
    color: var(--blue-0);
    :hover {
      svg {
        color: var(--blue-0);
      }
      p {
        color: var(--blue-05);
      }
    }
    p {
      transition: var(--transition2);
      color: var(--blue-0);
      font-size: 1rem;
    }
  }
  .name {
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid var(--color-3);
    box-shadow: var(--shadow-4);
    cursor: pointer;
    transition: 1s;
    :hover {
    }
    p {
      font-size: 1.3rem;
    }
  }
  svg {
    font-size: 2.3rem;
    color: var(--blue-0);
    transition: var(--transition2);
    :hover {
      color: var(--blue-05);
    }
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0.5rem;
        border: 4px solid transparent;
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default NavBar;
