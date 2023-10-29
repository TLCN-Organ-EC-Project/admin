import { typeadminSideBar } from "@type/@typeAdminSideBar";
import { typeDashBoard } from "@type/@typeAdminDashBoard";
import path from "./path";
import icons from "./icons";



const { AiOutlineUserAdd, FaRegWindowRestore, BiBookAlt, AiOutlineLogin, LuCat, LiaUserCogSolid, SiProbot, SiCreatereactapp, FaJediOrder, FaUnity } = icons
export const adminSideBar: typeadminSideBar[] = [
    {
        id: 1,
        type: 'single',
        value: 'Dashboard',
        path: `/${path.DASHBOARD}`,
        icon: <LuCat size={20} />
    },
    {
        id: 2,
        type: 'single',
        value: 'Mangage Users',
        path: `/${path.MANAGE_USER}`,
        icon: <LiaUserCogSolid size={20} />
    },
    {
        id: 3,
        type: 'parent',
        value: 'Manage Products',
        icon: <SiProbot />,
        submenu: [
            {
                text: 'Create Product',
                path: `/${path.CREATE_PRODUCTS}`,
                icon: <SiCreatereactapp size={20} />
            },
            {
                text: 'Manage Products',
                path: `/${path.MANAGE_PRODUCTS}`,
                icon: <FaJediOrder size={20} />
            }
        ],
    },
    {
        id: 4,
        type: 'single',
        value: 'Manage Orders',
        path: `/${path.MANAGE_ORDER}`,
        icon: <FaUnity size={20} />
    },
]


export const dashboard: typeDashBoard[] = [
    {
        id: 1,
        title: 'Bookings',
        count: '281',
        desc: '+55% than lask week',
        color: '#000000',
        icon: <BiBookAlt size={30} color="white" />
    },
    {
        id: 2,
        title: 'Todays User',
        count: '2300',
        desc: '+3% than lask month',
        color: '#00BFFF',
        icon: <FaRegWindowRestore size={30} color="white" />
    },
    {
        id: 3,
        title: 'Revenue',
        count: '34k',
        desc: '+55% than lask week',
        color: '#7CFC00',
        icon: <AiOutlineUserAdd size={30} color="white" />
    },
]