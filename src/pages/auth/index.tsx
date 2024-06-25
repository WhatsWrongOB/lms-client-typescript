import { lazy } from "react";

import "../../styles/form.css";


const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Forget = lazy(() => import("./Forget"));
const ForgetForm = lazy(() => import("./ForgetForm"));
const Reset = lazy(() => import("./Reset"));
const Verify = lazy(() => import("./Verify"));
const VerifyForm = lazy(() => import("./VerifyForm"));
const UpdatePassForm = lazy(() => import("./UpdatePassForm"));

export {
  Login,
  Register,
  Forget,
  ForgetForm,
  Reset,
  Verify,
  VerifyForm,
  UpdatePassForm,
};
