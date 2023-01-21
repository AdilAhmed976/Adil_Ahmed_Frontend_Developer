import React from 'react'
import {Box ,Grid,CircularProgress } from "@chakra-ui/react"
import { Card } from './Card'

export const DataGrid = ({data,isLoading,setIsLoading}) => {

  return (
    !isLoading ?
    <Grid templateColumns='repeat(4, 1fr)' gap={6} >
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
