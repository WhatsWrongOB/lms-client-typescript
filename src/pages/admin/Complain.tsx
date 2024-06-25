import ComplainCard from "../../components/ComplainCard";
import { useStore } from "../../context";

const Complain = () => {
  const { complain } = useStore();

  return (
    <div className="dashboard">
      <div className="feedback-list">
        {complain.map((item) => (
          <ComplainCard key={item._id} complain={item} />
        ))}
      </div>
    </div>
  );
};

export default Complain;
