
export interface User {
  _id: string
  id: string;
  email: string;
  username: string;
  department: string;
  isAdmin: boolean;
  profilePicture: string;
}

export interface CourseType {
  _id?: string;
  courseName: string;
  courseCode: string;
  teacherName: string;
}

export interface StudentType {
  id?: string
  _id: string;
  email: string;
  username: string;
  department: string;
  isAdmin: boolean;
  profilePicture: string;
}

export interface FeedbackType {
  _id: string;
  rating: number;
  description: string;
  suggestion?: string;
  user: {
    _id: string;
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ComplainTypes {
  _id: string;
  topic: number;
  description: string;
  file?: string;
  user: {
    _id: string;
    username: string;
  };
}

export interface ContextType {
  students: StudentType[];
  courses: CourseType[];
  complain: ComplainTypes[];
  feedback: FeedbackType[];
  studentLoading: boolean;
  courseLoading: boolean;
  feedbackLoading: boolean;
  complainLoading: boolean;
}