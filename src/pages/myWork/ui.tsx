import { db, MapsForm, useUser } from "shared";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Dome = [
  {
    id: 1,
    loc: "인천시 미추홀구 주안",
    save: [],
  },
];

export const MyWork = () => {
  const { uid } = useUser();

  useEffect(() => {});
  return (
    <>
      <From />
    </>
  );
};

const From = () => {
  return (
    <div className="h-1/2 flex flex-col">
      <div>지역명</div>
      <div>날짜</div>
      <div className="flex-1">
        <MapsForm />
      </div>
    </div>
  );
};
