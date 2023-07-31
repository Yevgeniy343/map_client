import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

const SubmenuNav = () => {
  const { submenuLocation } = useSelector((store) => store.user);
  console.log(submenuLocation);

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    submenu.style.left = `${submenuLocation.left}px`;
    submenu.style.top = `${submenuLocation.bottom + 32}px`;
  }, [submenuLocation]);

  return (
    <Wrapper ref={container}>
      <div>
        <p>wefcewfewf</p>
      </div>
      <div>
        <p>wefcewfewf</p>
      </div>
      <div>
        <p>wefcewfewf</p>
      </div>
      <div>
        <p>wefcewfewf</p>
      </div>
      <div>
        <p>wefcewfewf</p>
      </div>
      <div>
        <p>wefcewfewf</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 200px;
  background-color: var(--blue-3);

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

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
export default SubmenuNav;
