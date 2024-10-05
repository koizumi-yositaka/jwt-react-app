
import { UseFormRegisterReturn } from 'react-hook-form'
import { Input_text, Label_Elem, P_Erro } from './Common_Style'
import { HTMLAttributes } from 'react';





interface InputTextProps extends HTMLAttributes<HTMLInputElement>{
    label:string;
    register?:UseFormRegisterReturn;
    error?:string;
}

export const InputText = (props:InputTextProps) => {
  const { error, register,label,...rest } = props

  return (
    <>
    <Label_Elem htmlFor="">{label}</Label_Elem>
    <Input_text {...register} {...rest}/>
    <P_Erro>{error}</P_Erro>
    
    </>
  )
}
