import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

export const Pagination = ({noOfPages,isLoading,setPage,page}) => {
    const buttons = new Array(noOfPages).fill(0);
    console.log(noOfPages,buttons)
  return (
    isLoading ? <Box></Box> :
<Box>
    <Box textAlign={'center'} ><Text>Current Page - {page}</Text></Box>
    <Box 
        display="flex" 
        justifyContent={"center"}
        gap="20px" 
        width={{base:"90%",sm: '45%', md: '35%', lg: '25%', xl:'25%', '2xl': '25%'}} 
        margin={"auto"}
        border={"1px solid black"}
    >
        {buttons?.map((element,ind) => {
            return <Button 
                        key={ind} 
                        bg={"black"} 
                        isDisabled={page == ind+1 ? true : false} 
                        onClick={()=> setPage(ind+1) }  
                        color={"white"}
                        _hover={{bg:"black", color:"white"}}
                    >
                        {ind+1}
                    </Button>
        })}
    </Box>
</Box>

  )
}
