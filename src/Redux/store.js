import { Tuple, configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducer/filterSlice';
import paginationReducer from './reducer/paginationSlice';
import logger from 'redux-logger';
import notificationSlice from './reducer/notificationSlice';
import loadinngSlice from './reducer/loadinngSlice';

export default configureStore({
  reducer: {
    filterProject: filterReducer,
    projectPagination: paginationReducer,
    notification: notificationSlice,
    loading: loadinngSlice
  },
  middleware: () => new Tuple(logger)
});
