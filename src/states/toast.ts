import { atom, DefaultValue, selector } from "recoil"

export type ToastLevel=    
|"info"
|"alart"

export type ToastState={
    isShow:boolean,
    message:string,
    level:ToastLevel

}

export const ToastVisibileState = atom<boolean>({
    key:"toast/visible",
    default:false
})


export const ToastMessageState = atom<string>({
    key:"toast/message",
    default:""
})
export const ToastLevelState = atom<ToastLevel>({
    key:"toast/level",
    default:"info"
})
export const ToastSelector = selector({
    key:"state/toast",
    get:({get})=>{
        return {
            isShow:get(ToastVisibileState),
            message:get(ToastMessageState),
            level:get(ToastLevelState)
        }
    },
    set:({set,reset},newVal)=>{
        if(newVal instanceof DefaultValue)
        {
            reset(ToastVisibileState)
            reset(ToastMessageState)
            reset(ToastLevelState)
            return 
        }
        set(ToastVisibileState,newVal.isShow && newVal.message!=="")
        set(ToastMessageState,newVal.message)
        set(ToastLevelState,newVal.level)
    }

})


