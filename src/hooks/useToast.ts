
import { ToastSelector, ToastState } from "../states/toast"
import { useRecoilCallback } from "recoil"

export type UseToastResponse ={
    showToast:(message:string,duration?:number)=>void,
    showAlert:(message:string,duration?:number)=>void
}

const useToast= ():UseToastResponse=>{

    const showToast=useRecoilCallback(({set,reset})=>(message:string)=>{
        const newVal:ToastState={
            isShow:true,
            message,
            level:"info"
        }
        set(ToastSelector,newVal)
        setTimeout(()=>{
            reset(ToastSelector)
        },3000)
    })
    const showAlert=useRecoilCallback(({set,reset})=>(message:string)=>{
        const newVal:ToastState={
            isShow:true,
            message,
            level:"info"
        }
        set(ToastSelector,newVal)
        setTimeout(()=>{
            reset(ToastSelector)
        },3000)
    })

    return {showToast,showAlert}
}

export default useToast