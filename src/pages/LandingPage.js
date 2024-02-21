import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MapComponent from "../user-components/MapComponent";
import Panel from "../user-components/Panel";
import Button from "../components-special/Button";
import {
  getAll,
  currentObjectHandler,
  secontPanelHandler,
  currentSubCategoryHandler,
} from "../features/user/userSlise";
import { useSelector, useDispatch } from "react-redux";
import SecondPanel from "../user-components/SecondPanel";

const LandingPage = () => {
  const { currentObject, isSecondPanel } = useSelector((store) => store.user);
  const [isPanel, setIsPanel] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      dispatch(currentObjectHandler(""));
      dispatch(secontPanelHandler(false));
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
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
        <Button
          text="Скрыть объекты"
          onClick={() => dispatch(currentSubCategoryHandler({}))}
        />
      </div>
      {currentObject && isSecondPanel && <SecondPanel />}
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
    display: flex;
    right: 20px;
    top: 20px;
    div {
      margin: 0 5px;
    }
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
