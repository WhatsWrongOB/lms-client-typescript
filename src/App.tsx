import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Error from "./pages/Error";
import FormApp from "./pages/forms";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/*" element={<FormApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
