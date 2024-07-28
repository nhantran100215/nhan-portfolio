import { createSlice } from '@reduxjs/toolkit';

export const notificationSliceSlice = createSlice({
  name: 'notification',
  // {
  //   id: 0,
  //   type: 'warning', // warning-yellow, danger-red, success-green
  //   message: ''
  // }
  initialState: [],
  reducers: {
    addNoti: (state, noti) => {
      state.push(noti.payload);
    },
    deleteNoti: (state, noti) => {
      state.splice(
        state.findIndex((ele) => ele.id === noti.id),
        1
      );
    },
    clearNoti: (state) => {
      state.length = 0;
    },
    deleteFirstNoti: (state) => {
      state.shift();
    }
  }
});

// Action creators are generated for each key reducer function
export const { addNoti, deleteNoti, clearNoti, deleteFirstNoti } = notificationSliceSlice.actions;

export const selectNotification = (state) => state.notification;

export default notificationSliceSlice.reducer;
