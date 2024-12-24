import React, { useEffect, useState } from 'react';
import { IUser } from '../../../../interfaces';
import { Box, Input, Label } from '../../../Atoms';
import { Button } from '@headlessui/react';
import { UserService } from '../../../../service';
import { ToastUtils } from '../../../../utils';

interface UserFormProps {
    userData? : IUser.UserResponse
    toggle: () => void
    setUsers : React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>
    method ?: string
}
const DEFAULT_USER_VALUE: IUser.UserRequest = {
    name: '',
    job: '',
  };
  
const AddUserForm : React.FC<UserFormProps> = ({ toggle, userData, setUsers ,method}) => {
    const [user, setUser] = useState<IUser.UserRequest>(DEFAULT_USER_VALUE);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };
    console.log(userData);
    useEffect(() => {
        if(userData) {
            handleChange({target: {name: 'name', value: userData.first_name}} as React.ChangeEvent<HTMLInputElement>);
        }
    },[userData])
    const handleSubmit = async () => {
        if(method === 'update') {
            const res = await UserService.update(+userData.id, user);
            console.log(res);
            if(res && res.updatedAt) {
                setUsers((prev) => prev.map((item) => item.id === userData.id ? {...item, first_name: user.name} : item));
                toggle();
                ToastUtils.success(`Update user with id:  ${userData.id} successfully`);
            }else{
                ToastUtils.error('Update user failed');
            }
        }
        else if(method === 'create') {
            const res = await UserService.create(user);
            console.log(res);
            if(res && res.id) {
                const newUser = {id:res.id, email:`${res.name}_${res.job}@gmail.com`, first_name:res.name, last_name:res.name, avatar:"https://flowbite.com/docs/images/people/profile-picture-3.jpg"}
                console.log(newUser);
                setUsers((prev) => [newUser,...prev])
                toggle();
                ToastUtils.success(`Create user with id:  ${res.id} successfully`);
            }else{
                ToastUtils.error('Create user failed');
            }
        }else{
            ToastUtils.error('Error');
        }
    };
    
    return (
        <form className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-' >
            <Box className="grid gap-4 mb-4 sm:grid-cols-1">
                <Box className="col-span-full">
                    <Label htmlFor="fullName" text="Họ và tên" required />
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={user.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    />
                </Box>
                <Box className="col-span-full">
                    <Label htmlFor="email" text="Tài khoản" required />
                    <Input
                        type="text"
                        name="job"
                        placeholder="Job"
                        value={user.job}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    />
                </Box> 
            </Box>
            <Box className="flex justify-end">
                <Button
                    disabled={!user.name || !user.job}
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto mr-3"
                >
                    Confirm
                </Button>
                <Button
                    type="button"
                    onClick={toggle}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                    Cancle
                </Button>
            </Box>
        </form>
    );
};

export default AddUserForm;
