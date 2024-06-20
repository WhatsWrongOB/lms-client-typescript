import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import FormApp from "./pages/forms";
import ProtectedRoute from "./routes";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/*" element={<FormApp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
