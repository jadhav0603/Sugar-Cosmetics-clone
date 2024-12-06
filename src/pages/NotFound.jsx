import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '72px',
    color: '#ff6b6b',
  },
  message: {
    fontSize: '24px',
    color: '#333',
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#ff6b6b',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: '#d53a3a',
  },
};

export default NotFound;
