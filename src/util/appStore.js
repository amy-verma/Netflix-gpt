import {configureStore} from "@reduxjs/toolkit";
import userreducer from "./userSlice";
import moviesreducer from "./movieSlice";

const appStore=configureStore(
    {
        reducer:{
            user:userreducer,
            movies:moviesreducer,
        },
    });

export default appStore;