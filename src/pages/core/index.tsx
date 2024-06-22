import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminRoute, ProtectedRoute } from "../../routes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = lazy(() => import("./Home"));
const Academics = lazy(() => import("./Academics"));
const Feedback = lazy(() => import("./Feedback"));
const Complain = lazy(() => import("./Complain"));
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Timetable = lazy(() => import("./Timetable"));

const CoreApp = () => {
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="center">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/complain" element={<Complain />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/timetable" element={<Timetable />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default CoreApp;
