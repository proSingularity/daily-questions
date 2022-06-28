import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Answer {
  questionId: string;
  answer: string | number; // TODO this is undefined in the beginning
}

export interface DailiesState {
  currentQuestionId: string | undefined;
  answers: Answer[];
  allQuestionsAnswered: boolean; // TODO how to get to summary screen and navigate away from summary screen without this. Currently this flag changes navigation from a list topology (one question after another) to a star-topology (navigate from and to the summary screen)
}

const initialState: DailiesState = {
  currentQuestionId: undefined,
  answers: [],
  allQuestionsAnswered: false,
};

const uninitializedAnswer = "";
const dailiesSlice = createSlice({
  name: "dailies",
  initialState,
  reducers: {
    setCurrentQuestionId(
      state,
      action: PayloadAction<{
        id: string;
        resetAllQuestionsAnsweredFlag?: true;
      }>
    ) {
      state.currentQuestionId = action.payload.id;
      if (action.payload.resetAllQuestionsAnsweredFlag) {
        state.allQuestionsAnswered = false;
      }
    },

    setAnswer(
      state,
      action: PayloadAction<{ questionId: string; answer: number | string }>
    ) {
      const answer = state.answers.find(
        (answer) => answer.questionId === action.payload.questionId
      );
      if (answer) answer.answer = action.payload.answer;
      const answers = state.answers.every(
        (a) => a.answer !== uninitializedAnswer
      );
      state.allQuestionsAnswered = answers;
    },

    // NOTE: state = initialState does not work for reset! See https://stackoverflow.com/questions/59424523/reset-state-to-initial-with-redux-toolkit#comment110144078_59428191
    resetDailies: () => initialState,

    initAnswers(state, action: PayloadAction<{ questions: { id: string }[] }>) {
      state.answers = action.payload.questions.map((q) => ({
        questionId: q.id,
        answer: uninitializedAnswer,
      }));
    },
  },
});

export const { setAnswer, resetDailies, setCurrentQuestionId, initAnswers } =
  dailiesSlice.actions;
export default dailiesSlice.reducer;