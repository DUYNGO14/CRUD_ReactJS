
import { IUser } from "../../../../interfaces"
import { Box, Button } from "../../../Atoms"
import { ModalUserDetail } from "../../Modal";
import ModalCreate from "../../Modal/ModalCreate";

interface UserPresenterProps {
    users: IUser.UserResponse[];
    isShow : boolean;
    toggle:()=> void;
    handleViewUser: (user: IUser.UserResponse) => void
    handleUpdate: (user: IUser.UserResponse) => void
    handleDelete: (user: IUser.UserResponse) => void
    typeModal: string;
    user: IUser.UserResponse;
    setTypeModal: React.Dispatch<React.SetStateAction<string>>
}


const TableUserPresenter = ({ users, isShow, toggle,handleViewUser, handleUpdate, handleDelete, typeModal , user,setTypeModal}: UserPresenterProps) => {
    return (
        <>
            <Box className="max-w-screen-xl mx-auto px-4 md:px-8 mt-12">
                <Box className="items-start justify-between md:flex">
                    <Box className="max-w-lg">
                        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                            List User
                        </h3>
                    
                    </Box>
                    <Box className="mt-3 md:mt-0">
                        <Button onClick={() => {toggle();setTypeModal("create") } } className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">Add user</Button>
                    </Box>
                </Box>
                <Box className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Avatar</th>
                                <th className="py-3 px-6">Email</th>
                                <th className="py-3 px-6">First Name</th>
                                <th className="py-3 px-6">Last Name</th>
                                <th className="py-3 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 Boxide-y">
                            {
                                users.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            <img src={item.avatar} className="w-11 h-11 rounded-full" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.first_name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.last_name}</td>
                                        <td className="text-center px-6 whitespace-nowrap">
                                            <Button
                                                onClick={() => {setTypeModal("view"); handleViewUser(item); toggle()}}
                                                className="py-2 leading-none px-3 font-medium text-lime-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                                            >
                                                View
                                            </Button>
                                            <Button
                                                onClick={() => {setTypeModal("update"); toggle()}}  
                                                className="py-2 leading-none px-3 font-medium text-blue-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                                            >
                                                Update
                                            </Button>
                                            <Button  
                                                onClick={() => {setTypeModal("delete"); toggle()}}  
                                                className="py-2 leading-none px-3 font-medium text-black hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Box>
            </Box>
            {typeModal === "view" && <ModalUserDetail user={user} isShow={isShow} toggle={toggle} />}
            {typeModal == "create" && <ModalCreate isShow={isShow} toggle={toggle} />}
           
        </>
    )
}

export default TableUserPresenter