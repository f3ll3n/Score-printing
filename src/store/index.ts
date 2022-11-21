import { configureStore } from '@reduxjs/toolkit';
// import { githubApi } from './API/texts.api';

export const store = configureStore({
    reducer: {
        // [githubApi.reducerPath]: githubApi.reducer,
    }
})