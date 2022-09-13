import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '1498402528msh2376b1c29321d3ep14d016jsnb997f4e61afd'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url , headers : cryptNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)  => ({
        getCryptosNews : builder.query({
            query: ({ newscategory , count }) => createRequest(`/news/search?q=${newscategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})
export const {useGetCryptosNewsQuery} = cryptoNewsApi;