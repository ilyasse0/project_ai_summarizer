import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const rapideApiKey = import.meta.env.VITE_RAPIDE_API_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key' , rapideApiKey);
            headers.set('x-rapidapi-host' , 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;

        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })



});


export const { useLazyGetSummaryQuery } = articleApi;