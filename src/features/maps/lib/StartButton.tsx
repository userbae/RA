import { addDoc, collection } from "firebase/firestore";
import { DeletePosition } from "./DeletePosition";
import { db, useUser } from "shared";
import { UseGetLoc } from "shared/hooks/GetLocPosition";

export function StartButton(props: {
  lat: number;
  long: number;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { start, setStart, lat, long } = props;
  const { uid } = useUser();
  const { name1, name2, name3 } = UseGetLoc();

  const OnClickStart = async () => {
    if (start == false) {
      setStart(!start);
    } else {
      await addDoc(collection(db, `${uid}`), {
        location: `${name1} ,${name2}, ${name3}`,
        save: localStorage.SAVE,
        createdAt: new Date()?.toLocaleString(),
      });

      localStorage.removeItem("SAVE");

      setStart(!start);
      DeletePosition();
    }
  };

  return (
    <div className="z-40 absolute bottom-20 w-full flex justify-center md:mx-3">
      <button
        className={`p-2 w-36 rounded-xl ${
          start ? "bg-red-400" : "bg-blue-500"
        }`}
        onClick={() => {
          setStart(!start);

          if (start) {
            OnClickStart();
          }
        }}
      >
        {start ? "종료" : "시작"}
      </button>
    </div>
  );
}
