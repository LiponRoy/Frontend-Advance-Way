import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:6000/user',
	}),
	tagTypes: ['user'],
	endpoints: (builder) => ({
		userGet: builder.query({
			query: () => '/all',
			transformResponse: (res) => res.reverse(),
			providesTags: ['user'],
		}),
		// addInstructor: builder.mutation({
		// 	query: (instructor) => ({
		// 		url: '/data/add',
		// 		method: 'POST',
		// 		body: instructor,
		// 	}),
		// 	invalidatesTags: ['Instructor'],
		// }),
		// updateInstructor: builder.mutation({
		// 	query: ({ _id, ...instructor }) => ({
		// 		url: `/data/update/${_id}`,
		// 		method: 'PUT',
		// 		body: instructor,
		// 	}),
		// 	invalidatesTags: ['Instructor'],
		// }),
		// deleteInstructor: builder.mutation({
		// 	query: (_id) => ({
		// 		url: `/data/delete/${_id}`,
		// 		method: 'DELETE',
		// 	}),
		// 	invalidatesTags: ['Instructor'],
		// }),
		// getInstructorById: builder.query({
		// 	query: (_id) => `/data/getOne/${_id}`,
		// 	invalidatesTags: ['Instructor'],
		// }),
	}),
});

export const { useUserGetQuery } = userApi;
