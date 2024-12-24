import axios from "../customize-axios";
import { PAGINATION_CONSTANTS } from "../../constants"
import { IUser } from "../../interfaces";

const UserService = {
    getAll: async (page: number) => {
        const response = await axios.get(`/users?page=${page}&per_page=${PAGINATION_CONSTANTS.DEFAULT_PAGE_SIZE}`);
        return response;
    },
    getById: async (id: number) => {
        const response = await axios.get(`/users/${id}`);
        return response;    
    },
    create: async (data: IUser.UserRequest) => {
        return await axios.post('/users', data);
    }
}

export default UserService