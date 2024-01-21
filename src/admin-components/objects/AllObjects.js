import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../components-special/Button";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { getObjects } from "../../features/admin/adminSlice";
import Object from "../objects/Object";

const AllObjects = () => {
  const { objects } = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getObjects());
  }, []);

  return (
    <Wrapper>
      {objects.map((o) => (
        <Object key={o._id} {...o} />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    width: 60%;
    /* height: 95vh; */
    overflow-y: auto;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default AllObjects;
