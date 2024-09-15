import { apiSlice } from "../api/apiSlice";


const jobApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
      getJobs:builder.query({
        query:()=>({
            url:'/api/v1/job'
        }),
        providesTags:['job']
      })
    })
})

export const { useGetJobsQuery } = jobApi