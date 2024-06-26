import { useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation";
import AttendanceTable from "../../components/AttendanceTable";
import MarksTable from "../../components/MarksTable";

const SubjectAcademics = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const courseCode = searchParams.get("courseCode");
  const courseName = searchParams.get("courseName");

  return (
    <>
      <Navigation title="Subject Academics" />
      <main className="subject_academics">
        <div className="subject_academics_container">
          <AttendanceTable courseName={courseName} courseCode={courseCode} />
          <MarksTable
            heading={"Assignment Marks"}
            tableHeading={["A1", "A2", "A3", "A4","TTL"]}
            tableMarks={["1", "1", "1", "1"]}
          />
          <MarksTable
            heading={"Total Marks"}
            tableHeading={["A*", "Pt", "Att", "Mid","TTL"]}
            tableMarks={["1", "1", "1", "1"]}
          />
        </div>
      </main>
    </>
  );
};

export default SubjectAcademics;
