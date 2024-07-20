import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import {
  useAxiosConfiguration,
  useGetUser,
  useHandleAxiosError,
  useSetUser,
} from "../../hooks";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";

const UpdateProfile = () => {
  const { name } = useParams();
  const user = useGetUser();
  const [username, setUsername] = useState<string | undefined>(user?.username);
  const [department, setDepartment] = useState<string | undefined>(
    user?.department
  );
  const [profilePicture, setProfilePicture] = useState<string | undefined>(
    user?.profilePicture
  );
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.patch(
        `${import.meta.env.VITE_SERVER}/api/update-profile`,
        { username, profilePicture, department },
        useAxiosConfiguration()
      );

      if (data?.success) {
        toast.success(data.message);
        localStorage.removeItem("CurrentUser");
        useSetUser(data?.user);
      }
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation title={`Update ${name}'s Profile`} />
      <div className="card_form">
        <img
          className="logo"
          src={profilePicture}
          id="update_img"
          onClick={handleImageClick}
        />
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <select
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option>--- Select Depart ---</option>
            <option value="bsse">BSSE</option>
            <option value="bscs">BSCS</option>
            <option value="bsit">BSIT</option>
          </select>
          <button type="submit">
            {loading ? (
              <ClipLoader color="white" loading={loading} size={10} />
            ) : (
              "Update"
            )}
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept="image/*"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
