import React from 'react'
import {Box ,Grid,Modal,Skeleton,Text, useDisclosure } from "@chakra-ui/react"
import { ModalBox } from './ModalBox'

export const Card = ({element,index}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const clicking = () => {
    onOpen()
  }
  return (

    <Box 
      onClick={() => onOpen() }
      _hover={{cursor:"pointer"}}
      width="100%"
      border={"0.5px solid lightgray"}
      borderRadius={"30px"}
    >
        <ModalBox isOpen={isOpen} onOpen={onOpen} onClose={onClose} element={element} />
        <Box backgroundColor="black" >
            <img 
              style={{
                objectFit:"contain", 
                height:"150px", 
                border:"1px solid black", 
                width:"100%",
                borderRadius:"30%"
              }} 
              src={element.image} alt="" srcset={element.id} />
        </Box>
        <Box padding={"20px"} >
        <Text>{`status: ${element.status}`}</Text>
        <Text>{`type: ${element.type}`}</Text>

        </Box>
    </Box>
              
  )
}
