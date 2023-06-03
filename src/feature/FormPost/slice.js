import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dataPost:[{
    id: 0,
    title: 'Bem vindo', 
    content: 'Bem vindo! Deixe os comentarios!'
  }]
}
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers:{
    addDataPost: ( state, action ) => {
      state.dataPost = [...state.dataPost, action.payload];
    },
    removeDataPost: ( state, action ) => {
      state.dataPost = state.dataPost.filter((b) => b.id !== action.payload.id);
    },
    editDataPost: ( state, action ) => {
      state.dataPost[action.payload.id] =  action.payload.edit;
    },
  }
})

export const { addDataPost, removeDataPost, editDataPost } = postSlice.actions;
export default postSlice.reducer;