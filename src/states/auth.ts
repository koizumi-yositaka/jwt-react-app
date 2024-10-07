import { atom, DefaultValue, selector } from "recoil";

export const AuthState = atom<boolean>({
    key:"auth/islogin",
    default:false
})

export const AuthSelector = selector({
    key:"auth/state",
    get:({get})=>{
        return get(AuthState)
    },
    set:({set,reset},newval)=>{
        if(newval instanceof DefaultValue){
            reset(AuthState)
            return 
        }
        set(AuthState,newval)
    }
})