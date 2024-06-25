import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { useGetToken, useHandleAxiosError } from "../../hooks";
import axios from "axios";
import { User } from "../../types";

const Student = () => {
  const [students, setStudents] = useState<User[]>([]);
  const columns = ["Name", "Email", "Department"];

  useEffect(() => {
    const token = useGetToken();

    if (!token) return;

    const fetchStudents = async (): Promise<void> => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data) setStudents(data);
      } catch (error: any) {
        useHandleAxiosError(error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="dashboard">
      <Table columns={columns} data={students} />
    </div>
  );
};

export default Student;
