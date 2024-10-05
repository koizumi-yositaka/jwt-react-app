import { SubmitHandler } from 'react-hook-form'
import { User } from '../types/type'

import { InputText } from './common/InputText'
import { Button } from './common/Button'
import { useUserForm } from '../hooks/useUserForm'
import { addUser, isExistUserByEmail } from '../service/user/api'



type LoginFormMode=
| "login"
| "signup"


export const LoginForm = ({mode}:{mode:LoginFormMode}) => {
  const {
      register,
      handleSubmit,
      errors,
      isValid,
      setError
  } = useUserForm()
  const handleChangeUser:SubmitHandler<User>=async (data)=>{
    console.log("data更新",data)
    const isExistEmail =await isExistUserByEmail(data.email)
    if(isExistEmail){
      setError("email",{message:"sdasdasdasdadas"})
    }else{
      addUser(data.email,data.password)
    }
  }
  



  return (
    <div>
      <div>{mode==="login"?"LoginForm":"adasas"}</div>
      <form onSubmit={handleSubmit(handleChangeUser)}>
        <div>
          <InputText label={"メールアドレス"} error={errors.email ?errors.email.message:""} register={register("email")}/> 
        </div>
        <div>
          <InputText label={"パスワード"} error={errors.password ?errors.password.message:""} register={register("password")}/> 
        </div>
        <div>
          
          <Button type="submit" disabled={!isValid} >登録</Button>  
        </div>
        
      </form>


    </div>
   
  )
}
