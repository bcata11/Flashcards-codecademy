import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'cards',
    initialState: {cards:{}},
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back
            }

        }
    }
})

//selector
export const selectCards = state => state.cards.cards;

const cardReducer = cardSlice.reducer;
export default cardReducer;
export const {addCard} = cardSlice.actions;