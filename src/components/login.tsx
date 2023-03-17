import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";
import { Input } from "./input";


export const Login: React.FC = ()=>{
        const dispatch = useDispatch();
        return <div>
                <Input submitFn={function (value: string): string {
                        dispatch(authActions.login(value));
                        return '';
                } } placeHolder={"username"} buttonName="Sign in"/>
        </div>

} 