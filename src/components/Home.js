
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);

  const handleSearch = () => {
    dispatch(fetchBooks(searchTerm));
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map((book) => (
          <div key={book.id}>
            {/* Use Link to navigate to the BookDetails page */}
            <Link to={`/book/${book.id}`}>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                style={{ maxWidth: '100px', maxHeight: '150px' }}
              />
              <h2>{book.volumeInfo.title}</h2>
              <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
