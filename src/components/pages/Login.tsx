import {useDispatch} from "react-redux";
import { authActions } from "../../redux/authSlice";
import { LoginForm } from "../forms/LoginForm";

export const Login: React.FC=()=>{
        const dispatch = useDispatch();
        return <LoginForm submitFn={(loginData)=> 
                dispatch(authActions.login(loginData.email))
                
        }/>
}