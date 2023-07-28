const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  products: [],
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.products.push(action.payload);
    },
  },
});
export const { addToBuilder } = builderSlice.actions;
export default builderSlice.reducer;
