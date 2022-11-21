import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// export const githubApi = createApi({
//   reducerPath: 'texts/api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.github.com/'
//   }), 
//   endpoints: build => ({
//     searchUsers: build.query({
//       query: () => ({
//         url: 'search/users',
            
//       })
//     })
//   })
// })