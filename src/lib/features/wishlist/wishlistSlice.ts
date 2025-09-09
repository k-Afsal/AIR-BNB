import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Property } from '@/lib/types';
import type { RootState } from '@/lib/store';

interface WishlistState {
  items: Property[];
}

const initialState: WishlistState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Property>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

export const selectWishlist = (state: RootState) => state.wishlist.items;

export default wishlistSlice.reducer;
