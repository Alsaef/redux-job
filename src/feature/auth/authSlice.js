import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';
const initialState = {
    user:{
        email:'',
        role:'',
      },
      isLoading:true,
      isError:false,
      error:''
  }
  

  export const createAccount=createAsyncThunk('auth/createAccount',async({email,password,name,phto})=>{
      const res=await createUserWithEmailAndPassword(auth,email,password)
      await updateProfile(auth.currentUser,{
         displayName: name, photoURL: phto
      })
      return res.user.email
  })
  export const login=createAsyncThunk('auth/login',async({email,password})=>{
      const res=await signInWithEmailAndPassword(auth,email,password)
      return res.user.email
  })
  export const getUser=createAsyncThunk('auth/getUser',async(email)=>{
      const res=await fetch(`http://localhost:5000/api/v1/user/${email}`)
      const data=await res.json()
      if (data.status) {
        return data
      }
      return email
  })

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    setUser:(state,{payload})=>{
      state.isLoading=false,
      state.user.email=payload,
      state.isError=false
    },
    logout:(state,{payload})=>{
      state.isLoading=false,
      state.user={email:'',role:''},
      state.isError=false
    }
    },
    extraReducers:(builder)=>{
       builder.addCase(createAccount.pending,(state)=>{
        state.isLoading=true,
        state.isError=false,
        state.error=''
       })
       builder.addCase(createAccount.fulfilled,(state,{payload})=>{
        state.isLoading=false,
        state.user=payload
        state.isError=false,
        state.error=''
       })
       builder.addCase(createAccount.rejected,(state,action)=>{
        state.isLoading=false,
        state.isError=true,
        state.error=action.error.message
       })
    //    login
       builder.addCase(login.pending,(state)=>{
        state.isLoading=true,
        state.isError=false,
        state.error=''
       })
       builder.addCase(login.fulfilled,(state,{payload})=>{
        state.isLoading=false,
        state.user=payload
        state.isError=false,
        state.error=''
       })
       builder.addCase(login.rejected,(state,action)=>{
        state.isLoading=false,
        state.isError=true,
        state.error=action.error.message
       })
      //  getUser
       builder.addCase(getUser.pending,(state)=>{
        state.isLoading=true,
        state.isError=false,
        state.error=''
       })
       builder.addCase(getUser.fulfilled,(state,{payload})=>{
        state.isLoading=false;
      if (payload.status) {
        state.user=payload.data
      }else{
        state.user.email=payload
      }
        state.isError=false;
        state.error=''
       })
       builder.addCase(getUser.rejected,(state,action)=>{
        state.isLoading=false,
        state.isError=true,
        state.error=action.error.message
       })
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setUser,logout } = authSlice.actions
  
  export default authSlice.reducer