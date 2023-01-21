import React from 'react'
import {Box,Select,Button ,Flex, useToast  } from "@chakra-ui/react"
import { useState } from 'react'
export const Searchbar = ({setData , status , origin , type , setStatus ,setOrigin , setType, data , isLoading , setIsLoading , setNoOfPage , getData}) => {

    
    const toast = useToast()

    const handleSubmit = () => {

        if (status||origin||type) {
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
        flexDirection={{base:"column",sm: 'row', md: 'row', lg: 'row', xl:'row', '2xl': 'row'}} 
        justifyContent="space-evenly" 
        alignItems="center" 
        padding="20px"
        gap="20px"
        
    >
        <Box width={{base:"70%",sm: '25%', md: '25%', lg: '25%', xl:'25%', '2xl': '25%'}}  >
            <label>Status</label>
            <Select placeholder='Select Status' onChange={ (e) => {setStatus(e.target.value) } } >
                <option value='active'>Active</option>
                <option value='destroyed'>Destroyed</option>
                <option value='unknown'>unknown</option>
            </Select>
        </Box>
        <Box width={{base:"70%",sm: '25%', md: '25%', lg: '25%', xl:'25%', '2xl': '25%'}} >
            <label>Original Launch</label>
            <Select placeholder='Select original launch' onChange={ (e) => {setOrigin(e.target.value) } } >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </Box>
        <Box width={{base:"70%",sm: '25%', md: '25%', lg: '25%', xl:'25%', '2xl': '25%'}} >
            <label>Type</label>
            <Select placeholder='Select Status' onChange={ (e) => {setType(e.target.value) } } >
                <option value='Dragon 1.0'>Dragon 1.0</option>
                <option value='Dragon 1.1'>Dragon 1.1</option>
                <option value='Dragon 2.0'>Dragon 2.0</option>
            </Select>
        </Box>
        <Button onClick={handleSubmit} >Submit</Button>
    </Flex>
  )
}
