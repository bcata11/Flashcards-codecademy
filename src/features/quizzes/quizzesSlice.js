import { createSlice } from "@reduxjs/toolkit";
import { addQuizzId } from "../topics/topicSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: {

        addQuiz: (state, action) => {
            const newQuiz = { 
                id: action.payload.id, 
                name: action.payload.name, 
                topicId: action.payload.topicId, 
                cardIds: action.payload.cardIds
            }
            state.quizzes[action.payload.id] = newQuiz;
        }
    }
})

export const addQuizzThunk = (payload) => {
    // const {id, name, topicId, cardIds} = payload;
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizzId( { id: payload.id, topicId: payload.topicId}))
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
const quizzesReducer = quizzesSlice.reducer;
export default quizzesReducer;