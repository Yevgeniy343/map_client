import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MapComponent from "../user-components/MapComponent";
import Panel from "../user-components/Panel";
import Button from "../components-special/Button";
import { getAll } from "../features/user/userSlise";
import { useSelector, useDispatch } from "react-redux";

const LandingPage = () => {
  const [isPanel, setIsPanel] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <Wrapper>
      <MapComponent />
      {isPanel && <Panel />}
      <div className="action">
        <Button
          text={isPanel ? "Скрыть панель" : "Показать панель"}
          onClick={() => setIsPanel(!isPanel)}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .action {
    position: absolute;
    right: 20px;
    top: 20px;
  }
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
export default LandingPage;
