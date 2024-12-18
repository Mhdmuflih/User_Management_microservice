import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginPayload, User, UserReduxInitialStateManage } from "../../Interface/Interface";

const storedToken: boolean = localStorage.getItem("userToken") ? true : false;

const storedUser: User | null = (() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
})();

const initialState: UserReduxInitialStateManage = {
    isLoggedIn: storedToken,
    user: storedUser,
    change: false
}
console.log(storedToken,'storetoken')

const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        loginSuccess: (state: UserReduxInitialStateManage, action: PayloadAction<LoginPayload>) => {
            console.log("payload", action.payload.isLoggedIn)
            localStorage.setItem('userToken', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            state.isLoggedIn = action.payload.isLoggedIn;
            state.user = action.payload.user;
        },
        logout: (state: UserReduxInitialStateManage) => {
            localStorage.removeItem("userToken");
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.user = null;
        },
        editUser: (state: UserReduxInitialStateManage, action) => {
            state.user = action.payload.user;
            state.change = true;
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        }
    }
});

export const { loginSuccess, logout, editUser } = userAuthSlice.actions
export default userAuthSlice.reducer;