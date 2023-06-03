import { createSelector } from "@reduxjs/toolkit";

const selectPost = state => state.post;

const selectDataPost = createSelector( selectPost, (state) => state.dataPost );

export { selectPost, selectDataPost };