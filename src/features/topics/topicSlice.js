import { createSlice } from "@reduxjs/toolkit";

export const topicSlice = createSlice({
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            };
        },
        addQuizzId: (state,action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id)
        }
    }
})
//selector
export const selectTopics = (state) => state.topics.topics;
//action creators
export const {addTopic, addQuizzId} = topicSlice.actions;

const topicsReducer =  topicSlice.reducer;
export default topicsReducer;



