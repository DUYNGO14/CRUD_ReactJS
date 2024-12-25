import { useEffect, useState } from "react"
import { IAuth } from "../../../../interfaces"
import LoginPresenter from "./presenter"
import { AuthService } from "../../../../service"
import { ToastUtils } from "../../../../utils"
import { useNavigate } from "react-router"

const LoginContainer = () => {
    const [user, setUser] = useState<IAuth.LoginRequest>({});
    const [loginError, setLoginError] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const  navigate = useNavigate();
    useEffect(() => {
        handleLogin()
    },[])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }
    const handleLogin = async () => {
        setLoginError(0);
        if(!user.email || !user.password) {
            ToastUtils.error('Please enter email and password');
            return
        }
        setLoading(true);
        const response = await AuthService.login(user);
        if (response && response.token) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', response.token);
            navigate("/");
        }else{
            if(response && response.status === 400) {
                setLoginError(response.status);
            }
        }
        setLoading(false);
    }
    return (
        <LoginPresenter user={user} handleChange={handleChange} onSubmit={handleLogin} loginError={loginError} loading={loading} />
    )
}

export default LoginContainer