import {configureStore} from '@reduxjs/toolkit';
import appSlice from './reducers/appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
