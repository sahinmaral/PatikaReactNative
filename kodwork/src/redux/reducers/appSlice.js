import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favouriteJobIds: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addJobIdAsFavouriteJobIds: (state, action) => {
      state.favouriteJobIds.push(action.payload);
    },
    removeJobIdAsFavouriteJobIds: (state, action) => {
      state.favouriteJobIds = [
        ...state.favouriteJobIds.filter(id => id !== action.payload),
      ];
    },
    retriveAllJobIds: (state, action) => {
      state.favouriteJobIds = action.payload;
    },
  },
});

export const {
  addJobIdAsFavouriteJobIds,
  removeJobIdAsFavouriteJobIds,
  retriveAllJobIds,
} = appSlice.actions;

export default appSlice.reducer;
