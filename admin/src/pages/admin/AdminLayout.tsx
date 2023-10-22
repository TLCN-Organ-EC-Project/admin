import { Outlet, Navigate } from 'react-router-dom'
import SideBar from '@comp/SideBar/SideBar'

const AdminLayout = () => {
  return (
    <div className='flex w-full bg-white min-h-screen relative text-gray-800'>
      <div className='w-[327px] flex-none absolute top-0 bottom-0 fixed'>
        <SideBar/>
      </div>
      <div className='w-[327px]'></div>
      <div className='flex-auto'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout