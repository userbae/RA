import { Router } from "app/Router";
import { auth } from "shared";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in
        setIsAuthenticated(true);
      } else {
        // logged out
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);
  return <>{init ? <Router isAuthenticated={isAuthenticated} /> : <></>}</>;
}

export default App;
