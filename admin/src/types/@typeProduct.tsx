export interface IProduct {
    id: number,
    product_name: string,
    thumb:string,
    price:number,

} 

export interface ICreateProduct{
    gender:string, 
    material:string, 
    price:number,
    product_name:string,
    size:string,
    size_of_model:string,
    thumb:string
}