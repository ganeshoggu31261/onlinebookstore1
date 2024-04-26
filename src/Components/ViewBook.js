import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';


export default function ViewBooks() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${config.url}/getbooks`);
      setBooks(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`${config.url}/deletebook/${bookId}`);
      fetchBooks();
    } catch (error) {
      console.error(error.message);
    }
  };

//   const viewBook = async (bookId) => {
//     try {
//       // Navigate to view book details page
//       navigate(`/viewbook/${bookId}`);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

  return (
    <div>
      <h1 align="center">Books</h1>
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Genre</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(books) && books.length > 0 ? (
            books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.quantity}</td>
                <td>{book.genre}</td>
                <td>
                  {/* <button onClick={() => viewBook(book._id)} className='button'>View</button> */}
                  <button onClick={() => deleteBook(book._id)} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" align='center'>Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
