import React, { useState } from 'react';
import './Changepassword.css';
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';
import config from '../config';

const Changepassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.url}/Changepassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({
          username: '',
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        console.error('Failed to change password:', data.error);
        alert('Failed to change password. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password. Please try again.');
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="changepassword-container">
        <div className="changepassword-wrapper">
          <div className="changepassword-form">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Current Password"
                required
              />
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                required
              />
              <button type="submit">Change Password</button>
            </form>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
