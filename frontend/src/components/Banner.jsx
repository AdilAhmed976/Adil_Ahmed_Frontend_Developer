import React from 'react'
import {Box  } from "@chakra-ui/react"

export const Banner = () => {

  return (
    <Box > 
        <img 
          style={{
            objectFit:"cover" , 
            height:"70vh" , 
            width:"100%" , 
            objectPosition: "30% 20%"
          }} 
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/HOMEPAGE_desktop_c49e86318f.jpg" 
          alt="" 
          srcset=""
        />
    </Box>
  )
}
