import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
    reducerPath: 'apiSlice',
    tagTypes:['user','job','comment'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({

    })
})