import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <AppProvider>
      <Toaster />
      <App />
    </AppProvider>
  </Router>
);
