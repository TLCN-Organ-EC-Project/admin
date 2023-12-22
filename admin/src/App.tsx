import { Route, Routes } from 'react-router-dom'
import path from '@util/path'
import AdminLayout from '@page/admin/AdminLayout'
import DashBoard from '@page/admin/DashBoard'
import ManagerUser from '@page/admin/ManagerUser'
import ManagerProduct from '@page/admin/ManagerProduct'
import ManagerOrder from '@page/admin/ManagerOrder'
import Login from '@page/Login'
import Create_Product from '@page/admin/Create_Product'
import { PaginationProvider } from "src/context/PaginationContext"
import ManagerCategory from '@page/admin/ManagerCategory'

function App() {
  return (
    <div className=''>
      <PaginationProvider>
        <Routes>
          <Route path={path.ADMIN} element={<AdminLayout />}>
            <Route path={path.DASHBOARD} element={<DashBoard />} />
            <Route path={path.CREATE_PRODUCTS} element={<Create_Product />} />
            <Route path={path.MANAGE_USER} element={<ManagerUser />} />
            <Route
              path={path.MANAGE_PRODUCTS}
              element={
                <ManagerProduct />
              }           
            />
            <Route path={path.MANAGE_ORDER} element={<ManagerOrder />} />
            <Route path={path.CATEGORY} element={<ManagerCategory />} />
          </Route>
          <Route path={path.LOGIN} element={<Login />} />
        </Routes>
      </PaginationProvider>
    </div>
  )
}
export default App
