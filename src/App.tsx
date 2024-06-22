import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import FormApp from "./pages/forms";
import CoreApp from "./pages";

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
