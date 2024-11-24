import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBuyCards, fetchRentCards, fetchSellCards } from "../../api/api";



export const getRentCards = createAsyncThunk('cards/getRentCards', async () => {
    const response = await fetchRentCards();
    return response;
});

export const getBuyCards = createAsyncThunk('cards/getBuyCards', async () => {
    const response = await fetchBuyCards();
    return response;
});

export const getSellCards = createAsyncThunk('cards/getSellCards', async () => {
    const response = await fetchSellCards();
    return response;
});



const initialState = {
    rentCards: [],
    buyCards: [],
    sellCards: [],
    status: {
        buy: 'idle',
        rent: 'idle',
        sell: 'idle'
    },
    error: null,
}


const cardsSlice = createSlice({
    name: 'cards',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getRentCards.pending, (state) => {
            state.status.rent = "loading";
        })
        .addCase(getRentCards.fulfilled, (state, action) => {
            state.status.rent = "succeeded";
            state.rentCards = action.payload;

        })
        .addCase(getRentCards.rejected, (state, action) => {
            state.status.rent = 'failed';
            state.error = action.error.message;
        });

        builder
        .addCase(getBuyCards.pending, (state) => {
            state.status.buy = "loading";
        })
        .addCase(getBuyCards.fulfilled, (state, action) => {
            state.status.buy = "succeeded";
            state.buyCards = action.payload;

        })
        .addCase(getBuyCards.rejected, (state, action) => {
            state.status.buy = 'failed';
            state.error = action.error.message;
        });

        builder
        .addCase(getSellCards.pending, (state) => {
            state.status.sell = "loading";
        })
        .addCase(getSellCards.fulfilled, (state, action) => {
            state.status.sell = "succeeded";
            state.sellCards = action.payload;

        })
        .addCase(getSellCards.rejected, (state, action) => {
            state.status.sell = 'failed';
            state.error = action.error.message;
        });
    }
});


export const {fetchCards} = cardsSlice.actions;
export default cardsSlice.reducer;


