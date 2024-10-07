import axios from "axios"
const BASE_URL=import.meta.env.VITE_API_BASE_URL
const axiosInstance = axios.create({baseURL:BASE_URL+"hoge"})
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export const checkSecret=async()=>{
    console.log("baseutl",BASE_URL)
    //return (await axiosInstance.get<User[]>(`users/${email}`)).data
    return (await axiosInstance.get(`/`,{ withCredentials: true })).data

}