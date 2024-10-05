
import { useForm, UseFormRegister,UseFormHandleSubmit,FieldErrors, UseFormSetError} from "react-hook-form"
import { User } from "../types/type"
import { zodResolver } from "@hookform/resolvers/zod"
import { validationSchema } from "../utils/validations/user-validate"


type Response ={
    register:UseFormRegister<User>,
    handleSubmit:UseFormHandleSubmit<User, undefined>,
    errors:FieldErrors<User>,
    isValid:boolean,
    setError:UseFormSetError<User>
    

}

export const useUserForm =():Response=>{
    
    

    const initalUserValue:User={
        id:undefined,
        email:"",
        password:""
    }
    const {register,handleSubmit,formState:{errors,isValid},setError} = useForm<User>({
        mode:"onChange",
        resolver:zodResolver(validationSchema),
        defaultValues:initalUserValue
    })


    return {
        register,
        handleSubmit,
        errors,
        isValid,setError
    }
}