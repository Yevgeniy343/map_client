import React, { useState, useEffect } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../features/adminSlice";
import Button from "../../components-special/Button";
import Input2 from "../../components-special/Input2";

const initialState = {
  login: "",
  password: "",
};

const AdminLogin = () => {
  const { admin, isLoading } = useSelector((store) => store.admin);
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { login, password } = values;

    if (!login || !password) {
      toast.error("Введите все значения");
      return;
    }
    dispatch(loginAdmin({ login: login, password: password }));

    return;
  };

  useEffect(() => {
    if (admin) {
      setTimeout(() => {
        navigate("/a-panel");
      }, 1000);
    }
  }, [admin]);

  return (
    <Wrapper>
      <form className="content" onSubmit={onSubmit}>
        <Input2
          type="text"
          name="login"
          placeholder="login"
          value={values.login}
          onChange={changeHandler}
        />
        <Input2
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={changeHandler}
        />
        <Button className="btn btn-admin" type="submit" text="Войти" />
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: var(--background);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 90%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20%;
  }
  input {
    margin: 1rem;
    width: 80%;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid var(--text);
    color: var(--text);

    /* font-family: "NeverSmile"; */
    caret-color: var(--text);
    font-size: 1.7rem;

    :focus-visible {
      outline: none;
    }
  }
  .btn-admin {
    margin-top: 3rem;
  }
  p {
    color: var(--text);
    font-family: "NeverSmile";
    font-size: 1.3rem;
    position: absolute;
    bottom: 10%;
    cursor: pointer;
    transition: var(--transition);
    :hover {
      color: white;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .content {
      width: 30%;
      height: 50%;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default AdminLogin;
