import { UserForm } from "../../Form";
import ModalBlank from "../ModalBlank";
interface ModalCreateProps {
  isShow: boolean;
  toggle: () => void
}
const ModalCreate = ({ isShow, toggle }: ModalCreateProps) => {
    return (
        <ModalBlank title="Create User" isShow={isShow} toggle={toggle}>
          <UserForm toggle={toggle} />
        </ModalBlank>
      );
}

export default ModalCreate