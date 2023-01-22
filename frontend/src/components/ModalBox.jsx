import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
    Heading,
  } from '@chakra-ui/react'
export const ModalBox = ({isOpen, onOpen, onClose,element}) => {
  return (
    <Box>
        <Modal isOpen={isOpen} onClose={onClose} size="xl" >
        <ModalOverlay />
        <ModalContent backgroundColor={"black"} color={"white"} >
            <ModalHeader>
              <Heading size='md'>{`Capsule Serial ${element.capsule_serial}`}
              </Heading>
              </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
            <Box margin={"auto"} width={"50%"} style={{objectFit:"contain"}}  border={"1px solid black"}>
              <img style={{objectFit:"contain", width:"100%" ,height:"150px"}} src={element.image} alt="" srcset="" />
            </Box>
            <Box>
              <Text>{`capsule id - ${element.capsule_id}`}</Text>    
              <Text>{`status - ${element.status}`}</Text>    
              <Text>{`original launch unix - ${element.original_launch_unix}`}</Text>    
              <Text>{`landings - ${element.landings}`}</Text>    
              <Text>{`type - ${element.type}`}</Text>    
              <Text>{`details - ${element.details}`}</Text>    
              <Text>{`reuse count - ${element.reuse_count}`}</Text>

            </Box>
            </ModalBody>

            
        </ModalContent>
        </Modal>
    </Box>
  )
}
