
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavourites } from '../actions/bookActions';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const dispatch = useDispatch();
  const favouriteBooks = useSelector((state) => state.favourites);

  const handleRemoveFromFavourites = (bookId) => {
    dispatch(removeFromFavourites(bookId));
  };

  return (
    <div>
      <h2>Favourite Books</h2>
      { favouriteBooks?.length === 0 ? (
        <p>No books in favourites</p>
      ) :(
        <ul>
          {favouriteBooks?.map((book) => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  style={{ maxWidth: '100px', maxHeight: '150px' }}
                />
                <h3>{book.volumeInfo.title}</h3>
                <p>Authors: {book.volumeInfo.authors}</p>
              </Link>
              <button onClick={() => handleRemoveFromFavourites(book.id)}>
                Remove from Favourites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
