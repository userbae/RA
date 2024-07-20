import { useNavigate } from "react-router-dom";

export function Community() {
  let navigate = useNavigate();
  return (
    <div className="">
      <button
        onClick={() => navigate(`/`)}
        className="bg-slate-400 w-full h-12   hover:bg-slate-700 "
      >
        글쓰기
      </button>
    </div>
  );
}

const CForm = () => {
  return <></>;
};
