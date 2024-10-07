import { SubmitHandler } from 'react-hook-form'
import { User } from '../types/type'

import { InputText } from './common/InputText'
import { Button } from './common/Button'
import { useUserForm } from '../hooks/useUserForm'
import { addUser, loginAPi,isExistUserByEmail } from '../service/user/api'
import { Link, useNavigate } from '@tanstack/react-router'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import styled from 'styled-components'

const LoginFormWapper=styled.div`
  padding-left: 30px;
  padding-right: 30px;
`

const InputWrapper = styled.div`
`
const LoginTitle = styled.div`
  background-color: #1B2538;
  color: white;
  height:60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`


type LoginFormMode=
| "login"
| "signup"


export const LoginForm = ({mode}:{mode:LoginFormMode}) => {
  const navigate = useNavigate()
  const {login}= useAuth()
  const {
      register,
      handleSubmit,
      errors,
      isValid,
      setError
  } = useUserForm()
  const handleChangeUser:SubmitHandler<User>=async (data)=>{
    console.log("data更新",data)
    
    if(mode === "login"){ 


      let loginResult; 

      try{
        loginResult = await loginAPi(data.email,data.password)
        if(loginResult.loginResult){
          login() 
          navigate({
            to:"/"
          })
        }else{
          console.log(loginResult.message)
        }
      }catch(error){
        if(axios.isAxiosError(error)){
          setError("password",{message:"パスワードが違う"})
        }else{
          console.error(error)
        }
      }

      
    }else{
      const isExistEmail =await isExistUserByEmail(data.email)
      if(isExistEmail){
        setError("email",{message:"sdasdasdasdadas"})
      }else{
        await addUser(data.email,data.password)
        login()
        navigate({
          to:"/"
        })
      }
    }

  }
  



  return (
    <LoginFormWapper>
      <LoginTitle>{mode==="login"?"ログイン":"サインアップ"}</LoginTitle>
      <form onSubmit={handleSubmit(handleChangeUser)}>
        <InputWrapper>
          <InputText label={"メールアドレス"} error={errors.email ?errors.email.message:""} register={register("email")}/> 
        </InputWrapper>
        <InputWrapper>
          <InputText label={"パスワード"} error={errors.password ?errors.password.message:""} register={register("password")}/> 
        </InputWrapper>
        <InputWrapper>
          
          <Button type="submit" data-level="first"  disabled={!isValid} >{mode === "login"?"ログイン":"サインアップ"}</Button>  
        </InputWrapper>
        {
          mode === "login"?<Link to="/signup"></Link>:<Link to="/login">ログイン</Link>
        }
      </form>


    </LoginFormWapper>
   
  )
}
