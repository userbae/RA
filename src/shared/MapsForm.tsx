import { Map, MapMarker } from "react-kakao-maps-sdk";
import { blueCircle, getLoc, useUser } from "shared";
import { useEffect, useState } from "react";

export function MapsForm() {
  return (
    <>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
      >
        <MapMarker
          position={{ lat: 33.450701, lng: 126.570667 }}
          //이미지
          image={{
            src: `${blueCircle}`,
            size: {
              width: 20,
              height: 20,
            },
          }}
        />
      </Map>
    </>
  );
}
