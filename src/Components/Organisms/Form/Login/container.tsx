import { useEffect, useState } from "react"
import { IAuth } from "../../../../interfaces"
import LoginPresenter from "./presenter"
import { AuthService } from "../../../../service"
import { ToastUtils } from "../../../../utils"

const LoginContainer = () => {
    const [user, setUser] = useState<IAuth.LoginRequest>({});
    useEffect(() => {
        handleLogin()
    },[])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }
    const handleLogin = async () => {
        const response = await AuthService.login(user);
        console.log(response);
        if (response && response.token) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', response.token);
            window.location.href = '/';
        }else{
            ToastUtils.error('Error')
        }
    }
    return (
        <LoginPresenter user={user} handleChange={handleChange} onSubmit={handleLogin} />
    )
}

export default LoginContainer