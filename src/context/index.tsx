import {
  ReactNode,
  useState,
  useEffect,
  createContext,
  FC,
  useContext,
} from "react";
import axios from "axios";
import {
  ComplainTypes,
  ContextType,
  CourseType,
  FeedbackType,
  StudentType,
} from "../types";
import { useGetToken, useHandleAxiosError } from "../hooks";

const AppContext = createContext<ContextType | null>(null);

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const token = useGetToken();
  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [courses, setCourses] = useState<CourseType[]>([]);
  const [students, setStudents] = useState<StudentType[]>([]);
  const [feedback, setFeedback] = useState<FeedbackType[]>([]);
  const [complain, setComplain] = useState<ComplainTypes[]>([]);
  const [globalLoading, setGlobalLoading] = useState({
    studentLoading: false,
    courseLoading: false,
    feedbackLoading: false,
    complainLoading: false,
  });
  const { studentLoading, courseLoading, feedbackLoading, complainLoading } =
    globalLoading;

  const setLoadingState = (key: keyof typeof globalLoading, value: boolean) => {
    setGlobalLoading((prevState) => ({ ...prevState, [key]: value }));
  };

  // Fetch Students
  const fetchStudents = async (): Promise<void> => {
    setLoadingState("studentLoading", true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/users`,
        configuration
      );
      setStudents(data);
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoadingState("studentLoading", false);
    }
  };

  // Fetch Courses
  const fetchCourses = async (): Promise<void> => {
    setLoadingState("courseLoading", true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/course`,
        configuration
      );
      setCourses(data.course);
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoadingState("courseLoading", false);
    }
  };

  // Fetch Feedback
  const fetchFeedback = async (): Promise<void> => {
    setLoadingState("feedbackLoading", true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/feedback`,
        configuration
      );
      setFeedback(data.feedback);
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoadingState("feedbackLoading", false);
    }
  };

  // Fetch Complain
  const fetchComplain = async (): Promise<void> => {
    setLoadingState("complainLoading", true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/complain`,
        configuration
      );
      setComplain(data.complain);
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoadingState("complainLoading", false);
    }
  };

  useEffect(() => {
    if (!token) {
      console.log("Token Not In Context");
      return;
    }

    fetchStudents();
    fetchCourses();
    fetchFeedback();
    fetchComplain();
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        students,
        courses,
        feedback,
        complain,
        studentLoading,
        courseLoading,
        feedbackLoading,
        complainLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useStore = (): ContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("UseStore must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useStore };
