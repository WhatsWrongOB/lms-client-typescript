import { toast } from "react-hot-toast";
import Navigation from "../../components/Navigation";
import axios from "axios";
import {
  useAxiosConfiguration,
  useHandleAxiosError,
} from "../../hooks";
import { ChangeEvent, useState } from "react";
import { ClipLoader } from "react-spinners";

interface ComplainDetails {
  topic: string;
  description: string;
  file: string; 
}

const Complain = () => {
  const [formData, setFormData] = useState<ComplainDetails>({
    topic: "",
    description: "",
    file: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "file" && e.target instanceof HTMLInputElement) {
      const files = e.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        const fileReader = new FileReader();

        fileReader.onload = () => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            file: fileReader.result as string,
          }));
        };

        fileReader.onerror = () => {
          toast.error("Failed to read the file. Please try again.");
        };

        fileReader.readAsDataURL(file);
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const { topic, description, file } = formData;

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/complain`,
        { topic, description, file },
        useAxiosConfiguration()
      );

      if (data?.success) {
        toast.success(data.message);
        setFormData({
          topic: "",
          description: "",
          file: "",
        });
      }
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation title="Complaints" />
      <main className="feedback">
        <div className="feedback_container">
          <form onSubmit={handleSubmit}>
            <div className="complain_topic">
              <h1>Topic :</h1>
              <select
                name="topic"
                onChange={handleChange}
                value={formData.topic}
              >
                <option value="">--Select--</option>
                <option value="online system">Online System</option>
                <option value="cr">Class Representative</option>
                <option value="mis info">Mis information</option>
              </select>
            </div>
            <div>
              <h1>Description :</h1>
              <input
                type="text"
                placeholder="Tell us more about your complaint"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div id="file">
              <h1>File : (optional) </h1>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                accept="image/*"
              />
            </div>
            <button type="submit">
              {loading ? (
                <ClipLoader color="white" loading={loading} size={10} />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Complain;
