import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div>
      <Link to="/" className="back-to-home-button">
        Back to Home
      </Link>
      <div className='about'>
        <h1>About Us</h1>
        <p>
          Welcome to our online bookstore! We are passionate about connecting readers with their favorite books
          and introducing them to new literary adventures.
        </p>
        <p>
          Our mission is to provide a convenient platform for book enthusiasts to explore a vast collection of
          titles across different genres. Whether you enjoy fiction, non-fiction, mystery, romance, or science fiction,
          we have something for everyone.
        </p>
        <p>
          Our team is dedicated to creating an enjoyable and seamless experience for our customers. We strive to
          offer a user-friendly interface, secure transactions, and reliable delivery services.
        </p>
        <p>
          Thank you for choosing our online bookstore. Happy reading!
        </p>
      </div>
    </div>
  );
}

export default About;
