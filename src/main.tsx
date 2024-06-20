import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { AuthContextProvider } from "./context/authContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
