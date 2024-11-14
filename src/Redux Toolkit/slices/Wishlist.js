import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addToWhishList = createAsyncThunk("addToWhishList",
    async ()=>{
        const productId = "123344"
        const res = await fetch("http://ecommerce-dot-code.vercel.app/api/wishlist",{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
            },
            body:JSON.stringify({productId:productId})
        } )
        const data = res.json();
        return data;
    }
)


const whishListSlice =createSlice({
    name:"whishList",
    initialState:{
        whishListItems:[],
        isLoading:false,
        isError:false,
        error:null

    },
    reducers:{


    },
    extraReducers:(Builder)=>{
 Builder.addCase(addToWhishList.fulfilled,(state,action)=>{
     state.isLoading = false;
 })

 Builder.addCase(addToWhishList.isLoading,(state,action)=>{
    state.isLoading = true;
 })

 Builder.addCase(addToWhishList.isError,(state,action)=>{
    state.isError = true;
 })
    }
})

export default whishListSlice.reducer