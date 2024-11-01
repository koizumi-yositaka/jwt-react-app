import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import useLocation from '../../hooks/useLocation'
import { Button } from '../../components/common/Button'
import LabelValueDisplay from '../../components/common/LabelAndValue'

export const Route = createFileRoute('/geoLocation/')({
  component: () => <GeoLocation></GeoLocation>,
})


export const GeoLocation = () => {
    const [location,setLocation] = useState<{latitude: number | null,longitude: number|null, address: string}>({latitude: null,longitude:null,address:""})
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    const {getLocation,isLoading} = useLocation()
    const clickHandler = () =>{
        getLocation(
            (position) =>{
                console.log("position",position)
                setLocation((prev)=>({...prev,...position}))
                setErrorMessage(null)
            },
            (errorMessage)=>{
                setErrorMessage(errorMessage)
            }
        )
    }
    return (
        <>
            {isLoading?<p>loading...</p>: 
            
            <>
                {
                    !location.address && <Button data-level='first' onClick={clickHandler}>ここはどこ</Button>
                }
                <LabelValueDisplay label='緯度' value={location.latitude??""}></LabelValueDisplay>
                <LabelValueDisplay label='経度' value={location.longitude??""}></LabelValueDisplay>
                <LabelValueDisplay label='住所' value={location.address??""}></LabelValueDisplay>
                {errorMessage && <p>{errorMessage}</p>}
            
            </>

            }
        </>
    )
}
