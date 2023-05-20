const actions = {
  GET_BOOKS: 'GET_BOOKS',
  SET_BOOKS: 'SET_BOOKS',
  BOOKS_FAILURE: 'BOOKS_FAILURE',

  getBooks: () => ({ type: actions.GET_BOOKS }),
  setBooks: (payload) => ({ type: actions.SET_BOOKS, payload }),
  bookFailure: (payload) => ({ type: actions.BOOKS_FAILURE, payload }),
};
export default actions;
