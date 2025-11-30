import React, { useState } from "react";
import { mockData } from "../data/mockData";

const Review = () => {

  let [review, setReview] = useState(mockData[0]); // Start with id = 1

  function prevReview(id) {
    let newId = id - 1;

    // CIRCULAR NAVIGATION (Required by Cypress)
    if (newId < 1) newId = 4;

    const newData = mockData.find(data => data.id === newId);
    setReview(newData);
  }

  function nextReview(id) {
    let newId = id + 1;

    // CIRCULAR NAVIGATION
    if (newId > 4) newId = 1;

    const newData = mockData.find(data => data.id === newId);
    setReview(newData);
  }

  function random(id) {
    let newId = id;

    // Keep generating until different
    while (newId === id) {
      newId = Math.floor(Math.random() * 4) + 1;
    }

    const newData = mockData.find(data => data.id === newId);
    setReview(newData);
  }

  return (
    <div className="review">

      <div key={review.id}>
        <img src={review.image} alt={review.name} className="person-img" />
        <h2 className="author" id={"author-" + review.id}>{review.name}</h2>
        <h3 className="job">{review.job}</h3>
        <p className="info">{review.text}</p>
      </div>

      {/* Buttons must be inside .review for Cypress */}
      <button className="prev-btn" onClick={() => prevReview(review.id)}>Previous</button>
      <button className="next-btn" onClick={() => nextReview(review.id)}>Next</button>
      <button className="random-btn" onClick={() => random(review.id)}>surprise me</button>
    </div>
  );
}

export default Review;
