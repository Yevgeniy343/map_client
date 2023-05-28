import styled from "styled-components";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/user/userSlise";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
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
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Введите все значения", { theme: "colored" });
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMemberHandler = () => {
    setValues({ ...values, isMember: !values.isMember });
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
        <h1>Shop</h1>
        <h3 style={{ textAlign: "center" }}>
          {values.isMember ? "Вход" : "Регистрация"}
        </h3>
        <div className="input-content">
          {!values.isMember && (
            <FormRow
              placeholder="Name"
              type="text"
              name="name"
              value={values.name}
              changeHandler={changeHandler}
            />
          )}
          <FormRow
            placeholder="Email"
            type="email"
            name="email"
            value={values.email.toLowerCase()}
            changeHandler={changeHandler}
          />
          <FormRow
            placeholder="Password"
            type="password"
            name="password"
            value={values.password}
            changeHandler={changeHandler}
          />
        </div>
        <div className="actions">
          <button
            type="submit"
            className="btn button-form"
            disabled={isLoading}
          >
            {isLoading ? "Думаю ..." : "Подтвердить"}
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            {values.isMember ? "Нет регистрации? " : "Уже есть регистрация? "}
            <button
              type="button"
              onClick={toggleMemberHandler}
              className="member-btn"
            >
              {values.isMember ? " Регистрация" : "Вход"}
            </button>
          </p>
        </div>
        <Link to="/">
          <HiArrowNarrowLeft />
        </Link>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  input {
    margin: 0.5rem;
  }
  svg {
    color: var(--clr-primary-5);

    width: 2rem;
    border: 1px solid var(--theme-ui-colors-green70);
    font-size: 1.5rem;
  }
  svg:hover {
    background: var(--clr-primary-10);
    transition: var(--transition);
    border-radius: 40px;
  }
  .input-content {
    text-align: center;
  }
  h1 {
    text-align: center;
  }
  button {
    font-size: 1.3rem;
  }
  .actions {
    margin: 1rem;
    text-align: center;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-2);
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition);
    :hover {
      color: var(--clr-primary-4);
    }
  }
  .input-decoration {
    border: none;
    border-bottom: 7px solid var(--clr-primary-5);
    font-size: 1.3rem;
    caret-color: var(--clr-primary-5);
    background-color: var(--clr-primary-10);

    :focus-visible {
      outline: none;
      background-color: var(--clr-primary-10);
      ::placeholder {
        font-size: 1rem;
      }
    }
    ::placeholder {
      color: gray;
    }
  }
  @media (min-width: 992px) {
  }
`;
export default Register;
