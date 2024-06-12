import Forget from "./pages/Forget";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Home />} />
        <Route path="/forget-password" element={<Forget />} />
        <Route path="/reset-password" element={<Reset />} />
      </Routes>
    </Router>
  );
};

export default App;
