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
import polygonCoordinates from "../../data";

const MapComponent = () => {
  const dispatch = useDispatch();
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
          {/* {allApartments?.map((a) => ( */}
          <Placemark
            // key={a._id}
            // geometry={[a.location.lat, a.location.long]}
            geometry={[55.38, 38.11]}
            options={{
              iconLayout: "default#image",
              // iconImageHref: point,
              iconImageSize: [40, 30],
              // iconImageOffset: [-3, -42],
            }}
            // onClick={() => listViewHandler(a._id)}
          />
          {/* ))} */}
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
