import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { sidebarOpenHandler } from "../../features/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.jpg";

import AdminNavlinks from "./AdminNavLink";

const AdminNavBar = () => {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo" onClick={() => navigate("/a-panel")}>
            <p>admin</p>
          </div>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => dispatch(sidebarOpenHandler())}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <AdminNavlinks />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .nav-center {
    display: flex;
    width: 95vw;
    margin: 0;
    align-items: center;
    justify-content: space-between;
  }
  .nav-header {
    display: flex;
    align-items: center;
    align-items: baseline;
  }
  .nav-toggle {
    border: transparent;
    transition: var(--transition2);
    color: var(--border-1);
    border-radius: 5px;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: white;
    :hover {
      scale: calc(1.05);
      box-shadow: var(--shadow-white-1);
    }
    svg {
      font-size: 2.3rem;
      color: var(--border-1);
      transition: 1s;
      cursor: pointer;
    }
    cursor: pointer;
  }

  .logo {
    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-header {
      justify-content: space-around;
    }
    .toggle {
      display: block;
    }
  }
`;

export default AdminNavBar;
