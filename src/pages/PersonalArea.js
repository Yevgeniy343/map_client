import styled from "styled-components";
import { logOutUser } from "../features/user/userSlise";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components-special/Button";

const PersonamArea = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <p>
        Личный кабинет пользователя <span>{user.name}</span>{" "}
      </p>
      <Button onClick={() => dispatch(logOutUser())} text="LogOut" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  P {
    margin: 1rem;
    font-size: 1rem;
  }
  span {
    color: var(--clr-grey-6);
    font-size: 1.3rem;
  }
  @media (min-width: 576px) {
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
export default PersonamArea;
