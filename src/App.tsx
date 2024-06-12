import Forget from "./pages/forms/Forget";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Reset from "./pages/forms/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Verify from "./pages/forms/Verify";
import VerifyForm from "./pages/forms/VerifyForm";
import ForgetForm from "./pages/forms/ForgetForm";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verify-email" element={<VerifyForm />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/forget-password" element={<ForgetForm />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
