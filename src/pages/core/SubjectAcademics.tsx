import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation";
import AttendanceTable from "../../components/AttendanceTable";
import MarksTable from "../../components/MarksTable";
import { useGetToken, useHandleAxiosError } from "../../hooks";
import axios from "axios";
import TotalMarksTable from "../../components/TotalMarksTable";
import { MarksTypes } from "../../types";

const SubjectAcademics = () => {
  const token = useGetToken();
  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [marks, setMarks] = useState<MarksTypes | null>(null);
  const searchParams = new URLSearchParams(useLocation().search);
  const courseCode = searchParams.get("courseCode") || "N/A";
  const courseName = searchParams.get("courseName") || "N/A";
  const courseId = searchParams.get("courseId");

  const fetchStudentMarks = async (): Promise<void> => {
    try {
      const { data } = await axios.get<MarksTypes>(
        `${import.meta.env.VITE_SERVER}/api/marks/${courseId}`,
        configuration
      );
      setMarks(data);
    } catch (error: any) {
      useHandleAxiosError(error);
    }
  };

  useEffect(() => {
    if (courseId) {
      fetchStudentMarks();
    }
  }, [courseId]);

  console.log(marks);

  return (
    <>
      <Navigation title="Subject Academics" />
      <main className="subject_academics">
        <div className="subject_academics_container">
          <AttendanceTable courseName={courseName} courseCode={courseCode} />

          <MarksTable
            heading={"Assignment Marks"}
            tableHeading={["A1", "A2", "A3", "A4", "TTL"]}
            tableMarks={marks}
          />
          <TotalMarksTable
            heading={"Total Marks"}
            tableHeading={["A*", "Pt", "Att", "Mid", "TTL"]}
            tableMarks={marks}
          />
        </div>
      </main>
    </>
  );
};

export default SubjectAcademics;
