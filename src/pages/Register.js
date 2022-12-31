import Wrapper from "../wrappers/register-wr";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useState, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  return (
    <Wrapper>
      <form className="form">
        <h1>WEB Messenger</h1>
        <div className="input-content">
          <FormRow placeholder="Имя" changeHandler={""} type="text" />
          <FormRow placeholder="Email" changeHandler={""} type="text" />
          <FormRow placeholder="Пароль" changeHandler={""} type="text" />
        </div>
        <div className="actions">
          <button type="button" className="btn button-form">
            Войти
          </button>
        </div>
        <Link to="/">
          <HiArrowNarrowLeft />
        </Link>
      </form>
    </Wrapper>
  );
};

export default Register;
