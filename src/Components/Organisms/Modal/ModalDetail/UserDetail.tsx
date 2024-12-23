import { IUser } from "../../../../interfaces";
import ModalBlank from "../ModalBlank";
interface ModalUserDetailProps {
  user : IUser.UserResponse
  isShow: boolean;
  toggle: () => void
}
const ModalUserDetail = ({ user, isShow, toggle }: ModalUserDetailProps) => {
  console.log(user);
    return (
        <ModalBlank title="User Detail" isShow={isShow} toggle={toggle}>
          <img src={user.avatar} className="w-20 h-20 rounded-full mx-auto" />
          <p className="text-base text-gray-600">Full Name: {user.first_name}  {user.last_name} </p>
          <p className="text-base text-gray-600">Email: {user.email} </p>
        </ModalBlank>
      );
}

export default ModalUserDetail