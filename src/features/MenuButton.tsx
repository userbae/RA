import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { FaX } from "react-icons/fa6";
import { useLogout as Logout, useUser } from "shared";
import { Link } from "react-router-dom";

export function MenuButton() {
  let [isTrue, setIsTrue] = useState<boolean>(false);

  return (
    <div>
      <div onClick={() => setIsTrue(!isTrue)} className="hover:cursor-pointer">
        <IoMenuOutline />
      </div>

      <MenuList isTrue={isTrue} setIsTrue={setIsTrue} />
    </div>
  );
}

function MenuList(props: {
  isTrue: boolean;
  setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { displayName, photoURL } = useUser();
  return (
    <div
      className={`${
        props.isTrue ? "block" : "hidden"
      } absolute z-50 right-0 top-0 w-2/3 md:mx-32 md:w-1/4 h-dvh bg-blue-300 
      p-5 `}
    >
      <header className="flex justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={`${photoURL}`} className="rounded-full size-10" />
          <div>{displayName}</div>
        </div>
        <button
          onClick={() => {
            props.setIsTrue(!props.isTrue);
          }}
        >
          <FaX />
        </button>
      </header>

      <main className="flex flex-col gap-3">
        <Link to="/">홈</Link>
        <Link to="/myWork">내 운동</Link>
        <Link to="/Community">커뮤니티</Link>
      </main>

      <footer className="flex flex-col">
        <button
          onClick={() => {
            Logout();
          }}
        >
          로그아웃
        </button>
      </footer>
    </div>
  );
}
