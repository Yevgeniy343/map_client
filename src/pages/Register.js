import styled from "styled-components";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/user/userSlise";
import { toast } from "react-toastify";

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
        navigate("/chat");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h1>WEB Messenger</h1>
        <h3 style={{ textAlign: "center" }}>
          {values.isMember ? "Login" : "Registration"}
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
            {isLoading ? "Thunking ..." : "Submit"}
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            {values.isMember ? "Not a member yet?" : "Already a member?"}
            <button
              type="button"
              onClick={toggleMemberHandler}
              className="member-btn"
            >
              {values.isMember ? "Register" : "Login"}
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
  font-family: "Yeon Sung", cursive;

  svg {
    color: var(--theme-ui-colors-green70);
    width: 2rem;
    border: 1px solid var(--theme-ui-colors-green70);
    font-size: 1.3rem;
  }
  svg:hover {
    background-color: var(--theme-ui-colors-green20);
    border-radius: 40px;
  }
  .input-content {
    text-align: center;
  }
  h1 {
    text-align: center;
  }
  button {
    font-family: "Yeon Sung", cursive;
    font-size: 1.3rem;
  }
  .actions {
    margin: 1rem;
    text-align: center;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--theme-ui-colors-green50);
    cursor: pointer;
    font-size: 1rem;
  }
  .input-decoration {
    border: none;
    border-bottom: 7px solid var(--theme-ui-colors-green50);
    font-family: "Yeon Sung", cursive;
    font-size: 1.3rem;
    caret-color: var(--theme-ui-colors-yellow50);
    :focus-visible {
      outline: none;
      background-color: var(--theme-ui-colors-green20);
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
