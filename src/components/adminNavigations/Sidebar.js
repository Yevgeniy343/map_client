import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { logOutAdmin } from "../../features/adminSlice";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sidebarCloseHandler } from "../../features/user/userSlise";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(sidebarCloseHandler());
    dispatch(logOutAdmin());
  };

  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
        <div className="sidebar-header">
          <p>logo</p>
          <div></div>
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(sidebarCloseHandler())}
          >
            <AiOutlineClose />
          </button>
        </div>
        <ul className="links">
          <li>
            <p>Сотрудники</p>
          </li>
          <li onClick={logOutHandler}>
            <p>Выйти</p>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  border-radius: 300px;
  .links {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;
    margin: auto;
  }
  li {
    font-size: 2rem;
    margin: 0;
    padding: 2rem;
    padding-left: 2rem;
    display: flex;
    justify-content: flex-start;
    transition: var(--transition2);
    width: 100%;
    cursor: pointer;
    p {
      color: var(--blue-0);
      margin-left: 1rem;
    }
    :hover {
      padding-left: 2.5rem;
      background-color: var(--blue-3);
    }
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--blue-3);
    margin: 1rem 0.2rem;
    border-radius: 300px;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--blue-0);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }

  .logo {
    justify-self: center;
    height: 60px;
  }
  .links {
    margin-bottom: 2rem;
    margin: auto;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .logo {
    cursor: pointer;
  }
  button {
    float: right;
  }
  svg {
    font-size: 2.3rem;
    color: var(--blue-0);
    transition: var(--transition2);
    :hover {
      color: var(--blue-1);
    }
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SideBar;
