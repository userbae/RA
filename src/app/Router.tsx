import { Community, HomePage, LoginPage, MyWork } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutHeader } from "widget";

interface RouterProps {
  isAuthenticated: boolean;
}

export function Router({ isAuthenticated }: RouterProps) {
  return (
    <div>
      {isAuthenticated ? (
        <div className="flex flex-col h-dvh xl:mx-80">
          <div>
            <LayoutHeader />
          </div>
          <div className="flex-1 relative ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/myWork" element={<MyWork />} />
              <Route path="/community" element={<Community />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      )}
    </div>
  );
}
