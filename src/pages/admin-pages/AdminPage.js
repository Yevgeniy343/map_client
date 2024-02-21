import React from "react";
import styled from "styled-components";
import AdminNavBar from "../../admin-components/navigation/AdminNavBar";
import AdminSideBar from "../../admin-components/navigation/AdminSideBar";

const AdminPage = () => {
  return (
    <>
      <AdminNavBar />
      <AdminSideBar />
      <Wrapper></Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
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
