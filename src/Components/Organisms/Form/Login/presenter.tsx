import { Link } from "react-router";
import { IAuth } from "../../../../interfaces";
import { Box, Input, Label, Button } from "../../../Atoms";
interface LoginPresenterProps {
    user : IAuth.LoginRequest
    onSubmit: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    loginError: number
    loading: boolean
}
const LoginPresenter : React.FC<LoginPresenterProps> = ({onSubmit, handleChange, user, loginError,loading}) => {
    return (
    <>  
        <main className="w-full flex flex-col items-center justify-center">
            <Box className="max-w-sm mt-8 w-full text-gray-600 space-y-5">
                <Box className="text-center pb-8">
                    <Box className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p>eve.holt@reqres.in</p>
                    </Box>
                </Box>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                >
                    <Box>
                        <Label className="font-medium" htmlFor="email" text={"Email"} />
                           
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </Box>
                    <Box>
                        <Label className="font-medium" htmlFor="password" text={"Password"} />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </Box>
                    {loginError === 400 && <p className="text-left text-red-600">Email or password is invalid</p>}
                    <Button
                        disabled={!user.email || !user.password || loading}
                        onClick={onSubmit}
                        className={`w-full px-4 py-2 text-white font-medium rounded-lg duration-150 ${
                            loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600'
                        }`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                                <span>Loading...</span>
                            </div>
                        ) : (
                            'Login'
                        )}
                    </Button>
                </form>
               
                <p className="text-center">Don't have an account? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
            </Box>
        </main>
    </>
    )
}

export default LoginPresenter