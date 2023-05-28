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
import Button from "../components-special/Button";

const NavBar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOutUser());
  };
  return (
    <NavContainer>
      <div className="container">
        <div className="element">
          <Select city="Томск" />
        </div>
        <div className="element">
          <Input placeholder="События, артисты, места" />
        </div>
      </div>
      <div className="container">
        <div className="element">
          <Button text="ВОЙТИ" />
        </div>
        <div className="element">
          <Button text="ЗАРЕГИСТРИРОВАИТСЯ" />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  background-color: var(--color-1);
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .element {
    margin: 1rem;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-items: flex-end;
    background-color: var(--color-1);
    .container {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }
    .element {
      margin: 1rem;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default NavBar;
