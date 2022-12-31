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
  const { name, email, password, isMember } = values;

  const toggleMemberHandler = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper>
      <form className="form">
        <h1>WEB Messenger</h1>
        <h3 style={{ textAlign: "center" }}>
          {values.isMember ? "Login" : "Registration"}
        </h3>
        <div className="input-content">
          {!values.isMember && (
            <FormRow placeholder="Name" changeHandler={""} type="text" />
          )}
          <FormRow placeholder="Email" changeHandler={""} type="text" />
          <FormRow placeholder="Password" changeHandler={""} type="text" />
        </div>
        <div className="actions">
          <button type="button" className="btn button-form">
            Submit
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

export default Register;
