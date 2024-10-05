import {z} from "zod"


export const validationSchema=z.object({
    id:z.coerce.number().optional(),
    email:z.string().email("mailのフォーマットが不正です"),
    password:z.string().regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' }).min(6,"6文字以上で入力してください").max(10,"10文字以下で入力してください")
})