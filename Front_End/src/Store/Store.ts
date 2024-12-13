import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/UserSlice"

const store = configureStore({
    reducer:{
        userAuth:userSlice, 
    }
})

export default store;

// export RootState and AppDispatch types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;