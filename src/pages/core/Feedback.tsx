import { useState } from "react";
import Navigation from "../../components/Navigation";
import StarRating from "../../components/Star";
import { toast } from "react-hot-toast";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useAxiosConfiguration, useHandleAxiosError } from "../../hooks";

const Feedback = () => {
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRatingChange = (newRating: number): void => {
    setRating(newRating);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);

      if (rating === 0) {
        toast.error("Please select a rating.");
        return;
      }

      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/feedback`,
        { rating, description, suggestion },
        useAxiosConfiguration()
      );
      if (data?.success) {
        toast.success(data.message);
        setRating(0);
        setDescription("");
        setSuggestion("");
      }
    } catch (error: any) {
      useHandleAxiosError(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation title="Feedback & Suggestions" />
      <main className="feedback">
        <div className="feedback_container">
          <form onSubmit={handleSubmit}>
            <div>
              <h1>Your Experience : </h1>
              <div className="stars">
                <StarRating
                  totalStars={5}
                  onRatingChange={handleRatingChange}
                  currentRating={rating}
                />
              </div>
            </div>
            <div>
              <h1>Description :</h1>
              <input
                type="text"
                placeholder="Tell us about your experience"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <h1>Suggestion : </h1>
              <input
                type="text"
                placeholder="Give us suggestions"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
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

export default Feedback;
