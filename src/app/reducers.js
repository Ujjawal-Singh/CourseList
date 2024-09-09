import { combineReducers } from 'redux';

// Example of a basic reducer (you can replace it with your actual reducer)
const initialState = {
  courses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    default:
      return state;
  }
};

// Combine reducers in case you have multiple reducers
const rootReducer = combineReducers({
  courses: courseReducer, // Add your reducer here
  // Add other reducers here if needed
});

export default rootReducer;
