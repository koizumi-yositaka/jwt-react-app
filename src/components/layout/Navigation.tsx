import { Link } from "@tanstack/react-router"
import styled from "styled-components"

const activateProps={
    style:{
        fontWeight:"bold"
    }
}

const Ul_Navigation=styled.ul`
    width: 100%; /* メニューの幅 */
    margin: 0;
    padding: 0;
    list-style-type: none;
    
`

const Li_Navigation=styled.li`
    text-align: center;
    border-top: 0.5px solid #3c4658;


    &:last-child{
        border-bottom: 0.5px solid #3c4658;
    }

    a {
        display: block;
        padding: 8px 16px;
        text-decoration: none;
        color: #000000;
        transition: all 0.3s;
        &.active {
            color: #ffffff;
            background-color: #da3c41;
        }
        &:hover:not(.active) {
            color: #ffffff;
            background-color: #1b2538;
        }

    }
    
    
`

const Wrapper_Navigation=styled.div`
    background-color: #eeeeee;  
    height:100%;
`


export const Navigation = () => {
    const naviPro=[
        {
            to:"/",
            label:"Home"
        },
        {
            to:"/description",
            label:"DESC"
        },
        {
            to:"/secret",
            label:"秘密"
        },
        {
            to:"/geoLocation",
            label:"位置"
        }
    ]

  return (
   <Wrapper_Navigation>

        <Ul_Navigation>
            {
                naviPro.map((x) => {
                    return (
                        <Li_Navigation key={x.to}>
                            <Link to={x.to} activeProps={activateProps}>
                            {({isActive})=>{

                                    return  isActive?x.label+"⭐️" :x.label                        
                                }                                
                            }
                            </Link>
                        </Li_Navigation>                       
                    )
                })
            }
        </Ul_Navigation>
      </Wrapper_Navigation>
  )
}
