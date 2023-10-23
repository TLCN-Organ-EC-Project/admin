import { typeadminSideBar } from "@type/@typeAdminSideBar";
import path from "./path";
import icons from "./icons";


const { AiOutlineDashboard ,LuCat,LiaUserCogSolid,SiProbot,SiCreatereactapp,FaJediOrder,FaUnity} = icons
export const adminSideBar: typeadminSideBar[] = [
    {
        id: 1,
        type: 'single',
        value: 'Dashboard',
        path: `/${path.DASHBOARD}`,
        icon: <LuCat size={20}/>
    },
    {
        id: 2,
        type: 'single',
        value: 'Mangage Users',
        path: `/${path.MANAGE_USER}`,
        icon:  <LiaUserCogSolid size={20}/>
    },
    {
        id: 3,
        type: 'parent',
        value: 'Manage Products',
        icon:  <SiProbot/>,
        submenu: [
            {
                text: 'Create Product',
                path: `/${path.CREATE_PRODUCTS}`,
                icon:<SiCreatereactapp size={20}/>
            },
            {
                text: 'Manage Products',
                path: `/${path.MANAGE_PRODUCTS}`,
                icon:<FaJediOrder size={20}/>
            }
        ],
    },
    {
        id: 4,
        type: 'single',
        value: 'Manage Orders',
        path: `/${path.MANAGE_ORDER}`,
        icon:  <FaUnity size={20}/>
    },
]