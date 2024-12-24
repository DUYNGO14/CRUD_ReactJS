import { useEffect, useState } from "react"
import TableUserPresenter from "./presenter"
import { UserService } from "../../../../service"
import { Pagination } from "../../../Molecules"
import { ToastUtils } from "../../../../utils"
import { IUser } from "../../../../interfaces"


const TableUserContainer = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState<number>(1)
    const [per_page, setPerPage] = useState<number>(0)
    const [totalPage, setTotalPage] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const [isShow , setIsShowing] = useState(false)
    const [user,setUser] = useState<IUser.UserResponse|unknown>({})
    const [typeModal, setTypeModal] = useState<string>('')

    const handleToggle = (modalType?: string) => {
      setTypeModal(modalType||'')
      setIsShowing(!isShow)
      setUser({})
    }
    useEffect (() => {
       getAllUsers()
    },[page])

    useEffect (() => {
      handleViewUser(user);
    },[isShow])
    const handleViewUser = async (user: IUser.UserResponse) => {
      await UserService.getById(+user.id).then((res) => {
        if(res && res.data) {
          setUser(res.data)
        }else {
          setIsShowing(false)
          ToastUtils.error('User not found');
        }
      })
    }

    const getAllUsers = async () => {
      const res = await UserService.getAll(page)
      if(res && res.data) {
        setUsers(res.data)
        setPage(+res.page)
        setPerPage(+res.per_page)
        setTotal(+res.total)
        setTotalPage(+res.total_pages)
      }else{
        ToastUtils.error('Error')
      }
    }
    return (
        <div>
            <TableUserPresenter 
            users={users}
            isShow={isShow}
            toggle={handleToggle}
            handleViewUser={handleViewUser}
            typeModal={typeModal}
            user = {user} 
            setTypeModal={setTypeModal}
            setUsers={setUsers}
          />
            <Pagination page={page} per_page={per_page} total={total} total_pages={totalPage} setPage={setPage}/>
        </div>
    )
}

export default TableUserContainer
