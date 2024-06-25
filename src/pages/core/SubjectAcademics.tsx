import { useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation";

const SubjectAcademics = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const courseCode = searchParams.get("courseCode");

  return (
    <>
      <Navigation title="Subject Academics" />
      <main className="subject_academics">
        <p>{courseCode}</p>
      </main>
    </>
  );
};

export default SubjectAcademics;
