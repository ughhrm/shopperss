import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    value: [],
    loading:false
    
  }
  export const getDatathunk =( "api/get", async ()=>{
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data
  } )
  
  export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{

    },
    extraReducers: builder=>{

        builder
        .addCase(getDatathunk.fulfilled,(state,action)=>{
            state.data = action.payload;
        })                                                                                                              

    }

  })