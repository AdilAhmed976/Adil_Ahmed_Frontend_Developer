import React from 'react'
import { Homepage } from '../pages/Homepage'
import {Routes,Route} from "react-router-dom"
export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}  />
        </Routes>
    </div>
  )
}
