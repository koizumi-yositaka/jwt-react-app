import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
}

const Button_styled = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #cccccc; /* 非活性時の背景色 */
        color: #666666; /* 非活性時の文字色 */
        cursor: not-allowed; /* 非活性時のカーソル */
    }
`

export const Button=({children,...props}:ButtonProps) =>{
  return (
    <Button_styled {...props}>
        {children}
    </Button_styled>
  )
}
