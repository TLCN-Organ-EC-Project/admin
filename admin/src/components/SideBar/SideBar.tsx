import { adminSideBar } from "src/utils/contant"
import { Fragment, useState } from 'react'
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { NavLink } from "react-router-dom"
import clsx from 'clsx'
import logo from '@asset/logo.webp'

import { useAppSelector, useAppDispatch } from "@hook/hooks"
import path from "@util/path"
import icons from "@util/icons"
import { logout } from "@store/user/useSlice"
interface children {
  active?: boolean,
}

const { AiOutlineLogin, RiLogoutCircleLine } = icons

const activedStyle = ' px-3 py-2 flex items-center gap-3 font-sans bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-600 transition-colors group'
const notactivedStyle = 'px-3 py-2 flex items-center gap-3 font-sans hover:bg-indigo-50 text-gray-600'
const SideBar: React.FC<children> = ({

}) => {

  const [expanded, setExpanded] = useState(true)
  const [actived, setactived] = useState<number[]>([]);
  const { isLoggedIn, current, token } = useAppSelector((state) => ({
    isLoggedIn: state.user.isLoggedIn,
    current: state.user.current,
    token: state.user.token
  }));
  const dispatch = useAppDispatch()
  const handleShowTabs = (tabID: number) => {
    if (actived.some(el => el === tabID)) {
      setactived((prev: number[]) => prev.filter((el) => el !== tabID));
    } else {
      setactived((prev: number[]) => [...prev, tabID]);
    }
  }
  return (
    <div className="h-screen">
      <div className='p-4 pb-2 flex justify-center items-center'>
        <img
          src={logo}
          className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
            }`} />

        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
          {expanded ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>

      <div className="flex flex-col gap-3 justify-center ml-1 font-sans">
        {adminSideBar.map((el) => (
          <div
            key={el.value}
            onClick={()=>{}}
          >
            {el.type === 'single' &&
              <NavLink
                to={el.path !== undefined ? el.path : '/'}
                className={({ isActive }) => clsx(isActive && activedStyle, !isActive && notactivedStyle)}
              >
                <span>{el.icon}</span>
                <span>{el.value}</span>
              </NavLink>
            }
            {
              el.type === 'parent' &&
              <div
                onClick={() => handleShowTabs(el.id)}
                className="cursor-pointer px-3 py-2"
              >
                <div className="flex items-center justify-between gap-2 py-2">
                  <div className="flex items-center gap-2">
                    <span>{el.icon}</span>
                    <span>{el.value}</span>
                  </div>
                </div>
                {
                  actived.some(id => +id === +el.id) &&
                  <div className="flex flex-col">
                    {
                      el.submenu && el.submenu.map(item => (
                        <NavLink
                          key={item.text}
                          to={item.path !== undefined ? item.path : '/'}
                          onClick={e => e.stopPropagation()}
                          className={({ isActive }) => clsx(isActive && activedStyle, !isActive && notactivedStyle, 'pl-10')}
                        >
                          <span>{item.icon}</span>
                          <span>{item.text}</span>
                        </NavLink>
                      ))
                    }
                  </div>
                }
              </div>
            }
          </div>
        ))}
        {isLoggedIn
          ?
          <NavLink
            className={({ isActive }) => clsx(isActive && activedStyle, !isActive && notactivedStyle)}
            to={path.LOGIN}
            onClick={() => dispatch(logout())}
          >
            <span><RiLogoutCircleLine size={20} /></span>
            <span>Logout</span>
          </NavLink>
          :
          <NavLink
            className={({ isActive }) => clsx(isActive && activedStyle, !isActive && notactivedStyle)}
            to={path.LOGIN}>
            <span><AiOutlineLogin size={20} /></span>
            <span>Login</span>
          </NavLink>}
      </div>



      <div className="border-t flex p-3 gap-3">
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
          alt=""
          className="w-10 h-10 rounded-md"
        />
        <div
          className={`
              flex justify-between items-center
              overflow-hidden transition-all 
          `}
        >
          <div className="leading-4">
            <h4 className="font-semibold">Kenta</h4>
            <span className="text-xs text-gray-600">kenta@gmail.com</span>
          </div>
          <MoreVertical size={20} />
        </div>
      </div>
    </div>
  )
}

export default SideBar