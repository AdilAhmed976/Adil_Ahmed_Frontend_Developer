import React from 'react'
import {Box ,Grid,Text } from "@chakra-ui/react"

export const Card = ({element,index}) => {
  return (
    <Box width="100%" >
        <Box backgroundColor="black" >
            <img style={{objectFit:"contain", height:"150px", border:"1px solid black", width:"100%"}} src={element.image} alt="" srcset="" />
        </Box>
        <text>{`status: ${element.status}`}</text>
    </Box>
  )
}
