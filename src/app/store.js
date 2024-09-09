import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjusted path

const store = configureStore({
  reducer: rootReducer,
});

export default store;