import { createSelector } from "@reduxjs/toolkit";

const selectApp = state => state.name;

const selectDataApp = createSelector( selectApp, (state) => state.dataAppName );

export { selectApp, selectDataApp }