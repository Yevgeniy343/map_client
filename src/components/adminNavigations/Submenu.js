import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sublinks } from "../../assets/data";

import styled from "styled-components";

const Submenu = () => {
  const { pageId } = useSelector((store) => store.user);
  console.log(pageId);
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  console.log(currentPage);

  return (
    <Wrapper>
      <div className="submenu">
        <h5>{currentPage?.page}</h5>
        <div
          className="submenu-links"
          style={{
            gridTemplateColumns:
              currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
          }}
        >
          {currentPage?.links?.map((link) => {
            const { id, url, label } = link;
            return <p key={id}>{label}</p>;
          })}
        </div>
      </div>
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
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Submenu;
