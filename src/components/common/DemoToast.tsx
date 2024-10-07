import styled, { keyframes } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { ToastSelector } from '../../states/toast'
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
const Div_Toast = styled.div<{isVisble:boolean}>`
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
    opacity: ${(props) => (props.isVisble ? 1 : 0)};
    animation: ${(props) => (props.isVisble ? fadeIn : fadeOut)} 0.5s ease;
    transition: opacity 0.5s ease;
`



export const DemoToast = () => {
    const toastState = useRecoilValue(ToastSelector)
    return (
        

        toastState.isShow && (
        <Div_Toast isVisble={toastState.isShow}>
            <p>{toastState?.message}</p>
        </Div_Toast>
    
        )
        
    )
}

