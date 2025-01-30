import {configureStore} from "@reduxjs/toolkit";
import userreducer from "./userSlice";

const appStore=configureStore(
    {
        reducer:{
            user:userreducer,
        },
    });

export default appStore;