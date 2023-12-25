import React from "react";
import styled from "styled-components";
import AdminNavBar from "../../admin-components/navigation/AdminNavBar";
import AdminSideBar from "../../admin-components/navigation/AdminSideBar";
import NewObject from "../../admin-components/objects/NewObject";
import AllObjects from "../../admin-components/objects/AllObjects";

const ObjectPage = () => {
  return (
    <>
      <AdminNavBar />
      <AdminSideBar />
      <Wrapper>
        <p className="page-header">Объекты</p>
        <div className="object">
          <NewObject />
          <AllObjects />
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  font-family: "Montserrat Alternates", sans-serif;

  padding: 10px;
  .object {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    /* border: 1px solid gray; */
  }

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .object {
      flex-direction: row;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default ObjectPage;
