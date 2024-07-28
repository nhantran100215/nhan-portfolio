import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loadings',
  initialState: { show: false, timer: 0 },
  reducers: {
    showLoading: (state, action) => {
      console.log('showLoading', action.payload);
      state = action.payload;
      return state;
    }
  }
});

export const { showLoading } = loadingSlice.actions;

export const selectLoading = (state) => state.loading;

export default loadingSlice.reducer;
