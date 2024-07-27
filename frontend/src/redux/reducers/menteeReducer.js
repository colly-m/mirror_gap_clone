const initialState = {
  mentees: [],
  loading: false,
  error: null,
};

const menteeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MENTEES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_MENTEES_SUCCESS':
      return {
        ...state,
        mentees: action.payload,
        loading: false,
      };
    case 'FETCH_MENTEES_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default menteeReducer;