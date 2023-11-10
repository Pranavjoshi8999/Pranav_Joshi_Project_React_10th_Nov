
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../actions/bookActions';

const BookDetails = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) =>
    state.searchResults.find((result) => result.id === bookId)
  );

  if (!book) {
    // Handle case where book is not found
    return <div>Book not found</div>;
  }

  const handleFavouriteToggle = () => {
    if (book.isFavourite) {
      dispatch(removeFromFavourites(book.id));
    } else {
      dispatch(addToFavourites(book));
    }
  };

  return (
    
    <div>
        {/* {console.log(book)} */}
      <h2>{book.volumeInfo.title}</h2>
      <p>Authors: {book.volumeInfo.authors}</p>
      <p>Publisher: {book.volumeInfo.publisher}</p>
      <p>Published Date: {book.volumeInfo.publishedDate}</p>
      <p>Page Count: {book.volumeInfo.pageCount}</p>
      <p>Categories: {book.volumeInfo.categories}</p>
      <p>Description: {book.volumeInfo.description}</p>
      {/* Add more details or styling as needed */}
      <button onClick={handleFavouriteToggle}>
        {book.isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
    </div>
  );
};

export default BookDetails;

