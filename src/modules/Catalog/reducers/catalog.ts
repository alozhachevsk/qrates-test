import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CatalogState {
  likedItems: string[],
}

const initialState: CatalogState = {
  likedItems: [],
};

const slice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addLikedItem: (state, action: PayloadAction<string>) => {
      state.likedItems.push(action.payload);
    },
    removeLikedItem: (state, action) => {
      state.likedItems = state.likedItems.filter((item: string) => item !== action.payload);
    },
  },
});

export default slice.reducer;

export const { addLikedItem, removeLikedItem } = slice.actions;
