import { Outlet, Navigate } from 'react-router-dom'
import SideBar from '@comp/SideBar/SideBar'

const AdminLayout = () => {
  return (
    <div className='flex w-full bg-white h-screen gap-3 '>
      <div className='w-[327px] flex-none top-0 bottom-0 border border-r-4'>
        <SideBar/>
      </div>
      <div className=''>
        <Outlet/>
      </div>
    </div>
  )
}
export default AdminLayout