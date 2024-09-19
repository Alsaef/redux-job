import  { apiSlice } from "../api/apiSlice";

const commentApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        ctreateComment:builder.mutation({
            query:(data)=>({
                url:'/api/v1/comment',
                method:'POST',
                body:data
            }),
            invalidatesTags:['comment']
           }) ,

           getComment:builder.query({
            query:()=>({
                url:'/api/v1/comment'
            }),
            providesTags:['comment']
           })
    })
})

export const {useCtreateCommentMutation,useGetCommentQuery}=commentApi