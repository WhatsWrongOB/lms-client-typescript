import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import FormApp from "./pages/auth";
import CoreApp from "./pages/core";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/*" element={<FormApp />} />
        <Route path="/lms*" element={<CoreApp />} />
      </Routes>
    </Router>
  );
};

export default App;
