import { IconType } from 'react-icons';


export interface typeadminSideBar {
    id: number,
    type: string,
    value: string,
    path?: string,
    icon: IconType,
    submenu?: SubmenuItem[]
}

interface SubmenuItem {
    text?: string;
    path?: string;
}

