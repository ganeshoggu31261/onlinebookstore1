import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar3 from './Navbar3';
import config from '../config';
// import './AdminUser.css'


const AdminUser = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (users === null) {
      axios.get(`${config.url}/show`).then((res) => {
        console.log(res.data);
        setUsers(res.data);
      });
    }
  }, [users]);

  function handleDelete(name) {
    axios.delete(`${config.url}/delete`, {
      params: {
        name: name
      }
    }).then((res) => {
      console.log(res.data);
      setUsers(users.filter(user => user.username !== name));
    }).catch(error => {
      console.error('Error deleting user:', error);
    });
  }

  if (users !== null) {
    return (
      <div>
        <center>
          <Navbar3 />
          <table className="custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Action</th> 
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <button onClick={() => handleDelete(user.username)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
        
      </div>
    );
  } else {
    return (
      <div>Fetching data... please Wait....</div>
    );
  }
};

export default AdminUser;