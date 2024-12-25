import axios from "../customize-axios";
import { IAuth } from "../../interfaces";

const AuthService = {
    login: async (data: IAuth.LoginRequest) => {
        return await axios.post('/login', data);
    },
    register: async (email: string, password: string) => {
        return await axios.post('/register', { email, password });
    },
 };

 export default AuthService