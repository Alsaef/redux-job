import  { apiSlice } from "../api/apiSlice";

const authApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
       upoloadUser:builder.mutation({
        query:(data)=>({
            url:'/api/v1/user',
            method:'POST',
            body:data
        }),
        invalidatesTags:['user']
       }) 
    })
})

export const {useUpoloadUserMutation}=authApi