import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminRoute, ProtectedRoute } from "../../routes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UpdateProfile from "./UpdateProfilePage";
import Error from "../../components/Error";

// Lazy load components
const Home = lazy(() => import("./Home"));
const Academics = lazy(() => import("./Academics"));
const Feedback = lazy(() => import("./Feedback"));
const Complain = lazy(() => import("./Complain"));
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Timetable = lazy(() => import("./Timetable"));
const UpdatePassForm = lazy(() => import("../auth/UpdatePassForm"));

const CoreApp = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="core_center">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/complain" element={<Complain />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/update-password" element={<UpdatePassForm />} />
            <Route path="/update-profile/:name" element={<UpdateProfile />} />
          </Route>
          {/* Admin Routes */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default CoreApp;
