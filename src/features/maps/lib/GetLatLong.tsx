//위도 경도 구하기
import { SuccessProps, ErrorProps } from "shared";

function success({ pos, setLat, setLong }: SuccessProps) {
  let latitude = pos.coords.latitude;
  let longitude = pos.coords.longitude;
  setLat(latitude);
  setLong(longitude);
}

let options = {
  enableHighAccuracy: true,
};

function error(err: ErrorProps) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

export { success, options, error };
