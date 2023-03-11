import { createSlice } from '@reduxjs/toolkit';

const initialValue = { query: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialValue,
  reducers: {
    filteredContacts: {
      reducer(state, action) {
        state.query = action.payload;
      },
    },
  },
});

export const { filteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
