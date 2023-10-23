import { Outlet, Navigate } from 'react-router-dom'
import SideBar from '@comp/SideBar/SideBar'

const AdminLayout = () => {
  return (
    <div className='flex w-full bg-white h-screen gap-3 '>
      <div className='w-[327px] flex-none mt-5 mb-5 shadow-xl ml-5 border border-r-4 rounded-xl'>
        <SideBar/>
      </div>
      <div className='p-5 text-lg font-semibold text-gray-800 opacity-80'>
        <Outlet/>
      </div>
    </div>
  )
}
export default AdminLayout