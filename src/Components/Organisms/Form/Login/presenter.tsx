import { IAuth } from "../../../../interfaces";
import { Box, Input, Label, Button } from "../../../Atoms";
interface LoginPresenterProps {
    user : IAuth.LoginRequest
    onSubmit: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const LoginPresenter : React.FC<LoginPresenterProps> = ({onSubmit, handleChange, user}) => {
    console.log(user);
    return (
    <>  
        <main className="w-full h-screen flex flex-col items-center justify-center">
            <Box className="max-w-sm w-full text-gray-600 space-y-5">
                <Box className="text-center pb-8">
                    <Box className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
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
                    <Button
                        disabled={!user.email || !user.password}
                        onClick={onSubmit}
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Login in
                    </Button>
                </form>
               
                <p className="text-center">Don't have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
            </Box>
        </main>
    </>
    )
}

export default LoginPresenter