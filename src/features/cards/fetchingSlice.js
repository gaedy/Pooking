import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRentJSON, getBuyJSON, getSellJSON } from "../../api/api";

export const getRentThunk = createAsyncThunk("cards/getRentCards", async () => {
  const rentCards = await getRentJSON();
  return rentCards;
});

export const getBuyThunk = createAsyncThunk("cards/getBuyCards", async () => {
  const buyCards = await getBuyJSON();
  return buyCards;
});

export const getSellThunk = createAsyncThunk("cards/getSellCards", async () => {
  const sellCards = await getSellJSON();

  return sellCards;
});

const initialState = {
  rentCards: [],
  buyCards: [],
  sellCards: [],

  status: {
    rent: "idle",
    buy: "idle",
    sell: "idle",
  },
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRentThunk.pending, (state) => {
        state.status.rent = "loading";
      })
      .addCase(getRentThunk.fulfilled, (state, action) => {
        state.status.rent = "succeeded";
        state.rentCards = action.payload;
      })
      .addCase(getRentThunk.rejected, (state, action) => {
        state.status.rent = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(getBuyThunk.pending, (state) => {
        state.status.buy = "loading";
      })
      .addCase(getBuyThunk.fulfilled, (state, action) => {
        state.status.buy = "succeeded";
        state.buyCards = action.payload;
      })
      .addCase(getBuyThunk.rejected, (state, action) => {
        state.status.buy = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(getSellThunk.pending, (state) => {
        state.status.sell = "loading";
      })
      .addCase(getSellThunk.fulfilled, (state, action) => {
        state.status.sell = "succeeded";
        state.sellCards = action.payload;
      })
      .addCase(getSellThunk.rejected, (state, action) => {
        state.status.sell = "failed";
        state.error = action.error.message;
      });
  },
});

export default cardsSlice.reducer;
