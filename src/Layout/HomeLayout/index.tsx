import { Header } from "../../Components/Organisms";
import { AuthProvider } from "../../Context/AuthContext";
import AppProvider from "../offline";

const HomeLayout =({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>
            <AuthProvider>
                <Header /> 
                <div>{children}</div>
            </AuthProvider>
        </AppProvider>
    )
}

export default HomeLayout 