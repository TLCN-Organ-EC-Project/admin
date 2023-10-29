import { ReactNode } from 'react';
import { IconType } from 'react-icons';


export interface typeadminSideBar {
    id: number,
    type: string,
    value: string,
    path?: string,
    icon: ReactNode,
    isLoggedIn?:boolean,
    submenu?: SubmenuItem[] 
}

interface SubmenuItem {
    text?: string;
    path?: string;
    icon?: ReactNode,
}

