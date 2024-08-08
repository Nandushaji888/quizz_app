import {createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [
      {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        correctAnswer: 'Paris',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars',
      },
      {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Mark Twain', 'Charles Dickens', 'William Shakespeare', 'Jane Austen'],
        correctAnswer: 'William Shakespeare',
      },
      {
        question: 'What is the smallest prime no?',
        options: ['0', '1', '2', '3'],
        correctAnswer: '2',
      },
    ],
    currentQuestionIndex: 0,
    score: 0,
    showResults: false,
  },
  reducers: {
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
      if (state.currentQuestionIndex >= state.questions.length) {
        state.showResults = true;
      }
    },
    increaseScore: (state) => {
      state.score += 1;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.showResults = false;
    },
  },
});

export const { nextQuestion, increaseScore, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer


