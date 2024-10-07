import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { DemoToast } from './components/common/DemoToast.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
      <DemoToast/>
    </RecoilRoot>
  </StrictMode>,
)
