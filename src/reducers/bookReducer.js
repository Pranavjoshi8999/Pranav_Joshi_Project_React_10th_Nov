// reducers/bookReducer.js
const initialState = {
    searchResults: [],
    favourites: [],
    error: '',
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return { ...state, searchResults: action.payload, error: '' };
      case 'ADD_TO_FAVOURITES':
        return { ...state, favourites: [...state.favourites, action.payload] };
      case 'REMOVE_FROM_FAVOURITES':
        return { ...state, favourites: state.favourites.filter((book) => book.id !== action.payload) };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  