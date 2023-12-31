export interface IUserSchema {
    username: string,
    full_name: string,
    email: string,
    phone: string,
    address: string,
    province: number,
    password_changed_at: string,
    created_at: string
}
export interface IUserLogin {
    username: string;
    password: string;
} 

export interface IUserManager{
    username:string,
    full_name:string,
    email:string,
    phone:string,
    created_at:string,
    address:string,
    province?:number | undefined,
  
}
export interface IUserUpdate{
    address:string,
    email:string,
    full_name:string,
    phone:string,
    province?:string,
}