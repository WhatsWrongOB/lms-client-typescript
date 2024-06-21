import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {  ProtectedRoute } from "../../routes";
import "../../styles/form.css"

const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Forget = lazy(() => import("./Forget"));
const ForgetForm = lazy(() => import("./ForgetForm"));
const Reset = lazy(() => import("./Reset"));
const Verify = lazy(() => import("./Verify"));
const VerifyForm = lazy(() => import("./VerifyForm"));
const UpdatePassForm = lazy(() => import("./UpdatePassForm"));

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
        <Route element={<ProtectedRoute />}>
          <Route path="/update-password" element={<UpdatePassForm />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default FormApp;
