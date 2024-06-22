import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Forget,
  ForgetForm,
  Login,
  Register,
  Reset,
  Verify,
  VerifyForm,
} from "./pages/auth";
import CoreApp from "./pages/core";
import Error from "./components/Error";


const App = () => {
  return (
    <Suspense
      fallback={
        <div className="center">
          <div className="loader"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verify-email" element={<VerifyForm />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/forget-password" element={<ForgetForm />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/lms/*" element={<CoreApp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default App;
