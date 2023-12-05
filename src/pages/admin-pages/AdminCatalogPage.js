import React from "react";
import styled from "styled-components";
import AdminNavBar from "../../admin-components/navigation/AdminNavBar";
import AdminSideBar from "../../admin-components/navigation/AdminSideBar";
import NewCategory from "../../admin-components/catalog/NewCategory";
import AllCategories from "../../admin-components/catalog/AllCategories";

const AdminCatalogPage = () => {
  return (
    <>
      <AdminNavBar />
      <AdminSideBar />
      <Wrapper>
        <p className="page-header">Каталог</p>
        <div className="catalog">
          <NewCategory />
          <AllCategories />
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding: 1rem;
  .catalog {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    border: 1px solid gray;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .catalog {
      display: flex;
      flex-direction: row;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default AdminCatalogPage;
