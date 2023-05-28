import React from "react";
import styled from "styled-components";
// import logo from "../img/IMG_1607.jpg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { sidebarOpenHandler, logOutUser } from "../features/user/userSlise";
import { useDispatch, useSelector } from "react-redux";
// import {
//   toggleHandler,
//   logOutUser,
// } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import Select from "../components-special/Select";
import Input from "../components-special/Input";

const NavBar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOutUser());
  };
  return (
    <NavContainer>
      <div className="element">
        <Select city="Томск" />
      </div>
      <div className="element">
        <Input placeholder="События ..." />
      </div>
      {/* <input type="text" />
      <button>ВОЙТИ</button>
      <button>ЗАРЕГИСТРИРОВАТЬСЯ</button> */}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-1);
  .element {
    margin: 1rem;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default NavBar;
