import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuestions, fetchResultQuiz } from '../../api/quizApi';

interface IState {
  step: number,
  answers: Array<any>,
  questions: Array<{}>,
  result: {
    correctAnswers: number,
  }
};

const initialState:IState = {
  step: 0,
  answers: [],
  questions: [],
  result: {
    correctAnswers: 0,
  }
};

export const getQuestions = createAsyncThunk(
  'getQuestions',
  async () => {
    const response = await fetchQuestions();
    return response;
  },
);

export const getResult = createAsyncThunk(
  'getResult',
  async (answers: Array<number>) => {
    const response = await fetchResultQuiz(answers);
    return response;
  },
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    increment_step: ( state ) => {
      state.step += 1
    },
    add_answer: (state, action) => {
      state.answers.push(action.payload)
    },
    resetQuiz: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
    builder.addCase(getResult.fulfilled, (state, action) => {
      state.result.correctAnswers = action.payload;
    })
  }
});

export const {
  increment_step,
  add_answer,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;