import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dataAppName:'',
}

export const appSlice = createSlice({
  name: 'name',
  initialState,
  reducers:{
    loadName: (state, action) => {
        state.dataAppName = action.payload.name;
    }
  }
})

export const { loadName } = appSlice.actions;
export default appSlice.reducer;