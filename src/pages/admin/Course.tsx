import { useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-hot-toast";
import { FaCouch, FaCode, FaTeamspeak } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useGetToken, useHandleAxiosError } from "../../hooks";
import CourseTable from "../../components/CourseTable";

export interface CourseDetails {
  _id?: string;
  courseName: string;
  courseCode: string;
  teacherName: string;
}

const Course = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<CourseDetails>({
    courseName: "",
    courseCode: "",
    teacherName: "",
  });
  const [courses, setCourses] = useState<CourseDetails[]>([]);
  const columns = ["Course Name", "Course Code", "Teacher Name"];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const token = useGetToken();
    if (!token) return;

    const { courseName, courseCode, teacherName } = formData;

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/course`,
        { courseName, courseCode, teacherName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (data?.success) {
        toast.success(data.message);
        setFormData({ courseName: "", courseCode: "", teacherName: "" });
      }
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = useGetToken();

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
  }, [handleSubmit]);

  return (
    <>
      <main className="auth lms_auth dashboard dashboard_courses">
        <div className="auth_container lms_auth_container">
          <form
            className="auth_form lms_form dashboard_course_form"
            onSubmit={handleSubmit}
          >
            <div className="group">
              <FaCouch size={15} color="gray" />
              <input
                type="text"
                name="courseName"
                placeholder="Course Name"
                value={formData.courseName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <FaCode size={15} color="gray" />
              <input
                type="text"
                name="courseCode"
                placeholder="Course Code"
                value={formData.courseCode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <FaTeamspeak size={15} color="gray" />
              <input
                type="text"
                name="teacherName"
                placeholder="Teacher Name"
                value={formData.teacherName}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">
              {loading ? (
                <ClipLoader color="white" loading={loading} size={10} />
              ) : (
                "Create"
              )}
            </button>
          </form>
        </div>
      </main>
      <div className="dashboard">
        <CourseTable columns={columns} data={courses} />
      </div>
    </>
  );
};

export default Course;
