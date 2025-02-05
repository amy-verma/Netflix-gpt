import {configureStore} from "@reduxjs/toolkit";
import userreducer from "./userSlice";
import moviesreducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore=configureStore(
    {
        reducer:{
            user:userreducer,
            movies:moviesreducer,
            gpt:gptReducer,
        },
    });

export default appStore;