import React, { useEffect } from "react";
import "./Location.css";

const { kakao } = window;

const Location = ({ deliver }) => {
  const { locationX, locationY } = deliver;
  console.log(locationX);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(locationX, locationY),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(locationX, locationY);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      text: "거래 장소",
    });
    marker.setMap(map);
  });

  return (
    <div>
      <div id="map" style={{ width: "350px", height: "400px" }}></div>
    </div>
  );
};

export default Location;
