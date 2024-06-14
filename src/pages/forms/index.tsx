import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Forget = lazy(() => import("./Forget"));
const ForgetForm = lazy(() => import("./ForgetForm"));
const Reset = lazy(() => import("./Reset"));
const Verify = lazy(() => import("./Verify"));
const VerifyForm = lazy(() => import("./VerifyForm"));


const FormApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verify-email" element={<VerifyForm />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/forget-password" element={<ForgetForm />} />
        <Route path="/reset-password" element={<Reset />} />
      </Routes>
    </Suspense>
  );
};

export default FormApp