import "./App.css";
import { useAuth } from "./hooks/use-auth";
// import { BrowserRouter } from "react-router-dom";

import { PrivateRoutes, PublicRoutes } from "routes";

function App() {
  const { isAuth, email } = useAuth();
  console.log(email);
  return <>{isAuth ? <PrivateRoutes /> : <PublicRoutes />}</>;
}

export default App;
