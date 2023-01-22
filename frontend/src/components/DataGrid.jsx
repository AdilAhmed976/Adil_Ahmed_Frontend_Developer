import React from 'react'
import {Box ,Grid,CircularProgress } from "@chakra-ui/react"
import { Card } from './Card'

export const DataGrid = ({data,isLoading,setIsLoading}) => {

  return (
    !isLoading ?
    <Grid 
      templateColumns={{base:"repeat(1, 1fr)",sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)', xl:'repeat(4, 1fr)', '2xl': 'repeat(4, 1fr)'}} 
      gap={"20px"}
      padding={"20px"} 
    >
        {
            data?.map((element,index) => {
                return <Card element={element} index={index} />
            }) 
        }
    </Grid>
    :
    <Box display="flex" justifyContent="center" alignItems="center" height="250px" >
        <CircularProgress isIndeterminate color='rgb(253,216,53)' />
    </Box>

  )
}
