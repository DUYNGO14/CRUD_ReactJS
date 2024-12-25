import { LoginPage } from "../../Components/Pages";
import { AuthProvider } from "../../Context/AuthContext";

function Login() {
    return (
        <>
            <AuthProvider>
                <LoginPage />
            </AuthProvider>
        </>
    );
}

export default Login