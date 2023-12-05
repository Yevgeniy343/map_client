import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import toast from "react-hot-toast";
import Button from "../../components-special/Button";
import { logOutAdmin } from "../../features/admin/adminSlice";

const AdminNavlinks = () => {
  const { user, theme } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const catalogPageHandler = () => {
    navigate("/a-panel/catalog");
  };

  return (
    <Wrapper>
      <div className="nav-links">
        <button className="nav-link" onClick={catalogPageHandler}>
          Каталог
        </button>
        <button className="nav-link">Пользователи</button>
        <Button text="logout" onClick={() => dispatch(logOutAdmin())} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 61px;
  width: max-content;
  .nav-links {
    display: flex;
    align-items: baseline;
    padding: 0 2rem;
    display: none;

    .nav-link {
      font-size: 1.2rem;
      :hover {
        :hover {
          text-decoration: underline;
        }
      }
    }
    svg {
      font-size: 2rem;
      color: black;
      /* color: ${(props) =>
        props.location === "/apartments" ? "black" : "white"}; */
      transition: 1s;
      cursor: pointer;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .nav-link {
      border: transparent;
      padding: 0 1rem;
      background: transparent;
      cursor: pointer;
      color: ${(props) => props.theme.text_color};
      transition: 0.3s;
      font-size: 20px;
      font-weight: 100;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default AdminNavlinks;
