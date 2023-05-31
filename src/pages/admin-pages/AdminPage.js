import React from "react";
import styled from "styled-components";
import Button from "../../components-special/Button";
import { logOutAdmin } from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";

const AdminPage = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h3>Admin panel</h3>
      <Button onClick={() => dispatch(logOutAdmin())} text="Выход" />
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

export default AdminPage;
