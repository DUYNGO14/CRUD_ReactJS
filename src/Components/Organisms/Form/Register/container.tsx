import { useEffect, useState } from "react"
import { IAuth } from "../../../../interfaces"
import { AuthService } from "../../../../service"
import { ToastUtils } from "../../../../utils"
import { useNavigate } from "react-router"
import RegisterPresenter from "./presenter"

const RegisterContainer = () => {
    const [user, setUser] = useState<IAuth.RegisterRequest>({});
    const [registerError, setRegisterError] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const  navigate = useNavigate();
    useEffect(() => {
        handleRegister()
    },[])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }
    const handleRegister = async () => {
        setRegisterError(0);
        if(!user.email || !user.password) {
            return
        }
        setLoading(true);
        const response = await AuthService.register(user);
        console.log(response);
        
        if (response && response.id) {
            ToastUtils.success('Register successfully');
            navigate("/login");
        }else{
            if(response && response.status === 400) {
                setRegisterError(response.status);
            }
        }
        setLoading(false);
    }
    return (
        <RegisterPresenter user={user} handleChange={handleChange} onSubmit={handleRegister} registerError={registerError} loading={loading} />
    )
}

export default RegisterContainer