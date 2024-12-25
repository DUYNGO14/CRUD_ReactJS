import { useEffect, useState } from "react"
import { IAuth, IContext } from "../../../../interfaces"
import LoginPresenter from "./presenter"
import { AuthService } from "../../../../service"
import { useAuth } from "../../../../hooks"
import { ToastUtils } from "../../../../utils"
const LoginContainer = () => {
    const [user, setUser] = useState<IAuth.LoginRequest>({});
    const [loginError, setLoginError] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const { handleLogin } = useAuth() as unknown as IContext.UseAuthReturnType;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmitLogin = async () => {
        setLoginError(0);
        if(!user.email || !user.password) {
            return
        }
        setLoading(true);
        const response = await AuthService.login(user);
        if (response && response.token) {
            handleLogin(user, response.token);
            ToastUtils.success('Wellcome back✌!');
        }else{
            if(response && response.status === 400) {
                setLoginError(response.status);
            }
        }
        setLoading(false);
    }
    useEffect(() => {
        handleSubmitLogin();
    },[])
    return (
        <LoginPresenter user={user} handleChange={handleChange} onSubmit={handleSubmitLogin} loginError={loginError} loading={loading} />
    )
}

export default LoginContainer