import React, { useEffect,useState } from 'react'
import {Box } from "@chakra-ui/react"
import { Banner } from '../components/Banner'
import { Searchbar } from '../components/Searchbar'
import { DataGrid } from '../components/DataGrid'
import { Pagination } from '../components/Pagination'


export const Homepage = () => {



    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    // search bar hooks  setStatus ={setStatus} setOrigin={setOrigin} setType={setType}
    const [status,setStatus] = useState("")
    const [origin,setOrigin] = useState("")
    const [type,setType] = useState("")

    const [noOfPages , setNoOfPage] = useState(0) 
    const limit = 10;
    const [page,setPage] = useState(1)



    const getData = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`https://spacex-pc30.onrender.com/category/capsules?limit=${limit}&page=${page}&status=${status}&type=${type}`)
            const data = await res.json()
            setData(data.data)
            setIsLoading(false)
            setNoOfPage(Math.ceil(data.count/limit))
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    
    }


    useEffect(() => {


        getData()

    }, [page])
    
  return (
    <Box>
        <Banner/>
        <Searchbar 
            status ={status} 
            origin={origin} 
            type={type}
            setData={setData}
            setStatus ={setStatus}  
            setOrigin={setOrigin} 
            setType={setType} 
            data={data} 
            isLoading={isLoading} 
            setIsLoading={setIsLoading} 
            setNoOfPage={setNoOfPage}
            getData={getData}
            setPage={setPage}
        />
        <DataGrid 
            data={data} 
            isLoading={isLoading} 
            setIsLoading={setIsLoading} 
        />
        <Pagination 
            noOfPages={noOfPages} 
            isLoading={isLoading} 
            setPage={setPage} 
            page={page}
        />
    </Box>
  )
}
