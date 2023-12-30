import { ReactNode } from 'react';


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

