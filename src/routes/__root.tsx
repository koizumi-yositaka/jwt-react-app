
import { Outlet, createRootRouteWithContext, redirect } from '@tanstack/react-router'

import { helthCheck } from '../service/user/api'
import { useEffect } from 'react'
import { Layout } from '../components/layout/Layout'
import { UseAuthResponse } from '../hooks/useAuth'
import { Navigation } from '../components/layout/Navigation'
import { HeaderA } from '../components/layout/HeaderA'




export const Root = () => {
    useEffect(()=>{
        const handleBeforeUnload = () => {
            // リロードやページ遷移を検知
            console.log('ページがリロードされます');
            // 必要に応じて、警告メッセージを表示することも可能
            // event.returnValue = ''; // これにより、警告ダイアログが表示される（ただし、多くのブラウザではカスタムメッセージは表示されない）
            localStorage.setItem("isReloaded","true")
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    },[])

  return (
    <>
    <Layout header={<HeaderA></HeaderA>} body={<Outlet/>} navigation={<Navigation/>}></Layout>
    </>
  )
}
type RouterContext = {
    auth:boolean,
    useAuthHook:UseAuthResponse,

}


export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <Root></Root>
  ),
  beforeLoad:async({context})=>{
    const useAuth =context.useAuthHook
    const isAuthed = context.auth
    const isReloaded = localStorage.getItem("isReloaded")==="true"
    const isRedirect=localStorage.getItem("isRedirect")==="true"
    localStorage.setItem("isRedirect","")
    localStorage.setItem("isReloaded","")
    try{
        if(!isAuthed && !isRedirect && isReloaded){
            await helthCheck()
            useAuth.login()
        }
        
    }catch(error){
        useAuth.logout()
        localStorage.setItem("isRedirect","true")
        console.error(error)
        throw redirect({
            "to":"/login"
        })
    }
    
    console.log("ssss")
  }
})

