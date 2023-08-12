import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Theme } from "src/@types";
import { Rootstate } from "../store";


type InitialState = {

}


const initialState: InitialState = {
}

const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        signUpUser: (state, action ) => {
        }
    }
})

export const { signUpUser } = authSlice.actions

export const AuthSelectors = {

}

export default authSlice.reducer