import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  YMaps,
  Map,
  ZoomControl,
  Placemark,
  Polygon,
} from "@pbe/react-yandex-maps";
import polygonCoordinates from "../data";
import _ from "lodash";
import {
  currentObjectHandler,
  secontPanelHandler,
} from "../features/user/userSlise";

const MapComponent = () => {
  const { currentSubCategory, objects } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const thisObjects = _.filter(objects, {
    subcategory: currentSubCategory?.name,
  });

  const pointHandler = (point) => {
    dispatch(currentObjectHandler(point));
    dispatch(secontPanelHandler(true));
  };

  return (
    <Wrapper>
      <YMaps>
        <Map
          state={{
            center: [55.59, 38.11],
            zoom: 12,
            controls: [],
          }}
          width="100vw"
          height="100vh"
        >
          {thisObjects?.map((o) => (
            <Placemark
              key={o._id}
              geometry={[o.location.lat, o.location.long]}
              // geometry={[55.57, 38.08]}
              options={{
                iconLayout: "default#image",
                iconImageHref: require(`../images/${currentSubCategory.imageName}.svg`),
                iconImageSize: [40, 30],
                // iconImageOffset: [-3, -42],
              }}
              onClick={() => pointHandler(o._id)}
            />
          ))}
          <Polygon
            geometry={[polygonCoordinates]}
            options={{
              fillColor: "#fcbad3",
              strokeColor: "#bf215b",
              strokeWidth: 3,
              opacity: 0.3,
            }}
          />
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </YMaps>
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
export default MapComponent;
