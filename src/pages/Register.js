import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/user/userSlise";
import toast from "react-hot-toast";
import Input from "../components-special/Input";
import InputPass from "../components-special/InputPass";
import Button from "../components-special/Button";

const initialState = {
  login: "",
  password: "",
};

const Register = () => {
  const { user, isLoading } = useSelector((store) => store.user);
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

    dispatch(registerUser({ login, password }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/personal-area");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h3>Авторизация</h3>
        <div className="input-content">
          <Input
            placeholder="login"
            type="text"
            name="login"
            value={values.login.toLowerCase()}
            onChange={changeHandler}
          />
          <InputPass
            placeholder="password"
            type="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
        </div>
        <div className="actions">
          <Button
            type="submit"
            className="btn button-form"
            disabled={isLoading}
            text={isLoading ? "Думаю ..." : "Войти"}
          />
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .form {
    width: 90vw;
    max-width: var(--fixed-width);
    /* background-color: var(--clr-primary-8); */
    /* box-shadow: var(--shadow-2); */
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
    /* border-radius: 40px; */
  }
  input {
    margin: 0.5rem 0;
  }
  .header {
    text-align: center;
    margin: 1rem;
  }
  .input-content {
    text-align: center;
  }
  h3 {
    color: white;
  }

  .actions {
    margin: 1rem;
    text-align: center;
  }

  h3 {
    text-align: center;
  }
  @media (min-width: 992px) {
  }
`;
export default Register;
