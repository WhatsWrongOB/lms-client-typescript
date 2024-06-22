import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Forget,
  ForgetForm,
  Login,
  Register,
  Reset,
  UpdatePassForm,
  Verify,
  VerifyForm,
} from "./pages/auth";
import CoreApp from "./pages/core";
import Error from "./components/Error";
import { ProtectedRoute } from "./routes";

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
        <Route element={<ProtectedRoute />}>
          <Route path="/update-password" element={<UpdatePassForm />} />
        </Route>
        <Route path="/lms/*" element={<CoreApp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default App;
