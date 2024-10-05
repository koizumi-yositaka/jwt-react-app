import axios from "axios"
import { User } from "../../types/type"
const BASE_URL=import.meta.env.VITE_API_BASE_URL
const axiosInstance = axios.create({baseURL:BASE_URL})
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type ResultGet={
    rows:User[]
}
export const isExistUserByEmail=async(email:string)=>{
    //return (await axiosInstance.get<User[]>(`users/${email}`)).data
    return (await axiosInstance.get<ResultGet>(`users?email=${email}`)).data.rows.length > 0

}

export const addUser=async(email:string,password:string)=>{
    return (await axiosInstance.post("users",{email,password})).data
}