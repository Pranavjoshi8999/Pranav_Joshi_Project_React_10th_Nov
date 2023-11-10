// actions/bookActions.js
export const fetchBooks = (searchTerm) => async (dispatch) => {
    try {
      // Make API call to Google Books API
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      const data = await response.json();
      console.log(data);
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: data.items });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error fetching books' });
    }
  };
  

  export const addToFavourites = (book) => ({
    type: 'ADD_TO_FAVOURITES',
    payload: book,
  });
  
  export const removeFromFavourites = (bookId) => ({
    type: 'REMOVE_FROM_FAVOURITES',
    payload: bookId,
  });