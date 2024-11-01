import { useRecoilCallback } from "recoil"
import { AuthState } from "../states/auth"
import { logoutAPi } from "../service/user/api"

export interface UseAuthResponse {
    login:()=>void,
    logout:()=>void,

}

const useAuth = ():UseAuthResponse=>{
    const login = useRecoilCallback(({set})=>()=>{
        console.log("login")
        set(AuthState,true)
    })
    const logout = useRecoilCallback(({reset})=>async()=>{
        
        try{
            await logoutAPi()
            console.log("logout")         
        }catch(err){
            console.log(err)

        }finally{
            reset(AuthState)
        }

    })


    return {login,logout}

}

export default useAuth