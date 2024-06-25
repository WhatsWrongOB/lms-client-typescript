import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../../components/Navigation";
import { useGetToken, useGetUser, useHandleAxiosError } from "../../hooks";

interface AttendanceRecord {
  date: string;
  status: string;
}

interface Course {
  _id: string;
  courseName: string;
}

const Academics = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const token = useGetToken();
  const user = useGetUser();

  useEffect(() => {
    if (!token) return;

    const fetchCourses = async (): Promise<void> => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/course`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data) setCourses(data.course);
      } catch (error: any) {
        useHandleAxiosError(error);
      }
    };
    fetchCourses();
  }, [token]);

  const fetchAttendance = async (courseId: string) => {
    if (!token) return;
    const userId = user?.id;
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER
        }/api/attendance/user?userId=${userId}&courseId=${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data) setAttendance(data.attendance);
    } catch (error: any) {
      useHandleAxiosError(error);
    }
  };

  useEffect(() => {
    if (selectedCourse) {
      fetchAttendance(selectedCourse);
    }
  }, [selectedCourse]);

  return (
    <>
      <Navigation title="Academics" />
      <main className="academics">
        <div className="academics-container">
          <div className="course-select">
            <label htmlFor="courseSelect" className="course-select-label">
              Select a course:
            </label>
            <select
              id="courseSelect"
              className="course-select-dropdown"
              onChange={(e) => setSelectedCourse(e.target.value)}
              value={selectedCourse}
            >
              <option value="" disabled>
                Select a course
              </option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.courseName}
                </option>
              ))}
            </select>
          </div>

          {attendance.length > 0 ? (
            <div className="attendance-table-container">
              <h3 className="attendance-title">
                Attendance Records for{" "}
                {
                  courses.find((course) => course._id === selectedCourse)
                    ?.courseName
                }
              </h3>
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((record, index) => (
                    <tr key={index}>
                      <td>{new Date(record.date).toLocaleDateString()}</td>
                      <td
                        className={`attendance-status ${record.status.toLowerCase()}`}
                      >
                        {record.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="no-attendance-message">
              No attendance records available for the selected course.
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default Academics;
