import actions from './actions';

const initState = {
  data: {
    data: 'DEFAULT',
  },
  error: null,
};

export default function booksReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case actions.SET_BOOKS:
      const data = action.payload;
      return {
        ...state,
        data: data,
        isLoading: false,
      };
    case actions.BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.errorMessage,
      };

    default:
      return state;
  }
}
