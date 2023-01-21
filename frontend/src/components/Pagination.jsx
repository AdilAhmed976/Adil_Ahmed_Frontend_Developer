import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export const Pagination = ({noOfPages,isLoading,setPage}) => {
    const buttons = new Array(noOfPages).fill(0);
    console.log(noOfPages,buttons)
  return (
    isLoading ? <Box></Box> :
    <Box>
        {buttons?.map((element,ind) => {
            return <Button key={ind} onClick={()=> setPage(ind+1) }  >{ind+1}</Button>
        })}
    </Box>
  )
}
