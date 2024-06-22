import { useEffect, useState } from "react";

const StarRating = ({
  totalStars = 5,
  onRatingChange,
  currentRating,
}: {
  totalStars: number;
  onRatingChange: (ratingValue: number) => void;
  currentRating: number;
}) => {

  useEffect(() => {
    setRating(currentRating);
  }, [currentRating]);
  
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleRating = (ratingValue: number) => {
    setRating(ratingValue);
    if (onRatingChange) {
      onRatingChange(ratingValue);
    }
  };

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`star ${index < (hover || rating) ? "filled" : ""}`}
          onClick={() => handleRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
