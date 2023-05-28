import React from "react";

// import logo from "../assets/imgs/branch.png";

import { FaTimes } from "react-icons/fa";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sidebarCloseHandler } from "../features/user/userSlise";
import { toggleHandler, logOutUser } from "../features/user/userSlise";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(sidebarCloseHandler());
    dispatch(logOutUser());
  };
  const homeHandler = () => {
    dispatch(sidebarCloseHandler());
    navigate("/landing");
  };
  const storeHandler = () => {
    dispatch(sidebarCloseHandler());
    navigate("/store");
  };
  const groupsHandler = () => {
    dispatch(sidebarCloseHandler());
    navigate("/groups");
  };
  const learnHandler = () => {
    dispatch(sidebarCloseHandler());
    navigate("/learn");
  };

  const { isSidebarOpen, user } = useSelector((store) => store.user);
  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
        <div className="sidebar-header">
          {/* <img src={} alt="logo" className="logo" /> */}
          <div></div>
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(sidebarCloseHandler())}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li onClick={homeHandler}>Home</li>
          <li onClick={storeHandler}>Store</li>
          <li onClick={groupsHandler}>Groups</li>
          <li onClick={learnHandler}>Learn</li>
          {!user && <li onClick={() => navigate("/register")}>Login</li>}
          {user && <li onClick={logOutHandler}>LogOut</li>}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  background-color: var(--color-2);
  li {
    font-size: 2rem;
    margin: 2rem;
    color: var(--color-4);
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--color-4);
    transition: var(--transition);
    cursor: pointer;

    margin-top: 0.2rem;
  }
  .close-btn:hover {
  }
  .alphabet {
    background-color: transparent;
    border: 1px solid var(--text);
    padding: 0.5rem 1rem;
    border-radius: 60px;
    color: var(--text);
    transition: var(--transition);
    width: 150px;
    cursor: pointer;
    margin: 0.5rem;
    :hover {
      border: 1px solid white;
      color: white;
    }
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  li {
    cursor: pointer;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-1);
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
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SideBar;
