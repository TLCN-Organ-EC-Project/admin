import { typeadminSideBar } from "@type/@typeAdminSideBar";
import path from "./path";
import icons from "./icons";


const { AiOutlineDashboard } = icons
export const adminSideBar: typeadminSideBar[] = [
    {
        id: 1,
        type: 'single',
        value: 'Dashboard',
        path: `/${path.DASHBOARD}`,
        icon: AiOutlineDashboard
    },
    {
        id: 2,
        type: 'single',
        value: 'Mangage Users',
        path: `/${path.MANAGE_USER}`,
        icon: AiOutlineDashboard
    },
    {
        id: 3,
        type: 'parent',
        value: 'Manage Products',
        icon: AiOutlineDashboard,
        submenu: [
            {
                text: 'Create Product',
                path: `/${path.CREATE_PRODUCTS}`
            },
            {
                text: 'Manage Products',
                path: `/${path.MANAGE_PRODUCTS}`
            }
        ],
    },
    {
        id: 4,
        type: 'single',
        value: 'Manage Orders',
        path: `/${path.MANAGE_ORDER}`,
        icon: AiOutlineDashboard
    },
]