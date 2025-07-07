import React from "react";

type StarRatingProps = {
  rating: number; // e.g. 3.5
  maxStars?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <>
      <div className="flex space-x-1">
        {[...Array(maxStars)].map((_, i) => {
          const isFull = i + 1 <= Math.floor(rating);
          const isHalf = i + 1 > rating && i < rating;

          return (
            <svg
              key={i}
              className={`w-5 h-5 ${
                isFull
                  ? "text-yellow-400"
                  : isHalf
                  ? "text-yellow-300"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.9 8.9H24l-7.4 5.4L19.8 24 12 18.6 4.2 24l2.2-7.7L0 10.9h9.1z" />
            </svg>
          );
        })}{" "}
        &nbsp; <span className="opacity-50">({rating})</span>
      </div>
    </>
  );
};

export default StarRating;
