import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import FormApp from "./pages/forms";
import { ProtectedRoute } from "./routes";
import Academics from "./pages/Academics";
import Feedback from "./pages/Feedback";


const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/*" element={<FormApp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
