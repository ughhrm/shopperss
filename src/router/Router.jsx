import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Wish from '../pages/Wish'
import Basket from '../pages/Basket'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/wish' element={<Wish/>}/>
            <Route path='/basket' element={<Basket/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router