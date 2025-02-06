import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice";
import moviesreducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userreducer,
        movies: moviesreducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore;
