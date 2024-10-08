import styled from "styled-components"
import { Button } from "../common/Button"
import { useNavigate } from "@tanstack/react-router"
import useAuth from "../../hooks/useAuth"
import { AuthSelector } from "../../states/auth"
import { useRecoilValue } from "recoil"
import useToast from "../../hooks/useToast"

const Header_Wrapper=styled.div`
    width:100%;
    display: flex;
    justify-content:space-around;
`
const Div_Center=styled.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Div_Right=styled.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: end;
`


export const HeaderA = () => {
    const navigate = useNavigate()
    const {showToast} = useToast()
     const isLogin = useRecoilValue(AuthSelector)
    const auth= useAuth()
    const logout = async()=>{
        await auth.logout()
        localStorage.setItem("isRedirect","true")
        navigate({
            to:"/login"
        })
        showToast("ログアウトしました")
    }
    const toLogin=()=>{
        navigate({
            to:"/login"
        })
    }
  return (
    <Header_Wrapper>
        <Div_Center>{isLogin?"ログイン中":"ログインしてません"}</Div_Center>
        <Div_Right >
            
            {
                isLogin ? <Button data-level="second" onClick={logout}>ログアウト</Button> 
                :<Button data-level="first" onClick={toLogin}>ログイン</Button>
            } 
        </Div_Right>
    </Header_Wrapper>
  )
}
