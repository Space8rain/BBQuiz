import { combineReducers } from '@reduxjs/toolkit';
import quizSlice from './quizSlice';

const rootReducer = combineReducers({
  quiz: quizSlice
});

export default rootReducer;