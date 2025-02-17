import React, { useState } from 'react';

const Admin = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make a POST request to add a new book
    try {
      const response = await fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      if (response.ok) {
        alert('Book added successfully!');
        setBook({ title: '', author: '', price: '', description: '' }); // Reset the form
      } else {
        alert('Error adding book.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  // Inline styles
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    height: '100px',
  };

  const buttonStyle = {
    backgroundColor: '#1E40AF',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#3B82F6',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Price:</label>
          <input
            type="number"
            name="price"
            value={book.price}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Description:</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
        </div>
        <button type="submit" style={buttonStyle} onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = '#1E40AF')}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Admin;
