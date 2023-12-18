import React, { useEffect } from "react";
import styled from "styled-components";
import AdminNavBar from "../../admin-components/navigation/AdminNavBar";
import AdminSideBar from "../../admin-components/navigation/AdminSideBar";
import NewCategory from "../../admin-components/catalog/NewCategory";
import { getCategories } from "../../features/admin/adminSlice";
import Category from "../../admin-components/catalog/Category";
import { useSelector, useDispatch } from "react-redux";

const AdminCatalogPage = () => {
  const { categories, isLoading } = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <AdminNavBar />
      <AdminSideBar />
      <Wrapper>
        <p className="page-header">Категории</p>
        <div className="catalog">
          <NewCategory />
          <div className="categories">
            {categories.map((category) => (
              <Category key={category._id} {...category} />
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding: 1rem;
  .categories {
    height: 80vh;
    overflow-y: auto;
  }
  .catalog {
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
    .categories {
      width: 600px;
    }
    .catalog {
      flex-direction: row;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default AdminCatalogPage;
