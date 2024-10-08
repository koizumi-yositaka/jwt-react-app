import axios from "axios"
axios.defaults.withCredentials = true;
const BASE_URL=import.meta.env.VITE_API_BASE_URL
const axiosInstance = axios.create({baseURL:BASE_URL})
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type ResultGet={
    isExist:boolean
}
export const isExistUserByEmail=async(email:string)=>{
    console.log("baseutl",BASE_URL)
    //return (await axiosInstance.get<User[]>(`users/${email}`)).data
    return (await axiosInstance.get<ResultGet>(`users?email=${email}`)).data.isExist

}

export const addUser=async(email:string,password:string)=>{
    return (await axiosInstance.post("users/singup",{email,password})).data
}


type LoginResult = {
    loginResult:boolean,
    message:string,
    
}
export const loginAPi = async(email:string,password:string)=>{
    return (await axiosInstance.post<LoginResult>("users/login",{email,password},{ withCredentials: true })).data
}
export const logoutAPi = async()=>{
    return (await axiosInstance.post("users/logout",{ withCredentials: true })).data
}

export const helthCheck = async()=>{
    return (await axiosInstance.get("/health",{ withCredentials: true })).data
}