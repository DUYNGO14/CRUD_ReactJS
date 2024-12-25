import { Route, Routes } from "react-router"
import AuthLayout from "../Layout/AuthLayout"
import { Home, Login, Register, Resource, User } from "../Pages"
import HomeLayout from "../Layout/HomeLayout"

const AppRouter = () => {

    return (
        <Routes>
                <Route path="/login" element={
                    <AuthLayout>
                        <Login/>
                    </AuthLayout>
                    } 
                />
                <Route path="/" element={
                    <HomeLayout>
                        <Home />
                    </HomeLayout>
                } />
                <Route path="/users" element={
                    <HomeLayout>
                        <User />
                    </HomeLayout>
                } />
                <Route path="/resources" element={
                    <HomeLayout>
                        <Resource />
                    </HomeLayout>
                } />
                <Route path="/register" element={
                    <AuthLayout>
                        <Register />
                    </AuthLayout>
                } />
        </Routes>
    )
}
export default AppRouter