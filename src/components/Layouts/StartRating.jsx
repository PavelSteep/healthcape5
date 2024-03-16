import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      if (i + 0.5 < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Звезда полностью заполнена
      } else {
        stars.push(<span key={i}>&#9734;&#9734;</span>); // Половина заполнена
      }
    } else {
      stars.push(<span key={i}>&#9734;&#9734;&#9734;</span>); // Пустая звезда
    }
  }
  return <div className="star-rating">{stars}</div>;
};

export default StarRating;