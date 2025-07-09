const initialState = {
  isLoading: true,
  data: [],
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'FETCH_ALL':
      return { ...state, data: action.payload, isLoading: false };
    case 'CREATE':
      return { ...state, data: [...state.data, action.payload] };
    case 'DELETE':
      return {
        ...state,
        data: state.data.filter((post) => post._id !== action.payload)
      };
    default:
      return state;
  }
};

export default posts;