import { useCallback, useState } from "react";
import { getAddress } from "../service/user/api";


type GetLocationFunction = (
    onSuccess: (position: GeolocationPosition) => void,
    onError: (error: string) => void
) => void;

interface GeolocationPosition {
    latitude: number;
    longitude: number;
    address: string
}



const useLocation = ():{getLocation:GetLocationFunction,isLoading:boolean}=>{
    const [isLoading,setLoading] = useState<boolean>(false)
    const getLocation = useCallback((onSuccess: (position: GeolocationPosition) => void,onError: (error: string) => void)=>{
        setLoading(true)
        if(!navigator.geolocation){
            onError("Geolocationはこのブラウザでサポートされていません。")
            setLoading(false)
            return
        }
        navigator.geolocation.getCurrentPosition(
            async (position) =>{
                const address = await getAddress({lat:position.coords.latitude,lon:position.coords.longitude})
                
                onSuccess({
                    latitude :position.coords.latitude,
                    longitude: position.coords.longitude,
                    address
                })
                setLoading(false)
            },
            (error)=>{
                switch (error.code){
                    case error.PERMISSION_DENIED:
                        onError("拒否された")
                        break
                    case error.POSITION_UNAVAILABLE:
                        onError("利用できない")
                        break
                    case error.TIMEOUT:
                        onError("timeout")
                        break
                    default:
                        onError("不明なエラー")
                        break
                }
                setLoading(false)

            }
        )
    },[])

    return {getLocation,isLoading};
    
}


export default useLocation