import React,{useState} from 'react'
import {Box,Select,Button ,Flex, useToast  } from "@chakra-ui/react"


export const Searchbar = ({setData , setPage, status , origin , type , setStatus ,setOrigin , setType, data , isLoading , setIsLoading , setNoOfPage , getData}) => {

    
    const toast = useToast()


    const handleSubmit = () => {

        if (status||origin||type) {
            setPage(prev => 1)
            getData();
        }
        else {
            toast({
                title: 'Please select an input.',
                description: "",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
    }

  return (
    <Flex 
        position={"relative"} 
        top={{base:"0px",sm: '-60px', md: '-60px', lg: '-60px', xl:'-60px', '2xl': '-60px'}} 
        borderRadius={"50px"}
        bg={"white"}
        width={{base:"100%",sm: '90%', md: '80%', lg: '80%', xl:'80%', '2xl': '80%'}} 
        boxShadow= "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        margin={"auto"}
        flexDirection={{base:"column",sm: 'row', md: 'row', lg: 'row', xl:'row', '2xl': 'row'}} 
        justifyContent="space-evenly" 
        alignItems="center" 
        padding="20px"
        gap="20px"
        
    >
        <Box width={{base:"100%",sm: '25%', md: '25%', lg: '25%', xl:'25%', '2xl': '25%'}}  >
            <label>Status</label>
            <Select placeholder='Select Status' onChange={ (e) => {setStatus(e.target.value) } } >
                <option value='active'>Active</option>
                <option value='destroyed'>Destroyed</option>
                <option value='unknown'>unknown</option>
            </Select>
        </Box>
        {/* <Box width={{base:"100%",sm: '100%', md: '25%', lg: '25%', xl:'25%', '2xl': '25%'}} >
            <label>Original Launch</label>
            <Select placeholder='Select original launch' onChange={ (e) => {setOrigin(e.target.value) } } >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </Box> */}
        <Box width={{base:"100%",sm: '25%', md: '25%', lg: '25%', xl:'25%', '2xl': '25%'}} >
            <label>Type</label>
            <Select placeholder='Select Status' onChange={ (e) => {setType(e.target.value) } } >
                <option value='Dragon 1.0'>Dragon 1.0</option>
                <option value='Dragon 1.1'>Dragon 1.1</option>
                <option value='Dragon 2.0'>Dragon 2.0</option>
            </Select>
        </Box>
        <Button
            bg={"rgb(211,117,21)"}
            onClick={handleSubmit} >Submit</Button>
    </Flex>
  )
}
