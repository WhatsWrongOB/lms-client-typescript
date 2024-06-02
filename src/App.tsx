import Forget from "./pages/Forget";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
      </Routes>
    </Router>
  );
};

export default App;
