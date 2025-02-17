import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Inline styles
  const containerStyle = {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1E40AF",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#555",
    margin: "10px 0",
  };

  const priceStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Book Store</h1>
      <ul style={listStyle}>
        {books.map((book) => (
          <li key={book._id} style={listItemStyle}>
            <h2 style={titleStyle}>{book.title}</h2>
            <p style={descriptionStyle}>{book.description}</p>
            <p style={priceStyle}>
              <strong>Price:</strong> ${book.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
