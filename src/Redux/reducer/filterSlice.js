import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterProject',
  initialState: [],
  reducers: {
    addOrRemove: (state, project) => {
      let i = 0,
        j = null;
      while (i < state.length) {
        if (state[i].id === project.payload.id) {
          j = i;
          break;
        }
        i++;
      }
      if (j !== null) {
        state.splice(j, 1);
      } else state[state.length] = project.payload;
    },
    clear: (state) => {
      state.length = 0;
    }
  }
});

// Action creators are generated for each key reducer function
export const { addOrRemove, clear } = filterSlice.actions;

export const selectFilterProject = (state) => state.filterProject;

export default filterSlice.reducer;
