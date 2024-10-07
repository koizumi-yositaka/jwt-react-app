import styled from "styled-components"
import { Button } from "../common/Button"
import { useNavigate } from "@tanstack/react-router"
import useAuth from "../../hooks/useAuth"
import { AuthSelector } from "../../states/auth"
import { useRecoilValue } from "recoil"

const Header_Wrapper=styled.div`
    width:100%;
    display: flex;
    justify-content:space-around;
`



export const HeaderA = () => {
    const navigate = useNavigate()
     const isLogin = useRecoilValue(AuthSelector)
    const auth= useAuth()
    const logout = async()=>{
        await auth.logout()
        localStorage.setItem("isRedirect","true")
        navigate({
            to:"/login"
        })
    }
    const toLogin=()=>{
        navigate({
            to:"/login"
        })
    }
  return (
    <Header_Wrapper>
        <div>{isLogin?"ログイン中":"ログインしてません"}</div>
        <div >
            
            {
                isLogin ? <Button data-level="second" onClick={logout}>ログアウト</Button> 
                :<Button data-level="first" onClick={toLogin}>ログイン</Button>
            } 
        </div>
    </Header_Wrapper>
  )
}
