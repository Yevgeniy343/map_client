import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logOutUser } from "../features/user/userSlise";
import React, { useEffect } from "react";

const PersonamArea = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button onClick={() => dispatch(logOutUser())}>LogOut</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
