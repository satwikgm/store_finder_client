import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f8ff", // Light blue background
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "2em",
    marginBottom: "20px",
    color: "#0073e6", // Blue color
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textarea: {
    marginBottom: "20px",
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  ratingLabel: {
    margin: "0 5px",
    fontSize: "1em",
    color: "#003d99", // Even darker blue for details
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "1em",
    backgroundColor: "#0073e6", // Blue background
    color: "#ffffff", // White text
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    alignSelf: "center",
  },
};

const AddReview = () => {
  const { storeId, userId } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:9091/api/reviews/${storeId}/${userId}`, { comment, rating });
      navigate(`/stores/${storeId}`);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add Review</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <textarea 
          style={styles.textarea}
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          placeholder="Add your comment"
        />
        <div style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num} style={styles.ratingLabel}>
              <input 
                type="radio" 
                value={num} 
                checked={rating === num} 
                onChange={() => setRating(num)} 
              />
              {num}
            </label>
          ))}
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
