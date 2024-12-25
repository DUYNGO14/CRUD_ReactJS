import { Header } from "../../Components/Organisms";
import { AuthProvider } from "../../Context/AuthContext";

const HomeLayout =({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <Header /> 
            <div>{children}</div>
        </AuthProvider>
    )
}

export default HomeLayout 