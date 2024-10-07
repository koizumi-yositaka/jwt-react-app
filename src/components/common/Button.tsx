import { ButtonHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  "data-level":
  | "first"
  | "second"
}

const Button_styled = styled.button`
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 12px;
    &[data-level='first']{

      color: white;
      background-color: #3780d3;
      &:hover {
          background-color: #0056b3;
      }

      &:disabled {
          background-color: #cccccc; /* 非活性時の背景色 */
          color: #666666; /* 非活性時の文字色 */
          cursor: not-allowed; /* 非活性時のカーソル */
      }
    }
    &[data-level='second']{

      color: white;
      background-color: #f24e3c;
      &:hover {
          background-color: #e20707;
      }

      &:disabled {
          background-color: #cccccc; /* 非活性時の背景色 */
          color: #666666; /* 非活性時の文字色 */
          cursor: not-allowed; /* 非活性時のカーソル */
      }
    }

`

export const Button=({children,...props}:ButtonProps) =>{
  return (
    <Button_styled {...props}>
        {children}
    </Button_styled>
  )
}
