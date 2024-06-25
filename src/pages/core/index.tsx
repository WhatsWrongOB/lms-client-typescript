import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../../routes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UpdateProfile from "./UpdateProfilePage";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import SubjectAcademics from "./SubjectAcademics";

// Lazy load components
const Home = lazy(() => import("./Home"));
const Academics = lazy(() => import("./Academics"));
const Feedback = lazy(() => import("./Feedback"));
const Complain = lazy(() => import("./Complain"));
const Profile = lazy(() => import("./Profile"));
const Timetable = lazy(() => import("./Timetable"));
const UpdatePassForm = lazy(() => import("../auth/UpdatePassForm"));

const CoreApp = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/complain" element={<Complain />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/update-password" element={<UpdatePassForm />} />
            <Route path="/subject-academics" element={<SubjectAcademics />} />
            <Route path="/update-profile/:name" element={<UpdateProfile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default CoreApp;
