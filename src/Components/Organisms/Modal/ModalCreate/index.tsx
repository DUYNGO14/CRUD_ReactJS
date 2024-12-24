import { UserForm } from "../../Form";
import ModalBlank from "../ModalBlank";
interface ModalCreateProps {
  isShow: boolean;
  toggle: (typeModal?: string) => void
  setUsers : React.Dispatch<React.SetStateAction<IUser.UserResponse[]>>
}
const ModalCreate = ({ isShow, toggle , setUsers}: ModalCreateProps) => {
    return (
        <ModalBlank title="Create User" isShow={isShow} toggle={toggle}>
          <UserForm toggle={toggle} userData={{}} setUsers={setUsers} method="create"/>
        </ModalBlank>
      );
}

export default ModalCreate