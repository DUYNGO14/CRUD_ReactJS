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

    const handleToggle = () => {
      setIsShowing(!isShow)
    }
    useEffect (() => {
       getAllUsers()
    },[page])

    useEffect (() => {
      handleViewUser(user);
    },[])

    useEffect (() => {
      handleUpdate(user);
    },[])

    useEffect (() => {
      handleDelete(user);
    },[])

    const handleViewUser = (user: IUser.UserResponse) => {
      UserService.getById(+user.id).then((res) => {
        if(res && res.data) {
          setUser(res.data)
        }else {
          ToastUtils.error('View user failed');
        }
      })
      console.log(user);
      
    }
    const handleUpdate = (user: IUser.UserResponse) => {
     
    }
    const handleDelete = (user: IUser.UserResponse) => {
      
    }
    const getAllUsers = async () => {
      const res = await UserService.getAll(page)
      setPage(+res.page)
      setPerPage(+res.per_page)
      setTotal(+res.total)
      setTotalPage(+res.total_pages)
      if(res && res.data) {
        setUsers(res.data)
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
            handleUpdate={handleUpdate}
            handleDelete={handleDelete} 
            user = {user} 
            setTypeModal={setTypeModal}
          />
            <Pagination page={page} per_page={per_page} total={total} total_pages={totalPage} setPage={setPage}/>
        </div>
    )
}

export default TableUserContainer
