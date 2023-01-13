import { configureStore } from "@reduxjs/toolkit";

import todo from './todo'
export const Store = configureStore({
    reducer:{
        todos:todo
    }
})