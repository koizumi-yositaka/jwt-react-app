import { createFileRoute, redirect } from '@tanstack/react-router'
import { Button } from '../../components/common/Button'
import { checkSecret } from '../../service/user/api-with-token'



export const Route = createFileRoute('/secret/')({
  component: () => <Secret></Secret>,
  beforeLoad:({context})=>{
    if(!context.auth){
        throw redirect({
            to : "/login"
        })
    }

    //useRecoilValue(AuthSelector)
  }
})

export const Secret = () => {
    const clickHandler=async ()=>{
        await checkSecret()
    }
  return (
    <>
        <div>秘密</div>
        <Button data-level="first"  type="button" onClick={clickHandler}>dsdfs</Button>
    </>
  )
}
