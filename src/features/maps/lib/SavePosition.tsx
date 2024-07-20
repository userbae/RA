//위도 경도 로컬 저장
export function SavePosition(props: { lat: number; long: number }) {
  const { lat, long } = props;
  if (localStorage.SAVE == null) {
    localStorage.setItem("SAVE", JSON?.stringify([{ lat, long }]));
  } else {
    let copySave = JSON?.parse(localStorage.SAVE);
    copySave.push({ lat, long });
    localStorage.setItem("SAVE", JSON?.stringify(copySave));
  }
}
