import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'projectPagination',
  initialState: {
    amountBannerPerPage: window.innerWidth < 768 ? 2 : 4,
    numBannerPage: 0
  },
  reducers: {
    setAmount: (state, amount) => {
      state.amountBannerPerPage = amount.payload;
    },
    setNumPage: (state, numPage) => {
      state.numBannerPage = numPage.payload;
    }
  }
});

// Action creators are generated for each key reducer function
export const { setAmount, setNumPage } = paginationSlice.actions;

export const selectProjectPagination = (state) => state.projectPagination;

export default paginationSlice.reducer;
