import Table from "../../components/Table";
import { useStore } from "../../context";

const Student = () => {
  const { students } = useStore();
  const columns = ["Name", "Email", "Department"];

  return (
    <div className="dashboard">
      <Table columns={columns} data={students} />
    </div>
  );
};

export default Student;
