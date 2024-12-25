import { useEffect, useState } from "react"
import { IAuth } from "../../../../interfaces"
import { AuthService } from "../../../../service"
import { ToastUtils } from "../../../../utils"
import { useNavigate } from "react-router"
import RegisterPresenter from "./presenter"

const RegisterContainer = () => {
    const [user, setUser] = useState<IAuth.RegisterRequest>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const  navigate = useNavigate();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    useEffect(() => {
        handleRegister()
    },[])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }
    const handleRegister = async () => {
        if (!user.email || !user.password) {
            return;
        }
        if (regex.test(user.email) === false) {
            setError('Email is not valid');
            return;
        }
        if (user.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        setLoading(true);
        try {
            const response = await AuthService.register(user);
            if (response && response.id) {
                // ToastUtils.success('Register successfully');
                navigate("/login");
            }else{
                if(response && response.status === 400) {
                    setError("Email is already in use 🤔");
                }
            }
        }catch (error) {
            ToastUtils.error('An error occurred during register 😩');
        }finally {
            setLoading(false);
        }

    }
    return (
        <RegisterPresenter user={user} handleChange={handleChange} error={error} onSubmit={handleRegister} loading={loading} />
    )
}

export default RegisterContainer