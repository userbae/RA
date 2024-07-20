import { Map, MapMarker } from "react-kakao-maps-sdk";
import { blueCircle, getLoc, useUser } from "shared";
import { success, options, error, StartButton, SavePosition } from "./lib";
import { useEffect, useState } from "react";

export function Maps() {
  let [lat, setLat] = useState<number>(0);
  let [long, setLong] = useState<number>(0);
  let [start, setStart] = useState<boolean>(false);

  //모바일 때 버튼 보이게
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  getLoc(lat, long);
  if (start) {
    SavePosition({ lat, long });
  }
  useEffect(() => {
    navigator.geolocation.watchPosition(
      (pos) => success({ pos, setLat, setLong }),
      error,
      options
    );
  }, [lat, long]);

  return (
    <>
      <Map
        center={{ lat: lat, lng: long }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
      >
        <MapMarker
          position={{ lat: lat, lng: long }}
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
      {isMobile ? (
        <StartButton start={start} setStart={setStart} lat={lat} long={long} />
      ) : null}
    </>
  );
}
