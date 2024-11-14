import React from 'react';

// Import star images (for filled and empty stars)
import big from '../Assets/Images/star.png';  // Filled star
import emptyStar from '../Assets/Images/emptystar.png'; // Empty star (define this image)

const StarRating = ({ rating }) => {
  // Create an array of 5 items (for 5 stars)
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex">
      {stars.map((star, index) => (
        <img
          key={index}
          // Use filled star if index is less than rating, else use empty star
          src={index < rating ? big : emptyStar}
          alt="star"
          className="w-5 opacity-80"
        />
      ))}
    </div>
  );
};

export default StarRating;
