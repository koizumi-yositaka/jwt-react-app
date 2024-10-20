import styled, { keyframes } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { ToastSelector, ToastState } from '../../states/toast'
// フェードインのアニメーション
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// フェードアウトのアニメーション
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const Div_Toast = styled.div<{isvisble:|"true"|"false"}>`
    position: fixed;
    top: 90vh;
    left: 3vw;
    width: 94vw;
    height: 7vh;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    color: black;
    background-color: #8293e7;
    font-size: 1em;
    opacity: ${(props) => (props.isvisble ? 1 : 0)};
    animation: ${(props) => (props.isvisble ? fadeIn : fadeOut)} 0.5s ease;
    transition: opacity 0.5s ease;
`

export const DemoToastComponent = ({toastState}:{toastState:ToastState}) =>{
    return (
        toastState.isShow && (
        <Div_Toast isvisble={toastState.isShow?"true":"false"}>
            <p>{toastState?.message}</p>
        </Div_Toast>
    
        )
        
    )
}



export const DemoToast = () => {
    const toastState = useRecoilValue(ToastSelector)
    return (
      <DemoToastComponent toastState={toastState}></DemoToastComponent>
    )

}

