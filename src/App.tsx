import { createRouter, RouterProvider } from '@tanstack/react-router'
import './App.css'

import { routeTree } from './routeTree.gen'
import { useRecoilValue } from 'recoil';
import { AuthSelector } from './states/auth';
import useAuth from './hooks/useAuth';
import useToast from './hooks/useToast';

const router = createRouter({routeTree,context:{auth:undefined!,useAuthHook:undefined!,useToastHook:undefined!}})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {

  const auth =useRecoilValue(AuthSelector)
  const useAuthHook=useAuth()
  const useToastHook=useToast()

  return (
    
      <RouterProvider router={router} context={{auth,useAuthHook,useToastHook}}/>
      
      
      
    )
  }
  {/* <Layout header={<h1>AAA</h1>} body={<Top></Top>}></Layout> */}

export default App
