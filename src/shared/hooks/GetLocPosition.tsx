//지역명 구하기

import { ResultProps, useGetLocProps } from "shared";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export function getLoc(lat: number, long: number) {
  let geocoder = new kakao.maps.services.Geocoder();
  let { locE } = UseGetLoc();
  let coord = new kakao.maps.LatLng(lat, long);
  let callback = function (
    result: ResultProps[],
    status: "OK" | "ERROR" | "ZERO_RESULT"
  ) {
    if (status === kakao.maps.services.Status.OK) {
      if (
        result[0].address.region_3depth_name !==
        JSON.parse(localStorage.getLoc).state.name3
      ) {
        locE(
          result[0].address.region_1depth_name,
          result[0].address.region_2depth_name,
          result[0].address.region_3depth_name
        );
      }
    }
  };

  geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
}

export const UseGetLoc = create(
  persist<useGetLocProps>(
    (set) => ({
      name1: "",
      name2: "",
      name3: "",
      locE: (name1, name2, name3) =>
        set(() => ({
          name1,
          name2,
          name3,
        })),
    }),
    { name: "getLoc" }
  )
);
